import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, Phone, Mail, CheckCircle2 } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import FaqAccordion from '@/components/FaqAccordion';
import { USA_FAQS, COMPANY_INFO } from '@/data/medregData';
import { USA_SERVICES_DETAIL, USA_REGULATIONS_OVERVIEW, usaServicePath } from '@/data/usaServices';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, serviceCatalogJsonLd, faqJsonLd, webPageJsonLd } from '@/lib/seo';

const PAGE_PATH = '/usa/';
const PAGE_DESCRIPTION =
  'US FDA regulatory consultancy for medical devices: classification, registration & listing, 510(k), Q-Sub, GUDID, U.S. Agent, labelling, QMSR, MDR reporting and more.';

export const metadata: Metadata = pageMetadata({
  title: 'Medical Device Regulatory Consultancy Services for the USA',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: ['FDA 510(k) consultant', 'FDA establishment registration', 'US Agent for FDA', 'QMSR 21 CFR 820', 'GUDID registration', 'FDA Q-Submission'],
});

export default function UsaServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: PAGE_PATH, name: 'Medical Device Regulatory Consultancy Services for the USA', description: PAGE_DESCRIPTION }),
          serviceCatalogJsonLd({
            name: 'US FDA Medical Device Regulatory Consultancy Services',
            description: PAGE_DESCRIPTION,
            path: PAGE_PATH,
            areaServed: 'United States',
            services: USA_SERVICES_DETAIL.map((s) => ({ id: s.slug, title: s.title, shortDesc: s.summary, fullDesc: s.summary, category: 'usa' as const })),
            serviceUrl: (id) => usaServicePath(id),
          }),
          faqJsonLd(USA_FAQS, PAGE_PATH),
        ]}
      />

      {/* 1. Banner */}
      <section className="page-banner svc-banner">
        <Image src="/assets/usa-page-banner.jpg" alt="" fill priority sizes="100vw" className="page-banner-bg" />
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'Services', path: '/services/' }, { name: 'USA (US FDA)', path: PAGE_PATH }]} />
            <span className="svc-banner-kicker">
              <Image src="/assets/usa.png" alt="" width={22} height={22} />
              USA Regulatory Services
            </span>
            <h1 className="page-banner-title svc-banner-title">Medical Device Regulatory Consultancy Services for the USA</h1>
            <p className="page-banner-subtitle">
              Classification, registration and listing, 510(k), Q-Submissions, UDI and GUDID, labelling, QMSR and post-market reporting: MedReg guides you through every stage of US FDA compliance.
            </p>
            <div className="svc-banner-ctas">
              <Link href="#usa-services" className="btn btn-gold">
                <span>Explore USA Services</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="#consultation" className="btn btn-outline-white">
                <span>Request a Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. U.S. Medical Device Regulations overview */}
      <section className="section-pad" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="center-content section-head" style={{ marginBottom: '40px' }}>
            <span className="section-label">Regulatory Overview</span>
            <h2 className="section-title text-center">U.S. Medical Device Regulations</h2>
            <p className="section-subtitle text-center" style={{ maxWidth: '860px' }}>
              {USA_REGULATIONS_OVERVIEW.intro}
            </p>
          </div>

          <ol className="usa-overview-grid">
            {USA_REGULATIONS_OVERVIEW.points.map((pt, i) => (
              <li key={pt.title} className="usa-overview-card">
                <span className="usa-overview-num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="usa-overview-title">{pt.title}</h3>
                <p className="usa-overview-text">{pt.text}</p>
                {pt.items && (
                  <ul className="usa-overview-list">
                    {pt.items.map((it) => {
                      const [label, ...rest] = it.split(': ');
                      return (
                        <li key={it}>
                          <CheckCircle2 size={16} aria-hidden="true" />
                          <span>
                            <strong>{label}:</strong> {rest.join(': ')}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ol>

          <p className="usa-overview-closing">{USA_REGULATIONS_OVERVIEW.closing}</p>
        </div>
      </section>

      {/* 3. Services */}
      <section className="services-catalog-section" id="usa-services">
        <div className="container">
          <div className="center-content section-head" style={{ marginBottom: '40px' }}>
            <span className="section-label">Our Services</span>
            <h2 className="section-title text-center">Services We Offer in the USA</h2>
            <p className="section-subtitle text-center">
              Select a service to see the regulatory requirement, how MedReg supports you, the process and the deliverables.
            </p>
          </div>

          <div className="usa-svc-grid">
            {USA_SERVICES_DETAIL.map((s) => (
              <Link key={s.slug} href={usaServicePath(s.slug)} className="usa-svc-card" id={s.slug}>
                <span className="usa-svc-icon">
                  <Image src={s.icon} alt="" width={40} height={40} />
                </span>
                <h3 className="usa-svc-title">{s.title}</h3>
                <p className="usa-svc-summary">{s.summary}</p>
                <span className="usa-svc-link">
                  Learn more <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Consultation */}
      <section className="cta-form-section" id="consultation">
        <div className="container">
          <div className="cta-grid">
            <div>
              <span className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#79B8FF', borderColor: 'rgba(255,255,255,0.25)' }}>
                Consultation
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--white)', marginBottom: '18px', fontWeight: 800 }}>
                Plan Your US FDA Pathway with MedReg
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '16px', color: 'rgba(255,255,255,0.88)' }}>
                {COMPANY_INFO.phones.map((p) => (
                  <a key={p.value} href={`tel:${p.value}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={16} aria-hidden="true" /> {p.display}
                  </a>
                ))}
                <span style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.7)' }}>Time zone: {COMPANY_INFO.timezone.label}</span>
                <a href={`mailto:${COMPANY_INFO.emails[0].value}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={16} aria-hidden="true" /> {COMPANY_INFO.emails[0].display}
                </a>
              </div>
            </div>
            <div>
              <LeadForm title="Request a consultation" defaultService="US FDA 510(k)" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <FaqAccordion faqs={USA_FAQS} title="US FDA Services: Common Questions" />
    </>
  );
}
