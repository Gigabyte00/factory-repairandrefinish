// =============================================================================
// Repair & Refinish - Google Analytics 4 Event Tracking
// =============================================================================
// Type-safe GA4 event tracking with safe no-op when GA is not loaded.
// All functions silently no-op in development or when the GA script is absent.
// =============================================================================

/* ── Global gtag type declaration ──────────────────────────────────── */

type GtagCommand = 'config' | 'event' | 'set' | 'consent';

interface GtagEventParams {
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    gtag?: (...args: [GtagCommand, string, GtagEventParams?]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/* ── Core wrapper ──────────────────────────────────────────────────── */

/**
 * Safe wrapper around `window.gtag`. No-ops if GA is not loaded.
 */
function trackEvent(
  eventName: string,
  params: GtagEventParams = {},
): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }
  window.gtag('event', eventName, params);
}

/* ── Page / Content Events ─────────────────────────────────────────── */

export function trackPageView(url: string, title: string): void {
  trackEvent('page_view', {
    page_location: url,
    page_title: title,
  });
}

export function trackGuideView(
  guideSlug: string,
  guideTitle: string,
  category: string,
  difficulty: string,
): void {
  trackEvent('guide_view', {
    guide_slug: guideSlug,
    guide_title: guideTitle,
    category,
    difficulty,
  });
  // Also fire GA4's standard view_item for compatibility
  trackEvent('view_item', {
    item_name: guideTitle,
    item_category: category,
    item_variant: difficulty,
  });
}

export function trackGuideStepView(
  guideSlug: string,
  stepNumber: number,
  totalSteps: number,
): void {
  trackEvent('guide_step_view', {
    guide_slug: guideSlug,
    step_number: stepNumber,
    total_steps: totalSteps,
  });
}

export function trackGuideCompletion(
  guideSlug: string,
  guideTitle: string,
  category: string,
): void {
  trackEvent('guide_completed', {
    guide_slug: guideSlug,
    guide_title: guideTitle,
    category,
  });
}

export function trackCategoryView(
  categorySlug: string,
  categoryName: string,
): void {
  trackEvent('category_view', {
    category_slug: categorySlug,
    category_name: categoryName,
  });
}

export function trackSearch(query: string, resultsCount: number): void {
  trackEvent('search', {
    search_term: query,
    results_count: resultsCount,
  });
}

/* ── Affiliate / Revenue Events ────────────────────────────────────── */

export function trackAffiliateClick(
  productName: string,
  retailer: string,
  price: number,
  guideSlug?: string,
): void {
  trackEvent('affiliate_click', {
    product_name: productName,
    retailer,
    price,
    guide_slug: guideSlug ?? '',
  });
}

export function trackProductView(
  productName: string,
  retailer: string,
  price: number,
): void {
  trackEvent('view_item', {
    item_name: productName,
    affiliation: retailer,
    price,
  });
}

export function trackOutboundLink(url: string, retailer: string): void {
  trackEvent('outbound_link', {
    link_url: url,
    retailer,
  });
}

/* ── Lead Generation Events ────────────────────────────────────────── */

export function trackNewsletterSignup(
  source: string,
  email?: string,
): void {
  trackEvent('generate_lead', {
    source,
    method: 'newsletter',
    ...(email ? { lead_email: email } : {}),
  });
}

export function trackEmailCapture(
  source: 'inline' | 'exit-intent' | 'sticky-bar' | 'footer' | 'hero',
): void {
  trackEvent('email_capture', {
    capture_source: source,
  });
}

export function trackExitIntentShown(): void {
  trackEvent('exit_intent_shown', {});
}

export function trackExitIntentDismissed(): void {
  trackEvent('exit_intent_dismissed', {});
}

/* ── Engagement Events ─────────────────────────────────────────────── */

export function trackSocialShare(
  platform: string,
  guideSlug?: string,
): void {
  trackEvent('share', {
    method: platform,
    content_type: 'guide',
    item_id: guideSlug ?? '',
  });
}

export function trackPrint(guideSlug?: string): void {
  trackEvent('print_guide', {
    guide_slug: guideSlug ?? '',
  });
}

export function trackCopyLink(guideSlug?: string): void {
  trackEvent('copy_link', {
    guide_slug: guideSlug ?? '',
  });
}

export function trackFAQExpand(
  question: string,
  guideSlug?: string,
): void {
  trackEvent('faq_expand', {
    question,
    guide_slug: guideSlug ?? '',
  });
}

export function trackToolCheckoff(
  toolName: string,
  guideSlug?: string,
): void {
  trackEvent('tool_checkoff', {
    tool_name: toolName,
    guide_slug: guideSlug ?? '',
  });
}

export function trackContactFormSubmit(): void {
  trackEvent('contact_form_submit', {});
}

export function trackScrollDepth(
  percentage: number,
  pageType: string,
): void {
  trackEvent('scroll_depth', {
    percent_scrolled: percentage,
    page_type: pageType,
  });
}

/* ── CTA Events ────────────────────────────────────────────────────── */

export function trackCTAClick(
  ctaText: string,
  ctaLocation: string,
  destination: string,
): void {
  trackEvent('cta_click', {
    cta_text: ctaText,
    cta_location: ctaLocation,
    destination,
  });
}
