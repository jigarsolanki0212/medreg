import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Award,
  Globe2,
  FileCheck2,
  Users,
  Compass,
  Phone,
  Mail
} from 'lucide-react';
import StatsCounter from '@/components/StatsCounter';
import CertificationsRow from '@/components/CertificationsRow';
import ClientLogosGrid from '@/components/ClientLogosGrid';
import LeadForm from '@/components/LeadForm';
import FaqAccordion from '@/components/FaqAccordion';
import TestimonialSlider from '@/components/TestimonialSlider';
import {
  COMPANY_INFO,
  HOMEPAGE_FAQS,
  WHY_CHOOSE_MEDREG
} from '@/data/medregData';

export default function HomePage() {
  const principles = [
    "Listening to customer needs & operational constraints",
    "Understanding the regulatory scope and device risk clearly",
    "Defining the optimal, cost-effective regulatory pathway",
    "Maintaining 100% transparency in all dossier documentation",
    "Delivering cost-effective strategies for high-priority products",
    "Ensuring proactive, timely reporting and milestone advice",
    "Following a preventive compliance approach to avoid audit delays"
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-credential-badge">
              <span className="hero-credential-tag">CDSCO REGISTERED LIAISON</span>
              <span className="hero-credential-sep" />
              <span className="hero-credential-text">15+ Years Medical Device &amp; IVD Regulatory Excellence</span>
            </div>

            <h1 className="hero-title">
              Your Trusted Partner in Medical Device &amp; IVD <span className="hero-title-highlight">Regulatory Success</span>
            </h1>

            <p className="hero-subtitle">
              From strategy to submission, MedReg Consultancy ensures complete compliance, helping medical device and IVD manufacturers achieve faster approvals and smooth market entry across India, Europe, the USA, and globally.
            </p>

            <div className="hero-ctas">
              <Link href="/contact-us" className="btn btn-gold">
                <span>Book Free Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/india" className="btn btn-outline-white">
                <span>Explore Services</span>
              </Link>
              <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="btn btn-white btn-sm" style={{ marginLeft: '8px' }}>
                <Phone size={14} />
                <span>+91 88664 61989</span>
              </a>
            </div>

            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <CheckCircle size={17} color="#79B8FF" />
                <span>CDSCO Approved Liaison</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle size={17} color="#79B8FF" />
                <span>EU MDR / IVDR Compliant</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle size={17} color="#79B8FF" />
                <span>US FDA 510(k) & QMSR</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle size={17} color="#79B8FF" />
                <span>ISO 13485:2016 Certified Auditors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Authentic About Section */}
      <section style={{ padding: '90px 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="about-split-grid">
            {/* Left: Authentic Team Photo in Cross Shape */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', maxWidth: '480px', width: '100%' }}>
                <Image
                  src="/assets/home_about.png"
                  alt="MedReg Regulatory Consulting Team"
                  width={520}
                  height={520}
                  priority
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
                {/* Floating Experience Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    backgroundColor: 'var(--primary-dark)',
                    color: 'var(--white)',
                    padding: '18px 24px',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 20px 40px -10px rgba(11, 37, 69, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                    textAlign: 'center',
                    border: '1px solid rgba(246, 192, 66, 0.4)'
                  }}
                >
                  <div style={{ fontSize: '34px', fontWeight: 800, color: '#F6C042', lineHeight: 1 }}>
                    15+
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--white)' }}>
                    Years of Experience
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', marginTop: '2px' }}>
                    Since 2011
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content & Core Pillars */}
            <div>
              <span className="section-label">About MedReg Consultancy</span>
              <h2 className="section-title" style={{ fontSize: '34px', lineHeight: 1.25 }}>
                Empowering Medical Device Manufacturers To Achieve Compliance And Market Access
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--slate-600)', marginBottom: '16px', lineHeight: 1.65 }}>
                MedReg Consultancy helps medical device and IVD manufacturers achieve smooth approvals and compliance in global markets. Since 2011, we’ve supported companies across India, Europe, the USA, and the UK with expert guidance and practical strategies, covering products from surgical disposables and orthopaedic implants to sutures, diagnostic consumables, and laparoscopic devices.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--slate-600)', marginBottom: '24px' }}>
                Backed by a multidisciplinary team of biomedical engineers, lead auditors, and regulatory strategists, we offer seamless technical services to de-risk your projects:
              </p>

              {/* Checkmark Bullets */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginBottom: '32px' }}>
                {principles.map((p, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: 'var(--slate-700)' }}>
                    <CheckCircle size={18} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{p}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Link href="/about-us" className="btn btn-primary">
                  <span>More About Us</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/team" className="btn btn-secondary">
                  <span>Meet Our Experts</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Comprehensive Service Offerings (Regional Market Cards) */}
      <section className="market-offerings-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '44px' }}>
            <div>
              <span className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#79B8FF', borderColor: 'rgba(255,255,255,0.2)' }}>
                Target Jurisdictions
              </span>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>
                Our Comprehensive Service Offerings
              </h2>
              <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Backed by a team of regulatory experts, we offer seamless licensing and technical compliance across the world’s major healthcare markets.
              </p>
            </div>
          </div>

          <div>
            {/* India Card */}
            <Link href="/india" className="market-card">
              <div className="market-card-left">
                <Image src="/assets/india.png" alt="India Flag" width={52} height={52} className="market-card-flag" />
                <span className="market-card-title">India (CDSCO)</span>
              </div>
              <div className="market-card-desc">
                Simplifying regulatory compliance for India’s healthcare market with expert guidance and documentation support for Manufacturing (MD-5/MD-9), Import (MD-15), and SUGAM submissions.
              </div>
              <div className="market-card-action">
                <span>View More</span>
                <ArrowRight size={18} />
              </div>
            </Link>

            {/* Europe Card */}
            <Link href="/europe" className="market-card">
              <div className="market-card-left">
                <Image src="/assets/europe.png" alt="European Union Flag" width={52} height={52} className="market-card-flag" />
                <span className="market-card-title">Europe (CE MDR/IVDR)</span>
              </div>
              <div className="market-card-desc">
                Your partner for seamless licensing, documentation, and certification in the European healthcare sector under EU MDR 2017/745, Annex II/III Technical Files, and EC REP services.
              </div>
              <div className="market-card-action">
                <span>View More</span>
                <ArrowRight size={18} />
              </div>
            </Link>

            {/* USA Card */}
            <Link href="/usa" className="market-card">
              <div className="market-card-left">
                <Image src="/assets/usa.png" alt="USA Flag" width={52} height={52} className="market-card-flag" />
                <span className="market-card-title">USA (US FDA)</span>
              </div>
              <div className="market-card-desc">
                Expert support for US healthcare compliance, ensuring smooth regulatory approvals through 510(k) Premarket Notifications, QMSR (21 CFR Part 820), GUDID, and official US Agent representation.
              </div>
              <div className="market-card-action">
                <span>View More</span>
                <ArrowRight size={18} />
              </div>
            </Link>

            {/* Global / Other Card */}
            <Link href="/other-services" className="market-card">
              <div className="market-card-left">
                <Image src="/assets/other.png" alt="Global Markets" width={52} height={52} className="market-card-flag" />
                <span className="market-card-title">Global Markets</span>
              </div>
              <div className="market-card-desc">
                Global healthcare regulatory solutions tailored to your licensing and certification needs, including MDSAP across 5 nations, ISO 13485:2016 implementation, and registrations in Brazil, Australia, and Canada.
              </div>
              <div className="market-card-action">
                <span>View More</span>
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Statistics */}
      <StatsCounter />

      {/* 5. Why Choose MedReg Split Section */}
      <section className="why-section">
        <div className="why-image-col">
          {/* Background image loaded via CSS */}
        </div>
        <div className="why-content-col">
          <span className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#79B8FF', borderColor: 'rgba(255,255,255,0.2)' }}>
            Why Choose MedReg
          </span>
          <h2 style={{ fontSize: '32px', color: 'var(--white)', marginBottom: '14px' }}>
            Strategic Insight. Technical Precision. Global Approvals.
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', lineHeight: 1.6 }}>
            Expert consultants, thorough regulatory insight, and a seamless path to compliance—that’s our promise for your medical devices.
          </p>

          <div className="why-features-grid">
            {WHY_CHOOSE_MEDREG.map((item, idx) => (
              <div key={idx} className="why-feature-item">
                <div className="why-icon-bubble">
                  {idx === 0 && <Compass size={22} />}
                  {idx === 1 && <FileCheck2 size={22} />}
                  {idx === 2 && <Globe2 size={22} />}
                  {idx === 3 && <ShieldCheck size={22} />}
                </div>
                <h4 className="why-feature-title">{item.title}</h4>
                <p className="why-feature-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Regulatory Certification Badges */}
      <CertificationsRow />

      {/* 7. Real Feedback from Real Clients (Testimonials) */}
      <TestimonialSlider />

      {/* 8. Accelerate Your Journey! (Consultation Section) */}
      <section className="cta-form-section">
        <div className="container">
          <div className="cta-grid">
            <div>
              <span className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#79B8FF', borderColor: 'rgba(255,255,255,0.25)' }}>
                Direct Regulatory Advisory
              </span>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', color: 'var(--white)', marginBottom: '18px', fontWeight: 800 }}>
                Accelerate Your Regulatory Journey Today
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, marginBottom: '32px' }}>
                Avoid regulatory delays, rejected submissions, and costly audit findings. Our senior medical device consultants review your product classification, compile submission-ready technical dossiers, and interface directly with competent authorities and notified bodies.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#79B8FF' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Call Our Regulatory Desk</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--white)' }}>
                      +91 88664 61989 &bull; +91 63523 88194
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#79B8FF' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Email Submissions & Dossiers</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--white)' }}>
                      info@medreg.in &bull; bdm@medreg.in
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Lead Generation Form */}
            <div>
              <LeadForm title="Accelerate Your Journey!" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Authentic Client Logos Grid */}
      <ClientLogosGrid />

      {/* 10. Compliance Made Simple Banner */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--slate-50)' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, var(--navy-800) 0%, var(--primary) 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: '48px 40px',
              color: 'var(--white)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px',
              boxShadow: 'var(--shadow-xl)'
            }}
          >
            <div>
              <h3 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--white)', marginBottom: '8px' }}>
                Compliance Made Simple — Start With A Free Consultation
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px' }}>
                Speak directly with senior consultants who decode complex regulatory requirements and define a clear, actionable pathway for your medical devices.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact-us" className="btn btn-gold">
                <span>Get In Touch Today!</span>
                <ArrowRight size={16} />
              </Link>
              <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="btn btn-outline-white">
                <Phone size={15} />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Homepage FAQs */}
      <FaqAccordion
        faqs={HOMEPAGE_FAQS}
        title="Get The Answers You Need To Move Forward"
      />
    </>
  );
}
