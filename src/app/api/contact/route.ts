import { NextResponse } from 'next/server';
import { deliver, EMAIL_RE, isPhone, throttled } from '@/lib/delivery';

/** Consultation enquiries from <LeadForm />. Delivery settings are documented in src/lib/delivery.ts. */

const SERVICES = new Set([
  'Europe CE MDR / IVDR',
  'US FDA 510(k)',
  'MDSAP & ISO 13485',
  'CDSCO India Compliance',
  'Clinical Trials / BEP',
  'Multi-Market Entry',
]);

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
  if (throttled(request, 'contact')) {
    return NextResponse.json({ ok: false, error: 'Too many requests. Please try again in a few minutes.' }, { status: 429 });
  }

  const str = (k: string, max: number) => (typeof body[k] === 'string' ? (body[k] as string).trim().slice(0, max) : '');
  const fullName = str('fullName', 100);
  const email = str('email', 120);
  const mobile = str('mobile', 25);
  let serviceInterest = str('serviceInterest', 60);
  const message = str('message', 2000);
  const page = str('page', 200);

  if (fullName.length < 2) return NextResponse.json({ ok: false, error: 'Please enter your full name.' }, { status: 422 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ ok: false, error: 'Please provide a valid email address.' }, { status: 422 });
  if (!isPhone(mobile)) return NextResponse.json({ ok: false, error: 'Please provide a valid phone number.' }, { status: 422 });
  if (!SERVICES.has(serviceInterest)) serviceInterest = 'Not specified';

  const { status, body: res } = await deliver({
    kind: 'consultation',
    subject: `New website enquiry: ${fullName} – ${serviceInterest}`,
    replyTo: email,
    fields: [
      ['Name', fullName],
      ['Email', email],
      ['Phone / WhatsApp', mobile],
      ['Jurisdiction', serviceInterest],
      ['Page', page],
      ['Message', message],
    ],
  });
  return NextResponse.json(res, { status });
}
