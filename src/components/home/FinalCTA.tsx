/**
 * FinalCTA — homepage 'Ready to Ride Electric?' bottom-of-page conversion.
 * Claude Design handoff LiLmFmovDZCRl2PFUzv96w (2026-04-25).
 */
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface FinalCTAProps {
  siteName: string;
  niche?: string | null;
  heading?: string;
  subtext?: string;
  ctaPrimaryText?: string;
  ctaPrimaryUrl?: string;
  ctaSecondaryText?: string;
  ctaSecondaryUrl?: string;
}

export function FinalCTA({
  siteName,
  niche,
  heading = 'Ready to Ride Electric?',
  subtext = 'Browse our expert reviews, compare options, and find the right fit — all completely free.',
  ctaPrimaryText = 'Start Comparing',
  ctaPrimaryUrl = '/blog',
  ctaSecondaryText = 'Compare Models',
  ctaSecondaryUrl = '/compare/builder',
}: FinalCTAProps) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, currentColor 1px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          color: 'hsl(var(--foreground))',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Get Started
            </p>
            <h2
              id="final-cta-heading"
              className="mt-4 text-balance font-semibold tracking-tight text-foreground text-3xl sm:text-4xl lg:text-5xl"
              style={{ lineHeight: 1.05 }}
            >
              {heading}
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {subtext}
            </p>
            {niche ? (
              <p className="mt-3 text-sm text-muted-foreground/80">
                Trusted {niche} guidance from {siteName}.
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-stretch">
              <Button
                asChild
                size="lg"
                className="group h-12 w-full rounded-full px-6 text-base font-semibold shadow-sm transition-all hover:shadow-md sm:w-auto lg:w-full"
              >
                <Link href={ctaPrimaryUrl}>
                  <span>{ctaPrimaryText}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="h-12 w-full rounded-full px-6 text-base font-medium text-foreground hover:bg-foreground/5 sm:w-auto lg:w-full"
              >
                <Link href={ctaSecondaryUrl}>{ctaSecondaryText}</Link>
              </Button>
            </div>
            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground lg:text-left">
              Free guides, unbiased reviews, no spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
