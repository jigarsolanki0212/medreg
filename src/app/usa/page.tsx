import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  FileText,
  ShieldCheck,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Building2
} from 'lucide-react';
import StatsCounter from '@/components/StatsCounter';
import CertificationsRow from '@/components/CertificationsRow';
import LeadForm from '@/components/LeadForm';
import FaqAccordion from '@/components/FaqAccordion';
import {
  USA_SERVICES,
  USA_FAQS,
  COMPANY_INFO
} from '@/data/medregData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, serviceCatalogJsonLd, faqJsonLd, webPageJsonLd } from '@/lib/seo';

const PAGE_PATH = '/usa/';
const PAGE_DESCRIPTION =
  'US FDA consulting for medical devices: 510(k) via eSTAR, Q-Subs, registration & listing, GUDID, QMSR (21 CFR 820), US Agent and 483 responses.';

export const metadata: Metadata = pageMetadata({
  title: 'US FDA 510(k) Consultant & FDA Registration Services',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: ['FDA 510(k) consultant', 'FDA establishment registration', 'US Agent for FDA', 'QMSR 21 CFR 820', 'GUDID submission', 'FDA 483 response'],
});

export default function UsaServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: PAGE_PATH, name: 'US FDA Medical Device Regulatory Services', description: PAGE_DESCRIPTION }),
          serviceCatalogJsonLd({
            name: 'US FDA Medical Device Regulatory Services',
            description: PAGE_DESCRIPTION,
            path: PAGE_PATH,
            areaServed: 'United States',
            services: USA_SERVICES,
          }),
          faqJsonLd(USA_FAQS, PAGE_PATH),
        ]}
      />
      {/* 1. Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'USA (US FDA)', path: PAGE_PATH }]} />
            <div className="hero-badge">
              <Sparkles size={14} color="#79B8FF" />
              <span>Grow your business with us!</span>
            </div>
            <h1 className="page-banner-title">
              <Image src="/assets/usa.png" alt="" width={48} height={48} className="page-banner-flag" />
              <span>USA Medical Device Regulatory Services</span>
            </h1>
            <p className="page-banner-subtitle">
              Comprehensive US FDA 510(k) clearance, QMSR quality system implementation, and official US Agent representation.
            </p>

            <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap', fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>
              <a href={`mailto:${COMPANY_INFO.emails[0].value}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={15} color="#79B8FF" />
                <span>{COMPANY_INFO.emails[0].display}</span>
              </a>
              <a href={`tel:${COMPANY_INFO.phones[0].value}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={15} color="#79B8FF" />
                <span>{COMPANY_INFO.phones[0].display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="section-pad" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="split-grid">
            <div>
              <span className="section-label">United States Market Entry</span>
              <h2 style={{ fontSize: '32px', color: 'var(--slate-900)', lineHeight: 1.3 }}>
                Bridging Compliance And Commercial Success For <span style={{ color: 'var(--primary)' }}>USA MedTech</span>
              </h2>
            </div>
            <div>
              <h3 style={{ fontSize: '22px', color: 'var(--slate-800)', marginBottom: '14px' }}>
                Your Partner in USA MedTech Regulatory Success
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '20px' }}>
                MedReg Consultancy helps medical device manufacturers navigate the US regulatory landscape with ease. From ISO 13485:2016 and CE certification to USFDA listings, 510(k), PMA, and UL approvals, we deliver tailored end-to-end solutions with deep regulatory insight.
              </p>
              <Link href="/contact-us/" className="btn btn-primary btn-sm">
                <span>Request US FDA 510(k) Assessment</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. All 13 USA Services Catalog */}
      <section className="services-catalog-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="section-label">Complete Service Inventory</span>
              <h2 className="section-title">Services We Offer in The USA</h2>
              <p className="section-subtitle">
                As a trusted partner in medical device regulations, MedReg Consultancy offers comprehensive services across the US market.
              </p>
            </div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary)' }}>
              13 US FDA Compliance Services
            </div>
          </div>

          <div className="services-catalog-grid">
            {USA_SERVICES.map((service) => (
              <div key={service.id} className="service-box" id={service.id}>
                <div className="service-box-header">
                  <div className="service-box-icon">
                    <FileText size={24} />
                  </div>
                  {service.badge && (
                    <span className="badge badge-primary">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="service-box-title">{service.title}</h3>
                <p className="service-box-desc">{service.fullDesc}</p>

                {service.keyPoints && (
                  <ul className="service-box-bullets">
                    {service.keyPoints.map((pt, idx) => (
                      <li key={idx} className="service-box-bullet-item">
                        <CheckCircle size={14} className="service-box-bullet-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Certifications Row */}
      <CertificationsRow title="Certification Success, Without the Stress" />

      {/* 5. Statistics */}
      <StatsCounter />

      {/* 6. Lead Generation Form */}
      <section className="cta-form-section">
        <div className="container">
          <div className="cta-grid">
            <div>
              <span className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#79B8FF', borderColor: 'rgba(255,255,255,0.25)' }}>
                Official US Agent & 510(k) Submissions
              </span>
              <h2 style={{ fontSize: '36px', color: 'var(--white)', marginBottom: '18px', fontWeight: 800 }}>
                Accelerate Your US FDA Clearance
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, marginBottom: '24px' }}>
                Gain clearance faster through electronic eSTAR packaging, rigorous substantial equivalence determinations, and official in-country representation.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Building2 size={20} color="#79B8FF" />
                  <span>Designated US Agent for international medical device establishments</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <ShieldCheck size={20} color="#79B8FF" />
                  <span>Small Business fee certification assistance (saves up to 75% on FDA fees)</span>
                </div>
              </div>
            </div>

            <div>
              <LeadForm title="Accelerate Your Journey!" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. USA FAQs */}
      <FaqAccordion
        faqs={USA_FAQS}
        title="Get The Answers You Need To Move Forward in The USA"
        subtitle="Frequently asked questions about US FDA 510(k) premarket notifications, FDA registration and listing, Small Business fee waivers, and inspection readiness."
      />
    </>
  );
}
