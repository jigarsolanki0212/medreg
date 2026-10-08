'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Clock, ChevronDown, Menu, X, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { COMPANY_INFO } from '@/data/medregData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-items">
            <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="top-bar-item">
              <Phone size={14} className="text-accent" />
              <span>{COMPANY_INFO.phones[0].display}</span>
            </a>
            <a href={`tel:${COMPANY_INFO.phones[1].value}`} className="top-bar-item">
              <Phone size={14} className="text-accent" />
              <span>{COMPANY_INFO.phones[1].display}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.emails[0].value}`} className="top-bar-item">
              <Mail size={14} className="text-accent" />
              <span>{COMPANY_INFO.emails[0].display}</span>
            </a>
          </div>
          <div className="top-bar-items">
            <span className="top-bar-item">
              <Clock size={14} />
              <span>{COMPANY_INFO.workingHours}</span>
            </span>
            <span className="top-bar-item" style={{ color: '#79B8FF' }}>
              <ShieldCheck size={14} />
              <span>ISO 13485 & Regulatory Experts</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="site-header">
        <div className="container header-container">
          {/* Logo */}
          <Link href="/" className="logo-link" aria-label="MedReg Homepage">
            <Image
              src="/assets/logo.png"
              alt="MedReg - Let's Decode The Regulations"
              width={220}
              height={64}
              priority
              className="site-logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-menu" aria-label="Main Navigation">
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/about-us" className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}>
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`nav-link ${pathname?.startsWith('/india') || pathname?.startsWith('/europe') || pathname?.startsWith('/usa') || pathname?.startsWith('/other-services') ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                aria-expanded={servicesDropdownOpen}
              >
                Services <ChevronDown size={14} />
              </button>
              <div className="dropdown-menu">
                <Link href="/india" className="dropdown-item">
                  <Image src="/assets/india.png" alt="India" width={22} height={22} className="dropdown-flag" />
                  <div>
                    <div style={{ fontWeight: 600 }}>India (CDSCO)</div>
                    <div style={{ fontSize: '12px', color: 'var(--slate-500)' }}>Manufacturing & Import Licenses</div>
                  </div>
                </Link>
                <Link href="/europe" className="dropdown-item">
                  <Image src="/assets/europe.png" alt="Europe" width={22} height={22} className="dropdown-flag" />
                  <div>
                    <div style={{ fontWeight: 600 }}>Europe (CE MDR/IVDR)</div>
                    <div style={{ fontSize: '12px', color: 'var(--slate-500)' }}>Technical Files & EC REP</div>
                  </div>
                </Link>
                <Link href="/usa" className="dropdown-item">
                  <Image src="/assets/usa.png" alt="USA" width={22} height={22} className="dropdown-flag" />
                  <div>
                    <div style={{ fontWeight: 600 }}>USA (US FDA)</div>
                    <div style={{ fontSize: '12px', color: 'var(--slate-500)' }}>510(k), QMSR & US Agent</div>
                  </div>
                </Link>
                <Link href="/other-services" className="dropdown-item">
                  <Image src="/assets/other.png" alt="Global" width={22} height={22} className="dropdown-flag" />
                  <div>
                    <div style={{ fontWeight: 600 }}>Global Markets</div>
                    <div style={{ fontSize: '12px', color: 'var(--slate-500)' }}>MDSAP, ISO 13485, STED</div>
                  </div>
                </Link>
              </div>
            </div>

            <Link href="/team" className={`nav-link ${isActive('/team') ? 'active' : ''}`}>
              Team
            </Link>
            <Link href="/blogs" className={`nav-link ${isActive('/blogs') ? 'active' : ''}`}>
              Insights
            </Link>
            <Link href="/contact-us" className={`nav-link ${isActive('/contact-us') ? 'active' : ''}`}>
              Contact Us
            </Link>
          </nav>

          {/* Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Link href="/contact-us" className="btn btn-primary btn-sm header-consult-btn">
              <span>Get Free Consultation</span>
              <ArrowRight size={15} />
            </Link>
            <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="btn btn-secondary btn-sm" style={{ display: 'inline-flex' }}>
              <Phone size={14} />
              <span>Call Experts</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-backdrop"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 30, 56, 0.75)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'flex-end',
            animation: 'fadeIn 0.2s ease'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-drawer"
            style={{
              width: '85%',
              maxWidth: '360px',
              height: '100%',
              backgroundColor: 'var(--white)',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              overflowY: 'auto',
              boxShadow: '-10px 0 25px rgba(0, 0, 0, 0.15)',
              animation: 'slideInRight 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
              <Image src="/assets/logo.png" alt="MedReg" width={160} height={46} />
              <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 600, padding: '8px 0', color: 'var(--slate-800)' }}>
                Home
              </Link>
              <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 600, padding: '8px 0', color: 'var(--slate-800)' }}>
                About Us
              </Link>

              <div style={{ padding: '8px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '8px' }}>
                  Regulatory Markets
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Link href="/india" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                    <Image src="/assets/india.png" alt="India" width={20} height={20} />
                    <span>India (CDSCO)</span>
                  </Link>
                  <Link href="/europe" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                    <Image src="/assets/europe.png" alt="Europe" width={20} height={20} />
                    <span>Europe (CE MDR/IVDR)</span>
                  </Link>
                  <Link href="/usa" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                    <Image src="/assets/usa.png" alt="USA" width={20} height={20} />
                    <span>USA (US FDA 510k)</span>
                  </Link>
                  <Link href="/other-services" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                    <Image src="/assets/other.png" alt="Global" width={20} height={20} />
                    <span>Global (MDSAP / ISO 13485)</span>
                  </Link>
                </div>
              </div>

              <Link href="/team" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 600, padding: '8px 0', color: 'var(--slate-800)' }}>
                Meet Our Team
              </Link>
              <Link href="/blogs" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 600, padding: '8px 0', color: 'var(--slate-800)' }}>
                Regulatory Insights
              </Link>
              <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '16px', fontWeight: 600, padding: '8px 0', color: 'var(--slate-800)' }}>
                Contact Us
              </Link>
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
              <div style={{ fontSize: '13px', color: 'var(--slate-500)', marginBottom: '10px' }}>Direct Phone Lines</div>
              <a href={`tel:${COMPANY_INFO.phones[0].value}`} style={{ display: 'block', fontWeight: 700, color: 'var(--primary)', marginBottom: '6px' }}>
                {COMPANY_INFO.phones[0].display}
              </a>
              <a href={`mailto:${COMPANY_INFO.emails[0].value}`} style={{ display: 'block', fontSize: '14px', color: 'var(--slate-600)' }}>
                {COMPANY_INFO.emails[0].display}
              </a>
              <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
