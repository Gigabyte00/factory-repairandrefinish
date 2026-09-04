import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

import { HeroSection } from '@/components/home/HeroSection';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { ArticleCard } from '@/components/home/ArticleCard';
import { FeaturedOffers } from '@/components/home/FeaturedOffers';
import { TestimonialGrid } from '@/components/home/TestimonialGrid';
import { NewsletterSignup } from '@/components/home/NewsletterSignup';
import { FinalCTA } from '@/components/home/FinalCTA';

import type { HomeData } from './home-data';

/**
 * Home — DEFAULT homepage presentation.
 *
 * Receives the fully-fetched {@link HomeData} from the server wrapper (src/app/page.tsx)
 * and renders the standard editorial composition. Each per-site restyle REPLACES this
 * file with a bespoke, niche-specific layout — but every replacement keeps the same
 * `{ data }: { data: HomeData }` signature so the wrapper never changes.
 */
export function Home({ data }: { data: HomeData }) {
  const { site, hero, cta, testimonials, categories, posts, offers, totalPosts } = data;
  const categoryMap = new Map(categories.map((c) => [c.id, c]));
  const hasFeatured = offers.some((o) => o.is_featured);

  return (
    <>
      <HeroSection
        site={site}
        categoryCount={categories.length}
        postCount={totalPosts || posts.length}
        tagline={hero.tagline}
        subtitle={hero.subtitle}
        accentWord={hero.accentWord}
        variant={hero.variant}
        ctaPrimaryText={cta.primaryText}
        ctaPrimaryUrl={cta.primaryUrl}
        ctaSecondaryText={cta.secondaryText}
        ctaSecondaryUrl={cta.secondaryUrl}
      />

      {hasFeatured && (
        <Reveal>
          <FeaturedOffers
            offers={offers}
            siteId={site.id}
            title={`Top ${site.niche || 'Product'} Picks`}
            subtitle={`Our most recommended ${site.niche?.toLowerCase() || 'products'}, carefully researched and reviewed by our team`}
          />
        </Reveal>
      )}

      {categories.length > 0 && (
        <Reveal>
          <CategoryGrid
            categories={categories}
            title={cta.categoriesTitle}
            subtitle={`Find in-depth guides and reviews across all ${site.niche?.toLowerCase() || 'product'} categories`}
          />
        </Reveal>
      )}

      {posts.length > 0 && (
        <Reveal as="section" className="py-16 lg:py-20 bg-muted/30">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                  {cta.articlesLabel}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {cta.articlesTitle}
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fresh reviews, guides, and insights from our experts
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/blog" className="flex items-center gap-2">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-8">
              {posts[0] && (
                <ArticleCard
                  post={posts[0]}
                  category={posts[0].category_id ? categoryMap.get(posts[0].category_id) ?? null : null}
                  variant="featured"
                />
              )}
              {posts.length > 1 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.slice(1).map((post) => (
                    <ArticleCard
                      key={post.id}
                      post={post}
                      category={post.category_id ? categoryMap.get(post.category_id) ?? null : null}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      )}

      {testimonials.length > 0 && (
        <Reveal>
          <TestimonialGrid testimonials={testimonials} />
        </Reveal>
      )}

      <Reveal>
        <NewsletterSignup siteId={site.id} niche={site.niche ?? undefined} />
      </Reveal>

      <Reveal>
        <FinalCTA
          niche={site.niche}
          siteName={site.name}
          heading={cta.finalCtaHeading}
          subtext={cta.finalCtaSubtext}
          ctaPrimaryText={cta.primaryText}
          ctaPrimaryUrl={cta.primaryUrl}
          ctaSecondaryText={cta.secondaryText}
          ctaSecondaryUrl={cta.secondaryUrl}
        />
      </Reveal>

      {/* Fallback offers section — offers exist but none are featured */}
      {offers.length > 0 && !hasFeatured && (
        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                Our Recommendations
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Products We Recommend
              </h2>
              <p className="text-lg text-muted-foreground">
                Products we&apos;ve reviewed and recommend
              </p>
            </div>
            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/offers">View All {offers.length} Offers</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
