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
import WhyChooseSection from '@/components/WhyChooseSection';
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
              <span>India</span>
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
                Supporting Medical Device Companies in Achieving Regulatory Approval and Market Access in <span style={{ color: 'var(--primary)' }}>India</span>
              </h2>
            </div>
            <div>
              <h3 style={{ fontSize: '22px', color: 'var(--slate-800)', marginBottom: '14px' }}>
                Empowering Compliance for India’s MedTech Growth
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '20px' }}>
                MedReg Consultancy helps medical device manufacturers navigate India’s complex regulatory landscape with ease. From CE certification and ISO 13485:2016 compliance to technical documentation, clinical evaluations, and post-market surveillance, we simplify every stage to keep your products compliant, competitive, and ready for market growth.
              </p>
              <Link href="/contact-us/" className="btn btn-primary btn-sm">
                <span>Contact Us</span>
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
              <h2 className="section-title">Services We Offer in India</h2>
              <p className="section-subtitle">
                As a premier regulatory solutions provider, we help medical device manufacturers navigate the Indian market with these services.
              </p>
            </div>
          </div>

          <div className="services-catalog-grid">
            {INDIA_SERVICES.map((service) => (
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

      {/* 7. Indian FAQs */}
      <FaqAccordion
        faqs={INDIA_FAQS}
        title="Get the Answers You Need to Move Forward"
        subtitle="Navigating medical device regulations doesn’t have to be overwhelming. At MedReg Consultancy, we’ve compiled answers to the most common client questions to guide you quickly through our services and how we can support your compliance journey. From emerging startups to established global players, our FAQs are your first stop. Need personalized help? We’re just a message away!"
      />
    </>
  );
}
