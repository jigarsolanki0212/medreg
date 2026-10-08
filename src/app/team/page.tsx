import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Users,
  ShieldCheck,
  CheckCircle,
  Award,
  Sparkles,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import StatsCounter from '@/components/StatsCounter';
import { COMPANY_INFO } from '@/data/medregData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, webPageJsonLd } from '@/lib/seo';

const PAGE_PATH = '/team/';
const PAGE_DESCRIPTION =
  'Meet MedReg’s regulatory affairs directors, biomedical dossier engineers, ISO 13485 and MDSAP lead auditors, and clinical evaluators based in Ahmedabad, India.';

export const metadata: Metadata = pageMetadata({
  title: 'Regulatory Affairs Team & ISO 13485 Lead Auditors',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function TeamPage() {
  const teamSpecialties = [
    {
      title: "Senior Regulatory Affairs Directors",
      role: "Strategic Submissions & Liaison",
      desc: "Specializing in CDSCO CLA/SLA licensing, US FDA 510(k) premarket notifications, and EU Notified Body conformity assessment routes.",
      icon: Award
    },
    {
      title: "Biomedical & Technical Dossier Engineers",
      role: "Design Controls & Verification",
      desc: "Expert compilers of Technical Master Files (Annex II/III MDR), Device Master Files (DMF), and IMDRF STED dossiers for active, implantable, and disposable devices.",
      icon: ShieldCheck
    },
    {
      title: "ISO 13485:2016 & MDSAP Lead Auditors",
      role: "Quality Management Systems",
      desc: "Certified lead auditors performing rigorous mock inspections, QSIT simulations, internal audits, and root-cause CAPA resolutions.",
      icon: CheckCircle
    },
    {
      title: "Clinical Evaluators & Toxicologists",
      role: "CER, BEP & BER Documentation",
      desc: "Medical writers and toxicological safety experts drafting Clinical Evaluation Reports (CER) and Biological Evaluation Reports (BER) under ISO 10993.",
      icon: Users
    }
  ];

  return (
    <>
      <JsonLd data={webPageJsonLd({ path: PAGE_PATH, name: 'MedReg Regulatory Team', description: PAGE_DESCRIPTION, type: 'WebPage' })} />
      {/* 1. Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'Our Team', path: PAGE_PATH }]} />
            <div className="hero-badge">
              <Sparkles size={14} color="#79B8FF" />
              <span>Grow your business with us!</span>
            </div>
            <h1 className="page-banner-title">
              Meet Our Team
            </h1>
            <p className="page-banner-subtitle">
              A dedicated team of biomedical engineers, certified quality auditors, and senior regulatory strategists.
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

      {/* 2. Team Overview & Photo */}
      <section className="section-pad" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="split-grid">
            <div>
              <span className="section-label">Multidisciplinary Expertise</span>
              <h2 className="section-title">
                The Regulatory Minds Behind 2,000+ Successful Approvals
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: '20px' }}>
                At MedReg Consultancy, our strength lies in our collaborative team. We combine biomedical engineering acumen, deep statutory understanding of the Indian Drugs & Cosmetics Act, European MDR regulations, and US FDA 21 CFR guidelines to provide pragmatic, audit-proof solutions.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: '28px' }}>
                Unlike generic consultancies, every member of our team is specialized in medical devices and IVDs. From surgical disposables and orthopaedic implants to high-risk Class C and D devices, our specialists work closely with your engineers to translate complex regulatory mandates into clear action items.
              </p>
              <Link href="/contact-us/" className="btn btn-primary">
                <span>Consult With Our Experts</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', maxWidth: '480px', width: '100%', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                <Image
                  src="/assets/home_about.png"
                  alt="MedReg Full Consulting Team"
                  width={520}
                  height={520}
                  sizes="(max-width: 992px) 90vw, 480px"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team Divisions Grid */}
      <section className="section-pad" style={{ backgroundColor: 'var(--slate-50)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="center-content section-head" style={{ marginBottom: '48px' }}>
            <span className="section-label">Consulting Practice Areas</span>
            <h2 className="section-title text-center">Our Specialized Advisory Divisions</h2>
            <p className="section-subtitle text-center">
              Structured to support manufacturers at every milestone from initial design controls to post-market surveillance.
            </p>
          </div>

          <div className="grid-2">
            {teamSpecialties.map((spec, idx) => {
              const IconComp = spec.icon;
              return (
                <div key={idx} className="card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                      <IconComp size={26} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '19px', color: 'var(--slate-900)' }}>{spec.title}</h3>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)' }}>{spec.role}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '15px', color: 'var(--slate-600)', lineHeight: 1.6 }}>
                    {spec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Statistics */}
      <StatsCounter />
    </>
  );
}
