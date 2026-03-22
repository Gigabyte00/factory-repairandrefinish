'use client';

import { useEffect, useRef } from 'react';
import {
  trackGuideView,
  trackGuideStepView,
  trackGuideCompletion,
  trackScrollDepth,
} from '@/lib/analytics';

interface GuideTrackerProps {
  guideSlug: string;
  guideTitle: string;
  category: string;
  difficulty: string;
  totalSteps: number;
}

const SCROLL_THRESHOLDS = [25, 50, 75, 100];

/**
 * Client component placed on guide pages that:
 * - Fires guide_view on mount
 * - Tracks guide_step_view as each step enters viewport
 * - Fires guide_completed when the last step is scrolled past
 * - Reports scroll_depth milestones
 */
export function GuideTracker({
  guideSlug,
  guideTitle,
  category,
  difficulty,
  totalSteps,
}: GuideTrackerProps) {
  const viewedSteps = useRef<Set<number>>(new Set());
  const completionFired = useRef(false);
  const scrollMilestones = useRef<Set<number>>(new Set());

  // Fire guide_view on mount
  useEffect(() => {
    trackGuideView(guideSlug, guideTitle, category, difficulty);
  }, [guideSlug, guideTitle, category, difficulty]);

  // Observe steps + scroll depth
  useEffect(() => {
    viewedSteps.current = new Set();
    completionFired.current = false;
    scrollMilestones.current = new Set();

    // Observe guide steps (elements with data-step attribute)
    const stepElements = document.querySelectorAll<HTMLElement>('[data-step]');

    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const stepNum = Number(entry.target.getAttribute('data-step'));
          if (isNaN(stepNum) || viewedSteps.current.has(stepNum)) return;

          viewedSteps.current.add(stepNum);
          trackGuideStepView(guideSlug, stepNum, totalSteps);

          // Fire completion when last step is viewed
          if (stepNum === totalSteps && !completionFired.current) {
            completionFired.current = true;
            trackGuideCompletion(guideSlug, guideTitle, category);
          }
        });
      },
      { threshold: 0.3 },
    );

    stepElements.forEach((el) => stepObserver.observe(el));

    // Scroll depth tracking
    function handleScroll() {
      const scrollPct = Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100,
      );

      for (const threshold of SCROLL_THRESHOLDS) {
        if (scrollPct >= threshold && !scrollMilestones.current.has(threshold)) {
          scrollMilestones.current.add(threshold);
          trackScrollDepth(threshold, 'guide');
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      stepObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [guideSlug, guideTitle, category, totalSteps]);

  return null;
}
