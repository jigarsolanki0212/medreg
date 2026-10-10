import { NextResponse } from 'next/server';
import { deliver, throttled } from '@/lib/delivery';
import { EXHIBITION_FORM, validateSpec } from '@/data/formSpecs';

/** "Schedule a Meeting with Our Regulatory Experts" requests. Delivery settings: src/lib/delivery.ts (EXHIBITION_TO_EMAIL). */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }
  if (throttled(request, 'exhibition')) {
    return NextResponse.json({ ok: false, error: 'Too many requests. Please try again in a few minutes.' }, { status: 429 });
  }

  const read = (k: string) => {
    const v = body[k];
    if (Array.isArray(v)) return v.filter((x): x is string => typeof x === 'string');
    return typeof v === 'string' ? [v] : [];
  };
  const { values, fieldErrors } = validateSpec(EXHIBITION_FORM, read);
  if (Object.keys(fieldErrors).length) {
    return NextResponse.json({ ok: false, error: 'Please correct the highlighted fields.', fieldErrors }, { status: 422 });
  }

  const { status, body: res } = await deliver({
    kind: 'exhibition',
    subject: `Exhibition meeting request: ${values.fullName}, ${values.company} – ${values.exhibition}`,
    replyTo: values.email,
    fields: [
      ...EXHIBITION_FORM.map((f) => [f.label, values[f.name]] as [string, string]),
      ['Page', read('page')[0]?.slice(0, 200) || ''],
    ],
  });
  return NextResponse.json(res, { status });
}
