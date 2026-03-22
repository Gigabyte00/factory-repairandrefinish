'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ProductCard } from './ProductCard';
import { AffiliateDisclosure } from './AffiliateDisclosure';
import { Button } from '@/components/ui/button';
import type { AffiliateProduct, Retailer } from '@/types';

const retailerFilters: { value: Retailer | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'homedepot', label: 'Home Depot' },
  { value: 'lowes', label: "Lowe's" },
  { value: 'amazon', label: 'Amazon' },
  { value: 'wayfair', label: 'Wayfair' },
];

interface ProductGridProps {
  products: AffiliateProduct[];
  heading?: string;
  subtitle?: string;
  className?: string;
  showFilter?: boolean;
}

export function ProductGrid({
  products,
  heading = 'Recommended Products',
  subtitle,
  className,
  showFilter = true,
}: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState<Retailer | 'all'>('all');

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter((p) => p.retailer === activeFilter);

  // Only show filters for retailers that have products
  const availableRetailers = new Set(products.map((p) => p.retailer));
  const visibleFilters = retailerFilters.filter(
    (f) => f.value === 'all' || availableRetailers.has(f.value as Retailer)
  );

  return (
    <section className={cn('', className)}>
      {/* Disclosure */}
      <AffiliateDisclosure variant="full" className="mb-6" />

      {/* Header */}
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-bold text-primary">{heading}</h2>
        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>

      {/* Filter */}
      {showFilter && visibleFilters.length > 2 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {visibleFilters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveFilter(filter.value as Retailer | 'all')}
              className="text-xs"
            >
              {filter.label}
            </Button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="py-8 text-center text-sm text-muted-foreground">
          No products found for this retailer.
        </p>
      )}
    </section>
  );
}
