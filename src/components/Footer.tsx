import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';
import { COMPANY_INFO } from '@/data/medregData';
import { MARKETS } from '@/data/markets';
import { SOCIAL } from '@/data/siteContent';

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
              MedReg is a medical device regulatory consultancy. We guide manufacturers through regulatory requirements in Europe, the USA, India and other global markets, from strategy and documentation to submissions and ongoing compliance.
            </p>
            <div className="footer-social-links" style={{ marginTop: '18px' }}>
              {[
                { href: SOCIAL.linkedin, label: 'LinkedIn', Icon: Linkedin },
                { href: SOCIAL.instagram, label: 'Instagram', Icon: Instagram },
                { href: SOCIAL.youtube, label: 'YouTube', Icon: Youtube },
              ]
                .filter((s) => s.href)
                .map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label={`MedReg on ${label}`}>
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ))}
            </div>
          </div>

          {/* Column 2: Regulatory Services */}
          <div>
            <h3 className="footer-col-title">Regulatory Services</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link href="/services/">All Services</Link>
              </li>
              {MARKETS.map((m) => (
                <li key={m.href} className="footer-link-item">
                  <Link href={m.href}>{m.navTitle}</Link>
                </li>
              ))}
              <li className="footer-link-item">
                <Link href="/training/">Training</Link>
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
                <Link href="/team/">Our Team</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/gallery/">Gallery</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/exhibitions/">Exhibitions &amp; Events</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/careers/">Careers</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/blogs/">Regulatory Insights</Link>
              </li>
              <li className="footer-link-item">
                <Link href="/contact-us/">Contact Us</Link>
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
                  <span className="footer-tz">Time zone: {COMPANY_INFO.timezone.label}</span>
                  {COMPANY_INFO.timezone.callingHours && <span className="footer-tz">{COMPANY_INFO.timezone.callingHours}</span>}
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
