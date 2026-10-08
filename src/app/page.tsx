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
import WhyChooseSection from '@/components/WhyChooseSection';
import {
  COMPANY_INFO,
  HOMEPAGE_FAQS,
  INDIA_SERVICES,
  EUROPE_SERVICES,
  USA_SERVICES,
  GLOBAL_SERVICES
} from '@/data/medregData';
import JsonLd from '@/components/JsonLd';
import { faqJsonLd, webPageJsonLd } from '@/lib/seo';

const HOME_DESCRIPTION =
  'MedReg Consultancy (Ahmedabad, since 2011) secures CDSCO, CE (EU MDR/IVDR), US FDA 510(k), MDSAP & ISO 13485 approvals for medical device & IVD makers.';

export default function HomePage() {
  const principles = [
    'Listening to customer needs',
    'Understanding the scope clearly',
    'Defining the right regulatory pathway',
    'Maintaining transparency in documentation',
    'Delivering cost-effective strategies',
    'Ensuring timely reporting and advice',
    'Following a preventive approach'
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: '/', name: 'Medical Device Regulatory Consultant in India | MedReg', description: HOME_DESCRIPTION }),
          faqJsonLd(HOMEPAGE_FAQS, '/'),
        ]}
      />
      {/* 1. Hero Section */}
      <section className="hero-section" data-parallax>
        <Image
          src="/assets/why-medreg.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={70}
          className="hero-bg-img"
        />
        <div className="hero-orbs" aria-hidden="true">
          <span className="hero-orb hero-orb--1" />
          <span className="hero-orb hero-orb--2" />
          <span className="hero-orb hero-orb--3" />
          <span className="hero-grid" />
        </div>
        <div className="container hero-layout">
          <div className="hero-content">
            <div className="hero-credential-badge">
              <span className="hero-credential-text">Grow your business with us!</span>
            </div>

            <h1 className="hero-title">
              Your Partner in Medical Device <span className="hero-title-highlight">Regulatory Success</span>
            </h1>

            <p className="hero-subtitle">
              From strategy to submission, MedReg Consultancy ensures complete compliance, helping you achieve faster approvals and smooth market entry.
            </p>

            <div className="hero-ctas">
              <Link href="/contact-us/" className="btn btn-gold btn-shine">
                <span>Book Free Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/india/" className="btn btn-outline-white">
                <span>Explore Services</span>
              </Link>
              <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="btn btn-white btn-sm hero-call-btn">
                <Phone size={14} />
                <span>+91 88664 61989</span>
              </a>
            </div>

            <div className="hero-trust-bar">
              {['India', 'Europe', 'USA', 'Other Markets'].map((m) => (
                <div key={m} className="hero-trust-item">
                  <CheckCircle size={17} color="#79B8FF" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative 3D approval stack (desktop only) */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-stack">
              <div className="hero-glass hero-glass--main">
                <div className="hero-glass-head">
                  <span className="hero-glass-dot" />
                  <span>Regulatory Dossier</span>
                </div>
                <div className="hero-glass-title">Market Approval Roadmap</div>
                {[
                  { label: 'CDSCO MD-15 Import Licence', pct: 100 },
                  { label: 'EU MDR Technical File', pct: 86 },
                  { label: 'US FDA 510(k) eSTAR', pct: 72 },
                ].map((row, i) => (
                  <div key={row.label} className="hero-progress-row">
                    <div className="hero-progress-label">
                      <span>{row.label}</span>
                      <span>{row.pct}%</span>
                    </div>
                    <div className="hero-progress-track">
                      <span className="hero-progress-fill" style={{ ['--w' as string]: `${row.pct}%`, ['--d' as string]: `${0.6 + i * 0.25}s` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="hero-glass hero-glass--chip hero-glass--chip-a">
                <ShieldCheck size={18} />
                <span>ISO 13485:2016</span>
              </div>
              <div className="hero-glass hero-glass--chip hero-glass--chip-b">
                <Award size={18} />
                <span>CE Marking</span>
              </div>
              <div className="hero-glass hero-glass--chip hero-glass--chip-c">
                <Globe2 size={18} />
                <span>20+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Authentic About Section */}
      <section className="section-pad" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="about-split-grid">
            {/* Left: Authentic Team Photo in Cross Shape */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div className="about-media" style={{ position: 'relative', maxWidth: '480px', width: '100%' }}>
                <Image
                  src="/assets/home_about.png"
                  alt="MedReg regulatory consulting team in Ahmedabad"
                  width={520}
                  height={520}
                  sizes="(max-width: 992px) 90vw, 480px"
                  className="about-photo"
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
                    10+
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--white)' }}>
                    Year Of Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content & Core Pillars */}
            <div>
              <span className="section-label">About MedReg Consultancy</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(26px, 3.4vw, 34px)', lineHeight: 1.25 }}>
                Empowering Medical Device Manufacturers to Achieve Compliance and Market Access
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--slate-600)', marginBottom: '24px', lineHeight: 1.65 }}>
                MedReg Consultancy helps medical device and IVD manufacturers achieve smooth approvals and compliance in global markets. Since 2011, we’ve supported companies across India, Europe, the USA, and the UK with expert guidance and practical strategies, covering products from surgical disposables and orthopaedic implants to sutures, diagnostic consumables, and laparoscopic devices.
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

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link href="/about-us/" className="btn btn-primary">
                  <span>More About Us</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/team/" className="btn btn-secondary">
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
                Our Services
              </span>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>
                Our Comprehensive Service Offerings
              </h2>
              <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Backed by a team of experts, we offer seamless regulatory and technical services to streamline your project.
              </p>
            </div>
          </div>

          <div>
            {/* India Card */}
            <Link href="/india/" className="market-card">
              <div className="market-card-left">
                <Image src="/assets/india.png" alt="India Flag" width={52} height={52} className="market-card-flag" />
                <span className="market-card-title">India</span>
              </div>
              <div className="market-card-desc">
                Simplifying regulatory compliance for India’s healthcare market with expert guidance and documentation support.
                <ul className="market-card-services">
                  {INDIA_SERVICES.map((sv) => (
                    <li key={sv.id}>{sv.title}</li>
                  ))}
                </ul>
              </div>
              <div className="market-card-action">
                <span>View More</span>
                <ArrowRight size={18} />
              </div>
            </Link>

            {/* Europe Card */}
            <Link href="/europe/" className="market-card">
              <div className="market-card-left">
                <Image src="/assets/europe.png" alt="European Union Flag" width={52} height={52} className="market-card-flag" />
                <span className="market-card-title">Europe</span>
              </div>
              <div className="market-card-desc">
                Your partner for seamless licensing, documentation, and certification in European healthcare sector.
                <ul className="market-card-services">
                  {EUROPE_SERVICES.map((sv) => (
                    <li key={sv.id}>{sv.title}</li>
                  ))}
                </ul>
              </div>
              <div className="market-card-action">
                <span>View More</span>
                <ArrowRight size={18} />
              </div>
            </Link>

            {/* USA Card */}
            <Link href="/usa/" className="market-card">
              <div className="market-card-left">
                <Image src="/assets/usa.png" alt="USA Flag" width={52} height={52} className="market-card-flag" />
                <span className="market-card-title">USA</span>
              </div>
              <div className="market-card-desc">
                Expert support for US healthcare compliance, ensuring smooth regulatory approvals.
                <ul className="market-card-services">
                  {USA_SERVICES.map((sv) => (
                    <li key={sv.id}>{sv.title}</li>
                  ))}
                </ul>
              </div>
              <div className="market-card-action">
                <span>View More</span>
                <ArrowRight size={18} />
              </div>
            </Link>

            {/* Global / Other Card */}
            <Link href="/other-services/" className="market-card">
              <div className="market-card-left">
                <Image src="/assets/other.png" alt="Global Markets" width={52} height={52} className="market-card-flag" />
                <span className="market-card-title">Other</span>
              </div>
              <div className="market-card-desc">
                Global healthcare regulatory solutions tailored to your licensing and certification needs.
                <ul className="market-card-services">
                  {GLOBAL_SERVICES.map((sv) => (
                    <li key={sv.id}>{sv.title}</li>
                  ))}
                </ul>
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

      {/* 5. Why Choose Medreg */}
      <WhyChooseSection />

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
                Free Consultation
              </span>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', color: 'var(--white)', marginBottom: '18px', fontWeight: 800 }}>
                Accelerate your journey!
              </h2>
              <div style={{ marginBottom: '32px' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#79B8FF' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Call Us</div>
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
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Email Us</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--white)' }}>
                      info@medreg.in
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Lead Generation Form */}
            <div>
              <LeadForm title="Get In Touch Today!" />
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
            className="cta-banner"
            style={{
              background: 'linear-gradient(135deg, var(--navy-800) 0%, var(--primary) 100%)',
              borderRadius: 'var(--radius-xl)',
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
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 26px)', fontWeight: 800, color: 'var(--white)', marginBottom: '8px' }}>
                Compliance Made Simple – Start with a Free Consultation
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px' }}>
                +91 88664 61989, +91 63523 88194 · info@medreg.in
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact-us/" className="btn btn-gold">
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
        title="Get the Answers You Need to Move Forward."
      />
    </>
  );
}
