import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  FileText,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/medregData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, webPageJsonLd } from '@/lib/seo';

const PAGE_PATH = '/blogs/';
const PAGE_DESCRIPTION =
  'Practical guidance on CDSCO Medical Device Rules 2017, EU MDR transition and PSUR, US FDA 510(k) eSTAR and MDSAP from MedReg’s regulatory consultants.';

export const metadata: Metadata = pageMetadata({
  title: 'Medical Device Regulatory Insights & Guides',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function BlogsPage() {
  const articles = [
    {
      title: "Navigating CDSCO Medical Device Rules (MDR) 2017: Classification & Licensure Roadmap",
      category: "India Compliance",
      date: "October 2026",
      readTime: "7 min read",
      excerpt: "A practical guide to classifying Class A, B, C, and D medical devices in India, avoiding common SUGAM portal pitfalls, and accelerating manufacturing (MD-5/MD-9) and import (MD-15) approvals.",
      topics: ["CDSCO", "MDR 2017", "Form MD-5", "Form MD-15", "SUGAM"]
    },
    {
      title: "EU MDR 2017/745 Transition Timelines & Post-Market Surveillance (PSUR) Essentials",
      category: "European Union",
      date: "September 2026",
      readTime: "9 min read",
      excerpt: "How medical device manufacturers must structure Annex III Post-Market Surveillance plans, compile Periodic Safety Update Reports (PSUR), and integrate Clinical Evaluation Reports (CER) for Notified Bodies.",
      topics: ["EU MDR", "PSUR", "CER", "Article 86", "Notified Bodies"]
    },
    {
      title: "US FDA 510(k) Premarket Notifications: Common Refuse-to-Accept (RTA) Pitfalls & eSTAR Tips",
      category: "United States",
      date: "August 2026",
      readTime: "8 min read",
      excerpt: "Analyzing the most frequent causes of FDA 510(k) intake rejections, demonstrating Substantial Equivalence (SE), and formatting compliant electronic eSTAR submissions for CDRH.",
      topics: ["FDA 510(k)", "eSTAR", "Substantial Equivalence", "21 CFR 807"]
    },
    {
      title: "MDSAP Single Audit Program: Unlocking 5 Global Jurisdictions in a Single Regulatory Audit",
      category: "Global Strategy",
      date: "July 2026",
      readTime: "6 min read",
      excerpt: "Step-by-step preparation for satisfying the quality system requirements of USA (FDA), Canada (Health Canada), Brazil (ANVISA), Japan (MHLW), and Australia (TGA) in a unified audit cycle.",
      topics: ["MDSAP", "ISO 13485", "ANVISA", "Health Canada", "TGA"]
    }
  ];

  return (
    <>
      <JsonLd data={webPageJsonLd({ path: PAGE_PATH, name: 'MedReg Regulatory Insights', description: PAGE_DESCRIPTION, type: 'CollectionPage' })} />
      {/* 1. Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'Regulatory Insights', path: PAGE_PATH }]} />
            <div className="hero-badge">
              <Sparkles size={14} color="#79B8FF" />
              <span>Grow your business with us!</span>
            </div>
            <h1 className="page-banner-title">
              Regulatory Knowledge Hub & Insights
            </h1>
            <p className="page-banner-subtitle">
              Expert commentary, compliance breakdowns, and practical guidance on global medical device regulations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Blog Posts Grid */}
      <section className="section-pad" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="center-content section-head" style={{ marginBottom: '48px' }}>
            <span className="section-label">Authoritative Analysis</span>
            <h2 className="section-title text-center">Latest Regulatory Insights</h2>
            <p className="section-subtitle text-center">
              Stay ahead of shifting statutory deadlines, new guidance documents, and international audit benchmarks.
            </p>
          </div>

          <div className="grid-2">
            {articles.map((art, idx) => (
              <article key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="badge badge-primary">{art.category}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--slate-500)' }}>
                    <Calendar size={14} />
                    <span>{art.date}</span>
                    <span>&bull;</span>
                    <Clock size={14} />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '20px', color: 'var(--slate-900)', marginBottom: '12px', lineHeight: 1.35 }}>
                  {art.title}
                </h3>

                <p style={{ fontSize: '14.5px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '20px', flex: 1 }}>
                  {art.excerpt}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {art.topics.map((t, tidx) => (
                    <span key={tidx} style={{ fontSize: '12px', backgroundColor: 'var(--slate-100)', color: 'var(--slate-600)', padding: '3px 8px', borderRadius: '4px' }}>
                      #{t}
                    </span>
                  ))}
                </div>

                <div style={{ paddingTop: '14px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link href="/contact-us/" className="blog-topic-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: 'var(--primary)' }}>
                    <span>Discuss This Topic With Us</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Newsletter / Direct Advisory Box */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--slate-50)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ backgroundColor: 'var(--navy-900)', borderRadius: 'var(--radius-xl)', padding: '48px 40px', color: 'var(--white)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '26px', color: 'var(--white)', marginBottom: '12px' }}>
              Need Specialized Dossier or Regulatory Review?
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 24px' }}>
              Our senior regulatory directors in Ahmedabad provide tailored assessments for medical device companies preparing for submission or facing regulatory audits.
            </p>
            <Link href="/contact-us/" className="btn btn-gold">
              <span>Book A 30-Minute Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
