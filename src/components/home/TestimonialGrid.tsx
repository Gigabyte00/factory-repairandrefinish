/**
 * TestimonialGrid — editorial pull-quotes from readers.
 * Claude Design handoff 0xHWek6rNb11x497clkj8w (2026-04-25).
 */
import * as React from 'react';
import { Star } from 'lucide-react';

export interface Testimonial {
  name: string;
  context: string;
  quote: string;
  rating: number;
  isSample?: boolean;
}

export interface TestimonialGridProps {
  testimonials: Testimonial[];
  sampleDisclaimer?: string;
}

const DEFAULT_DISCLAIMER = 'Representative reader feedback. Real name, edited for clarity.';

function StarRating({ rating }: { rating: number }) {
  const rounded = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rounded} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={
            i < rounded
              ? 'h-4 w-4 fill-primary text-primary'
              : 'h-4 w-4 fill-transparent text-primary/30'
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function getInitials(name: string | undefined | null) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative flex h-full flex-col rounded-2xl border bg-card p-8 lg:p-10 shadow-sm transition-shadow hover:shadow-md">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-4 select-none text-6xl leading-none text-primary opacity-20"
      >
        &ldquo;
      </span>

      {testimonial.isSample ? (
        <span className="mb-5 inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-primary">
          Sample testimonial
        </span>
      ) : null}

      <blockquote className="relative z-10 flex-1 pt-2">
        <p className="text-lg leading-relaxed text-foreground">{testimonial.quote}</p>
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-3 border-t pt-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary ring-2 ring-primary/30 ring-offset-2 ring-offset-card">
          {getInitials(testimonial.name)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate font-semibold text-foreground">{testimonial.name}</div>
          <div className="truncate text-sm text-muted-foreground">{testimonial.context}</div>
        </div>
        <StarRating rating={testimonial.rating} />
      </figcaption>
    </figure>
  );
}

export function TestimonialGrid({
  testimonials,
  sampleDisclaimer = DEFAULT_DISCLAIMER,
}: TestimonialGridProps) {
  if (!testimonials?.length) return null;

  const hasSample = testimonials.some((t) => t.isSample);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <header className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Reader Feedback
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What Riders Are Saying
          </h2>
        </header>

        <ul role="list" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <li key={`${t.name}-${i}`} className="h-full">
              <TestimonialCard testimonial={t} />
            </li>
          ))}
        </ul>

        {hasSample ? (
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
            <span className="mr-2 inline-flex items-center rounded-full border bg-muted px-2 py-0.5 font-medium uppercase tracking-wider text-muted-foreground">
              Disclosure
            </span>
            {sampleDisclaimer}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default TestimonialGrid;
