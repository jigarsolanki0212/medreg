import { NextResponse } from 'next/server';
import { deliver, throttled } from '@/lib/delivery';
import { CAREERS_FORM, validateSpec } from '@/data/formSpecs';

/**
 * Job applications with a CV attachment. Delivery settings: src/lib/delivery.ts (CAREERS_TO_EMAIL).
 * The CV is checked (type, extension, magic bytes, size), attached to the email in memory and never
 * written to disk or public storage.
 */

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED: Record<string, { mime: string[]; magic: (b: Uint8Array) => boolean }> = {
  pdf: { mime: ['application/pdf'], magic: (b) => b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46 },
  doc: { mime: ['application/msword'], magic: (b) => b[0] === 0xd0 && b[1] === 0xcf && b[2] === 0x11 && b[3] === 0xe0 },
  docx: {
    mime: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    magic: (b) => b[0] === 0x50 && b[1] === 0x4b && b[2] === 0x03 && b[3] === 0x04,
  },
};

export async function POST(request: Request) {
  if (throttled(request, 'careers')) {
    return NextResponse.json({ ok: false, error: 'Too many requests. Please try again in a few minutes.' }, { status: 429 });
  }
  const len = Number(request.headers.get('content-length') || 0);
  if (len > MAX_BYTES + 200_000) {
    return NextResponse.json({ ok: false, error: 'Your CV must be 5 MB or smaller.', fieldErrors: { resume: 'File must be 5 MB or smaller.' } }, { status: 413 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const read = (k: string) => form.getAll(k).filter((x): x is string => typeof x === 'string');
  const { values, fieldErrors } = validateSpec(CAREERS_FORM, read);

  const file = form.get('resume');
  let attachment: { filename: string; content: string } | null = null;
  if (!(file instanceof File) || file.size === 0) {
    fieldErrors.resume = 'Please attach your resume / CV.';
  } else {
    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    const rule = ALLOWED[ext];
    const bytes = new Uint8Array(await file.arrayBuffer());
    if (file.size > MAX_BYTES) fieldErrors.resume = 'File must be 5 MB or smaller.';
    else if (!rule || !rule.magic(bytes)) fieldErrors.resume = 'Please upload a PDF, DOC or DOCX file.';
    else {
      const safeName = `${values.fullName || 'applicant'}-CV.${ext}`.replace(/[^a-zA-Z0-9._-]+/g, '_').slice(0, 100);
      attachment = { filename: safeName, content: Buffer.from(bytes).toString('base64') };
    }
  }

  if (Object.keys(fieldErrors).length || !attachment) {
    return NextResponse.json({ ok: false, error: 'Please correct the highlighted fields.', fieldErrors }, { status: 422 });
  }

  const { status, body: res } = await deliver({
    kind: 'careers',
    subject: `Job application: ${values.fullName} – ${values.position}`,
    replyTo: values.email,
    fields: [
      ...CAREERS_FORM.filter((f) => f.type !== 'file').map((f) => [f.label, values[f.name]] as [string, string]),
      ['Resume / CV', attachment.filename],
      ['Page', read('page')[0]?.slice(0, 200) || ''],
    ],
    attachments: [attachment],
  });
  return NextResponse.json(res, { status });
}
