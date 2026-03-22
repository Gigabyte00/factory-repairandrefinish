'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { List, ChevronDown } from 'lucide-react';
import type { GuideStep } from '@/types';

interface TableOfContentsProps {
  steps: GuideStep[];
  className?: string;
}

export function TableOfContents({ steps, className }: TableOfContentsProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Collapse on mobile by default
  useEffect(() => {
    if (isMobile) setCollapsed(true);
  }, [isMobile]);

  // Scroll-spy using IntersectionObserver
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
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [steps]);

  const scrollToStep = useCallback((stepNumber: number) => {
    const el = document.getElementById(`step-${stepNumber}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    if (isMobile) setCollapsed(true);
  }, [isMobile]);

  const progressPct = Math.round((activeStep / steps.length) * 100);

  return (
    <nav
      className={cn(
        'rounded-xl border border-border bg-card p-4 lg:sticky lg:top-24',
        className
      )}
      aria-label="Table of contents"
    >
      {/* Header */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex w-full items-center justify-between cursor-pointer lg:cursor-default"
      >
        <div className="flex items-center gap-2">
          <List className="h-4 w-4 text-primary" />
          <h3 className="font-heading text-sm font-bold text-primary">
            Steps
          </h3>
          <span className="text-xs text-muted-foreground">
            ({activeStep}/{steps.length})
          </span>
        </div>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-muted-foreground transition-transform duration-200 lg:hidden',
            !collapsed && 'rotate-180'
          )}
        />
      </button>

      {/* Progress bar */}
      <div className="mt-3 h-1.5 w-full rounded-full bg-warm-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>
      <p className="mt-1 text-[10px] text-muted-foreground text-right">
        {progressPct}% complete
      </p>

      {/* Steps list */}
      {!collapsed && (
        <ol className="mt-3 space-y-0.5">
          {steps.map((step) => {
            const isActive = step.stepNumber === activeStep;
            const isPast = step.stepNumber < activeStep;

            return (
              <li key={step.stepNumber}>
                <button
                  onClick={() => scrollToStep(step.stepNumber)}
                  className={cn(
                    'flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-all duration-200 cursor-pointer',
                    isActive
                      ? 'bg-primary/10 text-primary font-medium'
                      : isPast
                        ? 'text-muted-foreground hover:bg-warm-50'
                        : 'text-foreground/70 hover:bg-warm-50'
                  )}
                >
                  <span
                    className={cn(
                      'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors',
                      isActive
                        ? 'bg-primary text-white'
                        : isPast
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-warm-100 text-warm-500'
                    )}
                  >
                    {isPast ? '✓' : step.stepNumber}
                  </span>
                  <span className="truncate">{step.title}</span>
                </button>
              </li>
            );
          })}
        </ol>
      )}
    </nav>
  );
}
