'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { GuideStep } from '@/types';

interface GuideProgressProps {
  steps: GuideStep[];
  className?: string;
}

export function GuideProgress({ steps, className }: GuideProgressProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [visible, setVisible] = useState(false);

  // Track which step is active via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    steps.forEach((step) => {
      const el = document.getElementById(`step-${step.stepNumber}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(step.stepNumber);
            }
          });
        },
        {
          rootMargin: '-10% 0px -70% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [steps]);

  // Show only when first step is scrolled past
  useEffect(() => {
    const firstStep = document.getElementById('step-1');
    if (!firstStep) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show progress bar when step-1 starts leaving the viewport
          setVisible(!entry.isIntersecting);
        });
      },
      { rootMargin: '-80px 0px 0px 0px', threshold: 0.1 }
    );

    observer.observe(firstStep);
    return () => observer.disconnect();
  }, []);

  const progressPct = Math.round((activeStep / steps.length) * 100);

  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        visible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none',
        className
      )}
    >
      <div className="glass border-b border-border/50 px-4 py-2">
        <div className="container-wide flex items-center gap-4">
          <span className="shrink-0 text-xs font-semibold text-primary">
            Step {activeStep} of {steps.length}
          </span>

          <div className="flex-1 h-2 rounded-full bg-warm-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <span className="shrink-0 text-xs text-muted-foreground font-medium">
            {progressPct}%
          </span>
        </div>
      </div>
    </div>
  );
}
