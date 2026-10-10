import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ShieldCheck,
  Building,
  CheckCircle2
} from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import { COMPANY_INFO } from '@/data/medregData';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, webPageJsonLd } from '@/lib/seo';

const PAGE_PATH = '/contact-us/';
const PAGE_DESCRIPTION =
  'Talk to MedReg’s medical device regulatory consultants in Ahmedabad. Call +91 88664 61989, WhatsApp or email info@medreg.in for a free consultation.';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us – Medical Device Consultants, Ahmedabad',
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function ContactUsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ path: PAGE_PATH, name: 'Contact MedReg Consultancy LLP', description: PAGE_DESCRIPTION, type: 'ContactPage' })} />
      {/* 1. Page Header Banner */}
      <section className="page-banner svc-banner">
        <Image src="/assets/placeholders/contact-banner.jpg" alt="" fill priority sizes="100vw" className="page-banner-bg" />
        <div className="container">
          <div className="page-banner-content">
            <Breadcrumbs items={[{ name: 'Contact Us', path: PAGE_PATH }]} />
            <div className="hero-badge">
              <Sparkles size={14} color="#79B8FF" />
              <span>Grow your business with us!</span>
            </div>
            <h1 className="page-banner-title">
              Contact Us
            </h1>
            <p className="page-banner-subtitle">
              Request a consultation with our medical device regulatory consultants for Europe, the USA, other global markets and India.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Details & Form Grid */}
      <section className="section-pad" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="split-grid split-grid--wide-right split-grid--top">
            {/* Left: Direct Contact Information */}
            <div>
              <h2 className="section-title">
                Request a Regulatory Consultation
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '36px' }}>
                Tell us about your device and target markets, and our regulatory experts will outline the pathway, documentation and next steps. For training bookings, exhibition meetings or job applications, use the dedicated forms on the <Link href="/training/#book" style={{ color: 'var(--primary)', fontWeight: 600 }}>Training</Link>, <Link href="/exhibitions/#meet" style={{ color: 'var(--primary)', fontWeight: 600 }}>Exhibitions</Link> and <Link href="/careers/#apply" style={{ color: 'var(--primary)', fontWeight: 600 }}>Careers</Link> pages.
              </p>

              {/* Contact Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                {/* Address Card */}
                <div className="contact-card">
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', color: 'var(--slate-900)', marginBottom: '6px' }}>
                      Address
                    </h3>
                    <p style={{ fontSize: '14.5px', color: 'var(--slate-600)', lineHeight: 1.6 }}>
                      {COMPANY_INFO.address.line1}<br />
                      {COMPANY_INFO.address.line2}<br />
                      {COMPANY_INFO.address.area}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} &ndash; {COMPANY_INFO.address.pincode}, India.
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="contact-card">
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', color: 'var(--slate-900)', marginBottom: '6px' }}>
                      Phone
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a href={`tel:${COMPANY_INFO.phones[0].value}`} style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary)' }}>
                        {COMPANY_INFO.phones[0].display}
                      </a>
                      <a href={`tel:${COMPANY_INFO.phones[1].value}`} style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary)' }}>
                        {COMPANY_INFO.phones[1].display}
                      </a>
                      <span style={{ fontSize: '13.5px', color: 'var(--slate-500)' }}>
                        Time zone: {COMPANY_INFO.timezone.label}
                      </span>
                      {COMPANY_INFO.timezone.callingHours && (
                        <span style={{ fontSize: '13.5px', color: 'var(--slate-500)' }}>Calling hours: {COMPANY_INFO.timezone.callingHours}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="contact-card">
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', color: 'var(--slate-900)', marginBottom: '6px' }}>
                      Email
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a href={`mailto:${COMPANY_INFO.emails[0].value}`} style={{ fontSize: '15px', fontWeight: 600, color: 'var(--primary)' }}>
                        {COMPANY_INFO.emails[0].display}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Lead Generation Card */}
            <div>
              <LeadForm title="Request a Consultation" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Office Location Map Section */}
      <section style={{ padding: '0 0 80px 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ padding: '20px 24px', backgroundColor: '#0B1E38', color: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={22} color="var(--accent)" />
                <span style={{ fontSize: '15px', fontWeight: 600 }}>
                  Titanium Business Park, Behind Divya Bhaskar Press, Makarba, Ahmedabad, Gujarat 380051
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Titanium+Business+Park,+Makarba,+Ahmedabad,+Gujarat+380051"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}
              >
                Open in Google Maps ↗
              </a>
            </div>
            <iframe
              title="MedReg Headquarters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.635848834958!2d72.49755437604313!3d22.99960247919246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b384c264aa7%3A0xb3ba86b4efb5efbc!2sTitanium%20Business%20Park!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block', minHeight: '380px', backgroundColor: 'var(--slate-100)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
