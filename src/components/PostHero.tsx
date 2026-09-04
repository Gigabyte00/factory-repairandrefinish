/**
 * PostHero — editorial hero for post-detail templates.
 * Wirecutter-style headline + byline strip used on /blog/<slug>.
 */
import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, RefreshCw } from 'lucide-react';

interface PostAuthor {
  name: string;
  slug?: string | null;
  title?: string | null;
  avatar_url?: string | null;
}

interface PostHeroProps {
  /** Eyebrow text — e.g. category name + "Review" / "Guide" / "Comparison". */
  eyebrow: string;
  /** Article title (h1). */
  title: string;
  /** Optional excerpt below title. */
  subtitle?: ReactNode;
  /** Author for byline. */
  author?: PostAuthor | null;
  /** ISO date string for published date. */
  publishedAt?: string | null;
  /** ISO date string for updated date. */
  updatedAt?: string | null;
  /** Reading time minutes. */
  readingTime?: number | null;
  /** Optional badge (e.g. "Tested 60 days"). */
  badge?: ReactNode;
}

function formatDate(iso?: string | null) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');
}

export function PostHero({
  eyebrow,
  title,
  subtitle,
  author,
  publishedAt,
  updatedAt,
  readingTime,
  badge,
}: PostHeroProps) {
  const published = formatDate(publishedAt);
  const updated = formatDate(updatedAt);
  const showUpdated =
    updated &&
    publishedAt &&
    new Date(updatedAt!).getTime() - new Date(publishedAt!).getTime() > 14 * 24 * 60 * 60 * 1000;

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16 lg:py-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          <p
            className="text-[11px] font-semibold uppercase sm:text-xs"
            style={{ letterSpacing: '0.2em', color: 'hsl(var(--primary))' }}
          >
            {eyebrow}
          </p>
        </div>

        {/* Title — display scale */}
        <h1
          className="mt-5 font-extrabold text-foreground"
          style={{ fontSize: 'clamp(2rem, 2.5vw + 1rem, 3.75rem)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
        >
          {title}
        </h1>

        {/* Subtitle / excerpt */}
        {subtitle && (
          <p
            className="mt-5 max-w-[58ch] leading-[1.55] text-muted-foreground"
            style={{ fontSize: 'clamp(1rem, 0.4vw + 0.95rem, 1.2rem)' }}
          >
            {subtitle}
          </p>
        )}

        {/* Byline + meta strip */}
        {(author || published || readingTime || badge) && (
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
            {/* Author */}
            {author && (
              <div className="flex items-center gap-2.5">
                {author.avatar_url ? (
                  <Image
                    src={author.avatar_url}
                    alt={author.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover ring-1 ring-border"
                  />
                ) : (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary ring-1 ring-primary/20">
                    {getInitials(author.name)}
                  </span>
                )}
                <span>
                  by{' '}
                  {author.slug ? (
                    <Link href={`/authors/${author.slug}`} className="font-semibold text-foreground hover:text-primary">
                      {author.name}
                    </Link>
                  ) : (
                    <span className="font-semibold text-foreground">{author.name}</span>
                  )}
                  {author.title && <span className="text-muted-foreground"> · {author.title}</span>}
                </span>
              </div>
            )}

            {/* Published */}
            {published && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                {published}
              </span>
            )}

            {/* Updated */}
            {showUpdated && updated && (
              <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
                Updated {updated}
              </span>
            )}

            {/* Reading time */}
            {readingTime && readingTime > 0 && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {readingTime} min read
              </span>
            )}

            {/* Custom badge (e.g. "Tested 60 days") */}
            {badge}
          </div>
        )}
      </div>
    </header>
  );
}
