import React from 'react';
import Image from 'next/image';
import { STATS } from '@/data/medregData';

export default function StatsCounter() {
  return (
    <section className="stats-section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
          <div>
            <span className="section-label">Proven Track Record</span>
            <h2 className="section-title">Number Speaks Everything</h2>
            <p className="section-subtitle">
              Our numbers tell a story of growth, trust, and proven success. Every result reflects our regulatory expertise, commitment, and measurable client impact.
            </p>
          </div>
          <div>
            <a href="/contact-us" className="btn btn-primary btn-sm">
              Start Your Project
            </a>
          </div>
        </div>

        <div className="stats-grid">
          {STATS.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-header">
                <span className="stat-number">{stat.value}</span>
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={34}
                  height={34}
                  className="stat-icon"
                />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
