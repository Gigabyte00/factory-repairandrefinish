/**
 * PageHero — reusable editorial hero block for non-homepage pages.
 * Captures the Claude Design dark/eyebrow/display-headline pattern that
 * we want to apply consistently across /about, /methodology, /faq,
 * /glossary, /authors, /tools, /blog, /offers, /category etc.
 *
 * Two visual variants:
 *   - dark: black bg, dot-grid, primary accent. Used for primary editorial pages.
 *   - light: muted bg, primary accent. Used for listings inside the content flow.
 */
import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  /** Subtitle / description below the headline. Optional. */
  subtitle?: ReactNode;
  /** Variant: 'dark' (black bg) or 'light' (muted bg). Default 'dark'. */
  variant?: 'dark' | 'light';
  /** Optional metadata strip below subtitle (e.g., Last Updated · X reviewers). */
  meta?: ReactNode;
  /** Children render below the meta strip. Use for stats grids, filter chips, etc. */
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  variant = 'dark',
  meta,
  children,
}: PageHeroProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={
        isDark
          ? 'relative isolate overflow-hidden bg-[#0a0d12] text-white'
          : 'relative bg-muted/30'
      }
    >
      {/* Backdrop pattern */}
      {isDark && (
        <>
          <div
            className="absolute inset-0 -z-10 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
        </>
      )}

      <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-20 lg:px-16 lg:pb-24 lg:pt-28">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: 'hsl(var(--primary))' }}
          />
          <p
            className="text-[11px] font-semibold uppercase sm:text-xs"
            style={{ letterSpacing: '0.2em', color: 'hsl(var(--primary))' }}
          >
            {eyebrow}
          </p>
        </div>

        <h1
          className={`mt-6 max-w-[20ch] font-extrabold sm:mt-8 ${
            isDark ? 'text-white' : 'text-foreground'
          }`}
          style={{
            fontSize: 'clamp(2.25rem, 3.5vw + 1rem, 4.5rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.02,
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`mt-6 max-w-[58ch] leading-[1.55] sm:mt-7 ${
              isDark ? 'text-white/65' : 'text-muted-foreground'
            }`}
            style={{ fontSize: 'clamp(1rem, 0.4vw + 0.95rem, 1.25rem)' }}
          >
            {subtitle}
          </p>
        )}

        {meta && (
          <div
            className={`mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm ${
              isDark ? 'text-white/55' : 'text-muted-foreground'
            }`}
          >
            {meta}
          </div>
        )}

        {children}
      </div>

      {isDark && (
        <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />
      )}
    </section>
  );
}
