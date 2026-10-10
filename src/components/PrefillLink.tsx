'use client';

import React from 'react';

/** Link that sets `?select=` and scrolls to the form on the same page, then tells <PrefilledForm /> to update. */
export default function PrefillLink({ value, target, className, children }: { value: string; target: string; className?: string; children: React.ReactNode }) {
  return (
    <a
      href={`?select=${encodeURIComponent(value)}#${target}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.history.pushState(null, '', `?select=${encodeURIComponent(value)}#${target}`);
        window.dispatchEvent(new Event('medreg:prefill'));
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
    >
      {children}
    </a>
  );
}
