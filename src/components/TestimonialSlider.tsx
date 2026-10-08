'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/data/medregData';

const AUTOPLAY_MS = 7000;

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const current = TESTIMONIALS[activeIndex];
  const go = (dir: number) => setActiveIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  // Gentle autoplay: only while on screen, not hovered/focused, and not for reduced-motion users.
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = sectionRef.current;
    let visible = false;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.3 });
    if (el) io.observe(el);
    const id = window.setInterval(() => {
      if (visible && document.visibilityState === 'visible') go(1);
    }, AUTOPLAY_MS);
    return () => {
      window.clearInterval(id);
      io.disconnect();
    };
  }, [paused]);

  return (
    <section className="testimonials-section section-pad" ref={sectionRef}>
      <div className="container">
        <div className="testimonial-split">
          <div>
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">Real Feedback from Real Clients</h2>
            <div style={{ marginBottom: '24px' }} />

            <div
              className="testi-card"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              aria-roledescription="carousel"
              aria-label="Client testimonials"
            >
              <Image src="/assets/quote.png" alt="" width={40} height={32} className="quote-icon" />
              <figure key={activeIndex} className="testi-slide" aria-live="polite">
                <blockquote className="quote-text">&ldquo;{current.quote}&rdquo;</blockquote>
                <figcaption className="author-info">
                  <div className="author-avatar" aria-hidden="true">
                    {current.author.charAt(0)}
                  </div>
                  <div>
                    <div className="author-name">{current.author}</div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="testi-controls">
              <div style={{ display: 'flex', gap: '4px' }}>
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`View testimonial ${idx + 1}`}
                    aria-current={activeIndex === idx}
                    className={`testi-dot ${activeIndex === idx ? 'active' : ''}`}
                  />
                ))}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button type="button" className="testi-arrow" onClick={() => go(-1)} aria-label="Previous testimonial">
                  <ChevronLeft size={18} />
                </button>
                <button type="button" className="testi-arrow" onClick={() => go(1)} aria-label="Next testimonial">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="testi-right-photo">
            <Image
              src="/assets/real-clients.png"
              alt="MedReg regulatory consultation with global clients"
              width={540}
              height={580}
              sizes="(max-width: 1024px) 90vw, 480px"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
