'use client';

import { cn } from '@/lib/utils';
import { Lightbulb, AlertTriangle, ImageIcon } from 'lucide-react';
import type { GuideStep } from '@/types';

interface GuideStepCardProps {
  step: GuideStep;
  totalSteps: number;
  className?: string;
}

export function GuideStepCard({ step, totalSteps, className }: GuideStepCardProps) {
  const isLastStep = step.stepNumber === totalSteps;

  return (
    <div
      id={`step-${step.stepNumber}`}
      className={cn('relative pl-14 pb-10', className)}
    >
      {/* Step number circle */}
      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-heading font-bold text-sm shadow-md">
        {step.stepNumber}
      </div>

      {/* Connecting line */}
      {!isLastStep && (
        <div className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-warm-200" />
      )}

      {/* Content */}
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <h3 className="font-heading text-lg font-bold text-primary mb-3">
          {step.title}
        </h3>

        <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed mb-4">
          {step.description.split('\n').map((paragraph, i) => (
            <p key={i} className={i > 0 ? 'mt-2' : ''}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Image placeholder */}
        {step.imagePrompt && (
          <div className="mb-4 overflow-hidden rounded-lg border border-warm-200 bg-gradient-to-br from-warm-50 to-warm-100">
            <div className="flex items-center justify-center p-8">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-2 h-10 w-10 text-warm-400" />
                <p className="text-xs text-warm-500 max-w-md italic leading-relaxed">
                  {step.imagePrompt}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Pro tip */}
        {step.proTip && (
          <div className="rounded-lg bg-gradient-to-r from-emerald-50 to-emerald-50/50 border border-emerald-200/60 p-4 mb-3">
            <div className="flex gap-3">
              <Lightbulb className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                  Pro Tip
                </p>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  {step.proTip}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Warning */}
        {step.warning && (
          <div className="rounded-lg bg-gradient-to-r from-amber-50 to-red-50/50 border border-amber-200/60 p-4">
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                  Warning
                </p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  {step.warning}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
