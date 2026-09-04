import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Skip type-check during build — KB tables (authors, faq_items, glossary_terms,
  // topic_clusters) exist in DB but haven't been added to generated types yet.
  // Run `tsc --noEmit` separately for type safety.
  typescript: {
    ignoreBuildErrors: true,
  },

  // Enable transpilation of the shared workspace package
  transpilePackages: ['@factory/shared'],

  // Proxy Supabase storage through /cdn/ to hide the project ref from page source.
  // SUPABASE_CDN_BASE is a private (non-NEXT_PUBLIC) env var — never shipped to browser.
  async rewrites() {
    const base = process.env.SUPABASE_CDN_BASE;
    if (!base) return [];
    return [{ source: '/cdn/:path*', destination: `${base}/:path*` }];
  },

  // Resolve in-body article links that point to bare or mis-hyphenated category
  // slugs (e.g. /budget-ebikes, /budget-e-bikes) to the canonical /category/*
  // route. Only real categories (from the DB) are targets — variants fold into
  // the correct slug. Next evaluates redirects() before the /category/[slug]
  // dynamic route, so these win over the catch-all.
  async redirects() {
    return [
      // Bare slug → /category (exact match to a real category slug).
      { source: '/accessories', destination: '/category/accessories', permanent: true },
      { source: '/best-ebikes', destination: '/category/best-ebikes', permanent: true },
      { source: '/budget-ebikes', destination: '/category/budget-ebikes', permanent: true },
      { source: '/buying-guides', destination: '/category/buying-guides', permanent: true },
      { source: '/cargo-ebikes', destination: '/category/cargo-ebikes', permanent: true },
      { source: '/commuter-ebikes', destination: '/category/commuter-ebikes', permanent: true },
      { source: '/ebike-accessories', destination: '/category/ebike-accessories', permanent: true },
      { source: '/ebike-comparisons', destination: '/category/ebike-comparisons', permanent: true },
      { source: '/ebike-reviews', destination: '/category/ebike-reviews', permanent: true },
      { source: '/folding-ebikes', destination: '/category/folding-ebikes', permanent: true },
      { source: '/guides', destination: '/category/guides', permanent: true },
      { source: '/maintenance-tips', destination: '/category/maintenance-tips', permanent: true },
      { source: '/mountain-ebikes', destination: '/category/mountain-ebikes', permanent: true },
      // Mis-hyphenated variant → real category slug.
      { source: '/budget-e-bikes', destination: '/category/budget-ebikes', permanent: true },
      { source: '/commuter-e-bikes', destination: '/category/commuter-ebikes', permanent: true },
      { source: '/e-bike-accessories', destination: '/category/ebike-accessories', permanent: true },
      { source: '/category/budget-e-bikes', destination: '/category/budget-ebikes', permanent: true },
      { source: '/category/cargo-e-bikes', destination: '/category/cargo-ebikes', permanent: true },
      { source: '/category/commuter-e-bikes', destination: '/category/commuter-ebikes', permanent: true },
      { source: '/category/e-bike-guides', destination: '/category/guides', permanent: true },
      { source: '/category/ebike-guides', destination: '/category/guides', permanent: true },
      { source: '/category/folding-e-bikes', destination: '/category/folding-ebikes', permanent: true },
      { source: '/category/mountain-e-bikes', destination: '/category/mountain-ebikes', permanent: true },
      // No "deals" category exists — point deal links at the offers page.
      { source: '/ebike-deals', destination: '/offers', permanent: true },
      { source: '/category/ebike-deals', destination: '/offers', permanent: true },
    ];
  },

  // Cache the /cdn/ image proxy at Vercel's edge so repeat requests don't re-hit
  // Supabase Storage egress on every load. Without this, the proxy responds
  // `max-age=0, must-revalidate` → x-vercel-cache: MISS on every request, which
  // (with all-traffic forwarding, incl. bots) exhausted the free-tier 5 GB egress.
  // Image paths are content-addressed (DB stores the path); to replace an image,
  // upload under a new path rather than overwriting — hence `immutable`.
  async headers() {
    return [
      {
        source: '/cdn/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' },
        ],
      },
    ];
  },

  // Image optimization for affiliate sites
  images: {
    // Cache next/image-optimized variants at the edge for ~31 days so each source
    // image is fetched from Supabase once per region, not re-optimized per request.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      { protocol: 'https', hostname: '**.supabase.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'leoguarbikes.com' },
    ],
  },

  // Enable ISR revalidation via API
  experimental: {
    // Enable PPR for faster initial loads
  },
};

export default nextConfig;
