import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Compass,
  Target,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Building,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import StatsCounter from '@/components/StatsCounter';
import CertificationsRow from '@/components/CertificationsRow';
import {
  COMPANY_INFO,
  OFFICE_GALLERY,
  WHY_CHOOSE_MEDREG
} from '@/data/medregData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, webPageJsonLd } from '@/lib/seo';

const PAGE_PATH = '/about-us/';
const PAGE_DESCRIPTION =
  'Founded in 2011 in Ahmedabad, MedReg helps device and IVD makers win CDSCO, CE (MDR/IVDR), US FDA, MDSAP and ISO 13485 approvals. 2,000+ projects.';

export const metadata: Metadata = pageMetadata({
  title: 'About Us – Device Regulatory Experts Since 2011',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ path: PAGE_PATH, name: 'About MedReg Consultancy LLP', description: PAGE_DESCRIPTION, type: 'AboutPage' })} />
      {/* 1. Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'About Us', path: PAGE_PATH }]} />
            <div className="hero-badge">
              <Sparkles size={14} color="#79B8FF" />
              <span>Grow your business with us!</span>
            </div>
            <h1 className="page-banner-title">
              About MedReg Consultancy LLP
            </h1>
            <p className="page-banner-subtitle">
              Empowering healthcare innovators and medical device manufacturers with end-to-end regulatory solutions since 2011.
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

      {/* 2. Story Section with Team Cross Shape */}
      <section className="section-pad" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="split-grid split-grid--wide-left">
            <div>
              <span className="section-label">Our Journey & Foundation</span>
              <h2 className="section-title">
                15+ Years of Dedicated Medical Device Regulatory Excellence
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: '18px' }}>
                MedReg Consultancy was founded with one aim in mind &ndash; to empower medical device manufacturers by providing uncompromising regulatory solutions. Since 2011, MedReg has served numerous clients across India, Europe, the USA, and the UK.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: '18px' }}>
                We have helped medical device industries in obtaining various certifications and licenses, such as <strong>CE Certification (MDR/IVDR)</strong>, <strong>UK MDR</strong>, <strong>ISO 13485:2016 Certification</strong>, <strong>ICMED</strong>, <strong>MDSAP</strong>, <strong>USFDA Listing</strong>, <strong>Country Registration</strong>, <strong>UL Certification</strong>, <strong>USFDA 510(k)</strong>, and <strong>CDSCO licenses MD-05, MD-06, MD-09, MD-10, MD-15</strong>, Free Sale Certificates, and PMA.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: '28px' }}>
                No matter the size of your business, our team of experts with deep industry knowledge will provide you with the knowledge, guidance, and support for getting the proper regulatory certifications so you can sell your products in your desired geographic location as fast as possible. We define a regulatory pathway that suits your business and deliver cost-effective strategies for your specific products.
              </p>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Link href="/contact-us/" className="btn btn-primary">
                  <span>Contact Our Consultants</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/team/" className="btn btn-secondary">
                  <span>Meet Our Experts</span>
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', maxWidth: '440px', width: '100%' }}>
                <Image
                  src="/assets/home_about.png"
                  alt="MedReg Regulatory Consulting Team"
                  width={500}
                  height={500}
                  sizes="(max-width: 992px) 90vw, 440px"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    backgroundColor: 'var(--navy-900)',
                    color: 'var(--white)',
                    padding: '16px 22px',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-xl)',
                    textAlign: 'center',
                    border: '1.5px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div style={{ fontSize: '30px', fontWeight: 800, color: '#79B8FF', lineHeight: 1 }}>
                    15+
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' }}>
                    Years of Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision, Mission & Values Grid */}
      <section className="section-pad" style={{ backgroundColor: 'var(--slate-50)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="center-content section-head" style={{ marginBottom: '48px' }}>
            <span className="section-label">Guiding Principles</span>
            <h2 className="section-title text-center">Our Vision, Mission & Values</h2>
            <p className="section-subtitle text-center">
              The strategic pillars that direct our multidisciplinary regulatory engineering and consulting approach.
            </p>
          </div>

          <div className="grid-3">
            {/* Vision */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '20px' }}>
                <Compass size={26} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '14px' }}>
                Our Vision
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--slate-600)', lineHeight: 1.65 }}>
                To become a multinational consultancy firm from India, helping clients from India and around the world simplify their journey through ever-evolving regulatory landscapes. We aim to shape the future of healthcare access through strategic insight, collaborative partnerships, and an unwavering focus on global standards.
              </p>
            </div>

            {/* Mission */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '20px' }}>
                <Target size={26} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '14px' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--slate-600)', lineHeight: 1.65 }}>
                To empower medical device manufacturers, healthcare innovators, and life science companies to bring their products to global markets with the right regulatory certificates. By delivering expert guidance and end-to-end support throughout the complex process of medical certification, we ensure that safe, effective, and innovative medical technologies reach the patients.
              </p>
            </div>

            {/* Values */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '20px' }}>
                <Sparkles size={26} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '14px' }}>
                Our Values
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--slate-600)', lineHeight: 1.65 }}>
                We are quick learners and constantly adapt to new regulatory rules and developments in the medical industry around the world. With years of experience, our multidisciplinary team brings broad visualisation to every project by understanding the technical requirements and the strategic impact of regulatory decisions, offering a well-rounded approach combining engineering, clinical, and regulatory expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Statistics */}
      <StatsCounter />

      {/* 5. Regulatory Certification Badges */}
      <CertificationsRow />

      {/* 6. Authentic Corporate Gallery (Titanium Business Park, Ahmedabad) */}
      <section className="section-pad" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="center-content section-head" style={{ marginBottom: '44px' }}>
            <span className="section-label">State-of-the-Art Infrastructure</span>
            <h2 className="section-title text-center">Gallery — Our Corporate Headquarters</h2>
            <p className="section-subtitle text-center">
              Inside MedReg’s regulatory documentation suites and executive conference facilities at Titanium Business Park, Ahmedabad.
            </p>
          </div>

          <div className="grid-3">
            {OFFICE_GALLERY.map((item, idx) => (
              <div key={idx} className="card gallery-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 380px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--slate-900)', marginBottom: '6px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--slate-500)' }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
