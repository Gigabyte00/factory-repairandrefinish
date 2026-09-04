import type { Metadata } from 'next';
import { getSiteConfig, getHeroConfig, getTestimonials, getCTAConfig } from '@/lib/site-config';
import { createServerClient } from '@/lib/supabase';
import { canonicalUrl } from '@/lib/seo';
import type { Post, Category, Offer } from '@/types';
import { Home } from '@/components/home/Home';
import type { HomeData } from '@/components/home/home-data';

export function generateMetadata(): Metadata {
  return {
    alternates: { canonical: canonicalUrl('/') },
  };
}

/**
 * Homepage — STABLE DATA WRAPPER.
 *
 * This server component owns ALL data fetching (site config + posts/offers/categories +
 * counts) and assembles a typed {@link HomeData}. It hands that to <Home> for rendering.
 *
 * Per-site restyles rewrite <Home> (the presentation) freely; they must NOT touch this
 * wrapper. That separation is what lets 20 bespoke homepages stay buildable against one
 * data layer scoped by site_id.
 */
export default async function HomePage() {
  const site = getSiteConfig();
  const hero = getHeroConfig(site);
  const testimonials = getTestimonials();
  const cta = getCTAConfig();
  const supabase = createServerClient();

  // Fetch all homepage data in parallel, scoped by site_id.
  const [categoriesResult, postsResult, offersResult] = await Promise.all([
    supabase
      .from('categories')
      .select('id, slug, name, description')
      .eq('site_id', site.id)
      .order('sort_order'),

    supabase
      .from('posts')
      .select('id, slug, title, excerpt, featured_image_url, featured_image_alt, published_at, category_id, reading_time_minutes, word_count')
      .eq('site_id', site.id)
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(6),

    supabase
      .from('offers')
      .select('id, slug, name, short_description, logo_url, featured_image_url, affiliate_url, rating, pros, is_featured, is_active')
      .eq('site_id', site.id)
      .eq('is_active', true)
      .order('priority', { ascending: true, nullsFirst: false })
      .limit(10),
  ]);

  const categories = (categoriesResult.data || []) as Category[];
  const posts = (postsResult.data || []) as Post[];
  const offers = (offersResult.data || []) as Offer[];

  const categoriesWithCounts = await getCategoryCounts(supabase, site.id, categories);

  const { count: totalPosts } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true })
    .eq('site_id', site.id)
    .eq('status', 'published');

  const data: HomeData = {
    site,
    hero,
    cta,
    testimonials,
    categories: categoriesWithCounts,
    posts,
    offers,
    totalPosts: totalPosts || 0,
  };

  return <Home data={data} />;
}

/**
 * Get published-post counts for each category.
 */
async function getCategoryCounts(
  supabase: ReturnType<typeof createServerClient>,
  siteId: string,
  categories: Category[]
): Promise<Array<Category & { postCount: number }>> {
  const { data: counts } = await supabase
    .from('posts')
    .select('category_id')
    .eq('site_id', siteId)
    .eq('status', 'published');

  const countMap = new Map<string, number>();
  if (counts) {
    for (const post of counts) {
      if (post.category_id) {
        countMap.set(post.category_id, (countMap.get(post.category_id) || 0) + 1);
      }
    }
  }

  return categories.map((category) => ({
    ...category,
    postCount: countMap.get(category.id) || 0,
  }));
}
