'use client';

import { cn } from '@/lib/utils';
import { getRetailerName } from '@/lib/utils';
import type { Retailer } from '@/types';

const retailerStyles: Record<Retailer, string> = {
  homedepot: 'bg-[#FEF3EC] text-[#F96302] border-[#F96302]/20',
  lowes: 'bg-[#E6EFF8] text-[#004990] border-[#004990]/20',
  wayfair: 'bg-[#F3E8F7] text-[#7B2D8E] border-[#7B2D8E]/20',
  amazon: 'bg-[#FFF5E6] text-[#C77B00] border-[#C77B00]/20',
};

interface RetailerBadgeProps {
  retailer: Retailer;
  className?: string;
  size?: 'sm' | 'md';
}

export function RetailerBadge({ retailer, className, size = 'sm' }: RetailerBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-semibold',
        size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-0.5 text-xs',
        retailerStyles[retailer],
        className
      )}
    >
      {getRetailerName(retailer)}
    </span>
  );
}
