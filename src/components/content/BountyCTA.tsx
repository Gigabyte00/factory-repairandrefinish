/**
 * BountyCTA — a DB-driven "start a free trial" block for Amazon subscription
 * bounties (Prime, Amazon Music, Audible, Kindle Unlimited, Prime Video/Gaming,
 * Amazon Business, etc.). Unlike audiobookpicks' hand-built SubscriptionCTA, this
 * component reads the site's own active bounty offers straight from Supabase
 * (offers.tags @> ['bounty']), so the same file drops into every site and the
 * seeded bundle drives what shows. Each card links through /go/[slug] so the bot
 * filter + click logging + affiliate redirect run.
 *
 * Bounties pay a flat fee per qualifying signup (far more than per-item %), and
 * activate the moment the account is bounty-eligible — the CTA needs no change.
 */
import { createServerClient } from '@/lib/supabase';

/** Per-program consumer-facing copy (keyed by the program tag: offers.tags[2]). */
const BLURB: Record<string, { label: string; desc: string }> = {
  prime: { label: 'Amazon Prime', desc: 'Free 30-day trial — fast free shipping, Prime Video, and more.' },
  'prime-young-adults': { label: 'Prime for Young Adults', desc: 'Ages 18–24 get Prime at half price after a free trial.' },
  'amazon-music': { label: 'Amazon Music Unlimited', desc: 'Free trial — 100M+ songs, ad-free and offline.' },
  audible: { label: 'Audible', desc: 'Free trial with a credit — the audiobook is yours to keep.' },
  'kindle-unlimited': { label: 'Kindle Unlimited', desc: 'Free trial — millions of ebooks and audiobooks.' },
  'prime-video': { label: 'Prime Video', desc: 'Free trial — movies, TV, and Amazon Originals.' },
  'prime-gaming': { label: 'Prime Gaming', desc: 'Free games and in-game loot with your trial.' },
  'amazon-business': { label: 'Amazon Business', desc: 'Free account — business pricing and bulk savings.' },
  'amazon-family': { label: 'Amazon Family', desc: 'Free Prime trial — family deals and baby savings.' },
};

interface BountyRow {
  slug: string;
  name: string;
  commission_value: number | null;
  tags: string[] | null;
}

export async function BountyCTA({
  siteId,
  heading = 'Free trials worth grabbing',
  subheading = 'Each of these includes a free trial — start today at no cost, cancel anytime.',
  limit = 3,
  className = '',
}: {
  siteId: string;
  heading?: string;
  subheading?: string;
  limit?: number;
  className?: string;
}) {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('offers')
    .select('slug, name, commission_value, tags')
    .eq('site_id', siteId)
    .eq('is_active', true)
    .contains('tags', ['bounty'])
    .order('commission_value', { ascending: false, nullsFirst: false })
    .limit(limit);

  const rows = (data as BountyRow[] | null) ?? [];
  if (rows.length === 0) return null;

  return (
    <aside
      className={`my-10 rounded-2xl border border-border bg-muted/40 p-6 sm:p-8 ${className}`}
      aria-label="Free trial options"
    >
      <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{heading}</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">{subheading}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {rows.map((r) => {
          const prog = (r.tags ?? []).find((t) => BLURB[t]);
          const copy = prog ? BLURB[prog] : { label: r.name, desc: 'Includes a free trial.' };
          return (
            <div key={r.slug} className="flex flex-col rounded-xl border border-border bg-background p-5">
              <h3 className="font-semibold leading-snug">{copy.label}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{copy.desc}</p>
              <a
                href={`/go/${r.slug}`}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Start free trial →
              </a>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-[11px] text-muted-foreground">
        These are affiliate links — starting a trial supports our work at no extra cost to you.
      </p>
    </aside>
  );
}
