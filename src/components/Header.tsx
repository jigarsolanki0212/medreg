'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/medregData';
import { MARKETS } from '@/data/markets';

// Order per redesign brief §15: Europe, USA, Other Global, India.
const SERVICE_LINKS = MARKETS.map((m) => ({ href: m.href, flag: m.flag, title: m.navTitle, sub: m.navSub }));

const COMPANY_LINKS = [
  { href: '/about-us/', title: 'About Us', sub: 'Who we are and how we work' },
  { href: '/team/', title: 'Our Team', sub: 'Regulatory and quality specialists' },
  { href: '/gallery/', title: 'Gallery', sub: 'Team, office and events' },
  { href: '/careers/', title: 'Careers', sub: 'Current openings and applications' },
];

type DropKey = 'services' | 'company' | null;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<DropKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path) ?? false;
  };
  const servicesActive = isActive('/services') || SERVICE_LINKS.some((s) => isActive(s.href.replace(/\/$/, '')));
  const companyActive = COMPANY_LINKS.some((s) => isActive(s.href.replace(/\/$/, '')));

  // Close menus whenever the route changes.
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Compact, elevated header once the page scrolls.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock background scroll while the drawer is open; Escape closes any open menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setOpenMenu(null);
      }
    };
    document.addEventListener('keydown', onKey);
    document.documentElement.classList.toggle('drawer-open', mobileMenuOpen);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('drawer-open');
    };
  }, [mobileMenuOpen]);

  // Tap/click outside closes an open dropdown (touch laptops and iPads have no hover-out).
  useEffect(() => {
    if (!openMenu) return;
    const ref = openMenu === 'services' ? servicesRef : companyRef;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [openMenu]);

  const dropdownProps = (key: Exclude<DropKey, null>) => ({
    className: `nav-item-dropdown ${openMenu === key ? 'open' : ''}`,
    onPointerEnter: (e: React.PointerEvent) => e.pointerType === 'mouse' && setOpenMenu(key),
    onPointerLeave: (e: React.PointerEvent) => e.pointerType === 'mouse' && setOpenMenu(null),
    onBlur: (e: React.FocusEvent<HTMLDivElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenMenu(null);
    },
  });

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-items">
            <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="top-bar-item">
              <Phone size={14} className="text-accent" aria-hidden="true" />
              <span>{COMPANY_INFO.phones[0].display}</span>
            </a>
            <a href={`tel:${COMPANY_INFO.phones[1].value}`} className="top-bar-item">
              <Phone size={14} className="text-accent" aria-hidden="true" />
              <span>{COMPANY_INFO.phones[1].display}</span>
            </a>
            <span className="top-bar-item top-bar-tz">{COMPANY_INFO.timezone.short}</span>
            <a href={`mailto:${COMPANY_INFO.emails[0].value}`} className="top-bar-item">
              <Mail size={14} className="text-accent" aria-hidden="true" />
              <span>{COMPANY_INFO.emails[0].display}</span>
            </a>
          </div>
          <div className="top-bar-items">
            <span className="top-bar-item" style={{ color: '#79B8FF' }}>
              <span>{COMPANY_INFO.tagline}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-container">
          <Link href="/" className="logo-link" aria-label="MedReg Consultancy home">
            <Image
              src="/assets/logo.png"
              alt="MedReg - Let's Decode The Regulations"
              width={220}
              height={64}
              priority
              sizes="180px"
              className="site-logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-menu" aria-label="Main navigation">
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <div ref={companyRef} {...dropdownProps('company')}>
              <button
                type="button"
                className={`nav-link ${companyActive ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                aria-expanded={openMenu === 'company'}
                aria-haspopup="true"
                aria-controls="company-menu"
                onClick={() => setOpenMenu((o) => (o === 'company' ? null : 'company'))}
              >
                About <ChevronDown size={14} className="nav-chevron" aria-hidden="true" />
              </button>
              <div className="dropdown-menu" id="company-menu">
                {COMPANY_LINKS.map((s) => (
                  <Link key={s.href} href={s.href} className="dropdown-item" onClick={() => setOpenMenu(null)}>
                    <div>
                      <div style={{ fontWeight: 600 }}>{s.title}</div>
                      <div style={{ fontSize: '12px', color: 'var(--slate-500)' }}>{s.sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div ref={servicesRef} {...dropdownProps('services')}>
              <button
                type="button"
                className={`nav-link ${servicesActive ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                aria-expanded={openMenu === 'services'}
                aria-haspopup="true"
                aria-controls="services-menu"
                onClick={() => setOpenMenu((o) => (o === 'services' ? null : 'services'))}
              >
                Services <ChevronDown size={14} className="nav-chevron" aria-hidden="true" />
              </button>
              <div className="dropdown-menu dropdown-menu--wide" id="services-menu">
                <Link href="/services/" className="dropdown-item dropdown-item--all" onClick={() => setOpenMenu(null)}>
                  <div>
                    <div style={{ fontWeight: 700 }}>All Services</div>
                    <div style={{ fontSize: '12px', color: 'var(--slate-500)' }}>Regulatory consultancy for global markets</div>
                  </div>
                </Link>
                {SERVICE_LINKS.map((s) => (
                  <Link key={s.href} href={s.href} className="dropdown-item" onClick={() => setOpenMenu(null)}>
                    <Image src={s.flag} alt="" width={22} height={22} className="dropdown-flag" />
                    <div>
                      <div style={{ fontWeight: 600 }}>{s.title}</div>
                      <div style={{ fontSize: '12px', color: 'var(--slate-500)' }}>{s.sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/training/" className={`nav-link ${isActive('/training') ? 'active' : ''}`}>
              Training
            </Link>
            <Link href="/exhibitions/" className={`nav-link ${isActive('/exhibitions') ? 'active' : ''}`}>
              Exhibitions
            </Link>
            <Link href="/blogs/" className={`nav-link ${isActive('/blogs') ? 'active' : ''}`}>
              Insights
            </Link>
            <Link href="/contact-us/" className={`nav-link ${isActive('/contact-us') ? 'active' : ''}`}>
              Contact Us
            </Link>
          </nav>

          <div className="header-actions">
            <Link href="/contact-us/" className="btn btn-primary btn-sm header-consult-btn">
              <span>Get Free Consultation</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phones[0].value}`}
              className="btn btn-secondary btn-sm header-call-btn"
              aria-label={`Call MedReg experts on ${COMPANY_INFO.phones[0].display}`}
            >
              <Phone size={14} aria-hidden="true" />
              <span className="header-call-label">Call Experts</span>
            </a>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-drawer-backdrop" className="drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div
            id="mobile-drawer"
            className="drawer-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-head">
              <Image src="/assets/logo.png" alt="MedReg" width={160} height={46} sizes="160px" />
              <button type="button" className="drawer-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <nav className="drawer-nav" aria-label="Mobile navigation">
              <Link href="/" className="drawer-link" style={{ ['--i' as string]: 0 }}>Home</Link>
              <div className="drawer-group" style={{ ['--i' as string]: 1 }}>
                <div className="drawer-group-title">Services</div>
                <div className="drawer-group-links">
                  <Link href="/services/" className="drawer-sublink">
                    <span style={{ fontWeight: 700 }}>All Services</span>
                  </Link>
                  {SERVICE_LINKS.map((s) => (
                    <Link key={s.href} href={s.href} className="drawer-sublink">
                      <Image src={s.flag} alt="" width={20} height={20} />
                      <span>{s.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/training/" className="drawer-link" style={{ ['--i' as string]: 2 }}>Training</Link>
              <Link href="/exhibitions/" className="drawer-link" style={{ ['--i' as string]: 3 }}>Exhibitions &amp; Events</Link>

              <div className="drawer-group" style={{ ['--i' as string]: 4 }}>
                <div className="drawer-group-title">Company</div>
                <div className="drawer-group-links">
                  {COMPANY_LINKS.map((s) => (
                    <Link key={s.href} href={s.href} className="drawer-sublink">
                      <span>{s.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/blogs/" className="drawer-link" style={{ ['--i' as string]: 5 }}>Regulatory Insights</Link>
              <Link href="/contact-us/" className="drawer-link" style={{ ['--i' as string]: 6 }}>Contact Us</Link>
            </nav>

            <div className="drawer-foot">
              <div style={{ fontSize: '13px', color: 'var(--slate-500)', marginBottom: '10px' }}>Direct Phone Lines</div>
              <a href={`tel:${COMPANY_INFO.phones[0].value}`} style={{ display: 'block', fontWeight: 700, color: 'var(--primary)', marginBottom: '2px' }}>
                {COMPANY_INFO.phones[0].display}
              </a>
              <div style={{ fontSize: '12.5px', color: 'var(--slate-500)', marginBottom: '8px' }}>{COMPANY_INFO.timezone.label}</div>
              <a href={`mailto:${COMPANY_INFO.emails[0].value}`} style={{ display: 'block', fontSize: '14px', color: 'var(--slate-600)' }}>
                {COMPANY_INFO.emails[0].display}
              </a>
              <Link href="/contact-us/" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
