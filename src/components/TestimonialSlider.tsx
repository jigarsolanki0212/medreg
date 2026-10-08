'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/data/medregData';

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonial-split">
          {/* Left Column: Testimonial Quote */}
          <div>
            <span className="section-label">Client Endorsements</span>
            <h2 className="section-title">Real Feedback from Real Clients</h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              Hear directly from MedTech manufacturers who trust MedReg to steer their multi-jurisdiction regulatory approvals.
            </p>

            <div className="testi-card">
              <Image
                src="/assets/quote.png"
                alt="Quote"
                width={40}
                height={32}
                className="quote-icon"
              />
              <p className="quote-text">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="author-info">
                <div className="author-avatar">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <div className="author-name">{current.author}</div>
                  <div className="author-role">{current.role} &bull; {current.company}</div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View testimonial ${idx + 1}`}
                  style={{
                    width: activeIndex === idx ? '32px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    backgroundColor: activeIndex === idx ? 'var(--primary)' : 'var(--slate-400)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Visual Photo Card */}
          <div className="testi-right-photo">
            <Image
              src="/assets/real-clients.png"
              alt="MedReg Regulatory Consultation with Global Clients"
              width={540}
              height={580}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
