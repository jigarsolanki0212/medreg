import React from 'react';
import Image from 'next/image';
import { CERTIFICATIONS } from '@/data/medregData';

export default function CertificationsRow({ title = "Regulatory Frameworks We Support" }: { title?: string }) {
  return (
    <section className="cert-section">
      <div className="container">
        <div className="center-content">
          <span className="section-label">Regulatory Expertise</span>
          <h2 className="section-title text-center">{title}</h2>
          <p className="section-subtitle text-center" style={{ fontSize: '14px' }}>
            MedReg is a regulatory consultancy. Marks are shown to identify the frameworks we support; certificates and approvals are issued by the relevant authorities, Notified Bodies and certification bodies.
          </p>
        </div>

        <div className="cert-grid">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <Image
                src={cert.image}
                alt={cert.name}
                width={120}
                height={70}
                sizes="130px"
                style={{ objectFit: 'contain' }}
              />
              <span className="cert-title">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
