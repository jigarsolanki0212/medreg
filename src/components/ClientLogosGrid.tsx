import React from 'react';
import Image from 'next/image';
import { CLIENT_LOGOS } from '@/data/medregData';

export default function ClientLogosGrid() {
  return (
    <section className="client-section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="section-label section-label-gold">Enterprise Trust</span>
            <h2 className="section-title">Our Clients</h2>
            <p className="section-subtitle">
              Trusted by 950+ medical device and IVD manufacturers across domestic and international healthcare markets.
            </p>
          </div>
          <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '15px' }}>
            Almost 950+ Clients Worldwide
          </div>
        </div>

        <div className="client-grid">
          {CLIENT_LOGOS.slice(0, 12).map((client, idx) => (
            <div key={idx} className="client-logo-box" title={client.name}>
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
    </section>
  );
}
