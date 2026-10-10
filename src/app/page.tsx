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
import { COMPANY_INFO, HOMEPAGE_FAQS, STATS } from '@/data/medregData';
import { MARKETS } from '@/data/markets';
import SocialSection from '@/components/SocialSection';
import { TRAINING_PROGRAMS, EXHIBITIONS, exhibitionStatus } from '@/data/siteContent';
import JsonLd from '@/components/JsonLd';
import { faqJsonLd, webPageJsonLd } from '@/lib/seo';

const HOME_DESCRIPTION =
  'MedReg is a medical device regulatory consultancy in Ahmedabad supporting CE marking (EU MDR/IVDR), US FDA 510(k), MDSAP, ISO 13485 and CDSCO for device & IVD makers.';

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

  const upcomingExpo = EXHIBITIONS.find((e) => exhibitionStatus(e) === 'upcoming');
  const latestExpo = upcomingExpo || EXHIBITIONS.find((e) => exhibitionStatus(e) === 'past');

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
              <Link href="/services/" className="btn btn-outline-white">
                <span>Explore Services</span>
              </Link>
              <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="btn btn-white btn-sm hero-call-btn">
                <Phone size={14} />
                <span>+91 88664 61989</span>
              </a>
            </div>

            <div className="hero-trust-bar">
              {['Europe', 'USA', 'Other Markets', 'India'].map((m) => (
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
                  { label: 'EU MDR Technical File', pct: 100 },
                  { label: 'US FDA 510(k) eSTAR', pct: 86 },
                  { label: 'CDSCO MD-15 Import Licence', pct: 72 },
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
                    {STATS[0].value}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--white)' }}>
                    {STATS[0].label}
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
                MedReg is a medical device regulatory consultancy that helps medical device and IVD manufacturers achieve smooth approvals and compliance in global markets. We support companies across Europe, the USA, India and the UK with expert guidance and practical strategies, covering products from surgical disposables and orthopaedic implants to sutures, diagnostic consumables, and laparoscopic devices.
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
            {MARKETS.map((m) => (
              <Link key={m.key} href={m.href} className="market-card">
                <div className="market-card-left">
                  <Image src={m.flag} alt="" width={52} height={52} className="market-card-flag" />
                  <span className="market-card-title">{m.name}</span>
                </div>
                <div className="market-card-desc">
                  {m.description}
                  <ul className="market-card-services">
                    {m.services.map((sv) => (
                      <li key={sv.id}>{sv.title}</li>
                    ))}
                  </ul>
                </div>
                <div className="market-card-action">
                  <span>Explore Services</span>
                  <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link href="/services/" className="btn btn-gold">
              <span>View All Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Training, exhibitions and life at MedReg (brief §12) */}
      <section className="section-pad" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="center-content section-head" style={{ marginBottom: '36px' }}>
            <span className="section-label">Beyond Consultancy</span>
            <h2 className="section-title text-center">Training, Events &amp; Life at MedReg</h2>
          </div>
          <div className="hl-grid">
            <Link href="/training/" className="hl-card">
              <div className="hl-media hl-media--plain">
                <span className="hl-big">{TRAINING_PROGRAMS.length}</span>
                <span className="hl-big-label">training programs</span>
              </div>
              <div className="hl-body">
                <h3>Training &amp; Professional Development</h3>
                <p>ISO 13485, MDSAP, ISO 14971, EU MDR, US FDA 510(k), biological evaluation, sterilization validation and more, delivered for your team.</p>
                <span className="usa-svc-link">Book a training session <ArrowRight size={14} /></span>
              </div>
            </Link>
            <Link href="/exhibitions/" className="hl-card">
              <div className="hl-media">
                {latestExpo?.image ? (
                  <Image src={latestExpo.image} alt={latestExpo.name} fill sizes="(max-width: 768px) 92vw, 380px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
                ) : null}
              </div>
              <div className="hl-body">
                <h3>Exhibitions &amp; Events</h3>
                <p>
                  {upcomingExpo
                    ? `Meet our regulatory experts at ${upcomingExpo.name}, ${upcomingExpo.city}.`
                    : latestExpo
                      ? `We exhibited at ${latestExpo.name}. Request a meeting with our team at our next event, our office or online.`
                      : 'Request a meeting with our regulatory experts at our next event, our office or online.'}
                </p>
                <span className="usa-svc-link">{upcomingExpo ? 'Meet us at the exhibition' : 'Schedule a meeting'} <ArrowRight size={14} /></span>
              </div>
            </Link>
            <Link href="/gallery/" className="hl-card">
              <div className="hl-media">
                <Image src="/assets/office-02.png" alt="MedReg office, Ahmedabad" fill sizes="(max-width: 768px) 92vw, 380px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="hl-body">
                <h3>Life at MedReg</h3>
                <p>Meet the people and the workplace behind MedReg, and explore career opportunities with our team.</p>
                <span className="usa-svc-link">View gallery &amp; careers <ArrowRight size={14} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Statistics */}
      <StatsCounter />

      {/* 5. Why Choose MedReg */}
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
                      {COMPANY_INFO.phones.map((p) => p.display).join(' • ')}
                    </div>
                    <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.7)' }}>{COMPANY_INFO.timezone.label}</div>
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
                {COMPANY_INFO.phones.map((p) => p.display).join(', ')} ({COMPANY_INFO.timezone.short}) · {COMPANY_INFO.emails[0].display}
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

      <SocialSection />

      {/* 11. Homepage FAQs */}
      <FaqAccordion
        faqs={HOMEPAGE_FAQS}
        title="Get the Answers You Need to Move Forward."
      />
    </>
  );
}
