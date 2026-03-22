'use client';

import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

interface ScrollTrackerProps {
  /** Page type label sent with the event, e.g. "guide", "homepage", "category" */
  pageType: string;
}

const THRESHOLDS = [25, 50, 75, 100];

/**
 * Tracks scroll depth milestones (25%, 50%, 75%, 100%) via IntersectionObserver.
 * Renders four invisible sentinel divs positioned at the relevant % of the page.
 * Each threshold fires only once per page load.
 */
export function ScrollTracker({ pageType }: ScrollTrackerProps) {
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Reset on mount (new page)
    firedRef.current = new Set();

    const sentinels = THRESHOLDS.map((pct) => {
      const el = document.createElement('div');
      el.setAttribute('data-scroll-pct', String(pct));
      el.style.position = 'absolute';
      el.style.left = '0';
      el.style.width = '1px';
      el.style.height = '1px';
      el.style.pointerEvents = 'none';
      el.style.opacity = '0';
      // Position sentinel at pct% of document height
      el.style.top = `${pct}%`;
      return el;
    });

    // We need a positioned parent — use the <main> or body
    const container = document.body;
    const originalPosition = container.style.position;
    if (getComputedStyle(container).position === 'static') {
      container.style.position = 'relative';
    }

    sentinels.forEach((s) => container.appendChild(s));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const pct = Number(entry.target.getAttribute('data-scroll-pct'));
          if (!firedRef.current.has(pct)) {
            firedRef.current.add(pct);
            trackScrollDepth(pct, pageType);
          }
        });
      },
      { threshold: 0 },
    );

    sentinels.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
      sentinels.forEach((s) => s.remove());
      container.style.position = originalPosition;
    };
  }, [pageType]);

  return null;
}
