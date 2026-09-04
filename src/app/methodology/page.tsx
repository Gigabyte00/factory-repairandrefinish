import { getSiteConfig } from '@/lib/site-config';
import { createServerClient } from '@/lib/supabase';
import JsonLd from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { TrustBadges } from '@/components/content/TrustBadges';
import { Prose } from '@/components/content';
import { CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const revalidate = 86400;

export async function generateMetadata() {
  const site = getSiteConfig();
  const baseUrl = site.domain ? `https://${site.domain}` : '';
  return {
    title: `Our Review Methodology`,
    description: `How ${site.name} researches and evaluates ${(site.niche ?? 'products').toLowerCase()}. Our transparent, research-based review process and scoring criteria.`,
    alternates: baseUrl ? { canonical: `${baseUrl}/methodology` } : undefined,
  };
}

const FALLBACK_METHODOLOGY = (siteName: string, niche: string) => `
## How We Research

At ${siteName}, every review is the result of structured research: published specifications, official pricing and terms, and aggregated user reviews. We do not run a physical test lab — our verdicts are research-based — and we never accept payment to alter our ratings or recommendations.

## Our Evaluation Criteria

We score each product or service across five weighted dimensions:

| Criteria | Weight | What We Assess |
|----------|--------|-----------------|
| **Performance** | 30% | Documented results, accuracy, reliability |
| **Value** | 25% | Price vs. features, hidden costs, ROI |
| **Ease of Use** | 20% | Onboarding, interface, learning curve |
| **Support & Trust** | 15% | Customer service, documentation, reputation |
| **Features** | 10% | Core capabilities vs. alternatives |

## Our Review Process

1. **Initial research** — We study each ${niche.toLowerCase()} product's official documentation, pricing, and terms.
2. **User-review analysis** — We read across verified customer reviews to surface real-world strengths and recurring complaints.
3. **Comparative analysis** — We benchmark against 3-5 direct alternatives on like-for-like criteria.
4. **Editorial review** — A second editor checks our findings against the underlying sources.
5. **Final scoring** — We calculate a weighted score and assign our rating.

## Editorial Independence

${siteName} earns revenue through affiliate commissions when readers purchase through our links. This never influences our ratings or which products we recommend. Products we do not recommend are reviewed just as thoroughly as those we do.

## How Often We Update

We review and update our ratings quarterly or whenever a significant product change occurs. The "Last Updated" date on each review reflects when we last verified the information.

## Contact Our Editorial Team

If you believe a review contains an error or outdated information, please [contact us](/contact).
`;

export default async function MethodologyPage() {
  const site = getSiteConfig();
  const supabase = createServerClient();
  const baseUrl = site.domain ? `https://${site.domain}` : '';

  const { data: methodology } = await supabase
    .from('site_pages')
    .select('title, meta_description, content, last_updated_at')
    .eq('site_id', site.id)
    .eq('slug', 'methodology')
    .eq('status', 'published')
    .single();

  const { count: reviewCount } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true })
    .eq('site_id', site.id)
    .eq('status', 'published');

  const breadcrumbItems = [
    { name: 'Home', url: baseUrl || '/' },
    { name: 'Methodology', url: `${baseUrl}/methodology` },
  ];

  const pageTitle = methodology?.title ?? `How We Review ${site.niche ?? 'Products'}`;
  const pageSummary =
    methodology?.meta_description ??
    `Our transparent process for researching and evaluating ${(site.niche ?? 'products').toLowerCase()}.`;
  const pageContent =
    methodology?.content ?? FALLBACK_METHODOLOGY(site.name, site.niche ?? 'products');
  const lastUpdated = methodology?.last_updated_at ?? new Date().toISOString();

  // JSON.stringify produces valid, safely-escaped JSON — no XSS risk
  const webPageSchemaJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageSummary,
    url: `${baseUrl}/methodology`,
    dateModified: lastUpdated,
    isPartOf: { '@type': 'WebSite', name: site.name, url: baseUrl },
    about: { '@type': 'Thing', name: `${site.niche ?? 'Product'} Review Methodology` },
  });

  // webPageSchemaJson is JSON.stringify output — always valid JSON, no XSS risk in this script tag.
  return (
    <>
      <JsonLd type="breadcrumb" data={{ items: breadcrumbItems }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: webPageSchemaJson }} />

      <PageHero
        eyebrow="How We Research"
        title={pageTitle}
        subtitle={pageSummary}
        meta={
          <>
            <span>
              Last updated{' '}
              {new Date(lastUpdated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="hidden sm:inline opacity-50">·</span>
            <span>Reviewed by the editorial team</span>
          </>
        }
      />

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <TrustBadges reviewCount={reviewCount} lastUpdated={lastUpdated} className="mb-10" />

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { title: 'No Pay-to-Play', desc: 'We never accept payment to change ratings.' },
            { title: 'Research-Based', desc: 'Every pick is evaluated against published specs, pricing, and user reviews.' },
            { title: 'Always Updated', desc: 'We refresh reviews when products change.' },
          ].map((item) => (
            <div key={item.title} className="flex gap-2.5 p-5 border rounded-xl bg-card hover:border-primary/40 transition-colors">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Prose>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{pageContent}</ReactMarkdown>
        </Prose>
      </div>
    </>
  );
}
