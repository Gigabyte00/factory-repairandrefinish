/**
 * CategoryGrid — homepage 'Browse by Category' section.
 * Claude Design handoff (CategoryGridHomeSection, 2026-04-25).
 * Adapted: Factory Category type with nullable description, /category/{slug} path.
 * CategoryList compact variant preserved for sidebar/footer use.
 */
import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Bike,
  Mountain,
  Truck,
  Zap,
  Wrench,
  Battery,
  Compass,
  Users,
  Gauge,
  ShieldCheck,
  Tag,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CategoryIcon } from '@/components/ui/category-icon';
import { cn } from '@/lib/utils';
import type { Category } from '@/types';

interface CategoryWithCount extends Category {
  postCount?: number;
}

interface CategoryGridProps {
  categories: CategoryWithCount[];
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
}

const ICON_BY_SLUG: Record<string, LucideIcon> = {
  'commuter-ebikes': Bike,
  commuter: Bike,
  'mountain-ebikes': Mountain,
  mountain: Mountain,
  mtb: Mountain,
  'cargo-ebikes': Truck,
  cargo: Truck,
  utility: Truck,
  'fast-ebikes': Zap,
  performance: Zap,
  speed: Zap,
  'maintenance-repair': Wrench,
  maintenance: Wrench,
  repair: Wrench,
  diy: Wrench,
  'batteries-range': Battery,
  batteries: Battery,
  range: Battery,
  'touring-adventure': Compass,
  touring: Compass,
  adventure: Compass,
  'family-kids': Users,
  family: Users,
  'buyers-guides': Gauge,
  guides: Gauge,
  reviews: ShieldCheck,
  safety: ShieldCheck,
  deals: Tag,
  news: Sparkles,
};

function getIcon(slug: string, name: string): LucideIcon {
  const key = slug.toLowerCase();
  if (ICON_BY_SLUG[key]) return ICON_BY_SLUG[key];
  const nameKey = name.toLowerCase().replace(/\s+/g, '-');
  if (ICON_BY_SLUG[nameKey]) return ICON_BY_SLUG[nameKey];
  for (const token of name.toLowerCase().split(/\s+/)) {
    if (ICON_BY_SLUG[token]) return ICON_BY_SLUG[token];
  }
  return Tag;
}

const formatCount = (n: number) => (n === 1 ? '1 article' : `${n.toLocaleString('en-US')} articles`);

export function CategoryGrid({
  categories,
  title = 'Browse by Category',
  subtitle = 'Find in-depth guides and reviews across all our categories',
  eyebrow = 'Categories',
  className,
}: CategoryGridProps) {
  if (categories.length === 0) return null;

  return (
    <section
      aria-labelledby="category-grid-heading"
      className={cn('py-16 lg:py-24', className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
          <h2
            id="category-grid-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <ul
          role="list"
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-6"
        >
          {categories.map((category) => {
            const Icon = getIcon(category.slug, category.name);
            const count = category.postCount ?? 0;
            return (
              <li key={category.id} className="group">
                <Link
                  href={`/category/${category.slug}`}
                  aria-label={`Browse ${category.name}${count > 0 ? ` — ${formatCount(count)}` : ''}`}
                  className="block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Card
                    className={cn(
                      'relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 lg:p-8',
                      'transition-all duration-300 ease-out',
                      'group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10',
                      'group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-transparent'
                    )}
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        'flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary',
                        'transition-colors duration-300 ease-out',
                        'group-hover:bg-primary/15'
                      )}
                      aria-hidden="true"
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>

                    {/* Body */}
                    <div className="mt-5 flex flex-1 flex-col">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {category.name}
                      </h3>
                      {category.description && (
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                          {category.description}
                        </p>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between gap-3 pt-4">
                      {count > 0 && (
                        <Badge
                          variant="secondary"
                          className="rounded-full border-transparent bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary hover:bg-primary/15"
                        >
                          {formatCount(count)}
                        </Badge>
                      )}

                      <span
                        className={cn(
                          'inline-flex items-center gap-1 text-sm font-semibold text-primary',
                          'translate-x-1 opacity-0 transition-all duration-300 ease-out',
                          'group-hover:translate-x-0 group-hover:opacity-100',
                          'group-focus-visible:translate-x-0 group-focus-visible:opacity-100'
                        )}
                        aria-hidden="true"
                      >
                        Explore
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                          strokeWidth={2}
                        />
                      </span>
                    </div>
                  </Card>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/**
 * Compact version of CategoryGrid for sidebar or footer
 */
export function CategoryList({ categories }: { categories: Category[] }) {
  if (categories.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.slug}`}>
          <Badge
            variant="outline"
            className="cursor-pointer hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
          >
            <CategoryIcon slug={category.slug} size="sm" className="mr-1" />
            {category.name}
          </Badge>
        </Link>
      ))}
    </div>
  );
}
