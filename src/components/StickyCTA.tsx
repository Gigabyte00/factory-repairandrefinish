'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('sticky_cta_dismissed')) {
      setDismissed(true);
      return;
    }
    const handleScroll = () => {
      if (window.scrollY > 400) setShow(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dismissed || !show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary text-primary-foreground shadow-lg">
      <div className="container flex items-center justify-between gap-4 py-3">
        <p className="text-sm font-medium">
          Compare your top options side by side now
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/offers"
            onClick={() => trackEvent('sticky_cta_click', { cta: 'compare' })}
            className="bg-white text-primary px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition"
          >
            Compare Now
          </Link>
          <button
            onClick={() => { setDismissed(true); sessionStorage.setItem('sticky_cta_dismissed', '1'); }}
            className="text-primary-foreground/70 hover:text-primary-foreground"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
