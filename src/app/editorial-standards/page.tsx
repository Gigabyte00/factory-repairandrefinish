import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, FileText, Search, Scale } from 'lucide-react';
import { getSiteConfig } from '@/lib/site-config';
import JsonLd from '@/components/JsonLd';

export function generateMetadata(): Metadata {
  const site = getSiteConfig();
  const niche = site.niche || 'products and services';
  const baseUrl = site.domain ? `https://${site.domain}` : '';
  return {
    title: 'Editorial Standards',
    description: `How ${site.name} researches, evaluates, and recommends ${niche.toLowerCase()}.`,
    alternates: {
      canonical: `${baseUrl}/editorial-standards`,
    },
  };
}

const principles = [
  {
    icon: Search,
    title: 'Research-Based Evaluations',
    description:
      'Our verdicts are based on published specifications, official pricing and terms, and aggregated user reviews — not on undisclosed physical lab testing. When a claim cannot be independently verified, we say so rather than presenting it as proven.',
  },
  {
    icon: FileText,
    title: 'Specification Verification',
    description:
      'Every specification we publish is cross-referenced against official documentation and, where possible, independently confirmed. When sources conflict, we flag the discrepancy rather than picking the most flattering figure.',
  },
  {
    icon: ShieldCheck,
    title: 'Editorial Independence',
    description:
      'Our rankings and recommendations are based on performance, value, and reliability. Affiliate relationships never influence which products we recommend or how we rank them.',
  },
  {
    icon: Scale,
    title: 'Transparency First',
    description:
      'We disclose affiliate relationships clearly, distinguish verified facts from estimates, and leave corrections dated and visible. We do not stealth-edit to hide mistakes.',
  },
];

export default function EditorialStandardsPage() {
  const site = getSiteConfig();
  const niche = site.niche || 'products and services';
  const baseUrl = site.domain ? `https://${site.domain}` : '';

  const breadcrumbItems = [
    { name: 'Home', url: baseUrl || '/' },
    { name: 'Editorial Standards', url: `${baseUrl}/editorial-standards` },
  ];

  return (
    <>
      <JsonLd type="breadcrumb" data={{ items: breadcrumbItems }} />

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <nav className="mb-8 flex items-center text-sm text-muted-foreground">
          <Link href="/" className="transition hover:text-foreground">Home</Link>
          <ChevronRight className="mx-1 h-3.5 w-3.5" />
          <span className="text-foreground">Editorial Standards</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Editorial Standards</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {site.name} exists to help you make smarter decisions about {niche.toLowerCase()}. This page explains how we research, evaluate, and recommend.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {principles.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-muted/20 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <section className="mt-10 space-y-6 rounded-xl border border-border bg-card p-6">
          <div>
            <h2 className="text-xl font-bold">How We Evaluate</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              When we evaluate a {niche.toLowerCase().replace(/s$/, '')} option, we assess pricing and value, core features, reliability and reputation, customer support, and the fine print in the terms. We weigh published specifications and documented pricing alongside patterns we see across verified user reviews — and we are explicit about what we could and could not confirm.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Affiliate Disclosure</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Some links on this site may be affiliate links, meaning we may earn a commission if you purchase through them at no additional cost to you. This never affects our rankings, recommendations, or editorial decisions. We only feature products we believe are genuinely worth considering.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Who Writes for {site.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Our content is researched and written by editors who follow {niche.toLowerCase()} pricing, features, and user feedback closely. Meet the team on our{' '}
              <Link href="/authors" className="text-primary hover:underline">Authors page</Link>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
