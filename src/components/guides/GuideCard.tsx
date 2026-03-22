'use client';

import Link from 'next/link';
import { cn, getDifficultyColor, getDifficultyLabel, formatCostRange, truncate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Clock, DollarSign, Wrench } from 'lucide-react';
import { getCategoryBySlug } from '@/lib/categories-data';
import type { Guide } from '@/types';

interface GuideCardProps {
  guide: Guide;
  variant?: 'default' | 'featured';
  className?: string;
}

export function GuideCard({ guide, variant = 'default', className }: GuideCardProps) {
  const category = getCategoryBySlug(guide.category);
  const difficultyColors = getDifficultyColor(guide.difficulty);

  if (variant === 'featured') {
    return (
      <Link
        href={`/guides/${guide.slug}`}
        className={cn(
          'group grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-xl border border-border bg-card',
          'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
          className
        )}
      >
        {/* Image */}
        <div
          className="relative aspect-video md:aspect-auto min-h-[240px]"
          style={{
            background: category
              ? `linear-gradient(135deg, ${category.color}20, ${category.color}40)`
              : 'linear-gradient(135deg, var(--primary-100), var(--primary-200))',
          }}
        >
          <div className="hero-gradient absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <span className="text-4xl mb-2 block">🛠️</span>
              <p className="text-sm text-white/80">{guide.title}</p>
            </div>
          </div>

          {/* Category badge */}
          {category && (
            <div className="absolute top-4 left-4 z-10">
              <Badge
                className="text-white border-0"
                style={{ backgroundColor: category.color }}
              >
                {category.name}
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-6 lg:p-8">
          <div className="mb-3 flex items-center gap-2">
            <Badge className={cn(difficultyColors.badge, 'border-0')}>
              {getDifficultyLabel(guide.difficulty)}
            </Badge>
          </div>

          <h2 className="font-heading text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
            {guide.title}
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {truncate(guide.excerpt, 200)}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {guide.estimatedTime}
            </span>
            <span className="flex items-center gap-1">
              <DollarSign className="h-3.5 w-3.5" />
              {formatCostRange(guide.estimatedCost.low, guide.estimatedCost.high)}
            </span>
            <span className="flex items-center gap-1">
              <Wrench className="h-3.5 w-3.5" />
              {guide.tools.length} tools
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Default card
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl border border-border bg-card',
        'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
        className
      )}
    >
      {/* Image */}
      <div
        className="relative aspect-video"
        style={{
          background: category
            ? `linear-gradient(135deg, ${category.color}15, ${category.color}35)`
            : 'linear-gradient(135deg, var(--primary-100), var(--primary-200))',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl">🛠️</span>
        </div>

        {/* Category badge */}
        {category && (
          <div className="absolute top-3 left-3 z-10">
            <Badge
              className="text-white border-0 text-[10px]"
              style={{ backgroundColor: category.color }}
            >
              {category.name}
            </Badge>
          </div>
        )}

        {/* Difficulty badge */}
        <div className="absolute top-3 right-3 z-10">
          <Badge className={cn(difficultyColors.badge, 'border-0 text-[10px]')}>
            {getDifficultyLabel(guide.difficulty)}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {guide.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {truncate(guide.excerpt, 120)}
        </p>

        <div className="mt-auto flex items-center gap-3 text-xs text-muted-foreground border-t border-border pt-3">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {guide.estimatedTime}
          </span>
          <span className="flex items-center gap-1">
            <DollarSign className="h-3 w-3" />
            {formatCostRange(guide.estimatedCost.low, guide.estimatedCost.high)}
          </span>
          <span className="flex items-center gap-1">
            <Wrench className="h-3 w-3" />
            {guide.tools.length}
          </span>
        </div>
      </div>
    </Link>
  );
}
