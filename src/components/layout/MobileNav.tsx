'use client';

/**
 * MobileNav — hamburger + Sheet drawer with collapsible categories.
 * From Claude Design handoff 7z97LP1ydSY67ut7_pDBjw (2026-04-25).
 * Adapted: /category/{slug} (singular), CTA props from caller (Header).
 */
import * as React from 'react';
import Link from 'next/link';
import { Menu, Search, ChevronDown } from 'lucide-react';
import * as Icons from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import type { NavItem, CategoryItem } from './Header';

interface MobileNavProps {
  siteName: string;
  items: NavItem[];
  ctaText?: string;
  ctaUrl?: string;
  className?: string;
}

export function MobileNav({
  siteName,
  items,
  ctaText = 'Subscribe',
  ctaUrl = '/blog',
  className = '',
}: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          className={['h-9 w-9 text-foreground', className].join(' ')}
        >
          <Menu className="h-[20px] w-[20px]" strokeWidth={2} />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="flex w-[88vw] max-w-sm flex-col gap-0 p-0">
        <SheetHeader className="flex flex-row items-center justify-between border-b border-border px-5 py-4 text-left">
          <SheetTitle className="text-base font-bold tracking-tight">{siteName}</SheetTitle>
          <ThemeToggle />
        </SheetHeader>

        <div className="border-b border-border px-5 py-4">
          <Link
            href="/search"
            onClick={() => setOpen(false)}
            className="flex h-10 items-center gap-2 rounded-full border border-border bg-muted/40 px-4 text-sm text-muted-foreground hover:bg-muted"
          >
            <Search className="h-4 w-4" strokeWidth={2} />
            <span className="flex-1">Search reviews, brands, models…</span>
          </Link>
        </div>

        <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-2 py-3">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.label}>
                {item.dropdown && item.dropdown.length > 0 ? (
                  <MobileCollapsible item={item} onNavigate={() => setOpen(false)} />
                ) : (
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-md px-3 py-3 text-base font-medium text-foreground/90 hover:bg-muted hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border px-5 py-4">
          <Button
            asChild
            className="h-11 w-full rounded-full bg-[hsl(var(--primary))] font-semibold text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90"
          >
            <Link href={ctaUrl} onClick={() => setOpen(false)}>
              {ctaText}
            </Link>
          </Button>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Independent reviews. No sponsored picks.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MobileCollapsible({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div>
      <div className="flex items-stretch">
        <Link
          href={item.href}
          onClick={onNavigate}
          className="flex-1 rounded-md px-3 py-3 text-base font-medium text-foreground/90 hover:bg-muted hover:text-foreground"
        >
          {item.label}
        </Link>
        <button
          type="button"
          aria-expanded={expanded}
          aria-label={`Toggle ${item.label} subcategories`}
          onClick={() => setExpanded((v) => !v)}
          className="ml-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-foreground/70 hover:bg-muted hover:text-foreground"
        >
          <ChevronDown
            className={[
              'h-4 w-4 transition-transform duration-200',
              expanded ? 'rotate-180' : 'rotate-0',
            ].join(' ')}
            strokeWidth={2.25}
          />
        </button>
      </div>
      {expanded && (
        <ul className="mb-2 ml-3 mt-1 grid grid-cols-1 gap-1 border-l border-border pl-3">
          {item.dropdown!.map((cat) => (
            <li key={cat.slug}>
              <MobileCategoryRow cat={cat} onNavigate={onNavigate} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MobileCategoryRow({
  cat,
  onNavigate,
}: {
  cat: CategoryItem;
  onNavigate: () => void;
}) {
  const Icon =
    (cat.icon &&
      (Icons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[cat.icon]) ||
    null;
  return (
    <Link
      href={`/category/${cat.slug}`}
      onClick={onNavigate}
      className="flex items-center gap-3 rounded-md px-2 py-2 text-sm text-foreground/85 hover:bg-muted hover:text-foreground"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-muted/40 text-foreground/70">
        {Icon ? (
          <Icon className="h-[14px] w-[14px]" strokeWidth={1.75} />
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        )}
      </span>
      {cat.name}
    </Link>
  );
}
