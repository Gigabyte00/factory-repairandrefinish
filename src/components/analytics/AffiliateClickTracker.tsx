'use client';

import type { ReactNode, MouseEvent } from 'react';
import { trackAffiliateClick, trackOutboundLink } from '@/lib/analytics';

interface AffiliateClickTrackerProps {
  productName: string;
  retailer: string;
  price: number;
  affiliateUrl: string;
  guideSlug?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper component for affiliate links.
 * Fires trackAffiliateClick and trackOutboundLink before navigation.
 */
export function AffiliateClickTracker({
  productName,
  retailer,
  price,
  affiliateUrl,
  guideSlug,
  children,
  className,
}: AffiliateClickTrackerProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    trackAffiliateClick(productName, retailer, price, guideSlug);
    trackOutboundLink(affiliateUrl, retailer);

    // Allow small delay for analytics to fire before navigation
    // The link has target="_blank" so navigation happens in new tab anyway
  }

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="nofollow noopener sponsored"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
