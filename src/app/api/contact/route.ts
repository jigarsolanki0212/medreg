import { NextResponse } from 'next/server';

/**
 * Lead capture endpoint used by <LeadForm />.
 *
 * Delivery (configure in Vercel → Settings → Environment Variables):
 *  - RESEND_API_KEY + LEAD_TO_EMAIL (+ optional LEAD_FROM_EMAIL on a verified domain) → email via Resend
 *  - LEAD_WEBHOOK_URL → JSON POST (Google Apps Script / Sheets, Zapier, Make, Slack, CRM)
 * Either or both may be set. Without any of them, development logs the lead to the
 * terminal and production returns 503 so the visitor is told to call or email instead.
 */

const SERVICES = new Set([
  'CDSCO India Compliance',
  'Europe CE MDR / IVDR',
  'US FDA 510(k)',
  'MDSAP & ISO 13485',
  'Clinical Trials / BEP',
  'Multi-Market Entry',
]);

// Best-effort per-instance throttle; serverless instances do not share memory.
const recent = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function throttled(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);

interface Lead {
  fullName: string;
  email: string;
  mobile: string;
  serviceInterest: string;
  message: string;
  page: string;
}

function validate(body: Record<string, unknown>): { lead?: Lead; error?: string } {
  const str = (k: string, max: number) => (typeof body[k] === 'string' ? (body[k] as string).trim().slice(0, max) : '');
  const lead: Lead = {
    fullName: str('fullName', 100),
    email: str('email', 120),
    mobile: str('mobile', 25),
    serviceInterest: str('serviceInterest', 60),
    message: str('message', 2000),
    page: str('page', 200),
  };
  if (lead.fullName.length < 2) return { error: 'Please enter your full name.' };
  if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(lead.email)) return { error: 'Please provide a valid email address.' };
  const digits = lead.mobile.replace(/[\s+\-()]/g, '');
  if (!/^\d{7,15}$/.test(digits)) return { error: 'Please provide a valid phone number.' };
  if (!SERVICES.has(lead.serviceInterest)) lead.serviceInterest = 'Not specified';
  return { lead };
}

async function sendEmail(lead: Lead) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  if (!key || !to) return null;
  const from = process.env.LEAD_FROM_EMAIL || 'MedReg Website <onboarding@resend.dev>';
  const rows = [
    ['Name', lead.fullName],
    ['Email', lead.email],
    ['Phone / WhatsApp', lead.mobile],
    ['Jurisdiction', lead.serviceInterest],
    ['Page', lead.page],
    ['Message', lead.message || '—'],
  ]
    .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${k}</td><td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`)
    .join('');
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((t) => t.trim()),
      reply_to: lead.email,
      subject: `New website enquiry: ${lead.fullName} – ${lead.serviceInterest}`,
      html: `<h2 style="font-family:sans-serif">New consultation request</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows}</table>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  return true;
}

async function sendWebhook(lead: Lead) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return null;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...lead, submittedAt: new Date().toISOString(), source: 'medreg.in' }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  return true;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing.
  if (typeof body.website_hp === 'string' && body.website_hp.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (throttled(ip)) {
    return NextResponse.json({ ok: false, error: 'Too many requests. Please try again in a few minutes.' }, { status: 429 });
  }

  const { lead, error } = validate(body);
  if (!lead) return NextResponse.json({ ok: false, error }, { status: 422 });

  try {
    const results = await Promise.allSettled([sendEmail(lead), sendWebhook(lead)]);
    const delivered = results.some((r) => r.status === 'fulfilled' && r.value === true);
    const configured = results.some((r) => r.status === 'rejected' || (r.status === 'fulfilled' && r.value !== null));
    results.forEach((r) => r.status === 'rejected' && console.error('[contact] delivery failed:', r.reason));

    if (delivered) return NextResponse.json({ ok: true });

    if (!configured && process.env.NODE_ENV !== 'production') {
      console.info('[contact] No delivery configured (dev). Lead received:', lead);
      return NextResponse.json({ ok: true, dev: true });
    }

    return NextResponse.json(
      { ok: false, error: 'We could not send your request right now. Please call or email us directly.' },
      { status: 503 }
    );
  } catch (err) {
    console.error('[contact] unexpected error:', err);
    return NextResponse.json({ ok: false, error: 'Something went wrong. Please call or email us directly.' }, { status: 500 });
  }
}
