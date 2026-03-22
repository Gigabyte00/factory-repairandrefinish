'use client';

import { cn, formatCurrency } from '@/lib/utils';
import { RetailerBadge } from './RetailerBadge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ShoppingCart } from 'lucide-react';
import type { AffiliateProduct } from '@/types';

interface InlineProductCTAProps {
  product: AffiliateProduct;
  label?: string;
  className?: string;
}

export function InlineProductCTA({
  product,
  label = 'Recommended for this step:',
  className,
}: InlineProductCTAProps) {
  return (
    <div
      className={cn(
        'my-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-lg border border-accent/20 bg-accent-50 p-3',
        className
      )}
    >
      <ShoppingCart className="hidden sm:block h-5 w-5 shrink-0 text-accent" />

      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-accent-600 mb-0.5">
          {label}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-foreground truncate">
            {product.name}
          </span>
          <RetailerBadge retailer={product.retailer} size="sm" />
          <span className="text-sm font-bold text-foreground">
            {formatCurrency(product.price, true)}
          </span>
        </div>
      </div>

      <Button
        variant="accent"
        size="sm"
        asChild
        className="shrink-0 w-full sm:w-auto"
      >
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="nofollow noopener sponsored"
          className="gap-1.5"
        >
          Check Price
          <ExternalLink className="h-3 w-3" />
        </a>
      </Button>

      <p className="sm:hidden text-[10px] text-muted-foreground italic">
        Affiliate link
      </p>
    </div>
  );
}
