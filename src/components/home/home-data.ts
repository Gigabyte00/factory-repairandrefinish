import type { SiteContext, Post, Category, Offer } from '@/types';

/**
 * HomeData — the FIXED prop contract for the homepage presentation layer.
 *
 * The server wrapper (src/app/page.tsx) owns all data fetching and assembles this
 * object; the <Home> presentation component (and every per-site bespoke rewrite of it)
 * receives it as typed props and is free to render any UI on top of it.
 *
 * This file is the single stable seam between data and presentation — do NOT move the
 * contract into Home.tsx, because Home.tsx is rewritten per site. Bespoke homes import
 * `import type { HomeData } from './home-data'` and build freely against it.
 */

export type HeroVariant = 'dark' | 'split' | 'minimal' | 'gradient-brand';

export interface HomeHero {
  tagline: string;
  subtitle: string;
  accentWord: string | null;
  variant: HeroVariant;
  imageUrl?: string;
  imageAlt?: string;
  backgroundUrl?: string;
}

export interface HomeCTA {
  primaryText?: string;
  primaryUrl?: string;
  secondaryText?: string;
  secondaryUrl?: string;
  categoriesTitle: string;
  articlesTitle: string;
  articlesLabel: string;
  finalCtaHeading?: string;
  finalCtaSubtext?: string;
}

export interface HomeTestimonial {
  name: string;
  context: string;
  quote: string;
  rating: number;
  isSample?: boolean;
}

export type HomeCategory = Category & { postCount: number };

export interface HomeData {
  /** Current site context (id, name, niche, theme, settings). */
  site: SiteContext;
  /** Hero copy + variant + optional imagery (env-driven defaults). */
  hero: HomeHero;
  /** CTA copy + section titles (env-driven defaults). */
  cta: HomeCTA;
  /** Optional testimonials (empty array if none configured). */
  testimonials: HomeTestimonial[];
  /** All categories for this site, each with its published-post count. */
  categories: HomeCategory[];
  /** Most-recent published posts, newest first (up to 6). */
  posts: Post[];
  /** Active offers, featured-first by priority (up to 10). Each links via /go/<slug>. */
  offers: Offer[];
  /** Total published-post count for this site. */
  totalPosts: number;
}
