'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';

interface FormErrors {
  fullName?: string;
  email?: string;
  mobile?: string;
  message?: string;
  general?: string;
}

export default function LeadForm({ title = "Accelerate Your Journey!", defaultService = 'Europe CE MDR / IVDR' }: { title?: string; defaultService?: string }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    serviceInterest: defaultService,
    message: '',
    // Honeypot field to trap malicious scrapers and spam bots
    website_hp: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastSubmittedTime, setLastSubmittedTime] = useState<number>(0);

  // Validation function covering all negative/positive edge cases
  const validateForm = (): boolean => {
    const errs: FormErrors = {};
    const trimmedName = formData.fullName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMobile = formData.mobile.trim();

    // 1. Full Name Validation
    if (!trimmedName) {
      errs.fullName = 'Please enter your full name.';
    } else if (trimmedName.length < 2) {
      errs.fullName = 'Full name must contain at least 2 characters.';
    } else if (/[<>{}\\\/\[\]]/.test(trimmedName)) {
      errs.fullName = 'Special script characters are not permitted.';
    }

    // 2. Email Validation (RFC compliant pattern)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail) {
      errs.email = 'Please enter your work email address.';
    } else if (!emailPattern.test(trimmedEmail)) {
      errs.email = 'Please provide a valid email (e.g. name@company.com).';
    }

    // 3. Mobile Number Validation
    // Strip permissible decorators: +, spaces, dashes, parens
    const digitsOnly = trimmedMobile.replace(/[\s\+\-\(\)]/g, '');
    if (!trimmedMobile) {
      errs.mobile = 'Please enter your phone or WhatsApp number.';
    } else if (/[a-zA-Z]/.test(trimmedMobile)) {
      errs.mobile = 'Phone number cannot contain alphabetic letters.';
    } else if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      errs.mobile = 'Phone number must contain between 7 and 15 digits.';
    }

    // 4. Message sanitation check
    if (formData.message && /[<>{}\\\/]/.test(formData.message)) {
      errs.message = 'Please remove special HTML or script characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: if bot filled in the hidden field, silently reject
    if (formData.website_hp) {
      setSubmitted(true);
      return;
    }

    // Rate limiting: prevent double-clicks within 6 seconds
    const now = Date.now();
    if (now - lastSubmittedTime < 6000) {
      setErrors({ general: 'Please wait a few seconds before submitting again.' });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, page: typeof window !== 'undefined' ? window.location.pathname : '' }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setErrors({ general: data.error || 'We could not send your request. Please call or email us directly.' });
        return;
      }
      setSubmitted(true);
      setLastSubmittedTime(Date.now());
      // Conversion event for GA4 (only fires when analytics is configured)
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.('event', 'generate_lead', { form_location: window.location.pathname, service: formData.serviceInterest });
    } catch {
      setErrors({ general: 'Network error. Please check your connection, or call/email us directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card" id="consultation-form-card">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 12px',
          borderRadius: '999px',
          backgroundColor: 'var(--primary-light)',
          color: 'var(--primary)',
          fontSize: '12.5px',
          fontWeight: 700,
          marginBottom: '10px'
        }}>
          <ShieldCheck size={14} />
          <span>Confidential & Audit-Proof</span>
        </div>
        <h3 style={{ fontSize: 'clamp(20px, 4vw, 23px)', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '6px' }}>
          {title}
        </h3>
        <p style={{ fontSize: '13.5px', color: 'var(--slate-600)', lineHeight: 1.5 }}>
          Direct confidential advisory with senior CDSCO, CE MDR, and FDA specialists.
        </p>
      </div>

      {submitted ? (
        <div role="status" style={{ textAlign: 'center', padding: '36px 12px', animation: 'fadeInUp 0.4s ease' }} id="form-success-banner">
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#DCFCE7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            color: '#16A34A'
          }}>
            <CheckCircle2 size={36} />
          </div>
          <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '8px' }}>
            Consultation Request Received!
          </h4>
          <p style={{ fontSize: '14.5px', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '24px' }}>
            Thank you, <strong>{formData.fullName}</strong>. Your regulatory inquiry has been registered. Our senior specialist in Ahmedabad will review your device specifications and respond within 24 business hours.
          </p>
          <button
            type="button"
            id="form-reset-btn"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                mobile: '',
                serviceInterest: defaultService,
                message: '',
                website_hp: ''
              });
              setErrors({});
            }}
            className="btn btn-secondary btn-sm"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {errors.general && (
            <div role="alert" style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              padding: '10px 14px',
              backgroundColor: '#FEF2F2',
              color: '#DC2626',
              borderRadius: 'var(--radius-md)',
              fontSize: '13.5px',
              marginBottom: '16px',
              border: '1px solid #FECACA'
            }}>
              <AlertCircle size={16} style={{ flexShrink: 0 }} />
              <span>
                {errors.general}{' '}
                <a href="tel:+918866461989" style={{ fontWeight: 700, textDecoration: 'underline' }}>+91 88664 61989</a>
                {' · '}
                <a href="mailto:info@medreg.in" style={{ fontWeight: 700, textDecoration: 'underline' }}>info@medreg.in</a>
              </span>
            </div>
          )}

          {/* Hidden Honeypot Field */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label htmlFor="website_hp">Leave this empty</label>
            <input
              type="text"
              id="website_hp"
              name="website_hp"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website_hp}
              onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
            />
          </div>

          {/* 1. Full Name */}
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="name"
              autoComplete="name"
              placeholder="e.g. Dr. Rajesh Sharma"
              className="form-input"
              style={errors.fullName ? { borderColor: '#DC2626', backgroundColor: '#FEF2F2' } : {}}
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: undefined });
              }}
              aria-invalid={!!errors.fullName}
              maxLength={100}
            />
            {errors.fullName && (
              <span className="field-error-text" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#DC2626', fontSize: '12px', marginTop: '4px' }}>
                <AlertCircle size={12} /> {errors.fullName}
              </span>
            )}
          </div>

          {/* 2. Email Address */}
          <div className="form-group">
            <label className="form-label" htmlFor="email">Work Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              placeholder="regulatory@yourcompany.com"
              className="form-input"
              style={errors.email ? { borderColor: '#DC2626', backgroundColor: '#FEF2F2' } : {}}
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              aria-invalid={!!errors.email}
              maxLength={120}
            />
            {errors.email && (
              <span className="field-error-text" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#DC2626', fontSize: '12px', marginTop: '4px' }}>
                <AlertCircle size={12} /> {errors.email}
              </span>
            )}
          </div>

          {/* 3. Mobile Number */}
          <div className="form-group">
            <label className="form-label" htmlFor="mobile">Mobile / WhatsApp Number *</label>
            <input
              type="tel"
              id="mobile"
              name="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+91 98765 43210"
              className="form-input"
              style={errors.mobile ? { borderColor: '#DC2626', backgroundColor: '#FEF2F2' } : {}}
              value={formData.mobile}
              onChange={(e) => {
                setFormData({ ...formData, mobile: e.target.value });
                if (errors.mobile) setErrors({ ...errors, mobile: undefined });
              }}
              aria-invalid={!!errors.mobile}
              maxLength={25}
            />
            {errors.mobile && (
              <span className="field-error-text" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#DC2626', fontSize: '12px', marginTop: '4px' }}>
                <AlertCircle size={12} /> {errors.mobile}
              </span>
            )}
          </div>

          {/* 4. Regulatory Scope */}
          <div className="form-group">
            <label className="form-label" htmlFor="serviceInterest">Target Regulatory Jurisdiction *</label>
            <select
              id="serviceInterest"
              className="form-select"
              value={formData.serviceInterest}
              onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
            >
              <option value="Europe CE MDR / IVDR">Europe — CE Marking under EU MDR 2017/745 & Technical Files</option>
              <option value="US FDA 510(k)">USA — US FDA 510(k), Registration & QMSR</option>
              <option value="MDSAP & ISO 13485">Other Global Markets — MDSAP & ISO 13485:2016 QMS</option>
              <option value="CDSCO India Compliance">India — CDSCO Manufacturing & Import Licensing</option>
              <option value="Clinical Trials / BEP">Clinical Evaluation / BEP & BER Reports</option>
              <option value="Multi-Market Entry">Multi-Market Global Strategy</option>
            </select>
          </div>

          {/* 5. Device Details */}
          <div className="form-group">
            <label className="form-label" htmlFor="message">Device Classification & Timeline Details</label>
            <textarea
              id="message"
              placeholder="Device name, classification (Class A/B/C/D or I/IIa/IIb/III), and target launch timeline..."
              className="form-textarea"
              style={errors.message ? { borderColor: '#DC2626', backgroundColor: '#FEF2F2' } : {}}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              maxLength={2000}
            />
            {errors.message && (
              <span className="field-error-text" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#DC2626', fontSize: '12px', marginTop: '4px' }}>
                <AlertCircle size={12} /> {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            id="submit-lead-btn"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: '100%', padding: '14px', fontSize: '15.5px', justifyContent: 'center' }}
          >
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="btn-spinner" />
                <span>Processing Confidential Request...</span>
              </span>
            ) : (
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Submit Confidential Request</span>
                <Send size={15} />
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
