'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Site-wide motion layer, mounted once in the root layout:
 *  - scroll reveal for common content blocks (staggered per parent)
 *  - subtle 3D tilt + glare on cards for mouse/trackpad users only
 *  - pointer parallax for elements marked [data-parallax]
 * Everything is skipped for prefers-reduced-motion. Content is only hidden when the
 * inline head script has added `reveal-ready`, so no-JS visitors and crawlers always
 * see the full page.
 */
const REVEAL_SELECTOR = [
  '.section-label',
  '.section-title',
  '.section-subtitle',
  '.card',
  '.service-box',
  '.market-card',
  '.stat-card',
  '.cert-card',
  '.accordion-item',
  '.testi-card',
  '.testi-right-photo',
  '.form-card',
  '.why-feature-item',
  '.contact-card',
  '.cta-banner',
  '[data-reveal]',
].join(',');

const TILT_SELECTOR = '.service-box, .cert-card, .stat-card, .card:not(.no-tilt), .market-card, .contact-card';

declare global {
  interface Window {
    __medregReveal?: boolean;
  }
}

export default function MotionController() {
  const pathname = usePathname();

  // Scroll reveal: re-scan on every route change.
  useEffect(() => {
    const root = document.documentElement;
    window.__medregReveal = true;
    if (!root.classList.contains('reveal-ready')) return;

    const reveal = (el: HTMLElement) => {
      el.classList.add('rv-anim', 'is-visible');
      const cleanup = () => {
        el.classList.remove('rv-anim');
        el.style.removeProperty('--rv-delay');
      };
      el.addEventListener('transitionend', cleanup, { once: true });
      window.setTimeout(cleanup, 1600);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          reveal(entry.target as HTMLElement);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    const scan = () => {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
        (el) => !el.classList.contains('is-visible') && !el.closest('.hero-section, .page-banner, .site-header, #mobile-drawer')
      );
      const siblingIndex = new Map<Element, number>();
      nodes.forEach((el) => {
        const parent = el.parentElement || document.body;
        const idx = siblingIndex.get(parent) ?? 0;
        siblingIndex.set(parent, idx + 1);
        el.style.setProperty('--rv-delay', `${Math.min(idx, 6) * 80}ms`);
        observer.observe(el);
      });
    };

    const raf = requestAnimationFrame(scan);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [pathname]);

  // 3D tilt + parallax for fine pointers only.
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reduced) return;

    let active: HTMLElement | null = null;
    let frame = 0;

    const reset = (el: HTMLElement) => {
      el.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease';
      el.style.transform = '';
      el.classList.remove('tilt-active');
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const target = (e.target as Element | null)?.closest<HTMLElement>(TILT_SELECTOR) ?? null;

      if (active && active !== target) reset(active);
      active = target;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // Parallax: any [data-parallax] container under the pointer
        const parallax = (e.target as Element | null)?.closest<HTMLElement>('[data-parallax]');
        if (parallax) {
          const r = parallax.getBoundingClientRect();
          parallax.style.setProperty('--px', (((e.clientX - r.left) / r.width) - 0.5).toFixed(3));
          parallax.style.setProperty('--py', (((e.clientY - r.top) / r.height) - 0.5).toFixed(3));
        }

        // Never fight the reveal transition on elements still animating in
        if (!target || target.classList.contains('rv-anim')) return;
        if (document.documentElement.classList.contains('reveal-ready') && !target.classList.contains('is-visible')) return;
        const r = target.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        const max = target.classList.contains('market-card') ? 1.6 : 5;
        target.style.transition = 'transform 0.12s ease-out, box-shadow 0.3s ease, border-color 0.3s ease';
        target.style.transform = `perspective(900px) rotateX(${((0.5 - y) * max * 2).toFixed(2)}deg) rotateY(${((x - 0.5) * max * 2).toFixed(2)}deg) translate3d(0, -4px, 0)`;
        target.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
        target.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
        target.classList.add('tilt-active');
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      if (active) reset(active);
      active = null;
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    window.addEventListener('blur', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
    };
  }, []);

  return null;
}
