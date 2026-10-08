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
import WhyChooseSection from '@/components/WhyChooseSection';
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
              <span>Other Services</span>
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
                Supporting Medical Innovators Worldwide With Multi-Market Regulatory <span style={{ color: 'var(--primary)' }}>Strategy And Execution</span>
              </h2>
            </div>
            <div>
              <h3 style={{ fontSize: '22px', color: 'var(--slate-800)', marginBottom: '14px' }}>
                Empowering Medical Technology Manufacturers Worldwide
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '20px' }}>
                MedReg Consultancy empowers medical device manufacturers to expand globally with confidence. From ISO 13485:2016, CE, UK MDR, USFDA, CDSCO, and UL certifications to registrations, submissions, and post-market support, we deliver comprehensive regulatory solutions tailored to international markets. Backed by global partnerships, our expertise ensures compliance, growth, and competitiveness across the MedTech landscape.
              </p>
              <Link href="/contact-us/" className="btn btn-primary btn-sm">
                <span>Contact Us</span>
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
              <h2 className="section-title">Services We Provide</h2>
              <p className="section-subtitle">
                We offer services that help you launch your medical technology in the Middle East, Southeast Asian Countries, Brazil, TGA, and Canada.
              </p>
            </div>
          </div>

          <div className="services-catalog-grid">
            {GLOBAL_SERVICES.map((service) => (
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

      {/* 7. Global FAQs */}
      <FaqAccordion
        faqs={GLOBAL_FAQS}
        title="Get the Answers You Need to Move Forward"
      />
    </>
  );
}
