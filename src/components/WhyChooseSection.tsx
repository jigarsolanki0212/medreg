import { Compass, FileCheck2, Globe2, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_MEDREG } from '@/data/medregData';

/** "Why Choose Medreg" block — shown on the home, about and every service page, as on the original site. */
export default function WhyChooseSection() {
  return (
  <section className="why-section">
          <div className="why-image-col">
            {/* Background image loaded via CSS */}
          </div>
          <div className="why-content-col">
            <span className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#79B8FF', borderColor: 'rgba(255,255,255,0.2)' }}>
              Why Choose Medreg
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 32px)', color: 'var(--white)', marginBottom: '14px' }}>
              Why Choose Medreg
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', lineHeight: 1.6 }}>
              Expert consultants, thorough regulatory insight, and a seamless path to compliance, that’s our promise for your medical devices.
            </p>
  
            <div className="why-features-grid">
              {WHY_CHOOSE_MEDREG.map((item, idx) => (
                <div key={idx} className="why-feature-item">
                  <div className="why-icon-bubble">
                    {idx === 0 && <Compass size={22} />}
                    {idx === 1 && <FileCheck2 size={22} />}
                    {idx === 2 && <Globe2 size={22} />}
                    {idx === 3 && <ShieldCheck size={22} />}
                  </div>
                  <h3 className="why-feature-title">{item.title}</h3>
                  <p className="why-feature-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
}
