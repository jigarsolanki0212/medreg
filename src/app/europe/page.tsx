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
import {
  EUROPE_SERVICES,
  EUROPE_FAQS,
  COMPANY_INFO
} from '@/data/medregData';

export const metadata: Metadata = {
  title: 'Europe CE Mark MDR 2017/745 & IVDR Regulatory Consulting',
  description: 'Expert CE Marking consultancy under EU MDR 2017/745 and IVDR 2017/746. Technical documentation (Annex II/III), Clinical Evaluation (CER), GSPR checklists, and European Authorized Representative (EC REP).',
  alternates: {
    canonical: 'https://medreg.in/europe/'
  }
};

export default function EuropeServicesPage() {
  return (
    <>
      {/* 1. Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="hero-badge">
              <Sparkles size={14} color="#79B8FF" />
              <span>Grow your business with us!</span>
            </div>
            <h1 className="page-banner-title">
              <Image src="/assets/europe.png" alt="Europe" width={48} height={48} className="page-banner-flag" />
              <span>Europe Medical Device Regulatory Services</span>
            </h1>
            <p className="page-banner-subtitle">
              Achieve seamless CE Certification under Regulation (EU) 2017/745 (MDR) and Regulation (EU) 2017/746 (IVDR).
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
      <section style={{ padding: '80px 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            <div>
              <span className="section-label">European Union Market Access</span>
              <h2 style={{ fontSize: '32px', color: 'var(--slate-900)', lineHeight: 1.3 }}>
                Supporting Medical Device Companies to Achieve CE Certification and Market Presence Across <span style={{ color: 'var(--primary)' }}>Europe</span>
              </h2>
            </div>
            <div>
              <h3 style={{ fontSize: '22px', color: 'var(--slate-800)', marginBottom: '14px' }}>
                Building Stronger MedTech Futures Through Compliance in Europe
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '20px' }}>
                MedReg Consultancy helps medical device manufacturers navigate Europe’s stringent regulatory transition with total confidence. From CE certification, ISO 13485:2016, and UK MDR to technical documentation, clinical evaluations, and post-market surveillance, we deliver end-to-end solutions across all device classes.
              </p>
              <Link href="/contact-us" className="btn btn-primary btn-sm">
                <span>Request European CE Assessment</span>
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
              <span className="section-label">Complete Service Inventory</span>
              <h2 className="section-title">Services We Offer in Europe</h2>
              <p className="section-subtitle">
                As a premier regulatory solutions provider for medical devices, we deliver these 13 specialized services across the European market.
              </p>
            </div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary)' }}>
              13 European Compliance Services
            </div>
          </div>

          <div className="services-catalog-grid">
            {EUROPE_SERVICES.map((service) => (
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
                EU Notified Body Liaison
              </span>
              <h2 style={{ fontSize: '36px', color: 'var(--white)', marginBottom: '18px', fontWeight: 800 }}>
                Conquer EU MDR Without Delays
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, marginBottom: '24px' }}>
                With Notified Body capacity constrained across Europe, having an airtight Technical Documentation file and compliant Clinical Evaluation Report (CER) is critical to avoiding years of review queues.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <ShieldCheck size={20} color="#79B8FF" />
                  <span>Annex II and III MDR Technical Files ready for audit</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Globe size={20} color="#79B8FF" />
                  <span>Active European Authorized Representative (EC REP) channel partnership</span>
                </div>
              </div>
            </div>

            <div>
              <LeadForm title="Accelerate Your Journey!" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Europe FAQs */}
      <FaqAccordion
        faqs={EUROPE_FAQS}
        title="Get The Answers You Need To Move Forward in Europe"
        subtitle="Frequently asked questions about EU MDR 2017/745 transition deadlines, Notified Body audits, CER requirements, and PRRC obligations."
      />
    </>
  );
}
