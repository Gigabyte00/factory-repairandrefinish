/**
 * Header — Editorial sticky navigation (Claude Design handoff
 * 7z97LP1ydSY67ut7_pDBjw, 2026-04-25). Async server component shell that
 * reads the site config + nav from Factory queries, then renders client
 * subcomponents (DesktopNav, MobileNav).
 */
import Link from 'next/link';
import { Search } from 'lucide-react';
import { getSiteConfig } from '@/lib/site-config';
import { getNavLinks } from '@/lib/queries';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';

export type CategoryItem = {
  name: string;
  slug: string;
  /** lucide-react icon name, e.g. "Mountain", "Bike" */
  icon?: string;
};

export type NavItem = {
  label: string;
  href: string;
  dropdown?: CategoryItem[];
};

const HEADER_CTA_TEXT = process.env.SITE_HEADER_CTA_TEXT || 'Newsletter';
const HEADER_CTA_URL = process.env.SITE_HEADER_CTA_URL || '/#newsletter-heading';

export async function Header() {
  const site = getSiteConfig();
  const nav = await getNavLinks();

  // Derive the editorial primary nav from existing nav data.
  // Categories dropdown shows up to 6 top categories.
  const topCategories: CategoryItem[] = (nav.categories || [])
    .slice(0, 6)
    .map((c: { name: string; href: string }) => {
      const slug = c.href.replace(/^\/category\//, '');
      return { name: c.name, slug, icon: undefined };
    });

  // Build nav items — only include "Categories" dropdown if real categories exist;
  // otherwise show plain "Categories" link to /blog so the underlying link still works.
  const primaryNav: NavItem[] = [
    { label: 'Reviews', href: '/blog' },
    topCategories.length > 0
      ? { label: 'Categories', href: '/blog', dropdown: topCategories }
      : { label: 'Categories', href: '/blog' },
    { label: 'Tools', href: '/tools' },
    { label: 'Under $1,000', href: '/electric-bikes-under-1000' },
    { label: 'Best Deals', href: '/offers' },
  ];

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full',
        'h-14 lg:h-16',
        'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur',
        'border-b border-border',
      ].join(' ')}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        {/* LEFT — wordmark */}
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="group flex items-center shrink-0"
        >
          <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {site.name}
          </span>
          <span
            aria-hidden="true"
            className="ml-1 hidden h-1.5 w-1.5 rounded-full bg-primary lg:inline-block"
          />
        </Link>

        {/* CENTER — desktop nav */}
        <DesktopNav items={primaryNav} className="hidden lg:flex" />

        {/* RIGHT — actions */}
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="Search reviews"
            className="hidden h-9 w-9 text-foreground/70 hover:text-foreground sm:inline-flex"
          >
            <Link href="/search">
              <Search className="h-[18px] w-[18px]" strokeWidth={2} />
            </Link>
          </Button>

          <div className="hidden sm:inline-flex">
            <ThemeToggle />
          </div>

          {/* CTA — desktop pill */}
          <Button
            asChild
            size="sm"
            className="hidden h-9 rounded-full bg-[hsl(var(--primary))] px-4 font-semibold text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90 lg:inline-flex"
          >
            <Link href={HEADER_CTA_URL}>{HEADER_CTA_TEXT}</Link>
          </Button>

          {/* Mobile hamburger + sheet */}
          <MobileNav
            siteName={site.name}
            items={primaryNav}
            ctaText={HEADER_CTA_TEXT}
            ctaUrl={HEADER_CTA_URL}
            className="lg:hidden"
          />
        </div>
      </div>
    </header>
  );
}
