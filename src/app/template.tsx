'use client';

import React, { useState } from 'react';

// Module-level flag: the first client render (hydration) must match the server HTML and
// must not fade the page in, otherwise it would delay Largest Contentful Paint. Later
// mounts happen on client-side navigation and get the entrance animation.
let hasHydrated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => {
    if (typeof window === 'undefined') return false;
    const shouldAnimate = hasHydrated;
    hasHydrated = true;
    return shouldAnimate;
  });

  return <div className={animate ? 'page-transition-wrapper' : undefined}>{children}</div>;
}
