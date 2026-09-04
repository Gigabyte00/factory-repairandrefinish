/**
 * About page — Editorial / Wirecutter-grade.
 * Structure derived from Claude Design handoff _FE-gFV45hfj9hoCse9RwQ.
 * Tailwind-native rewrite with env-driven content preserved.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteConfig } from '@/lib/site-config';
import { Mail, Check, ShieldCheck, ArrowRight } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  const site = getSiteConfig();
  const title = process.env.SITE_ABOUT_META_TITLE?.trim() || `About — ${site.name}`;
  const description =
    process.env.SITE_ABOUT_META_DESCRIPTION?.trim() ||
    `${site.name} is an independent ${site.niche || 'product'} review publication. Our verdicts are research-based, we accept no sponsored placements, and we publish recommendations you can trust.`;
  return {
    title,
    description,
    alternates: { canonical: `${site.domain}/about` },
  };
}

const TEST_STEPS = [
  { n: '01', title: 'Source research', body: 'We start from official documentation, published pricing, and current terms — the primary sources, not the marketing page. Provider claims rarely survive a close read.' },
  { n: '02', title: 'User-review analysis', body: 'We read across verified customer reviews to surface what real users report: the recurring strengths, the recurring complaints, and the deal-breakers.' },
  { n: '03', title: 'Like-for-like comparison', body: 'We line each option up against three to five direct alternatives on the same criteria, so a recommendation always has a "compared to what."' },
  { n: '04', title: 'Editorial review', body: 'A second editor checks every claim against its source before publication. When we cannot verify something, we label it an estimate.' },
];

const EDITORIAL_STANDARDS = [
  'We research every product independently from primary sources. Brands do not get review approval — ever.',
  'We disclose any relationship with a brand at the top of every article.',
  'We do not accept sponsored placements, paid rankings, or pay-to-play "best of" inclusions.',
  'Affiliate links never change a verdict. Our "Not Recommended" picks have affiliate links too — and we still tell you not to buy them.',
  'Corrections are dated, signed, and left visible at the bottom of the article. We do not stealth-edit.',
];

export default function AboutPage() {
  const site = getSiteConfig();
  const trim = (v: string | undefined) => v?.trim() || undefined;

  const heroTagline =
    trim(process.env.SITE_ABOUT_HERO_TAGLINE) ||
    `We exist because the ${site.niche || 'industry'}'s marketing copy and your actual experience are two very different documents. We're trying to close that gap — one researched, source-checked recommendation at a time.`;
  const mission =
    trim(process.env.SITE_ABOUT_MISSION) ||
    `${site.name} was founded on a simple premise: a major decision deserves real scrutiny. Pricing should be verified, not assumed. Claims should be checked against the source, not repeated from a press release. Trade-offs should be spelled out, not glossed over.\n\nWe're a small, independent newsroom. We don't run banner ads from the brands we cover. We publish our methodology in full so you can audit our work.`;
  const methodology =
    trim(process.env.SITE_ABOUT_METHODOLOGY) ||
    'Every recommendation on this site is grounded in research: published specifications, official pricing and terms, and patterns across verified user reviews. We do not run a physical test lab — and we are explicit about what we could and could not independently confirm.';
  const editorName = trim(process.env.SITE_ABOUT_EDITOR_NAME);
  const editorTitle = trim(process.env.SITE_ABOUT_EDITOR_TITLE);
  const editorBio = trim(process.env.SITE_ABOUT_EDITOR_BIO);
  const contactEmail =
    trim(process.env.SITE_ABOUT_CONTACT_EMAIL) ||
    `hello@${site.domain?.replace('https://', '') || 'example.com'}`;

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#0a0d12] text-white">
        <div
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
          aria-hidden="true"
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-20 sm:px-10 sm:pb-24 sm:pt-24 lg:px-16 lg:pb-28 lg:pt-32">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: 'hsl(var(--primary))' }} />
            <p className="text-[11px] font-semibold uppercase sm:text-xs" style={{ letterSpacing: '0.2em', color: 'hsl(var(--primary))' }}>
              Our Story
            </p>
          </div>
          <h1
            className="mt-6 max-w-[20ch] font-extrabold text-white sm:mt-8"
            style={{ fontSize: 'clamp(2.5rem, 4vw + 1rem, 5rem)', letterSpacing: '-0.03em', lineHeight: 0.98 }}
          >
            Independent {site.niche || 'product'} journalism,
            <span style={{ color: 'hsl(var(--primary))' }}> research-led.</span>
          </h1>
          <p
            className="mt-6 max-w-[58ch] text-white/65 leading-[1.55] sm:mt-7"
            style={{ fontSize: 'clamp(1rem, 0.4vw + 0.95rem, 1.25rem)' }}
          >
            {heroTagline}
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />
      </section>

      {/* MISSION + PULL QUOTE */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">§ 01 — Mission</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Our Mission</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
                {mission.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <aside className="relative lg:col-span-5">
              <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-8 lg:p-10">
                <span aria-hidden="true" className="block text-6xl leading-none text-primary opacity-30">&ldquo;</span>
                <blockquote className="mt-2 text-lg font-medium leading-relaxed text-foreground lg:text-xl">
                  We don&rsquo;t accept sponsored placements. Our verdicts are independent.
                </blockquote>
                <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  <span aria-hidden="true" className="h-px w-8 bg-primary" />
                  The {site.name} Editorial Charter
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* HOW WE RESEARCH */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">§ 02 — Methodology</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">How we research</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{methodology}</p>
          </header>
          <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
            {TEST_STEPS.map((step) => (
              <li key={step.n} className="relative">
                <div className="text-5xl font-extrabold text-primary leading-none tracking-tight tabular-nums">{step.n}</div>
                <div className="mt-4 h-px w-12 bg-foreground/15" />
                <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <header className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">§ 03 — Standards</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Editorial standards</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The five rules every story passes through before publication. No exceptions, no carve-outs, no &ldquo;just this once.&rdquo;
              </p>
            </header>
            <ul className="space-y-5 lg:col-span-7">
              {EDITORIAL_STANDARDS.map((rule, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/25">
                    <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground/85">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EDITOR (env-driven) */}
      {editorName && (
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <header className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">§ 04 — Editorial</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Editorial Team</h2>
            </header>
            <article className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card p-8 lg:p-10">
              <div className="text-xl font-bold text-foreground">{editorName}</div>
              {editorTitle && <div className="mt-1 text-sm italic text-muted-foreground">{editorTitle}</div>}
              {editorBio && <p className="mt-4 leading-relaxed text-foreground/85">{editorBio}</p>}
            </article>
          </div>
        </section>
      )}

      {/* AFFILIATE DISCLOSURE */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <ShieldCheck className="mx-auto h-10 w-10 text-primary" aria-hidden="true" strokeWidth={1.5} />
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Affiliate Disclosure</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Some links on {site.name} are affiliate links — we earn a commission when you buy through them, at no extra cost to you. This funds the research and the salaries of the people who do it. It does not change our verdicts. See our{' '}
            <Link href="/methodology" className="font-semibold text-primary hover:underline">
              full methodology →
            </Link>
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#0a0d12] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'hsl(var(--primary))' }}>Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Got a tip? A question? A correction?</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">We read every email. Pitch a story, flag an issue, or just say hi.</p>
          <Link
            href={`mailto:${contactEmail}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            {contactEmail}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
