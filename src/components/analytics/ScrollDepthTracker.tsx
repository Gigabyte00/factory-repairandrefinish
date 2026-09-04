'use client';
import { useEffect, useRef } from 'react';

interface Props {
  postSlug: string;
}

export function ScrollDepthTracker({ postSlug }: Props) {
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    function getScrollPercent() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      return docHeight <= 0 ? 100 : Math.round((scrollTop / docHeight) * 100);
    }

    function handleScroll() {
      const pct = getScrollPercent();
      for (const milestone of [25, 50, 75]) {
        if (pct >= milestone && !fired.current.has(milestone)) {
          fired.current.add(milestone);
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll', {
              percent_scrolled: milestone,
              page_slug: postSlug,
            });
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [postSlug]);

  return null;
}
