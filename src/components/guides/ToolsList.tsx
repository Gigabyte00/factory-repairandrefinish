'use client';

import { useState } from 'react';
import { cn, getRetailerName } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { RetailerBadge } from '@/components/affiliate/RetailerBadge';
import { Wrench, Package, ExternalLink } from 'lucide-react';
import type { AffiliateProduct } from '@/types';

interface ToolsListProps {
  tools: string[];
  materials: string[];
  affiliateProducts?: AffiliateProduct[];
  className?: string;
}

function ChecklistItem({
  item,
  affiliateProduct,
}: {
  item: string;
  affiliateProduct?: AffiliateProduct;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={cn(
        'group flex items-start gap-3 rounded-lg p-2.5 transition-colors',
        checked ? 'bg-emerald-50/80' : 'hover:bg-warm-50'
      )}
    >
      <Checkbox
        checked={checked}
        onCheckedChange={(val) => setChecked(val === true)}
        className="mt-0.5"
      />
      <div className="flex-1 min-w-0">
        <span
          className={cn(
            'text-sm transition-colors',
            checked ? 'text-muted-foreground line-through' : 'text-foreground'
          )}
        >
          {item}
        </span>

        {affiliateProduct && (
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            <RetailerBadge retailer={affiliateProduct.retailer} size="sm" />
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="h-6 px-2 text-[10px] text-accent hover:text-accent-600"
            >
              <a
                href={affiliateProduct.affiliateUrl}
                target="_blank"
                rel="nofollow noopener sponsored"
              >
                Buy on {getRetailerName(affiliateProduct.retailer)}
                <ExternalLink className="ml-1 h-2.5 w-2.5" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export function ToolsList({
  tools,
  materials,
  affiliateProducts = [],
  className,
}: ToolsListProps) {
  // Attempt to match tools/materials to affiliate products by name substring
  function findMatchingProduct(itemName: string): AffiliateProduct | undefined {
    const lower = itemName.toLowerCase();
    return affiliateProducts.find(
      (p) =>
        lower.includes(p.name.toLowerCase().split(' ').slice(0, 2).join(' ')) ||
        p.name.toLowerCase().includes(lower.split(' ').slice(0, 2).join(' '))
    );
  }

  return (
    <div className={cn('rounded-xl border border-border bg-card p-6', className)}>
      <h2 className="font-heading text-xl font-bold text-primary mb-6">
        What You&apos;ll Need
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tools column */}
        <div>
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
            <Wrench className="h-4 w-4 text-primary" />
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              Tools
            </h3>
            <span className="text-xs text-muted-foreground">({tools.length})</span>
          </div>
          <div className="space-y-0.5">
            {tools.map((tool) => (
              <ChecklistItem
                key={tool}
                item={tool}
                affiliateProduct={findMatchingProduct(tool)}
              />
            ))}
          </div>
        </div>

        {/* Materials column */}
        <div>
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
            <Package className="h-4 w-4 text-accent" />
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              Materials
            </h3>
            <span className="text-xs text-muted-foreground">({materials.length})</span>
          </div>
          <div className="space-y-0.5">
            {materials.map((material) => (
              <ChecklistItem
                key={material}
                item={material}
                affiliateProduct={findMatchingProduct(material)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
