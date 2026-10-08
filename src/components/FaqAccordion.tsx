'use client';

import React, { useId, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
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
  const uid = useId();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq-section">
      <div className="container">
        <div className="faq-layout">
          {/* Sticky Left Column */}
          <div className="faq-sidebar">
            <span className="section-label">Frequently Asked Questions</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle" style={{ marginBottom: '28px' }}>
              {subtitle}
            </p>
            <div style={{
              padding: '24px',
              backgroundColor: 'var(--primary-subtle)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'transform 0.25s ease',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginBottom: '10px' }}>
                <MessageSquare size={18} />
                <h3 style={{ fontSize: '16.5px', fontWeight: 700, margin: 0, color: 'var(--slate-900)' }}>
                  Have a customized regulatory question?
                </h3>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '16px' }}>
                Every device pathway is unique. Speak directly with our regulatory specialists in Ahmedabad.
              </p>
              <Link href="/contact-us/" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                Ask Our Team Directly
              </Link>
            </div>
          </div>

          {/* Accordion Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`accordion-item ${isOpen ? 'open' : ''}`}
                  style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 8px 20px -4px rgba(15, 39, 71, 0.08)' : 'var(--shadow-sm)',
                    borderColor: isOpen ? 'var(--primary)' : 'var(--border)'
                  }}
                >
                  <button
                    type="button"
                    className="accordion-header"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`${uid}-panel-${idx}`}
                    id={`${uid}-btn-${idx}`}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '20px 24px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: isOpen ? 'var(--primary)' : 'var(--slate-900)',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    <h3 style={{ paddingRight: '16px', lineHeight: 1.4, fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit', letterSpacing: 'normal' }}>{faq.question}</h3>
                    <div aria-hidden="true" style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--primary-light)' : 'var(--slate-100)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'background-color 0.25s ease'
                    }}>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.32s cubic-bezier(0.16, 1, 0.3, 1)',
                          color: isOpen ? 'var(--primary)' : 'var(--slate-500)'
                        }}
                      />
                    </div>
                  </button>

                  {/* Silky smooth CSS grid-transition */}
                  <div
                    id={`${uid}-panel-${idx}`}
                    role="region"
                    aria-labelledby={`${uid}-btn-${idx}`}
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.32s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <div style={{
                        padding: '0 24px 22px 24px',
                        fontSize: '14.5px',
                        color: 'var(--slate-600)',
                        lineHeight: 1.7,
                        borderTop: '1px solid var(--border-subtle)',
                        marginTop: '4px',
                        paddingTop: '16px'
                      }}>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
