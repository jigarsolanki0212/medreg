import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/medregData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, webPageJsonLd } from '@/lib/seo';

const PAGE_PATH = '/privacy-policy/';
const PAGE_DESCRIPTION =
  'How MedReg Consultancy LLP collects, uses and protects personal information submitted through medreg.in, including consultation requests and contact details.';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

const LAST_UPDATED = '8 October 2026';

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ path: PAGE_PATH, name: 'Privacy Policy', description: PAGE_DESCRIPTION })} />
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'Privacy Policy', path: PAGE_PATH }]} />
            <h1 className="page-banner-title">Privacy Policy</h1>
            <p className="page-banner-subtitle">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container container-narrow prose">
          <p>
            {COMPANY_INFO.name} (&ldquo;MedReg&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what
            information we collect through this website, why we collect it and how you can contact us about it. It is
            intended to meet the requirements of India&rsquo;s Digital Personal Data Protection Act, 2023.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>
              <strong>Information you provide:</strong> your name, work email, phone/WhatsApp number, target regulatory
              market and any device or project details you enter in our consultation form or send us by email, phone or WhatsApp.
            </li>
            <li>
              <strong>Technical information:</strong> standard server logs (IP address, browser type, pages visited) and, if
              enabled, aggregated analytics used to understand how the website is used.
            </li>
          </ul>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your enquiry and provide the regulatory consulting services you request.</li>
            <li>To prepare proposals, schedule consultations and maintain our business relationship with you.</li>
            <li>To keep the website secure, prevent spam and improve our content.</li>
          </ul>
          <p>We do not sell your personal information, and we do not use it for unrelated marketing without your consent.</p>

          <h2>Confidentiality of device and project information</h2>
          <p>
            Technical, commercial and regulatory information you share about your devices is treated as confidential and
            used only to assess and deliver your project. We are happy to sign a non-disclosure agreement before detailed
            discussions.
          </p>

          <h2>Sharing</h2>
          <p>
            We share information only with service providers that help us operate this website and our communications
            (for example hosting and email delivery), and with regulators, notified bodies or partners only when required to
            deliver services you have engaged us for, or when required by law.
          </p>

          <h2>Retention and security</h2>
          <p>
            We keep enquiry data only for as long as needed for the purposes above or as required by law, and we use
            reasonable technical and organisational measures to protect it.
          </p>

          <h2>Your rights</h2>
          <p>
            You may ask us to access, correct or delete your personal information, or withdraw consent, by emailing{' '}
            <a href={`mailto:${COMPANY_INFO.emails[0].value}`}>{COMPANY_INFO.emails[0].display}</a>.
          </p>

          <h2>Contact</h2>
          <p>
            {COMPANY_INFO.name}
            <br />
            {COMPANY_INFO.address.full}
            <br />
            Phone: <a href={`tel:${COMPANY_INFO.phones[0].value}`}>{COMPANY_INFO.phones[0].display}</a> · Email:{' '}
            <a href={`mailto:${COMPANY_INFO.emails[0].value}`}>{COMPANY_INFO.emails[0].display}</a>
          </p>
          <p>
            <Link href="/contact-us/">Contact us</Link> with any questions about this policy.
          </p>
        </div>
      </section>
    </>
  );
}
