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
import WhyChooseSection from '@/components/WhyChooseSection';
import {
  COMPANY_INFO,
  OFFICE_GALLERY,
  STATS
} from '@/data/medregData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, webPageJsonLd } from '@/lib/seo';

const PAGE_PATH = '/about-us/';
const PAGE_DESCRIPTION =
  'MedReg is a medical device regulatory consultancy in Ahmedabad supporting CE marking (EU MDR/IVDR), US FDA, MDSAP, ISO 13485 and CDSCO compliance. 2k+ projects.';

export const metadata: Metadata = pageMetadata({
  title: 'About Us – Medical Device Regulatory Consultancy',
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
              About us
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

      {/* 2. Story Section with Team Cross Shape */}
      <section className="section-pad" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="split-grid split-grid--wide-left">
            <div>
              <h2 className="section-title">
                About MedReg Consultancy
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: '18px' }}>
                MedReg is a medical device regulatory consultancy, founded with one aim in mind – to empower medical device manufacturers by providing regulatory solutions. MedReg has served numerous clients across Europe, the USA, India and the UK. We have supported medical device manufacturers in obtaining approvals, certificates and licences from the relevant authorities, Notified Bodies and certification bodies, such as CE marking, UK MDR, ISO 13485:2016 certification, ICMED, MDSAP, US FDA establishment registration and listing, US FDA 510(k) clearance, PMA, UL certification, CDSCO licences MD-05, MD-06, MD-09, MD-10 and MD-15, Free Sale Certificates and various country registrations.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: '28px' }}>
                No matter the size of your business, our team of experts with deep industry knowledge will provide you with the knowledge, guidance, and support to meet the regulatory requirements of your target markets, so you can sell your products in your desired geographic location as fast as possible. We define a regulatory pathway that suits your business and deliver cost-effective strategies for your specific products.
              </p>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Link href="/contact-us/" className="btn btn-primary">
                  <span>Contact Us</span>
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
                    {STATS[0].value}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' }}>
                    {STATS[0].label}
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
            <h2 className="section-title text-center">Our Vision, Mission & Value</h2>
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
                To empower medical device manufacturers, healthcare innovators, and life science companies to bring their products to global markets with the right regulatory approvals. By delivering expert guidance and end-to-end consultancy throughout the complex regulatory process, we help safe, effective, and innovative medical technologies reach patients.
              </p>
            </div>

            {/* Values */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '20px' }}>
                <Sparkles size={26} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '14px' }}>
                Our Value
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--slate-600)', lineHeight: 1.65 }}>
                We are quick learners and constantly adapt to new regulatory rules and developments in the medical industry around the world. With years of experience, our multidisciplinary team brings broad visualisation to every project by understanding the technical requirements and the strategic impact of regulatory decisions and offering a well-rounded approach that combines engineering, clinical, and regulatory expertise. We are committed to adhering to global compliance standards and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Statistics */}
      <StatsCounter />

      <WhyChooseSection />

      {/* 5. Regulatory Certification Badges */}
      <CertificationsRow />

      {/* 6. Authentic Corporate Gallery (Titanium Business Park, Ahmedabad) */}
      <section className="section-pad" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="center-content section-head" style={{ marginBottom: '44px' }}>
            <h2 className="section-title text-center">Gallery</h2>
          </div>

          <div className="grid-3">
            {OFFICE_GALLERY.slice(0, 3).map((item, idx) => (
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
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/gallery/" className="btn btn-primary">
              <span>View Full Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
