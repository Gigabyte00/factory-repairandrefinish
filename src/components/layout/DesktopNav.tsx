'use client';

/**
 * DesktopNav — primary nav with hover-grow underline + Categories dropdown.
 * From Claude Design handoff 7z97LP1ydSY67ut7_pDBjw (2026-04-25).
 * Adapted: /category/{slug} (singular) instead of /categories/{slug}.
 */
import * as React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import * as Icons from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { NavItem, CategoryItem } from './Header';

interface DesktopNavProps {
  items: NavItem[];
  className?: string;
}

export function DesktopNav({ items, className = '' }: DesktopNavProps) {
  return (
    <nav aria-label="Primary" className={['items-center gap-1', className].join(' ')}>
      {items.map((item) =>
        item.dropdown && item.dropdown.length > 0 ? (
          <CategoryDropdown key={item.label} item={item} />
        ) : (
          <NavLink key={item.label} href={item.href} label={item.label} />
        )
      )}
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex h-9 items-center px-3 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
    >
      {label}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-3 -bottom-px h-px origin-center scale-x-0 bg-[hsl(var(--primary))] transition-transform duration-200 ease-out group-hover:scale-x-100"
      />
    </Link>
  );
}

function CategoryDropdown({ item }: { item: NavItem }) {
  // Pure shadcn DropdownMenu — let it own the open state. No hover handlers
  // (those caused click+hover double-toggle bugs and made the menu glitchy).
  // Opens on click / keyboard; works reliably on touch.
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="group relative inline-flex h-9 items-center gap-1 px-3 text-sm font-medium text-foreground/80 outline-none transition-colors hover:text-foreground focus-visible:text-foreground data-[state=open]:text-foreground"
        >
          {item.label}
          <ChevronDown
            className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
            strokeWidth={2.25}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-3 -bottom-px h-px origin-center scale-x-0 bg-[hsl(var(--primary))] transition-transform duration-200 ease-out group-hover:scale-x-100 group-data-[state=open]:scale-x-100"
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" sideOffset={10} className="w-[480px] p-2">
        <div className="px-2 pb-2 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Browse by category
          </p>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {item.dropdown!.map((cat) => (
            <CategoryRow key={cat.slug} cat={cat} />
          ))}
        </div>
        <div className="mt-1 border-t border-border px-2 pb-1 pt-3">
          <Link
            href={item.href}
            className="inline-flex items-center text-xs font-semibold text-[hsl(var(--primary))] hover:underline"
          >
            See all categories →
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function CategoryRow({ cat }: { cat: CategoryItem }) {
  const Icon =
    (cat.icon &&
      (Icons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[cat.icon]) ||
    null;

  return (
    <DropdownMenuItem asChild className="rounded-md p-0">
      <Link
        href={`/category/${cat.slug}`}
        className="group flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm text-foreground/90 hover:bg-muted hover:text-foreground"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted/40 text-foreground/70 transition-colors group-hover:border-[hsl(var(--primary))]/40 group-hover:bg-[hsl(var(--primary))]/10 group-hover:text-[hsl(var(--primary))]">
          {Icon ? (
            <Icon className="h-[16px] w-[16px]" strokeWidth={1.75} />
          ) : (
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
          )}
        </span>
        <span className="flex flex-col">
          <span className="font-medium leading-tight">{cat.name}</span>
          <span className="text-xs text-muted-foreground">Top picks &amp; reviews</span>
        </span>
      </Link>
    </DropdownMenuItem>
  );
}
