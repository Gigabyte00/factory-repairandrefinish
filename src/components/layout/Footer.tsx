import * as React from 'react';
import Link from 'next/link';
import { getSiteConfig } from '@/lib/site-config';
import { getCategories, getNavLinks } from '@/lib/queries';

/**
 * Editorial footer (Claude Design handoff kqnMiS8u463dazJiJeaSzA, 2026-04-25).
 * Adapted to Factory codebase:
 * - getSiteConfig is sync; getCategories + getNavLinks are async
 * - socialLinks comes from site.settings.socialLinks (object: {twitter,instagram,youtube})
 * - category URLs use /category/${slug} (singular path)
 * - Knowledge column maps to nav.resourceLinks; About column maps to nav.trustLinks
 */

// ─── Social icons (inline SVG — no lucide for these 3) ────────────────────────
function TwitterXIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.546 15.568V8.432L15.818 12z" />
    </svg>
  );
}

// ─── Subcomponents ────────────────────────────────────────────────────────────
function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground mb-4">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialButton({
  url,
  label,
  Icon,
}: {
  url: string;
  label: string;
  Icon: (p: { className?: string }) => React.ReactElement;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-200 hover:bg-[hsl(var(--primary)/0.1)] hover:text-[hsl(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-card"
    >
      <Icon className="h-[18px] w-[18px]" />
    </a>
  );
}

// ─── Footer (async server component) ──────────────────────────────────────────
export async function Footer() {
  const site = getSiteConfig();
  const [categories, nav] = await Promise.all([getCategories(), getNavLinks()]);

  const siteName = site.name || 'this site';
  const tagline = site.niche
    ? `Your trusted guide to ${site.niche}`
    : 'Your trusted guide to smarter choices';
  const footerTextOverride = site.settings?.footerText;
  const socialLinks = site.settings?.socialLinks || {};
  const year = new Date().getFullYear();

  const topCategories = categories.slice(0, 5);
  const knowledgeLinks = nav.resourceLinks; // { name, href }
  const aboutLinks = nav.trustLinks;
  const resourceLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Offers', href: '/offers' },
    { name: 'Tools', href: '/tools' },
    { name: 'Saved Articles', href: '/bookmarks' },
  ];

  return (
    <footer className="relative bg-card">
      {/* Top hairline accent */}
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-[hsl(var(--primary)/0.4)] to-transparent"
      />

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          {/* Column grid */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* BRAND — wider column on desktop */}
            <div className="sm:col-span-2 lg:col-span-4">
              <Link
                href="/"
                className="text-xl font-bold text-foreground transition-colors hover:text-[hsl(var(--primary))]"
              >
                {siteName}
              </Link>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {tagline}
              </p>

              {Object.values(socialLinks).some(Boolean) && (
                <div className="mt-6 flex items-center gap-2">
                  {socialLinks.twitter && (
                    <SocialButton url={socialLinks.twitter} label="X (Twitter)" Icon={TwitterXIcon} />
                  )}
                  {socialLinks.instagram && (
                    <SocialButton url={socialLinks.instagram} label="Instagram" Icon={InstagramIcon} />
                  )}
                  {socialLinks.youtube && (
                    <SocialButton url={socialLinks.youtube} label="YouTube" Icon={YouTubeIcon} />
                  )}
                </div>
              )}
            </div>

            {/* CATEGORIES */}
            {topCategories.length > 0 && (
              <div className="lg:col-span-2">
                <ColumnHeading>Categories</ColumnHeading>
                <ul className="space-y-3">
                  {topCategories.map((cat) => (
                    <FooterLink key={cat.slug} href={`/category/${cat.slug}`}>
                      {cat.name}
                    </FooterLink>
                  ))}
                </ul>
              </div>
            )}

            {/* RESOURCES */}
            <div className="lg:col-span-2">
              <ColumnHeading>Resources</ColumnHeading>
              <ul className="space-y-3">
                {resourceLinks.map((l) => (
                  <FooterLink key={l.href} href={l.href}>
                    {l.name}
                  </FooterLink>
                ))}
              </ul>
            </div>

            {/* KNOWLEDGE */}
            <div className="lg:col-span-2">
              <ColumnHeading>Knowledge</ColumnHeading>
              <ul className="space-y-3">
                {knowledgeLinks.map((l) => (
                  <FooterLink key={l.href} href={l.href}>
                    {l.name}
                  </FooterLink>
                ))}
                <FooterLink href="/search">Search</FooterLink>
              </ul>
            </div>

            {/* ABOUT */}
            <div className="lg:col-span-2">
              <ColumnHeading>About</ColumnHeading>
              <ul className="space-y-3">
                {aboutLinks.map((l) => (
                  <FooterLink key={l.href} href={l.href}>
                    {l.name}
                  </FooterLink>
                ))}
                <FooterLink href="/privacy">Privacy</FooterLink>
                <FooterLink href="/terms">Terms</FooterLink>
              </ul>
            </div>
          </div>

          {/* Bottom block */}
          <div className="mt-16 border-t border-border/60 pt-10">
            <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Affiliate Disclosure.</span>{' '}
              {siteName} is reader-supported. When you buy through links on our site, we may
              earn an affiliate commission at no extra cost to you. Our editorial verdicts
              are independent — see{' '}
              <Link
                href="/methodology"
                className="font-medium text-[hsl(var(--primary))] underline-offset-4 hover:underline"
              >
                our methodology →
              </Link>
            </p>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              {footerTextOverride ?? `© ${year} ${siteName}. All rights reserved.`}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom 2px primary gradient bar */}
      <div
        aria-hidden
        className="h-[2px] w-full bg-gradient-to-r from-[hsl(var(--primary)/0.0)] via-[hsl(var(--primary))] to-[hsl(var(--primary)/0.0)]"
      />
    </footer>
  );
}
