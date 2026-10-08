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

export const metadata: Metadata = {
  title: 'WHX Dubai 2026 | Meet MedReg Regulatory Team at Your Booth',
  description: 'Meet MedReg Consultancy LLP at WHX (World Health Expo) Dubai 2026. Schedule a confidential regulatory session for CE MDR, US FDA 510(k), MDSAP, ISO 13485, and global country registrations.',
  alternates: {
    canonical: 'https://medreg.in/landing-page/'
  }
};

export default function WhxDubaiLandingPage() {
  const expoOfferings = [
    {
      title: "CE Certification (EU MDR / IVDR)",
      desc: "Full CE certification support covering MDR 2017/745, IVDR 2017/746, Annex II/III technical documentation, and PSUR compliance.",
      badge: "European Union"
    },
    {
      title: "USFDA 510(k) & US Agent",
      desc: "510(k) file compilation & eSTAR submission, official US Agent representation, FDA Establishment Registration & listing.",
      badge: "United States"
    },
    {
      title: "Complete MDSAP Support",
      desc: "End-to-end MDSAP program support—from gap analysis and documentation to mock audits and non-conformance (NC) closure across 5 jurisdictions.",
      badge: "Unified Audit"
    },
    {
      title: "ISO 13485:2016 Implementation",
      desc: "Complete quality management system development, internal audit training, and Stage 1 / Stage 2 registrar audit certification support.",
      badge: "Global Standard"
    },
    {
      title: "BEP & BER Biological Safety Package",
      desc: "Strategic biological evaluation reports with scientific test waiver justifications to drastically cut testing expenses and speed market approval.",
      badge: "Cost Saver"
    },
    {
      title: "Global Country Registrations",
      desc: "Targeted product approvals across ANVISA (Brazil), TGA (Australia), Health Canada, SAHPRA (South Africa), and SFDA (Saudi Arabia / Middle East).",
      badge: "Emerging Markets"
    }
  ];

  return (
    <>
      {/* 1. Page Header Banner */}
      <section className="page-banner" style={{ background: 'linear-gradient(135deg, #0A2540 0%, #153E75 100%)' }}>
        <div className="container">
          <div className="page-banner-content">
            <div className="hero-badge">
              <Sparkles size={14} color="#79B8FF" />
              <span>World Health Expo &bull; Dubai 2026</span>
            </div>
            <h1 className="page-banner-title" style={{ fontSize: 'clamp(32px, 5vw, 50px)' }}>
              Meet The Team At WHX Dubai 2026
            </h1>
            <p className="page-banner-subtitle">
              &ldquo;Your Compliance, Our Expertise&rdquo; &ndash; Let’s meet at your booth during WHX to discuss your global medical device licensing roadmap.
            </p>

            <div style={{ display: 'flex', gap: '24px', marginTop: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#79B8FF', fontWeight: 600 }}>
                <MapPin size={18} />
                <span>Dubai World Trade Centre, UAE</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFF' }}>
                <Calendar size={18} />
                <span>WHX Dubai 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Expo Feature Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '50px', alignItems: 'center' }}>
            {/* Left: Dubai Expo Visual Flyer */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
              <Image
                src="/assets/Blue-And-White-Modern-Student-Study-Visa-Services-Instagram-Post-819x1024.jpg"
                alt="MedReg at WHX Dubai 2026"
                width={500}
                height={625}
                priority
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Right: Booking Form */}
            <div>
              <span className="section-label section-label-gold">Booth Meeting Reservation</span>
              <h2 className="section-title">
                Book A Private Regulatory Meeting At Your Booth
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '28px' }}>
                Our senior consultants will be on the ground meeting medical device manufacturers at WHX Dubai. Schedule a focused 30-minute consultation directly at your booth to evaluate CE MDR transition strategies, CDSCO import pathways, or US FDA 510(k) submissions.
              </p>

              <LeadForm title="Reserve Your Booth Meeting" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Expo Offerings Grid */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--slate-50)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="center-content" style={{ marginBottom: '44px' }}>
            <span className="section-label">Core Capabilities Showcase</span>
            <h2 className="section-title text-center">Services We Are Presenting At WHX</h2>
            <p className="section-subtitle text-center">
              Specialized turnkey regulatory packages designed for enterprise manufacturers exhibiting at WHX Dubai.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
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
