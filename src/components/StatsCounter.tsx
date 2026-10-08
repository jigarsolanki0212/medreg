'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { TrendingUp } from 'lucide-react';
import Card3D from '@/components/Card3D';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  isVisible: boolean;
  duration?: number;
  color?: string;
}

function AnimatedCounter({ target, suffix = '+', isVisible, duration = 2000, color }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easeOutExpo for ultra crisp settling
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);
      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, target, duration]);

  return (
    <span
      className="stat-number stat-number-animated"
      style={{
        fontVariantNumeric: 'tabular-nums',
        fontFeatureSettings: '"tnum"',
        color: color || 'var(--primary)',
        fontSize: '44px',
        fontWeight: 800,
        lineHeight: 1
      }}
    >
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Fallback safety timer: ensures counters always activate even without scroll
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2800);

    // 2. IntersectionObserver with 100px root margin for anticipatory activation
    if (typeof IntersectionObserver !== 'undefined' && sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            clearTimeout(fallbackTimer);
          }
        },
        { threshold: 0.01, rootMargin: '100px 0px 100px 0px' }
      );
      observer.observe(sectionRef.current);
      return () => {
        observer.disconnect();
        clearTimeout(fallbackTimer);
      };
    } else {
      setIsVisible(true);
      return () => clearTimeout(fallbackTimer);
    }
  }, []);

  // Targets counting strictly from 0 to actual numbers: 2,000+, 20+, 950+, 250+
  const statsConfig = [
    {
      target: 2000,
      suffix: '+',
      label: 'Complete Projects',
      sublabel: 'Zero-Deficiency Submissions',
      icon: '/assets/complete-project.png',
      color: '#1B467F'
    },
    {
      target: 20,
      suffix: '+',
      label: 'Countries Served',
      sublabel: 'Global Regulatory Jurisdictions',
      icon: '/assets/countries-served.png',
      color: '#088395'
    },
    {
      target: 950,
      suffix: '+',
      label: 'Clients Served',
      sublabel: 'Manufacturers & Importers',
      icon: '/assets/clients-served.png',
      color: '#C69214'
    },
    {
      target: 250,
      suffix: '+',
      label: 'Service Offerings',
      sublabel: 'End-to-End Compliance Pathways',
      icon: '/assets/service-offerings.png',
      color: '#10B981'
    },
  ];

  return (
    <section className="stats-section" ref={sectionRef} id="stats-counter-section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '44px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="section-label">Proven Track Record</span>
              <span className="stats-credential-pill">
                <TrendingUp size={13} />
                <span>Audited Cumulative Milestones (2011 &ndash; 2026)</span>
              </span>
            </div>
            <h2 className="section-title">Number Speaks Everything</h2>
            <p className="section-subtitle">
              Our numbers tell a story of growth, trust, and proven success. Every result reflects our regulatory expertise, commitment, and measurable client impact.
            </p>
          </div>
          <div>
            <a href="/contact-us" className="btn btn-primary btn-sm" style={{ boxShadow: '0 4px 14px rgba(27, 70, 127, 0.25)' }}>
              <span>Start Your Project</span>
            </a>
          </div>
        </div>

        <div className="stats-grid">
          {statsConfig.map((stat, idx) => (
            <Card3D
              key={idx}
              className="stat-card modern-stat-card"
              maxTilt={7}
              depth={12}
              style={{
                transitionDelay: `${idx * 70}ms`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle top accent gradient */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${stat.color}, transparent)`
                }}
              />

              <div className="stat-header">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                  duration={1800 + idx * 160}
                  color={stat.color}
                />
                <div className="stat-icon-wrapper">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={36}
                    height={36}
                    className="stat-icon"
                  />
                </div>
              </div>

              <div className="stat-label">{stat.label}</div>
              <div className="stat-sublabel">{stat.sublabel}</div>

              {/* Dynamic bottom progress indicator that fills as counter counts up */}
              <div
                className="stat-progress-track"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: 'rgba(27, 70, 127, 0.08)'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    backgroundColor: stat.color,
                    width: isVisible ? '100%' : '0%',
                    transition: `width ${1.8 + idx * 0.16}s cubic-bezier(0.16, 1, 0.3, 1)`
                  }}
                />
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
