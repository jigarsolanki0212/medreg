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
import WhyChooseSection from '@/components/WhyChooseSection';
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
              <span>USA</span>
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
                Bridging Compliance and Commercial Success for <span style={{ color: 'var(--primary)' }}>USA MedTech</span>
              </h2>
            </div>
            <div>
              <h3 style={{ fontSize: '22px', color: 'var(--slate-800)', marginBottom: '14px' }}>
                Your Partner in USA MedTech Regulatory Success
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '20px' }}>
                MedReg Consultancy helps medical device manufacturers navigate the US regulatory landscape with ease. From ISO 13485:2016 and CE certification to USFDA listings, 510(k), PMA, and UL approvals, we deliver tailored end-to-end solutions. With expertise in submissions, QMS, compliance, and post-market support, we simplify every stage, ensuring your products remain compliant and competitive in the US MedTech market.
              </p>
              <Link href="/contact-us/" className="btn btn-primary btn-sm">
                <span>Contact Us</span>
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
              <h2 className="section-title">Services We Offer in The USA</h2>
              <p className="section-subtitle">
                As a trusted partner in medical device regulations, MedReg Consultancy offers comprehensive services across the US market.
              </p>
            </div>
          </div>

          <div className="services-catalog-grid">
            {USA_SERVICES.map((service) => (
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

      {/* 7. USA FAQs */}
      <FaqAccordion
        faqs={USA_FAQS}
        title="Get the Answers You Need to Move Forward"
      />
    </>
  );
}
