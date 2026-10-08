import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  FileText,
  ShieldCheck,
  CheckCircle,
  Building,
  HelpCircle,
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
  INDIA_SERVICES,
  INDIA_FAQS,
  COMPANY_INFO
} from '@/data/medregData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, serviceCatalogJsonLd, faqJsonLd, webPageJsonLd } from '@/lib/seo';

const PAGE_PATH = '/india/';
const PAGE_DESCRIPTION =
  'CDSCO consultants for medical device manufacturing licences (MD-5, MD-9), import licences (MD-15), Indian Authorized Agent and MDR 2017 compliance.';

export const metadata: Metadata = pageMetadata({
  title: 'CDSCO Medical Device Registration Consultant India',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: ['CDSCO medical device registration', 'medical device manufacturing license India', 'MD-15 import license', 'Indian Authorized Agent', 'Medical Device Rules 2017 consultant', 'SUGAM portal'],
});

export default function IndiaServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: PAGE_PATH, name: 'CDSCO Medical Device Regulatory Services in India', description: PAGE_DESCRIPTION }),
          serviceCatalogJsonLd({
            name: 'CDSCO Medical Device Regulatory Services in India',
            description: PAGE_DESCRIPTION,
            path: PAGE_PATH,
            areaServed: 'India',
            services: INDIA_SERVICES,
          }),
          faqJsonLd(INDIA_FAQS, PAGE_PATH),
        ]}
      />
      {/* 1. Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'India (CDSCO)', path: PAGE_PATH }]} />
            <div className="hero-badge">
              <Sparkles size={14} color="#79B8FF" />
              <span>Grow your business with us!</span>
            </div>
            <h1 className="page-banner-title">
              <Image src="/assets/india.png" alt="" width={48} height={48} className="page-banner-flag" />
              <span>India Medical Device Regulatory Services</span>
            </h1>
            <p className="page-banner-subtitle">
              Comprehensive licensing, SUGAM portal submissions, and QMS implementation under the Medical Device Rules (MDR) 2017.
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
              <span className="section-label">National Compliance</span>
              <h2 style={{ fontSize: '32px', color: 'var(--slate-900)', lineHeight: 1.3 }}>
                Supporting Medical Device Companies in Achieving Regulatory Approval and Market Access in <span style={{ color: 'var(--primary)' }}>India</span>
              </h2>
            </div>
            <div>
              <h3 style={{ fontSize: '22px', color: 'var(--slate-800)', marginBottom: '14px' }}>
                Empowering Compliance for India’s MedTech Growth
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '20px' }}>
                MedReg Consultancy helps medical device and IVD manufacturers navigate India’s complex regulatory landscape with ease. Under the Central Drugs Standard Control Organisation (CDSCO) and State Licensing Authorities, we deliver complete end-to-end solutions: from site master file compilation and technical dossier preparation to clinical evaluations and post-market surveillance.
              </p>
              <Link href="/contact-us/" className="btn btn-primary btn-sm">
                <span>Request Indian Regulatory Consultation</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. All 19 India Services Catalog */}
      <section className="services-catalog-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="section-label">Complete Service Inventory</span>
              <h2 className="section-title">Services We Offer in India</h2>
              <p className="section-subtitle">
                As a premier regulatory solutions provider, we help medical device manufacturers navigate the Indian market with these 19 specialized services.
              </p>
            </div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary)' }}>
              19 Specialized Indian Services
            </div>
          </div>

          <div className="services-catalog-grid">
            {INDIA_SERVICES.map((service) => (
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
                Indian Market Access
              </span>
              <h2 style={{ fontSize: '36px', color: 'var(--white)', marginBottom: '18px', fontWeight: 800 }}>
                Accelerate Your CDSCO Submissions
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, marginBottom: '24px' }}>
                Avoid prolonged queries from licensing authorities. Whether you are applying for Form MD-5/MD-9 manufacturing licenses or Form MD-15 import clearance, our in-house regulatory team in Ahmedabad handles the complete filing.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Building size={20} color="#79B8FF" />
                  <span>Physical presence in Ahmedabad, Gujarat with active CDSCO interface</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <ShieldCheck size={20} color="#79B8FF" />
                  <span>Licensed Indian Authorized Representative (IAR) for foreign brands</span>
                </div>
              </div>
            </div>

            <div>
              <LeadForm title="Accelerate Your Journey!" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Indian FAQs */}
      <FaqAccordion
        faqs={INDIA_FAQS}
        title="Get The Answers You Need To Move Forward in India"
        subtitle="Frequently asked questions about CDSCO medical device classifications, manufacturing and import licensing timelines, and audit preparations."
      />
    </>
  );
}
