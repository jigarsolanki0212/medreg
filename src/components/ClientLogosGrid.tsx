'use client';

import React from 'react';
import Image from 'next/image';
import { CLIENT_LOGOS } from '@/data/medregData';
import { ShieldCheck, Award } from 'lucide-react';

export default function ClientLogosGrid() {
  // Duplicate logos for seamless infinite looping
  const firstRow = CLIENT_LOGOS.slice(0, 8);
  const secondRow = CLIENT_LOGOS.slice(8, 16);

  return (
    <section className="client-section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
          <div>
            <span className="section-label section-label-gold">Enterprise Trust</span>
            <h2 className="section-title">Our Valued Clients</h2>
            <p className="section-subtitle">
              Trusted by 950+ medical device and IVD manufacturers across domestic and international healthcare markets.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--primary)', fontSize: '15px' }}>
            <Award size={18} color="var(--primary)" />
            <span>950+ Manufacturers &amp; Importers Worldwide</span>
          </div>
        </div>

        {/* Continuous Smooth Marquee Track */}
        <div className="client-marquee-container">
          {/* Row 1 - Leftward glide */}
          <div className="client-marquee-track marquee-left">
            {[...firstRow, ...firstRow, ...firstRow].map((client, idx) => (
              <div key={`row1-${idx}`} className="client-logo-box" title={client.name}>
                <Image
                  src={client.image}
                  alt={client.name}
                  width={140}
                  height={50}
                  unoptimized
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>

          {/* Row 2 - Rightward / Alternate glide */}
          <div className="client-marquee-track marquee-right" style={{ marginTop: '16px' }}>
            {[...secondRow, ...secondRow, ...secondRow].map((client, idx) => (
              <div key={`row2-${idx}`} className="client-logo-box" title={client.name}>
                <Image
                  src={client.image}
                  alt={client.name}
                  width={140}
                  height={50}
                  unoptimized
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
