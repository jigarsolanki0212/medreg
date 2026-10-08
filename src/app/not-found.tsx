import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: '/india/', label: 'India — CDSCO licensing' },
  { href: '/europe/', label: 'Europe — CE MDR / IVDR' },
  { href: '/usa/', label: 'USA — FDA 510(k)' },
  { href: '/other-services/', label: 'Global — MDSAP & ISO 13485' },
];

export default function NotFound() {
  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--slate-50)', minHeight: '60vh' }}>
      <div className="container container-narrow center-content">
        <span className="section-label">Error 404</span>
        <h1 className="section-title text-center">We couldn&rsquo;t find that page</h1>
        <p className="section-subtitle text-center" style={{ marginBottom: '28px' }}>
          The page may have moved during our website upgrade. Try one of our regulatory service pages below, or talk to our team.
        </p>
        <div className="grid-2" style={{ width: '100%', maxWidth: '640px', marginBottom: '28px' }}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="card no-tilt" style={{ padding: '18px 20px', fontWeight: 600, color: 'var(--primary)' }}>
              {l.label}
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/contact-us/" className="btn btn-secondary">
            <span>Contact Us</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
