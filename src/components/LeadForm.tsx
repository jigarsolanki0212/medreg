'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LeadForm({ title = "Accelerate Your Journey!" }: { title?: string }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    serviceInterest: 'CDSCO India Compliance',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate high-converting consultation submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="form-card">
      <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '8px', textAlign: 'center' }}>
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: 'var(--slate-500)', marginBottom: '24px', textAlign: 'center' }}>
        Connect with senior medical device regulatory consultants for a confidential assessment.
      </p>

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '30px 10px' }}>
          <CheckCircle2 size={54} color="#16A34A" style={{ margin: '0 auto 16px' }} />
          <h4 style={{ fontSize: '20px', color: 'var(--slate-900)', marginBottom: '10px' }}>
            Consultation Request Received!
          </h4>
          <p style={{ fontSize: '14.5px', color: 'var(--slate-600)', marginBottom: '20px' }}>
            Thank you, <strong>{formData.fullName}</strong>. Our senior regulatory specialist will review your requirements and reach out within 24 business hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                mobile: '',
                serviceInterest: 'CDSCO India Compliance',
                message: ''
              });
            }}
            className="btn btn-secondary btn-sm"
          >
            Submit Another Query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Rajesh Sharma"
              className="form-input"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address *</label>
            <input
              type="email"
              required
              placeholder="regulatory@yourcompany.com"
              className="form-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Mobile Number *</label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              className="form-input"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Primary Regulatory Interest *</label>
            <select
              className="form-select"
              value={formData.serviceInterest}
              onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
            >
              <option value="CDSCO India Compliance">India — CDSCO Manufacturing & Import Licensing</option>
              <option value="Europe CE MDR / IVDR">Europe — CE Mark MDR 2017/745 & Technical Files</option>
              <option value="US FDA 510(k)">USA — US FDA 510(k) Premarket & QMSR</option>
              <option value="MDSAP & ISO 13485">Global — MDSAP & ISO 13485:2016 QMS</option>
              <option value="Clinical Trials / BEP">Clinical Evaluation / BEP & BER Reports</option>
              <option value="Multi-Market Entry">Multi-Market Global Strategy</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Message / Device Classification Details</label>
            <textarea
              placeholder="Briefly describe your medical device type, target jurisdiction, and intended launch timeline..."
              className="form-textarea"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: '100%', padding: '14px', fontSize: '16px' }}
          >
            {loading ? 'Submitting...' : 'Submit Consultation Request'}
          </button>
        </form>
      )}
    </div>
  );
}
