'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Info, ChevronDown } from 'lucide-react';

interface AffiliateDisclosureProps {
  variant?: 'inline' | 'full';
  className?: string;
}

export function AffiliateDisclosure({ variant = 'inline', className }: AffiliateDisclosureProps) {
  const [expanded, setExpanded] = useState(false);

  if (variant === 'inline') {
    return (
      <p className={cn('text-xs text-muted-foreground italic', className)}>
        <Info className="mr-1 inline-block h-3 w-3" />
        As an affiliate, we earn from qualifying purchases at no extra cost to you.
      </p>
    );
  }

  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-muted/50 p-4',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        <div className="flex-1">
          <p className="text-sm text-foreground">
            <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. We may earn a small commission if you purchase through these links, at no additional cost to you. This helps us keep creating free repair guides.
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-600 transition-colors cursor-pointer"
          >
            Why we have affiliate links
            <ChevronDown
              className={cn(
                'h-3 w-3 transition-transform duration-200',
                expanded && 'rotate-180'
              )}
            />
          </button>
          {expanded && (
            <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
              <p>
                Creating detailed, step-by-step repair guides takes significant time and expertise. Affiliate partnerships with trusted retailers like Home Depot, Lowe&apos;s, and Amazon allow us to recommend the exact products you need while earning a small commission to support our work. We only recommend products we&apos;d use ourselves, and our editorial recommendations are never influenced by affiliate relationships.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
