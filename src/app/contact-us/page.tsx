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

export const metadata: Metadata = {
  title: 'Contact Us | MedReg Consultancy LLP Ahmedabad',
  description: 'Connect with medical device regulatory consultants at MedReg Consultancy LLP, Titanium Business Park, Ahmedabad. Call +91 88664 61989 or email info@medreg.in for expert CDSCO, CE MDR, and FDA 510(k) guidance.',
  alternates: {
    canonical: 'https://medreg.in/contact-us/'
  }
};

export default function ContactUsPage() {
  return (
    <>
      {/* 1. Page Header Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="hero-badge">
              <Sparkles size={14} color="#79B8FF" />
              <span>Grow your business with us!</span>
            </div>
            <h1 className="page-banner-title">
              Contact MedReg Consultancy LLP
            </h1>
            <p className="page-banner-subtitle">
              Connect directly with our senior regulatory specialists to initiate or accelerate your medical device compliance journey.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Details & Form Grid */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '60px', alignItems: 'flex-start' }}>
            {/* Left: Direct Contact Information */}
            <div>
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">
                Start Your Certification Journey Today
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '36px' }}>
                Whether you need assistance with an upcoming CDSCO audit, an EU MDR technical documentation overhaul, an FDA 510(k) premarket notification, or global ISO 13485 implementation, our Ahmedabad-based team is ready to assist.
              </p>

              {/* Contact Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                {/* Address Card */}
                <div style={{ display: 'flex', gap: '16px', padding: '24px', backgroundColor: 'var(--slate-50)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '17px', color: 'var(--slate-900)', marginBottom: '6px' }}>
                      Corporate Headquarters
                    </h4>
                    <p style={{ fontSize: '14.5px', color: 'var(--slate-600)', lineHeight: 1.6 }}>
                      {COMPANY_INFO.address.line1}<br />
                      {COMPANY_INFO.address.line2}<br />
                      {COMPANY_INFO.address.area}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} &ndash; {COMPANY_INFO.address.pincode}, India.
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div style={{ display: 'flex', gap: '16px', padding: '24px', backgroundColor: 'var(--slate-50)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '17px', color: 'var(--slate-900)', marginBottom: '6px' }}>
                      Telephone & WhatsApp Direct Lines
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a href={`tel:${COMPANY_INFO.phones[0].value}`} style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary)' }}>
                        {COMPANY_INFO.phones[0].display}
                      </a>
                      <a href={`tel:${COMPANY_INFO.phones[1].value}`} style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary)' }}>
                        {COMPANY_INFO.phones[1].display}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div style={{ display: 'flex', gap: '16px', padding: '24px', backgroundColor: 'var(--slate-50)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '17px', color: 'var(--slate-900)', marginBottom: '6px' }}>
                      Official Electronic Mail
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a href={`mailto:${COMPANY_INFO.emails[0].value}`} style={{ fontSize: '15px', fontWeight: 600, color: 'var(--primary)' }}>
                        {COMPANY_INFO.emails[0].display} (General Queries)
                      </a>
                      <a href={`mailto:${COMPANY_INFO.emails[1].value}`} style={{ fontSize: '15px', fontWeight: 600, color: 'var(--primary)' }}>
                        {COMPANY_INFO.emails[1].display} (Business Development)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div style={{ display: 'flex', gap: '16px', padding: '24px', backgroundColor: 'var(--slate-50)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '17px', color: 'var(--slate-900)', marginBottom: '6px' }}>
                      Consulting Hours
                    </h4>
                    <p style={{ fontSize: '14.5px', color: 'var(--slate-600)' }}>
                      {COMPANY_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Lead Generation Card */}
            <div>
              <LeadForm title="Book Your Confidential Assessment" />
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
            />
          </div>
        </div>
      </section>
    </>
  );
}
