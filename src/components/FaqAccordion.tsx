'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '@/data/medregData';

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqAccordion({
  faqs,
  title = "Get The Answers You Need To Move Forward",
  subtitle = "Navigating medical device regulations doesn't have to be overwhelming. At MedReg Consultancy, we've answered the most common client questions to quickly guide you through our services and how we can support your compliance journey."
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-layout">
          {/* Sticky Left Column */}
          <div className="faq-sidebar">
            <span className="section-label">Frequently Asked Questions</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle" style={{ marginBottom: '28px' }}>
              {subtitle}
            </p>
            <div style={{ padding: '24px', backgroundColor: 'var(--primary-subtle)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '17px', color: 'var(--slate-900)', marginBottom: '8px' }}>
                Have a customized regulatory question?
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--slate-600)', marginBottom: '16px' }}>
                Every device pathway is unique. Speak directly with our regulatory specialists in Ahmedabad.
              </p>
              <a href="/contact-us" className="btn btn-primary btn-sm">
                Ask Our Team
              </a>
            </div>
          </div>

          {/* Accordion Right Column */}
          <div>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                  <div
                    className="accordion-header"
                    onClick={() => toggle(idx)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggle(idx);
                      }
                    }}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className="accordion-icon" />
                  </div>
                  {isOpen && (
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
