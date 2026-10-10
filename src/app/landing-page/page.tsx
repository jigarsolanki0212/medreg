import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import CertificationsRow from '@/components/CertificationsRow';
import { COMPANY_INFO } from '@/data/medregData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, webPageJsonLd } from '@/lib/seo';

const PAGE_PATH = '/landing-page/';
const PAGE_DESCRIPTION =
  'Meet MedReg at WHX Dubai 2026. Book a private 30-minute session on CE MDR, US FDA 510(k), MDSAP, ISO 13485 and global device registrations.';

export const metadata: Metadata = pageMetadata({
  title: 'Meet Us at WHX Dubai 2026 – Book a Booth Meeting',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function WhxDubaiLandingPage() {
  const expoOfferings = [
    { title: "CE Marking", desc: "CE marking support covering MDR, IVDR, technical documentation, PSUR preparation, compliance.", badge: "Europe" },
    { title: "USFDA 510k", desc: "CF preparation & submission, US Agent service, Establishment registration & complete compliance support.", badge: "USA" },
    { title: "MDSAP", desc: "Complete MDSAP support—from docs to audits and NC closure.", badge: "Global" },
    { title: "ISO 13485", desc: "ISO 13485 implementation for a compliant medical device QMS.", badge: "Global" },
    { title: "BEP & BER", desc: "BEP & BER biological safety package with test waiver reports to cut testing costs, speed approvals, and shorten submission timelines.", badge: "Global" },
    { title: "Country registration", desc: "Global registrations: ANVISA, TGA, Health Canada, SAHPRA, SFDA", badge: "Global" }
  ];

  return (
    <>
      <JsonLd data={webPageJsonLd({ path: PAGE_PATH, name: 'MedReg at WHX Dubai 2026', description: PAGE_DESCRIPTION, type: 'WebPage' })} />
      {/* 1. Page Header Banner */}
      <section className="page-banner" style={{ background: 'linear-gradient(135deg, #0A2540 0%, #153E75 100%)' }}>
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'WHX Dubai 2026', path: PAGE_PATH }]} />
            <div className="hero-badge">
              <Sparkles size={14} color="#79B8FF" />
              <span>World Health Expo &bull; Dubai 2026</span>
            </div>
            <h1 className="page-banner-title" style={{ fontSize: 'clamp(32px, 5vw, 50px)' }}>
              Meet The Team At WHX Dubai 2026
            </h1>
            <p className="page-banner-subtitle">
              &ldquo;Your Compliance, Our Expertise&rdquo;
            </p>

            <div style={{ display: 'flex', gap: '24px', marginTop: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFF' }}>
                <Calendar size={18} />
                <span>WHX Dubai 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Expo Feature Section */}
      <section className="section-pad" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="split-grid split-grid--wide-right">
            {/* Left: Dubai Expo Visual Flyer */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
              <Image
                src="/assets/Blue-And-White-Modern-Student-Study-Visa-Services-Instagram-Post-819x1024.jpg"
                alt="MedReg at WHX Dubai 2026"
                width={500}
                height={625}
                priority
                sizes="(max-width: 992px) 92vw, 520px"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Right: Booking Form */}
            <div>
              <h2 className="section-title">
                About Us
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '28px' }}>
                MedReg is a medical device regulatory consultancy, founded with one aim in mind – to empower medical device manufacturers by providing regulatory solutions. MedReg has served numerous clients across Europe, the USA, India and the UK. We have supported medical device manufacturers in obtaining approvals, certificates and licences from the relevant authorities, Notified Bodies and certification bodies, such as CE marking, UK MDR, ISO 13485:2016 certification, ICMED, MDSAP, US FDA establishment registration and listing, US FDA 510(k) clearance, PMA, UL certification, CDSCO licences MD-05, MD-06, MD-09, MD-10 and MD-15, Free Sale Certificates and various country registrations.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '28px' }}>
                No matter the size of your business, our team of experts with deep industry knowledge will provide you with the knowledge, guidance, and support to meet the regulatory requirements of your target markets, so you can sell your products in your desired geographic location as fast as possible. We define a regulatory pathway that suits your business and deliver cost-effective strategies for your specific products.
              </p>

              <LeadForm title="Let&apos;s Decode The Regulation" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Expo Offerings Grid */}
      <section className="section-pad" style={{ backgroundColor: 'var(--slate-50)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="center-content section-head" style={{ marginBottom: '44px' }}>
            <h2 className="section-title text-center">Our Services</h2>
            <p className="section-subtitle text-center">
              &ldquo;Your Compliance, Our Expertise&rdquo;
            </p>
          </div>

          <div className="grid-3">
            {expoOfferings.map((item, idx) => (
              <div key={idx} className="card">
                <span className="badge badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '14px' }}>
                  {item.badge}
                </span>
                <h3 style={{ fontSize: '19px', color: 'var(--slate-900)', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--slate-600)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Certifications Row */}
      <CertificationsRow />
    </>
  );
}
