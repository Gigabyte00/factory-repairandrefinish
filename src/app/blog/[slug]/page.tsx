import { getSiteConfig } from '@/lib/site-config';
import { createServerClient } from '@/lib/supabase';
import type { Post, Category } from '@/types';
import { notFound } from 'next/navigation';
import { getTemplate, getDefaultVariant } from '@/lib/templates/registry';
import { TopBuyBox } from '@/components/offers/TopBuyBox';
import { StickyMobileBuyBar } from '@/components/offers/StickyMobileBuyBar';

// AMZ-2 topbuybox (2026-10-11): merchant-aware price-CTA label. Ported from the AMZ-2 store-label.ts pattern
// (storeName/priceCtaLabel) used elsewhere in the fleet; this repo has no src/lib/store-label.ts of its
// own, so the derivation is inlined. Never invents a merchant name; active-offers-only, so there is no
// "inactive" wording branch here.
function amz2StoreName(offer: { affiliate_url?: string | null; affiliate_program?: string | null }): string | null {
  let host: string | null = null;
  try {
    host = offer.affiliate_url ? new URL(offer.affiliate_url).hostname.toLowerCase() : null;
  } catch {
    host = null;
  }
  const program = offer.affiliate_program?.trim() || null;
  if ((host && /amazon\./.test(host)) || (program && /amazon/i.test(program))) return 'Amazon';
  if ((host && /ebay\./.test(host)) || (program && /ebay/i.test(program))) return 'eBay';
  if (program) {
    const stripped = program.replace(/\s*\([^()]*\)\s*$/, '').trim().split(' | ')[0].trim();
    return stripped || null;
  }
  return null;
}

function amz2PriceCtaLabel(offer: { affiliate_url?: string | null; affiliate_program?: string | null }): string {
  const store = amz2StoreName(offer);
  if (store === 'Amazon') return 'Check price on Amazon';
  if (store) return `Check price at ${store}`;
  return 'Check price';
}

// AMZ-2 topbuybox (2026-10-11): CTA-integrity law -- a product may surface in the box only if the post body
// actually discusses it. Checks for a /go/<slug> link terminated by )?"/# , whitespace, or end, so
// /go/abc never matches /go/abcd. Tried against both slug and pretty_slug (either may be the one
// linked in the body).
function amz2MentionedInBody(content: string, slugs: Array<string | null | undefined>): boolean {
  for (const raw of slugs) {
    if (!raw) continue;
    const escaped = raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (new RegExp(`/go/${escaped}(?:[)?"/#\s]|$)`).test(content)) return true;
  }
  return false;
}
import JsonLd from '@/components/JsonLd';
import RelatedOffersRail from '@/components/offers/RelatedOffersRail';
import { canonicalUrl } from '@/lib/seo';
import { normalizeArticleHeadings, rewriteAmazonLinksToGo } from '@/lib/article-content';

/** Extract FAQ Q&A pairs from markdown content (detects ## FAQ / ## Frequently Asked Questions sections).
 * AMZ-2 faq-v2 2026-10-18: the section ends at the next '## '; '### Question' blocks first, then the writers' '**Question?**' line form
 * (answer on the next line or the same line); links/emphasis flattened so nothing markdown-shaped reaches the JSON-LD. */
function extractFaqs(content: string): Array<{ question: string; answer: string }> {
  const head = content.match(/^##\s+(frequently\s+asked\s+questions|faq|common\s+questions|faqs)/im);
  if (!head || head.index === undefined) return [];
  const afterHead = content.slice(head.index).split('\n').slice(1).join('\n');
  const stop = afterHead.search(/^##\s+/m);
  const section = stop === -1 ? afterHead : afterHead.slice(0, stop);
  const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\*\*/g, '').replace(/(^|[^*\w])\*([^*\n]+)\*/g, '$1$2')
    .replace(/`([^`]+)`/g, '$1').replace(/^#+\s+/gm, '').replace(/\s+/g, ' ').trim().slice(0, 600);
  const h3: Array<{ question: string; answer: string }> = [];
  for (const block of section.split(/^###\s+/m).slice(1)) {
    const lines = block.split('\n');
    const question = lines[0].trim().replace(/\?$/, '').trim() + '?';
    const answer = plain(lines.slice(1).join('\n'));
    if (question.length > 1 && answer) h3.push({ question, answer });
  }
  if (h3.length >= 3) return h3;
  const bold: Array<{ question: string; answer: string }> = [];
  let q: string | null = null;
  let a: string[] = [];
  const flush = (last: boolean) => {
    if (!q) return;
    const lines = [...a];
    while (lines[0] === '') lines.shift();
    if (last) { const gap = lines.indexOf(''); if (gap > 0) lines.length = gap; } // closing prose stays out of the last answer
    const answer = plain(lines.join(' '));
    if (answer) bold.push({ question: plain(q), answer });
  };
  for (const raw of section.split('\n')) {
    const line = raw.trim();
    const m = line.match(/^\*\*(.+?\?)\*\*:?\s*(.*)$/);
    if (m) { flush(false); q = m[1]; a = m[2] ? [m[2]] : []; continue; }
    if (q) a.push(line);
  }
  flush(true);
  return bold.length > h3.length ? bold : h3;
}

export const revalidate = 3600; // Revalidate every hour

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const site = getSiteConfig();
  const supabase = createServerClient();

  const { data: post } = await supabase
    .from('posts')
    .select('title, meta_title, meta_description, excerpt, featured_image_url')
    .eq('site_id', site.id)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const url = canonicalUrl(`/blog/${slug}`);
  // Always provide a social image: featured image, else the site's OG image route
  const ogImage = post.featured_image_url || canonicalUrl('/opengraph-image');

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt || `Read ${post.title} on ${site.name}`,
    alternates: { canonical: url },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt || undefined,
      type: 'article',
      url,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const site = getSiteConfig();
  const supabase = createServerClient();

  // Fetch post with all details
  const { data: postData, error } = await supabase
    .from('posts')
    .select('*')
    .eq('site_id', site.id)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error || !postData) {
    notFound();
  }

  // Cast to our extended Post type with metadata support
  const post = postData as Post;

  // Normalize body headings (single h1 per page) and route in-content Amazon
  // dp-links through /go/<slug> for click tracking when they match an offer.
  if (post.content) {
    let content = normalizeArticleHeadings(post.content, post.title);
    if (content.includes('amazon.com')) {
      const { data: offerLinks } = await supabase
        .from('offers')
        .select('slug, affiliate_url')
        .eq('site_id', site.id)
        .eq('is_active', true);
      content = rewriteAmazonLinksToGo(content, offerLinks || []);
    }
    post.content = content;
  }

  // Fetch category if exists
  let category: Category | null = null;
  if (post.category_id) {
    const { data } = await supabase
      .from('categories')
      .select('*')
      .eq('id', post.category_id)
      .single();
    category = data;
  }

  // Fetch related posts — same category first, fall back to recency
  const { data: sameCategoryPosts } = post.category_id
    ? await supabase
        .from('posts')
        .select('id, slug, title, excerpt, featured_image_url, published_at, reading_time_minutes')
        .eq('site_id', site.id)
        .eq('status', 'published')
        .eq('category_id', post.category_id)
        .neq('id', post.id)
        .order('published_at', { ascending: false })
        .limit(4)
    : { data: [] };

  let relatedPosts = sameCategoryPosts ?? [];

  if (relatedPosts.length < 4) {
    const excludeIds = [post.id, ...relatedPosts.map((p) => p.id)];
    const { data: backfill } = await supabase
      .from('posts')
      .select('id, slug, title, excerpt, featured_image_url, published_at, reading_time_minutes')
      .eq('site_id', site.id)
      .eq('status', 'published')
      .not('id', 'in', `(${excludeIds.join(',')})`)
      .order('published_at', { ascending: false })
      .limit(4 - relatedPosts.length);
    relatedPosts = [...relatedPosts, ...(backfill ?? [])];
  }

  // Determine template variant.
  // Priority: 1. Explicit metadata.variant, 2. content_type column, 3. metadata flags,
  // 4. word-count fallback. content_type is authoritative for inserter-driven posts.
  let variant = post.metadata?.variant;

  if (!variant) {
    if ((post as any).content_type === 'review') {
      variant = 'review';
    } else if ((post as any).content_type === 'comparison') {
      variant = 'comparison';
    } else if (post.metadata?.isComparison || post.metadata?.comparison) {
      variant = 'comparison';
    } else if (post.metadata?.isReview || post.metadata?.review) {
      variant = 'review';
    } else {
      const wordCount = post.content?.split(/\s+/).length || 0;
      variant = wordCount > 3000 ? 'longform' : 'standard';
    }
  }

  // Hydrate review metadata from the linked offer when missing. The inserter writes
  // featured_offer_id but not metadata.review, which leaves rich CTAs dormant.
  if (variant === 'review' && (post as any).featured_offer_id && !(post.metadata as any)?.review?.affiliateUrl) {
    const { data: offer } = await supabase
      .from('offers')
      .select('slug, name, rating, current_price, price_usd, pros, cons, featured_image_url')
      .eq('id', (post as any).featured_offer_id)
      .single();

    if (offer) {
      const rawPrice = (offer as any).current_price ?? (offer as any).price_usd ?? '';
      const priceStr = rawPrice
        ? (typeof rawPrice === 'number' ? `$${rawPrice}` : String(rawPrice))
        : '';
      (post as any).metadata = {
        ...((post.metadata as any) || {}),
        isReview: true,
        review: {
          ...(((post.metadata as any) || {}).review || {}),
          productName: (offer as any).name || post.title,
          affiliateUrl: `/go/${(offer as any).slug}`,
          price: priceStr,
          rating: (offer as any).rating ?? undefined,
          maxRating: 5,
          pros: Array.isArray((offer as any).pros) ? (offer as any).pros.slice(0, 6) : [],
          cons: Array.isArray((offer as any).cons) ? (offer as any).cons.slice(0, 6) : [],
          badge: "Editor's Pick",
          offer_id: (post as any).featured_offer_id,
        },
      };
    }
  }

  // Get template component
  const Template = getTemplate('post-detail', variant);

  // AMZ-2 topbuybox (2026-10-11): resolve up to 3 ACTIVE offers (featured_offer_id first, then
  // related_offer_ids), same site, with the supabase client this page already uses, KEEPING ONLY
  // offers the post body actually links via /go/<slug or pretty_slug> (CTA-integrity law -- a rail
  // offer the body never mentions must not show as a "where to buy" pick). Only {slug, name, label}
  // ever reach TopBuyBox -- never the row, never affiliate_url -- and the sticky bar gets a
  // precomputed /go path, never a raw URL. Nothing renders on protected EPN-pilot posts (in-body
  // /go/ebay-used-* or /go/used-*-on-ebay links) or when no candidate survives the mention filter.
  const topBuyBoxIds = Array.from(
    new Set(
      [
        (post as any).featured_offer_id as string | null,
        ...(Array.isArray((post as any).related_offer_ids) ? ((post as any).related_offer_ids as string[]) : []),
      ].filter((id): id is string => !!id)
    )
  );
  const topBuyBoxProtected =
    !!post.content &&
    (post.content.includes('/go/ebay-used-') || /\/go\/used-[a-z0-9-]*-on-ebay/.test(post.content));
  let topBuyBoxOffers: { slug: string; name: string; label: string }[] = [];
  let stickyBarOffer: { name: string; goPath: string; label: string } | null = null;
  if (!topBuyBoxProtected && topBuyBoxIds.length > 0) {
    const { data: topBuyBoxRows } = await supabase
      .from('offers')
      .select('id, slug, pretty_slug, name, affiliate_url, affiliate_program')
      .in('id', topBuyBoxIds)
      .eq('site_id', site.id)
      .eq('is_active', true);
    const topBuyBoxOrder = new Map(topBuyBoxIds.map((id, i) => [id, i]));
    const topBuyBoxSorted = (topBuyBoxRows ?? [])
      .sort((a, b) => (topBuyBoxOrder.get(a.id) ?? 99) - (topBuyBoxOrder.get(b.id) ?? 99))
      .filter((o) => amz2MentionedInBody(post.content ?? '', [o.slug, o.pretty_slug]))
      .slice(0, 3);
    topBuyBoxOffers = topBuyBoxSorted.map((o) => ({ slug: o.slug, name: o.name, label: amz2PriceCtaLabel(o) }));
    // AMZ-2 sticky-layer 2026-10-11: Associates Participation Requirements (o) bar Special Links in layer ads, so the floating
    // bar never carries an Amazon/Audible offer - it takes the box's first non-Amazon offer, else it does not render.
    const stickyCandidate = topBuyBoxSorted.find((o) => !/(^|\.)(amazon|audible)\.|amzn\.to/i.test(String(o.affiliate_url ?? '').split('/')[2] ?? ''));
    if (stickyCandidate) {
      const topBuyBoxFirst = stickyCandidate;
      stickyBarOffer = {
        name: topBuyBoxFirst.name,
        goPath: `/go/${topBuyBoxFirst.slug}?utm_source=sticky&utm_medium=affiliate&utm_campaign=${encodeURIComponent(post.slug)}`,
        label: amz2PriceCtaLabel(topBuyBoxFirst),
      };
    }
  }
  const topBuyBoxNode = topBuyBoxOffers.length > 0 ? <TopBuyBox offers={topBuyBoxOffers} postSlug={post.slug} /> : null;

  const baseUrl = site.domain ? `https://${site.domain}` : '';
  const breadcrumbItems = [
    { name: 'Home', url: baseUrl || '/' },
    { name: 'Blog', url: `${baseUrl}/blog` },
    { name: post.title, url: `${baseUrl}/blog/${slug}` },
  ];

  const faqs = post.content ? extractFaqs(post.content) : [];

  // ItemList (Product) schema for listicle/roundup posts → product-panel rich results.
  // Review/comparison variants already get Product/Review schema from their templates,
  // so this only targets standard/longform roundups (confirmed to emit no product schema).
  let listSchema: any = null;
  if ((variant === 'standard' || variant === 'longform') && post.content) {
    const goSlugs = Array.from(
      new Set(Array.from(post.content.matchAll(/\/go\/([a-z0-9][a-z0-9-]*)/g)).map((m) => m[1]))
    ).slice(0, 12);
    if (goSlugs.length >= 2) {
      const { data: listOffers } = await supabase
        .from('offers')
        .select('slug, name, rating, featured_image_url')
        .eq('site_id', site.id)
        .eq('is_active', true)
        .in('slug', goSlugs);
      if (listOffers && listOffers.length >= 2) {
        const order = new Map(goSlugs.map((s, i) => [s, i] as [string, number]));
        const ordered = [...listOffers].sort(
          (a, b) => (order.get(a.slug) ?? 99) - (order.get(b.slug) ?? 99)
        );
        listSchema = (
          <JsonLd
            type="comparison"
            data={{
              headline: post.title,
              description: post.excerpt || undefined,
              products: ordered.map((o: any) => ({
                name: o.name,
                image: o.featured_image_url || undefined,
                rating: typeof o.rating === 'number' ? o.rating : undefined,
                url: `${baseUrl}/go/${o.slug}`,
              })),
            }}
          />
        );
      }
    }
  }

  // Fallback to default if variant not found
  if (!Template) {
    const defaultVariant = getDefaultVariant('post-detail');
    const DefaultTemplate = getTemplate('post-detail', defaultVariant);

    if (!DefaultTemplate) {
      throw new Error('No post detail templates available');
    }

    return (
      <>
        <JsonLd type="breadcrumb" data={{ items: breadcrumbItems }} />
        {faqs.length >= 3 && <JsonLd type="faq" data={{ faqs }} />}
        {listSchema}
        <DefaultTemplate
          post={post}
          category={category}
          relatedPosts={relatedPosts || []}
          site={site}
          topBuyBox={topBuyBoxNode}
        />
        {defaultVariant !== 'review' && stickyBarOffer ? (
          <StickyMobileBuyBar
            productName={stickyBarOffer.name}
            affiliateUrl={stickyBarOffer.goPath}
            ctaLabel={stickyBarOffer.label}
          />
        ) : null}
      </>
    );
  }

  return (
    <>
      <JsonLd type="breadcrumb" data={{ items: breadcrumbItems }} />
      {faqs.length >= 3 && <JsonLd type="faq" data={{ faqs }} />}
      {listSchema}
      <Template
        post={post}
        category={category}
        relatedPosts={relatedPosts || []}
        site={site}
        topBuyBox={topBuyBoxNode}
      />
      {variant !== 'review' && stickyBarOffer ? (
        <StickyMobileBuyBar
          productName={stickyBarOffer.name}
          affiliateUrl={stickyBarOffer.goPath}
          ctaLabel={stickyBarOffer.label}
        />
      ) : null}
      <RelatedOffersRail relatedOfferIds={(post as any).related_offer_ids} siteId={site.id} />
    </>
  );
}
