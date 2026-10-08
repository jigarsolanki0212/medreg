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
  Globe
} from 'lucide-react';
import StatsCounter from '@/components/StatsCounter';
import CertificationsRow from '@/components/CertificationsRow';
import LeadForm from '@/components/LeadForm';
import FaqAccordion from '@/components/FaqAccordion';
import WhyChooseSection from '@/components/WhyChooseSection';
import {
  EUROPE_SERVICES,
  EUROPE_FAQS,
  COMPANY_INFO
} from '@/data/medregData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, serviceCatalogJsonLd, faqJsonLd, webPageJsonLd } from '@/lib/seo';

const PAGE_PATH = '/europe/';
const PAGE_DESCRIPTION =
  'CE marking under EU MDR 2017/745 and IVDR: technical files (Annex II/III), clinical evaluation (CER), GSPR, PMS/PSUR, PRRC and EU representation.';

export const metadata: Metadata = pageMetadata({
  title: 'CE Marking Consultant for EU MDR 2017/745 & IVDR',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: ['CE marking consultant', 'EU MDR 2017/745 consultant', 'IVDR consultant', 'technical file Annex II', 'clinical evaluation report CER', 'EU authorized representative'],
});

export default function EuropeServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: PAGE_PATH, name: 'CE Marking & EU MDR / IVDR Regulatory Services', description: PAGE_DESCRIPTION }),
          serviceCatalogJsonLd({
            name: 'CE Marking & EU MDR / IVDR Regulatory Services',
            description: PAGE_DESCRIPTION,
            path: PAGE_PATH,
            areaServed: 'European Union',
            services: EUROPE_SERVICES,
          }),
          faqJsonLd(EUROPE_FAQS, PAGE_PATH),
        ]}
      />
      {/* 1. Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'Europe (CE MDR/IVDR)', path: PAGE_PATH }]} />
            <div className="hero-badge">
              <Sparkles size={14} color="#79B8FF" />
              <span>Grow your business with us!</span>
            </div>
            <h1 className="page-banner-title">
              <Image src="/assets/europe.png" alt="" width={48} height={48} className="page-banner-flag" />
              <span>Europe</span>
            </h1>

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
              <h2 style={{ fontSize: '32px', color: 'var(--slate-900)', lineHeight: 1.3 }}>
                Supporting Medical Device Companies to Achieve CE Certification and Market Presence Across <span style={{ color: 'var(--primary)' }}>Europe</span>
              </h2>
            </div>
            <div>
              <h3 style={{ fontSize: '22px', color: 'var(--slate-800)', marginBottom: '14px' }}>
                Building Stronger MedTech Futures Through Compliance in Europe
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '20px' }}>
                MedReg Consultancy helps medical device manufacturers confidently navigate Europe’s regulatory landscape. From CE certification, ISO 13485:2016, MDSAP, ICMED, and UK MDR to technical documentation, clinical evaluations, and post-market surveillance, we deliver complete end-to-end solutions. As your trusted partner, we simplify every stage, from device classification and gap analysis to representation, documentation, and registrations, ensuring long-term compliance and competitiveness in the European MedTech market.
              </p>
              <Link href="/contact-us/" className="btn btn-primary btn-sm">
                <span>Contact Us</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. All 13 Europe Services Catalog */}
      <section className="services-catalog-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h2 className="section-title">Services We Offer in Europe</h2>
              <p className="section-subtitle">
                As a top regulatory solutions provider for medical devices, we deliver these services across the European market.
              </p>
            </div>
          </div>

          <div className="services-catalog-grid">
            {EUROPE_SERVICES.map((service) => (
              <div key={service.id} className="service-box" id={service.id}>
                <div className="service-box-header">
                  <div className="service-box-icon">
                    <FileText size={24} />
                  </div>
                </div>

                <h3 className="service-box-title">{service.title}</h3>
                <p className="service-box-desc">{service.fullDesc}</p>
                <Link href="/contact-us/" className="service-box-link">
                  <span>Get a Quote</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Certifications Row */}
      <WhyChooseSection />

      <CertificationsRow />

      {/* 5. Statistics */}
      <StatsCounter />

      {/* 6. Lead Generation Form */}
      <section className="cta-form-section">
        <div className="container">
          <div className="cta-grid">
            <div>
              <span className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#79B8FF', borderColor: 'rgba(255,255,255,0.25)' }}>
                Free Consultation
              </span>
              <h2 style={{ fontSize: '36px', color: 'var(--white)', marginBottom: '18px', fontWeight: 800 }}>
                Compliance Made Simple – Start with a Free Consultation
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65 }}>
                {COMPANY_INFO.phones.map((p) => p.display).join(', ')}
                <br />
                {COMPANY_INFO.emails[0].display}
              </p>
            </div>

            <div>
              <LeadForm title="Accelerate your journey!" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Europe FAQs */}
      <FaqAccordion
        faqs={EUROPE_FAQS}
        title="Get the Answers You Need to Move Forward"
      />
    </>
  );
}
