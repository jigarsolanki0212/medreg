import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, GraduationCap, Info } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import LeadForm from '@/components/LeadForm';
import ContentBlocks from '@/components/ContentBlocks';
import { COMPANY_INFO } from '@/data/medregData';
import { MARKETS } from '@/data/markets';
import { pageMetadata, webPageJsonLd, absoluteUrl } from '@/lib/seo';

const PAGE_PATH = '/services/';
const PAGE_DESCRIPTION =
  'MedReg is a medical device regulatory consultancy supporting manufacturers in Europe, the USA, other global markets and India: CE marking, US FDA, MDSAP, ISO 13485 and CDSCO.';

export const metadata: Metadata = pageMetadata({
  title: 'Medical Device Regulatory Consultancy Services for Global Markets',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: PAGE_PATH, name: 'Medical Device Regulatory Consultancy Services for Global Markets', description: PAGE_DESCRIPTION, type: 'CollectionPage' }),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'MedReg regulatory consultancy services by market',
            itemListElement: MARKETS.map((m, i) => ({ '@type': 'ListItem', position: i + 1, name: m.navTitle, url: absoluteUrl(m.href) })),
          },
        ]}
      />

      <section className="page-banner svc-banner">
        <Image src="/assets/placeholders/services-banner.jpg" alt="" fill priority sizes="100vw" className="page-banner-bg" />
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'Services', path: PAGE_PATH }]} />
            <span className="svc-banner-kicker">Regulatory Consultancy</span>
            <h1 className="page-banner-title svc-banner-title">Medical Device Regulatory Consultancy Services for Global Markets</h1>
            <p className="page-banner-subtitle">
              MedReg is a medical device regulatory consultancy. We guide manufacturers through the requirements of each market, prepare the documentation and support submissions to the relevant authorities and bodies.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--slate-50)' }}>
        <div className="container">
          <div className="mkt-grid">
            {MARKETS.map((m, i) => (
              <Link key={m.key} href={m.href} className="mkt-card">
                <div className={`mkt-card-media ${m.photo ? '' : 'mkt-card-media--plain'}`}>
                  {m.photo && <Image src={m.photo} alt="" fill sizes="(max-width: 768px) 92vw, 560px" style={{ objectFit: 'cover' }} />}
                  <span className="mkt-card-order">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mkt-card-flag">
                    <Image src={m.flag} alt="" width={44} height={44} />
                  </span>
                </div>
                <div className="mkt-card-body">
                  <h2 className="mkt-card-title">{m.navTitle}</h2>
                  <p className="mkt-card-desc">{m.description}</p>
                  <ul className="mkt-card-ids" aria-label="Regulatory frameworks">
                    {m.identifiers.map((id) => (
                      <li key={id}>{id}</li>
                    ))}
                  </ul>
                  <div className="mkt-card-foot">
                    <span>{m.services.length} services</span>
                    <span className="mkt-card-cta">
                      Explore Services <ArrowRight size={15} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mkt-compare">
            <h2 className="section-title">Markets at a glance</h2>
            <ContentBlocks
              blocks={[
                {
                  type: 'table',
                  headers: ['Market', 'Authority / framework', 'What we support', 'Services'],
                  rows: [
                    ['Europe', 'EU MDR 2017/745 and EU IVDR 2017/746', 'CE marking: technical documentation, clinical evaluation, GSPR, risk management (EN ISO 14971), post-market surveillance, PRRC', `${MARKETS[0].services.length}`],
                    ['USA', 'US FDA (21 CFR)', '510(k), establishment registration and listing, Q-Submissions, GUDID, labelling, QMSR (21 CFR 820), MDR reporting, U.S. Agent', `${MARKETS[1].services.length}`],
                    ['Other global markets', 'ISO 13485:2016, MDSAP, IMDRF / GHTF guidelines', 'Technical files and dossiers, QMS documentation, internal audits, supplier evaluation, process validation for the Middle East, Southeast Asia, Brazil, Australia (TGA) and Canada', `${MARKETS[2].services.length}`],
                    ['India', 'CDSCO, Medical Devices Rules, 2017', 'Manufacturing and import licences (MD-5, MD-6, MD-9, MD-10, MD-15), registrations, certificates, Authorized Agent, QMS documentation', `${MARKETS[3].services.length}`],
                  ],
                },
              ]}
            />
          </div>

          <div className="mkt-compare">
            <h2 className="section-title">Our approach</h2>
            <ContentBlocks
              blocks={[
                {
                  type: 'steps',
                  items: [
                    { title: 'Listening to customer needs', text: 'We start with your device, your target markets and your timelines.' },
                    { title: 'Understanding the scope clearly', text: 'We identify every requirement that applies to your product and organisation.' },
                    { title: 'Defining the right regulatory pathway', text: 'We set out the route to market, the documents needed and a realistic plan.' },
                    { title: 'Maintaining transparency in documentation', text: 'We prepare and review documentation with you, keeping you informed at every stage.' },
                    { title: 'Ensuring timely reporting and advice', text: 'We support submissions and queries, and keep you compliant after approval with a preventive approach.' },
                  ],
                },
              ]}
            />
          </div>

          <div className="mkt-training">
            <GraduationCap size={28} aria-hidden="true" />
            <div>
              <h2>Training &amp; professional development</h2>
              <p>Corporate training on ISO 13485, ISO 14971, EU MDR, US FDA 510(k), biological evaluation, sterilization validation and more.</p>
            </div>
            <Link href="/training/" className="btn btn-primary btn-sm">
              <span>View Training Programs</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <p className="mkt-disclaimer">
            <Info size={15} aria-hidden="true" />
            <span>
              MedReg provides regulatory consultancy. Certificates, clearances, approvals and licences are issued by the relevant regulatory authorities, Notified Bodies and certification bodies. Marks and framework names are shown only to identify the requirements we support.
            </span>
          </p>
        </div>
      </section>

      <section className="cta-form-section" id="consultation">
        <div className="container">
          <div className="cta-grid">
            <div>
              <span className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#79B8FF', borderColor: 'rgba(255,255,255,0.25)' }}>
                Consultation
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--white)', marginBottom: '18px', fontWeight: 800 }}>
                Not sure which pathway applies to your device?
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65 }}>
                Tell us about your device and target markets. {COMPANY_INFO.phones[0].display} ({COMPANY_INFO.timezone.short}) · {COMPANY_INFO.emails[0].display}
              </p>
            </div>
            <div>
              <LeadForm title="Request a consultation" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
