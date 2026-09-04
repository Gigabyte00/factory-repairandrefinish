/**
 * FeaturedOffers — homepage 'Top Picks' section.
 * Claude Design handoff 8MS1H5tuiPjyBk0ZX6sfwQ (2026-04-25).
 * Adapted: Factory Offer type with nullable fields, /offers/{slug} path.
 */
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { isRenderableImageSrc } from '@/lib/utils';
import type { Offer } from '@/types';

interface FeaturedOffersProps {
  offers: Offer[];
  siteId?: string;
  title?: string;
  subtitle?: string;
}

const formatPrice = (price: number | string | null | undefined) => {
  if (price == null || price === '') return '';
  if (typeof price === 'number') {
    return `$${price.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  }
  return /^\d/.test(price) ? `$${price}` : price;
};

function RatingStars({ rating, size = 14 }: { rating: number; size?: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75;
  const isFull = (i: number) => i < full || (i === full && rating - full >= 0.75);
  const isHalf = (i: number) => i === full && hasHalf;

  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="relative inline-flex">
          <Star size={size} className="text-muted-foreground/30" strokeWidth={1.5} fill="currentColor" />
          {(isFull(i) || isHalf(i)) && (
            <span className="absolute inset-0 overflow-hidden" style={{ width: isHalf(i) ? '50%' : '100%' }}>
              <Star size={size} className="text-amber-500" strokeWidth={1.5} fill="currentColor" />
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export function FeaturedOffers({
  offers,
  siteId,
  title = 'Top Picks',
  subtitle = 'Hand-tested by our editors. Every bike on this list has been ridden, measured, and put through its paces — so you can buy with confidence.',
}: FeaturedOffersProps) {
  if (!offers || offers.length === 0) return null;

  const hero = offers.find((o) => o.is_featured) ?? offers[0];
  if (!hero) return null;
  const secondary = offers.filter((o) => o !== hero).slice(0, 3);

  return (
    <section data-site-id={siteId} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
              Our Recommendations
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          <Link
            href="/offers"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0 self-start lg:self-end"
          >
            View all offers
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* HERO */}
          <article className="lg:col-span-2 group rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-5 h-full">
              {/* Image */}
              <Link
                href={`/offers/${hero.slug}`}
                className="relative md:col-span-3 aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden bg-muted"
              >
                {isRenderableImageSrc(hero.featured_image_url) ? (
                  <Image
                    src={hero.featured_image_url!}
                    alt={hero.name}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-card">
                    <svg viewBox="0 0 64 64" className="h-20 w-20 text-foreground/20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <circle cx="32" cy="32" r="22" />
                      <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none" />
                      <line x1="32" y1="10" x2="32" y2="54" />
                      <line x1="10" y1="32" x2="54" y2="32" />
                    </svg>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground hover:bg-primary gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide shadow-md">
                    <Award size={14} strokeWidth={2.25} />
                    Editor&apos;s Pick
                  </Badge>
                </div>
              </Link>

              {/* Content */}
              <div className="md:col-span-2 p-6 lg:p-8 flex flex-col">
                {hero.rating != null && (
                  <div className="flex items-center gap-2 mb-3">
                    <RatingStars rating={hero.rating} size={16} />
                    <span className="text-sm font-medium text-foreground tabular-nums">
                      {hero.rating.toFixed(1)}
                    </span>
                  </div>
                )}

                <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-foreground leading-tight mb-3">
                  <Link href={`/offers/${hero.slug}`} className="hover:text-primary transition-colors">
                    {hero.name}
                  </Link>
                </h3>

                {hero.short_description && (
                  <p className="text-[15px] text-muted-foreground leading-relaxed line-clamp-2 mb-6 text-pretty">
                    {hero.short_description}
                  </p>
                )}

                {/* Price block */}
                <div className="mt-auto space-y-4 pt-4 border-t border-border">
                  <div className="flex items-baseline justify-between gap-3">
                    {hero.current_price != null && (
                      <span className="text-3xl font-semibold tracking-tight text-foreground tabular-nums">
                        {formatPrice(hero.current_price)}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Best price right now
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    {hero.affiliate_url && (
                      <Button asChild size="lg" className="flex-1 font-semibold">
                        <Link href={`/go/${hero.slug}`} target="_blank" rel="noopener nofollow sponsored">
                          Check price Buy options
                          <ArrowRight size={16} className="ml-1.5" />
                        </Link>
                      </Button>
                    )}
                    <Button asChild variant="ghost" size="lg" className="text-foreground hover:text-primary">
                      <Link href={`/offers/${hero.slug}`}>Read review</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* SECONDARY */}
          <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-6">
            {secondary.map((offer) => (
              <article
                key={offer.slug}
                className="group rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
                <Link
                  href={`/offers/${offer.slug}`}
                  className="relative aspect-[16/10] overflow-hidden bg-muted block"
                >
                  {isRenderableImageSrc(offer.featured_image_url) ? (
                    <Image
                      src={offer.featured_image_url!}
                      alt={offer.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                  )}
                </Link>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  {offer.rating != null && (
                    <div className="flex items-center gap-1.5">
                      <RatingStars rating={offer.rating} size={12} />
                      <span className="text-xs font-medium text-muted-foreground tabular-nums">
                        {offer.rating.toFixed(1)}
                      </span>
                    </div>
                  )}

                  <h3 className="text-base font-semibold tracking-tight text-foreground leading-snug line-clamp-2">
                    <Link href={`/offers/${offer.slug}`} className="hover:text-primary transition-colors">
                      {offer.name}
                    </Link>
                  </h3>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-border">
                    {offer.current_price != null && (
                      <span className="text-lg font-semibold tracking-tight text-foreground tabular-nums">
                        {formatPrice(offer.current_price)}
                      </span>
                    )}
                    {offer.affiliate_url && (
                      <Link
                        href={`/go/${offer.slug}`}
                        target="_blank"
                        rel="noopener nofollow sponsored"
                        className="group/btn inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        Buy
                        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
