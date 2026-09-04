/**
 * ArticleCard — Claude Design handoff MdzzhuU0HOVgttYlXCitmA, 2026-04-25.
 * Adapted to Factory codebase (Post / Category from @/types, BookmarkButton
 * preserved, href defaults to /blog/{slug}, author/tested_days dropped since
 * those fields aren't in our schema).
 */
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, RefreshCw } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { BookmarkButton } from '@/components/ui/bookmark-button';
import { cn } from '@/lib/utils';
import type { Post, Category } from '@/types';

export interface ArticleCardProps {
  post: Post;
  category?: Category | null;
  variant?: 'default' | 'featured' | 'compact';
  /** Override the default /blog/{slug} URL */
  href?: string;
  className?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatPublishedDate(iso?: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
function formatShortDate(iso?: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
function getUpdatedBadge(updatedAt?: string | null, publishedAt?: string | null): string | null {
  if (!updatedAt || !publishedAt) return null;
  const gap = new Date(updatedAt).getTime() - new Date(publishedAt).getTime();
  if (gap <= 14 * 24 * 60 * 60 * 1000) return null;
  const days = Math.floor((Date.now() - new Date(updatedAt).getTime()) / (1000 * 60 * 60 * 24));
  if (days <= 0) return 'Updated today';
  if (days < 7) return `Updated ${days}d ago`;
  if (days < 30) return `Updated ${Math.floor(days / 7)}w ago`;
  if (days <= 60) return `Updated ${Math.floor(days / 30)}mo ago`;
  return null;
}
function estimateReadingTime(wc?: number | null): number {
  if (!wc) return 0;
  return Math.ceil(wc / 200);
}

// ─── Placeholder ──────────────────────────────────────────────────────────────
function PlaceholderImage({ className, label }: { className?: string; label?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden',
        'bg-[linear-gradient(135deg,hsl(var(--muted))_0%,hsl(var(--muted))_45%,hsl(var(--accent))_100%)]',
        className
      )}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <svg viewBox="0 0 64 64" className="relative h-12 w-12 text-foreground/30" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="32" cy="32" r="22" />
        <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none" />
        <line x1="32" y1="10" x2="32" y2="54" />
        <line x1="10" y1="32" x2="54" y2="32" />
        <line x1="16.5" y1="16.5" x2="47.5" y2="47.5" />
        <line x1="47.5" y1="16.5" x2="16.5" y2="47.5" />
      </svg>
      {label ? (
        <span className="absolute bottom-2 right-3 text-[10px] font-medium uppercase tracking-widest text-foreground/40">
          {label}
        </span>
      ) : null}
    </div>
  );
}

// ─── Sub-pieces ───────────────────────────────────────────────────────────────
function CategoryBadge({
  category,
  className,
  variant = 'overlay',
}: {
  category?: Category | null;
  className?: string;
  variant?: 'overlay' | 'eyebrow';
}) {
  if (!category) return null;
  if (variant === 'eyebrow') {
    return (
      <span className={cn('text-[11px] font-semibold uppercase tracking-[0.12em] text-[hsl(var(--primary))]', className)}>
        {category.name}
      </span>
    );
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/15 bg-[hsl(var(--primary))] px-2.5 py-1',
        'text-[10px] font-semibold uppercase tracking-[0.12em] text-[hsl(var(--primary-foreground))]',
        'shadow-[0_2px_8px_rgba(0,0,0,0.25)]',
        className
      )}
    >
      {category.name}
    </span>
  );
}

function ArticleImage({
  src,
  alt,
  sizes,
  priority,
  className,
}: {
  src?: string | null;
  alt?: string | null;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  if (!src) return <PlaceholderImage className={className} />;
  return (
    <Image
      src={src}
      alt={alt ?? ''}
      fill
      sizes={sizes}
      priority={priority}
      className={cn('object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]', className)}
    />
  );
}

// ─── Default variant ──────────────────────────────────────────────────────────
function DefaultArticleCard({ post, category, href, className }: Required<Pick<ArticleCardProps, 'post' | 'href'>> & ArticleCardProps) {
  const updatedBadge = getUpdatedBadge(post.updated_at, post.published_at);
  const dateLabel = updatedBadge ?? formatPublishedDate(post.published_at);
  const readingTime = post.reading_time_minutes || estimateReadingTime(post.word_count);

  return (
    <Card
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-0',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-0.5 hover:border-[hsl(var(--primary)/0.4)]',
        'hover:shadow-[0_12px_32px_-12px_hsl(var(--primary)/0.25),0_4px_12px_-4px_hsl(var(--primary)/0.15)]',
        className
      )}
    >
      {/* Bookmark — hover/focus reveal */}
      <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
        <BookmarkButton
          bookmark={{
            id: `post-${post.slug}`,
            type: 'post',
            title: post.title,
            url: href,
            image: post.featured_image_url ?? undefined,
            excerpt: post.excerpt ?? undefined,
          }}
        />
      </div>

      <Link href={href} className="flex h-full flex-col focus:outline-none">
        {/* Image with category badge anchored bottom-left */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
          <ArticleImage
            src={post.featured_image_url}
            alt={post.featured_image_alt ?? post.title}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
          />
          {category ? <CategoryBadge category={category} className="absolute bottom-3 left-3" /> : null}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3
            className={cn(
              'text-lg font-semibold leading-snug tracking-tight text-foreground',
              'line-clamp-2 transition-colors duration-200 group-hover:text-[hsl(var(--primary))]'
            )}
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            {post.title}
          </h3>

          {post.excerpt ? (
            <p
              className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground"
              style={{ textWrap: 'pretty' } as React.CSSProperties}
            >
              {post.excerpt}
            </p>
          ) : null}

          <div className="mt-auto pt-4">
            <div className="flex items-center justify-between gap-3 border-t border-border/60 pt-3">
              <div className="flex min-w-0 items-center gap-3 text-xs text-muted-foreground">
                {dateLabel && (
                  <span className="inline-flex items-center gap-1.5 truncate">
                    {updatedBadge ? (
                      <RefreshCw className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--primary))]" aria-hidden="true" />
                    ) : (
                      <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    )}
                    <span className="truncate">{dateLabel}</span>
                  </span>
                )}
                {readingTime > 0 ? (
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {readingTime} min read
                  </span>
                ) : null}
              </div>

              <span
                className={cn(
                  'inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1',
                  'text-[11px] font-semibold uppercase tracking-wide',
                  'bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]',
                  'opacity-0 -translate-x-1 transition-all duration-200 ease-out',
                  'group-hover:opacity-100 group-hover:translate-x-0',
                  'group-focus-visible:opacity-100 group-focus-visible:translate-x-0'
                )}
                aria-hidden="true"
              >
                Read
                <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}

// ─── Featured variant ─────────────────────────────────────────────────────────
function FeaturedArticleCard({ post, category, href, className }: Required<Pick<ArticleCardProps, 'post' | 'href'>> & ArticleCardProps) {
  const updatedLabel = post.updated_at ? formatShortDate(post.updated_at) : null;

  return (
    <Card
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-card p-0',
        'transition-all duration-300 ease-out',
        'hover:border-[hsl(var(--primary)/0.4)]',
        'hover:shadow-[0_20px_48px_-16px_hsl(var(--primary)/0.25),0_8px_20px_-8px_hsl(var(--primary)/0.18)]',
        className
      )}
    >
      <div className="absolute top-3 right-3 z-20">
        <BookmarkButton
          bookmark={{
            id: `post-${post.slug}`,
            type: 'post',
            title: post.title,
            url: href,
            image: post.featured_image_url ?? undefined,
            excerpt: post.excerpt ?? undefined,
          }}
        />
      </div>
      <Link
        href={href}
        className={cn(
          'flex h-full flex-col focus:outline-none',
          'md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-stretch'
        )}
      >
        {/* Copy — left on md+ */}
        <div className="order-2 flex flex-col justify-center gap-5 p-6 md:order-1 md:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-2">
            {category ? (
              <span className="inline-flex items-center rounded-full bg-[hsl(var(--primary))] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--primary-foreground))]">
                {category.name}
              </span>
            ) : null}
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Featured Review
            </span>
          </div>

          <h2
            className={cn(
              'text-2xl font-semibold leading-[1.15] tracking-tight text-foreground',
              'md:text-3xl lg:text-[34px]',
              'transition-colors duration-200 group-hover:text-[hsl(var(--primary))]'
            )}
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            {post.title}
          </h2>

          {post.excerpt ? (
            <p
              className="line-clamp-3 text-base leading-relaxed text-muted-foreground md:text-[17px]"
              style={{ textWrap: 'pretty' } as React.CSSProperties}
            >
              {post.excerpt}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground md:text-sm">
            {post.published_at ? (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                {formatPublishedDate(post.published_at)}
              </span>
            ) : null}
            {updatedLabel ? (
              <>
                <span className="text-border" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <RefreshCw className="h-3.5 w-3.5 text-[hsl(var(--primary))]" aria-hidden="true" />
                  Updated {updatedLabel}
                </span>
              </>
            ) : null}
          </div>

          <div className="pt-1">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--primary))] transition-transform duration-200">
              Read full review
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </div>

        {/* Image — right on md+ */}
        <div
          className={cn(
            'order-1 relative w-full overflow-hidden bg-muted md:order-2',
            'aspect-[16/10] md:aspect-auto md:h-full md:min-h-[420px]'
          )}
        >
          <ArticleImage
            src={post.featured_image_url}
            alt={post.featured_image_alt ?? post.title}
            sizes="(min-width: 1024px) 60vw, 100vw"
            priority
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-border md:block" />
        </div>
      </Link>
    </Card>
  );
}

// ─── Compact variant ──────────────────────────────────────────────────────────
function CompactArticleCard({ post, category, href, className }: Required<Pick<ArticleCardProps, 'post' | 'href'>> & ArticleCardProps) {
  return (
    <Card
      className={cn(
        'group rounded-lg border border-transparent bg-transparent p-0 shadow-none',
        'transition-colors duration-200',
        'hover:bg-[hsl(var(--muted)/0.5)] hover:border-border',
        className
      )}
    >
      <Link href={href} className="flex items-center gap-4 p-2.5 focus:outline-none">
        <div
          className={cn(
            'relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-muted',
            'ring-1 ring-[hsl(var(--primary)/0.2)]',
            'transition-shadow duration-200',
            'group-hover:ring-[hsl(var(--primary)/0.4)]'
          )}
        >
          <ArticleImage src={post.featured_image_url} alt={post.featured_image_alt ?? post.title} sizes="80px" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          {category ? <CategoryBadge category={category} variant="eyebrow" /> : null}
          <h4
            className={cn(
              'line-clamp-2 text-sm font-semibold leading-snug tracking-tight text-foreground',
              'transition-colors duration-200 group-hover:text-[hsl(var(--primary))]'
            )}
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            {post.title}
          </h4>
          {post.published_at && (
            <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" aria-hidden="true" />
              <time dateTime={post.published_at}>{formatPublishedDate(post.published_at)}</time>
            </div>
          )}
        </div>

        <ArrowRight
          className={cn(
            'h-4 w-4 shrink-0 text-muted-foreground',
            'opacity-0 -translate-x-1 transition-all duration-200',
            'group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[hsl(var(--primary))]'
          )}
          aria-hidden="true"
        />
      </Link>
    </Card>
  );
}

// ─── Public entry ─────────────────────────────────────────────────────────────
export function ArticleCard({ post, category, variant = 'default', href, className }: ArticleCardProps) {
  const resolvedHref = href || `/blog/${post.slug}`;
  const props = { post, category, href: resolvedHref, className };
  if (variant === 'featured') return <FeaturedArticleCard {...props} />;
  if (variant === 'compact') return <CompactArticleCard {...props} />;
  return <DefaultArticleCard {...props} />;
}

export default ArticleCard;
