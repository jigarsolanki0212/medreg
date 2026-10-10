'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';
import type { GalleryImage } from '@/data/siteContent';

/** Masonry photo grid with category filters and an accessible lightbox (keyboard, swipe, focus trap). */
export default function GalleryGrid({ images, showFilters = true, compact = false }: { images: GalleryImage[]; showFilters?: boolean; compact?: boolean }) {
  const categories = useMemo(() => Array.from(new Set(images.map((i) => i.category))), [images]);
  const [filter, setFilter] = useState<string>('All');
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);

  const shown = filter === 'All' ? images : images.filter((i) => i.category === filter);

  const close = useCallback(() => {
    setOpen(null);
    lastFocus.current?.focus();
  }, []);
  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    if (open === null) return;
    closeRef.current?.focus();
    document.documentElement.classList.add('drawer-open');
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'Tab') {
        const nodes = document.querySelectorAll<HTMLElement>('.lb-dialog button');
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('drawer-open');
    };
  }, [open, close, step]);

  const current = open !== null ? shown[open] : null;

  return (
    <div className="gal">
      {showFilters && categories.length > 1 && (
        <div className="gal-filters" role="group" aria-label="Filter photos by category">
          {['All', ...categories].map((c) => (
            <button key={c} type="button" className={`gal-filter ${filter === c ? 'is-active' : ''}`} aria-pressed={filter === c} onClick={() => setFilter(c)}>
              {c}
              <span className="gal-count">{c === 'All' ? images.length : images.filter((i) => i.category === c).length}</span>
            </button>
          ))}
        </div>
      )}

      <ul className={compact ? 'gal-grid gal-grid--compact' : 'gal-grid'}>
        {shown.map((img, i) => (
          <li key={img.src} className="gal-item">
            <button
              type="button"
              className="gal-thumb"
              onClick={(e) => {
                lastFocus.current = e.currentTarget;
                setOpen(i);
              }}
              aria-label={`Open photo: ${img.alt}`}
            >
              <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes={compact ? '(max-width: 640px) 46vw, 200px' : '(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 380px'} loading="lazy" />
              <span className="gal-overlay" aria-hidden="true">
                <Expand size={18} />
                {img.caption && <span>{img.caption}</span>}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          className="lb-backdrop"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="lb-dialog" role="dialog" aria-modal="true" aria-label={current.alt} onClick={(e) => e.stopPropagation()}>
            <button ref={closeRef} type="button" className="lb-btn lb-close" onClick={close} aria-label="Close photo">
              <X size={22} />
            </button>
            {shown.length > 1 && (
              <button type="button" className="lb-btn lb-prev" onClick={() => step(-1)} aria-label="Previous photo">
                <ChevronLeft size={26} />
              </button>
            )}
            <figure className="lb-figure">
              <Image src={current.src} alt={current.alt} width={current.width} height={current.height} sizes="92vw" className="lb-img" />
              <figcaption>
                {current.caption || current.alt}
                <span>
                  {open! + 1} / {shown.length}
                </span>
              </figcaption>
            </figure>
            {shown.length > 1 && (
              <button type="button" className="lb-btn lb-next" onClick={() => step(1)} aria-label="Next photo">
                <ChevronRight size={26} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
