'use client';

import { cn } from '@/lib/utils';
import { GuideCard } from './GuideCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { guides } from '@/lib/guides-data';
import type { Guide } from '@/types';

interface RelatedGuidesProps {
  currentGuide: Guide;
  className?: string;
  maxCount?: number;
}

export function RelatedGuides({
  currentGuide,
  className,
  maxCount = 3,
}: RelatedGuidesProps) {
  // Find related guides: first try explicit relatedGuides, then same category
  let related: Guide[] = [];

  if (currentGuide.relatedGuides && currentGuide.relatedGuides.length > 0) {
    related = currentGuide.relatedGuides
      .map((slug) => guides.find((g) => g.slug === slug))
      .filter((g): g is Guide => g != null && g.status === 'published');
  }

  // Fill remaining slots with same-category guides
  if (related.length < maxCount) {
    const sameCategoryGuides = guides.filter(
      (g) =>
        g.category === currentGuide.category &&
        g.id !== currentGuide.id &&
        g.status === 'published' &&
        !related.some((r) => r.id === g.id)
    );
    related = [...related, ...sameCategoryGuides].slice(0, maxCount);
  }

  // If still not enough, grab popular guides
  if (related.length < maxCount) {
    const otherGuides = guides.filter(
      (g) =>
        g.id !== currentGuide.id &&
        g.status === 'published' &&
        !related.some((r) => r.id === g.id)
    );
    related = [...related, ...otherGuides].slice(0, maxCount);
  }

  if (related.length === 0) return null;

  return (
    <section className={cn('', className)}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-2xl font-bold text-primary">
          More Guides You&apos;ll Love
        </h2>
        <Link
          href="/guides"
          className="hidden sm:flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-600 transition-colors"
        >
          View all guides
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto no-scrollbar">
        {related.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>

      <div className="mt-4 sm:hidden text-center">
        <Link
          href="/guides"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-600 transition-colors"
        >
          View all guides
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
