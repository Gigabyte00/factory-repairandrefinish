import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

/**
 * AffiliateDisclosure — Claude Design handoff e24eAmriFHh7AE7kiHJplA, 2026-04-25.
 *
 * FTC-compliant ("clear and conspicuous" per 16 CFR Part 255) affiliate
 * disclosure block for editorial review pages. Renders cleanly inline within
 * Tailwind typography (`not-prose` escape hatch).
 */
export default function AffiliateDisclosure() {
  return (
    <aside
      role="note"
      aria-label="Affiliate disclosure"
      className="not-prose my-6 max-w-2xl mx-auto rounded-lg border border-border/60 bg-muted/30 py-3 px-4"
    >
      <div className="flex items-start gap-2.5">
        <ShieldCheck
          aria-hidden="true"
          className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary"
        />
        <p className="text-[13px] leading-relaxed text-muted-foreground text-left m-0">
          <strong className="font-semibold text-foreground/85">Affiliate Disclosure:</strong>{' '}
          This page contains affiliate links. We may earn a commission when you purchase through
          these links, at no extra cost to you.{' '}
          <Link
            href="/methodology"
            className="whitespace-nowrap font-medium text-primary hover:underline underline-offset-2"
          >
            Our methodology →
          </Link>
        </p>
      </div>
    </aside>
  );
}
