'use client';

import React from 'react';
import Image from 'next/image';
import { CLIENT_LOGOS } from '@/data/medregData';

export default function ClientLogosGrid() {
  // Duplicate logos for seamless infinite looping
  const firstRow = CLIENT_LOGOS.slice(0, 8);
  const secondRow = CLIENT_LOGOS.slice(8, 16);

  return (
    <section className="client-section" style={{ overflow: 'hidden' }} aria-label="Our valued clients">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
          <div>
            <span className="section-label section-label-gold">Accelerate your journey!</span>
            <h2 className="section-title">Our Clients</h2>
            <p className="section-subtitle">
              Almost 950+ Clients
            </p>
          </div>
        </div>

        {/* Continuous Smooth Marquee Track */}
        <div className="client-marquee-container">
          {/* Row 1 - Leftward glide */}
          <div className="client-marquee-track marquee-left">
            {[...firstRow, ...firstRow, ...firstRow].map((client, idx) => (
              <div key={`row1-${idx}`} className="client-logo-box" title={client.name} aria-hidden={idx >= firstRow.length || undefined}>
                <Image
                  src={client.image}
                  alt={client.name}
                  width={140}
                  height={50}
                  sizes="140px"
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>

          {/* Row 2 - Rightward / Alternate glide */}
          <div className="client-marquee-track marquee-right" style={{ marginTop: '16px' }}>
            {[...secondRow, ...secondRow, ...secondRow].map((client, idx) => (
              <div key={`row2-${idx}`} className="client-logo-box" title={client.name} aria-hidden={idx >= secondRow.length || undefined}>
                <Image
                  src={client.image}
                  alt={client.name}
                  width={140}
                  height={50}
                  sizes="140px"
                  loading="lazy"
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
