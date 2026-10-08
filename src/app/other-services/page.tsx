import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  FileText,
  ShieldCheck,
  CheckCircle,
  Globe2,
  Phone,
  Mail,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import StatsCounter from '@/components/StatsCounter';
import CertificationsRow from '@/components/CertificationsRow';
import LeadForm from '@/components/LeadForm';
import FaqAccordion from '@/components/FaqAccordion';
import {
  GLOBAL_SERVICES,
  GLOBAL_FAQS,
  COMPANY_INFO
} from '@/data/medregData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, serviceCatalogJsonLd, faqJsonLd, webPageJsonLd } from '@/lib/seo';

const PAGE_PATH = '/other-services/';
const PAGE_DESCRIPTION =
  'MDSAP and ISO 13485:2016 consulting plus device registrations with ANVISA, TGA, Health Canada and SFDA, IMDRF technical files and validations.';

export const metadata: Metadata = pageMetadata({
  title: 'MDSAP & ISO 13485 Consultant | Global Registrations',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: ['MDSAP consultant', 'ISO 13485 certification consultant', 'ANVISA registration', 'TGA registration', 'Health Canada medical device licence', 'SFDA registration'],
});

export default function OtherServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: PAGE_PATH, name: 'Global Medical Device Regulatory Services (MDSAP, ISO 13485)', description: PAGE_DESCRIPTION }),
          serviceCatalogJsonLd({
            name: 'Global Medical Device Regulatory Services (MDSAP, ISO 13485)',
            description: PAGE_DESCRIPTION,
            path: PAGE_PATH,
            areaServed: ['Canada', 'Australia', 'Brazil', 'Japan', 'United Kingdom', 'Saudi Arabia', 'South Africa', 'United Arab Emirates'],
            services: GLOBAL_SERVICES,
          }),
          faqJsonLd(GLOBAL_FAQS, PAGE_PATH),
        ]}
      />
      {/* 1. Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'Global Markets', path: PAGE_PATH }]} />
            <div className="hero-badge">
              <Sparkles size={14} color="#79B8FF" />
              <span>Grow your business with us!</span>
            </div>
            <h1 className="page-banner-title">
              <Image src="/assets/other.png" alt="" width={48} height={48} className="page-banner-flag" />
              <span>Global Medical Device Regulatory Services</span>
            </h1>
            <p className="page-banner-subtitle">
              Multi-market strategy, MDSAP audit readiness, ISO 13485:2016 QMS, and country registrations across emerging healthcare economies.
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
              <span className="section-label">Worldwide Expansion</span>
              <h2 style={{ fontSize: '32px', color: 'var(--slate-900)', lineHeight: 1.3 }}>
                Supporting Medical Innovators Worldwide With Multi-Market <span style={{ color: 'var(--primary)' }}>Regulatory Strategy</span>
              </h2>
            </div>
            <div>
              <h3 style={{ fontSize: '22px', color: 'var(--slate-800)', marginBottom: '14px' }}>
                Empowering Medical Technology Manufacturers Worldwide
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '20px' }}>
                MedReg Consultancy empowers medical device manufacturers to expand globally with confidence. From ISO 13485:2016, CE, UK MDR, USFDA, and CDSCO to registrations, submissions, and post-market support, we deliver comprehensive regulatory solutions tailored to international markets including the Middle East, Southeast Asia, Brazil, Australia, and Canada.
              </p>
              <Link href="/contact-us/" className="btn btn-primary btn-sm">
                <span>Request Global Regulatory Strategy</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Services Catalog */}
      <section className="services-catalog-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="section-label">Complete Service Inventory</span>
              <h2 className="section-title">Services We Provide Globally</h2>
              <p className="section-subtitle">
                We offer services that help you launch your medical technology in the Middle East, Southeast Asian Countries, Brazil, Australia (TGA), Canada, and worldwide.
              </p>
            </div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary)' }}>
              Multi-Market Compliance
            </div>
          </div>

          <div className="services-catalog-grid">
            {GLOBAL_SERVICES.map((service) => (
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
                Multi-Country Expansion
              </span>
              <h2 style={{ fontSize: '36px', color: 'var(--white)', marginBottom: '18px', fontWeight: 800 }}>
                Expand Beyond Borders with Unified Dossiers
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, marginBottom: '24px' }}>
                Avoid duplicate testing, redundant translations, and separate filing expenses. We build harmonized IMDRF STED dossiers and MDSAP quality systems that satisfy multiple regulatory authorities simultaneously.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Globe2 size={20} color="#79B8FF" />
                  <span>MDSAP compliance satisfying US FDA, Health Canada, TGA, ANVISA, and MHLW</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <ShieldCheck size={20} color="#79B8FF" />
                  <span>ISO 13485:2016 implementation and mock audit readiness</span>
                </div>
              </div>
            </div>

            <div>
              <LeadForm title="Accelerate Your Journey!" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Global FAQs */}
      <FaqAccordion
        faqs={GLOBAL_FAQS}
        title="Get The Answers You Need To Move Forward Globally"
        subtitle="Frequently asked questions about international medical device registrations, MDSAP auditing scopes, and IMDRF technical dossier preparation."
      />
    </>
  );
}
