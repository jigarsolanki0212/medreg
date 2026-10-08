import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/data/medregData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Tagline */}
          <div>
            <Link href="/" aria-label="MedReg Homepage">
              <Image
                sizes="230px"
                src="/assets/logo-footer.png"
                alt="MedReg - Let's Decode The Regulations"
                width={230}
                height={70}
                className="footer-logo"
              />
            </Link>
            <p className="footer-about-text">
              MedReg is your trusted partner in navigating medical device regulations. We provide end-to-end consultancy for global certifications and licenses. With our expertise, we simplify compliance, accelerate approvals, and empower your innovations to reach markets worldwide.
            </p>          </div>

          {/* Column 2: Regulatory Services */}
          <div>
            <h3 className="footer-col-title">Regulatory Services</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link href="/india/">India (CDSCO MDR 2017)</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/europe/">Europe (CE MDR & IVDR)</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/usa/">USA (FDA 510k & QMSR)</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/other-services/">Global Markets & MDSAP</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/other-services/#qms-iso13485">ISO 13485:2016 QMS</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/india/#clinical-trials">Clinical Evaluations & BEP</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link href="/about-us/">About MedReg</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/team/">Meet Our Experts</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/blogs/">Regulatory Knowledge Hub</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/landing-page/">WHX Dubai 2026</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/contact-us/">Book Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h3 className="footer-col-title">Corporate Headquarters</h3>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <MapPin size={20} className="footer-contact-icon" />
                <address style={{ fontStyle: 'normal' }}>
                  {COMPANY_INFO.address.full}
                </address>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} className="footer-contact-icon" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phones[0].value}`} style={{ color: 'inherit', display: 'block' }}>
                    {COMPANY_INFO.phones[0].display}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phones[1].value}`} style={{ color: 'inherit', display: 'block' }}>
                    {COMPANY_INFO.phones[1].display}
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} className="footer-contact-icon" />
                <div>
                  <a href={`mailto:${COMPANY_INFO.emails[0].value}`} style={{ color: 'inherit', display: 'block' }}>
                    {COMPANY_INFO.emails[0].display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            Copyright © {new Date().getFullYear()} MEDREG CONSULTANCY LLP. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/contact-us/">Terms of Engagement</Link>          </div>
        </div>
      </div>
    </footer>
  );
}
