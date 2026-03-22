'use client';

import { cn, formatCurrency, getStarRating } from '@/lib/utils';
import { RetailerBadge } from './RetailerBadge';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, StarHalf, ExternalLink } from 'lucide-react';
import type { AffiliateProduct } from '@/types';
import { trackAffiliateClick, trackOutboundLink } from '@/lib/analytics';

interface ProductCardProps {
  product: AffiliateProduct;
  className?: string;
}

function StarRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  const { full, half, empty } = getStarRating(rating);
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {Array.from({ length: full }).map((_, i) => (
          <Star key={`full-${i}`} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
        ))}
        {half && <StarHalf className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />}
        {Array.from({ length: empty }).map((_, i) => (
          <Star key={`empty-${i}`} className="h-3.5 w-3.5 text-warm-300" />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">
        {rating.toFixed(1)} ({reviewCount.toLocaleString()})
      </span>
    </div>
  );
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div
      className={cn(
        'product-card group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden',
        className
      )}
    >
      {/* Badge */}
      {product.badge && (
        <div className="affiliate-badge z-10">
          {product.badge}
        </div>
      )}

      {/* Image placeholder */}
      <div className="relative aspect-square w-full bg-gradient-to-br from-warm-100 to-warm-200 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-white/60 flex items-center justify-center">
            <span className="text-2xl">🔧</span>
          </div>
          <p className="text-xs text-warm-500 line-clamp-2">{product.name}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2">
          <RetailerBadge retailer={product.retailer} />
        </div>

        <h3 className="font-heading text-sm font-semibold text-foreground leading-snug line-clamp-2 mb-1">
          {product.name}
        </h3>

        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        <div className="mt-auto pt-4 flex items-end justify-between">
          <span className="font-heading text-xl font-bold text-foreground">
            {formatCurrency(product.price, true)}
          </span>

          <Button
            variant="accent"
            size="sm"
            asChild
          >
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="nofollow noopener sponsored"
              className="gap-1.5"
              onClick={() => {
                trackAffiliateClick(product.name, product.retailer, product.price);
                trackOutboundLink(product.affiliateUrl, product.retailer);
              }}
            >
              Check Price
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>

        <p className="mt-2 text-[10px] text-muted-foreground italic">
          Affiliate link - we may earn a commission
        </p>
      </div>
    </div>
  );
}
