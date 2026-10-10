/**
 * Shared delivery for every website form (consultation, training booking, exhibition meeting, careers).
 *
 * Configure in Vercel → Settings → Environment Variables:
 *  - RESEND_API_KEY            Resend API key (required for email delivery)
 *  - LEAD_FROM_EMAIL           Sender on a domain verified in Resend, e.g. "MedReg Website <web@medreg.in>"
 *  - LEAD_TO_EMAIL             Default recipient(s), comma-separated (consultation enquiries)
 *  - TRAINING_TO_EMAIL         Training bookings      (falls back to LEAD_TO_EMAIL)
 *  - EXHIBITION_TO_EMAIL       Exhibition meetings    (falls back to LEAD_TO_EMAIL)
 *  - CAREERS_TO_EMAIL          Job applications       (falls back to LEAD_TO_EMAIL)
 *  - LEAD_WEBHOOK_URL          Optional JSON POST of every submission (Sheets, CRM, Slack…)
 * Without any delivery configured, development logs the submission and production returns 503,
 * so visitors are told to call or email instead of being shown a false success.
 */

export type FormKind = 'consultation' | 'training' | 'exhibition' | 'careers';

const RECIPIENT_ENV: Record<FormKind, string | undefined> = {
  consultation: undefined,
  training: 'TRAINING_TO_EMAIL',
  exhibition: 'EXHIBITION_TO_EMAIL',
  careers: 'CAREERS_TO_EMAIL',
};

export interface Attachment {
  filename: string;
  /** Base64-encoded file content. */
  content: string;
}

export interface Submission {
  kind: FormKind;
  subject: string;
  replyTo?: string;
  fields: [label: string, value: string][];
  attachments?: Attachment[];
}

export const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);

// Best-effort per-instance throttle; serverless instances do not share memory.
const recent = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

export function throttled(request: Request, bucket: string) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const key = `${bucket}:${ip}`;
  const now = Date.now();
  const hits = (recent.get(key) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
export const isPhone = (v: string) => /^\d{7,15}$/.test(v.replace(/[\s+\-()]/g, ''));

function recipients(kind: FormKind) {
  const specific = RECIPIENT_ENV[kind] ? process.env[RECIPIENT_ENV[kind] as string] : undefined;
  const to = specific || process.env.LEAD_TO_EMAIL;
  return to ? to.split(',').map((t) => t.trim()).filter(Boolean) : [];
}

async function sendEmail(sub: Submission) {
  const key = process.env.RESEND_API_KEY;
  const to = recipients(sub.kind);
  if (!key || to.length === 0) return null;
  const from = process.env.LEAD_FROM_EMAIL || 'MedReg Website <onboarding@resend.dev>';
  const rows = sub.fields
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;white-space:nowrap">${escapeHtml(k)}</td><td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(v || '—')}</td></tr>`
    )
    .join('');
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to,
      ...(sub.replyTo ? { reply_to: sub.replyTo } : {}),
      subject: sub.subject,
      html: `<h2 style="font-family:sans-serif">${escapeHtml(sub.subject)}</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows}</table>`,
      ...(sub.attachments?.length ? { attachments: sub.attachments } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  return true;
}

async function sendWebhook(sub: Submission) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return null;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      form: sub.kind,
      subject: sub.subject,
      ...Object.fromEntries(sub.fields),
      attachments: sub.attachments?.map((a) => a.filename) ?? [],
      submittedAt: new Date().toISOString(),
      source: 'medreg.in',
    }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  return true;
}

/** Delivers a submission. Returns the HTTP status and body the route should send. */
export async function deliver(sub: Submission): Promise<{ status: number; body: { ok: boolean; error?: string; dev?: boolean } }> {
  try {
    const results = await Promise.allSettled([sendEmail(sub), sendWebhook(sub)]);
    const delivered = results.some((r) => r.status === 'fulfilled' && r.value === true);
    const configured = results.some((r) => r.status === 'rejected' || (r.status === 'fulfilled' && r.value !== null));
    results.forEach((r) => r.status === 'rejected' && console.error(`[${sub.kind}] delivery failed:`, r.reason));

    if (delivered) return { status: 200, body: { ok: true } };

    if (!configured && process.env.NODE_ENV !== 'production') {
      console.info(`[${sub.kind}] No delivery configured (dev). Submission received:`, {
        ...sub,
        attachments: sub.attachments?.map((a) => `${a.filename} (${Math.round((a.content.length * 3) / 4 / 1024)} KB)`),
      });
      return { status: 200, body: { ok: true, dev: true } };
    }

    return { status: 503, body: { ok: false, error: 'We could not send your request right now. Please call or email us directly.' } };
  } catch (err) {
    console.error(`[${sub.kind}] unexpected error:`, err);
    return { status: 500, body: { ok: false, error: 'Something went wrong. Please call or email us directly.' } };
  }
}
