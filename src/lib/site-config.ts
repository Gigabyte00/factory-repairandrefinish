import type { SiteConfig, Category } from '@/types';

// =============================================================================
// Repair & Refinish - Site Configuration
// =============================================================================
// All brand details are hardcoded here. This is a standalone custom site,
// not a multi-tenant template. Edit values directly.
// =============================================================================

export const siteConfig: SiteConfig = {
  name: 'Repair & Refinish',
  domain: 'repairandrefinish.com',
  tagline: 'Fix It Right. Make It Beautiful.',
  description:
    'Expert DIY guides for home repair and improvement. Step-by-step instructions, tool recommendations, and cost estimates to help you fix it right and make it beautiful.',
  url: 'https://repairandrefinish.com',

  colors: {
    primary: '#1E3A5F',
    primaryLight: '#2A5080',
    primaryDark: '#142840',
    accent: '#E8712B',
    accentLight: '#F0944E',
    accentDark: '#C95D1E',
    success: '#059669',
    warning: '#D97706',
    danger: '#DC2626',
    neutral50: '#FAFAF9',
    neutral100: '#F5F5F4',
    neutral200: '#E7E5E4',
    neutral300: '#D6D3D1',
    neutral400: '#A8A29E',
    neutral500: '#78716C',
    neutral600: '#57534E',
    neutral700: '#44403C',
    neutral800: '#292524',
    neutral900: '#1C1917',
    neutral950: '#0C0A09',
  },

  fonts: {
    heading: 'Space Grotesk',
    body: 'Inter',
  },

  socials: {
    youtube: 'https://youtube.com/@repairandrefinish',
    facebook: 'https://facebook.com/repairandrefinish',
    instagram: 'https://instagram.com/repairandrefinish',
    pinterest: 'https://pinterest.com/repairandrefinish',
    twitter: 'https://x.com/repairandrefinish',
    tiktok: 'https://tiktok.com/@repairandrefinish',
  },

  navigation: [
    { label: 'Home', href: '/' },
    {
      label: 'Guides',
      href: '/guides',
      children: [
        { label: 'All Guides', href: '/guides' },
        { label: 'Beginner', href: '/guides?difficulty=beginner' },
        { label: 'Intermediate', href: '/guides?difficulty=intermediate' },
        { label: 'Advanced', href: '/guides?difficulty=advanced' },
      ],
    },
    {
      label: 'Categories',
      href: '/categories',
      children: [
        { label: 'Plumbing', href: '/categories/plumbing' },
        { label: 'Electrical', href: '/categories/electrical' },
        { label: 'Painting & Walls', href: '/categories/painting-walls' },
        { label: 'Flooring', href: '/categories/flooring' },
        { label: 'Kitchen & Bath', href: '/categories/kitchen-bath' },
        { label: 'Doors & Windows', href: '/categories/doors-windows' },
        { label: 'HVAC & Climate', href: '/categories/hvac-climate' },
        { label: 'Outdoor & Landscaping', href: '/categories/outdoor-landscaping' },
        { label: 'Appliance Repair', href: '/categories/appliance-repair' },
        { label: 'Furniture & Decor', href: '/categories/furniture-decor' },
      ],
    },
    { label: 'Tools', href: '/tools' },
    { label: 'Cost Calculator', href: '/calculator' },
    { label: 'About', href: '/about' },
  ],

  footer: [
    {
      title: 'Popular Guides',
      links: [
        { label: 'Fix a Running Toilet', href: '/guides/fix-running-toilet' },
        { label: 'Patch Drywall', href: '/guides/patch-repair-drywall' },
        { label: 'Refinish Hardwood Floors', href: '/guides/refinish-hardwood-floors' },
        { label: 'Install a Ceiling Fan', href: '/guides/install-ceiling-fan' },
        { label: 'Replace a Faucet', href: '/guides/replace-kitchen-faucet' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { label: 'Plumbing', href: '/categories/plumbing' },
        { label: 'Electrical', href: '/categories/electrical' },
        { label: 'Painting & Walls', href: '/categories/painting-walls' },
        { label: 'Flooring', href: '/categories/flooring' },
        { label: 'Kitchen & Bath', href: '/categories/kitchen-bath' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Tool Recommendations', href: '/tools' },
        { label: 'Cost Calculator', href: '/calculator' },
        { label: 'DIY vs. Hire a Pro', href: '/diy-vs-pro' },
        { label: 'Safety Tips', href: '/safety' },
        { label: 'Newsletter', href: '/newsletter' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
      ],
    },
  ],

  analytics: {
    plausibleDomain: 'repairandrefinish.com',
    gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || undefined,
  },

  seo: {
    title: 'Repair & Refinish - Fix It Right. Make It Beautiful.',
    description:
      'Expert DIY guides for home repair and improvement. Step-by-step instructions, tool recommendations, and cost estimates for every skill level.',
    keywords: [
      'home repair',
      'DIY',
      'home improvement',
      'how to fix',
      'repair guide',
      'refinish',
      'home maintenance',
      'plumbing',
      'electrical',
      'painting',
      'flooring',
      'kitchen remodel',
      'bathroom repair',
      'drywall repair',
      'tool recommendations',
    ],
    ogImage: '/og-default.jpg',
  },
};

// =============================================================================
// Default Author
// =============================================================================

export const defaultAuthor = {
  name: 'Repair & Refinish Team',
  bio: 'Our team of experienced contractors, carpenters, and DIY enthusiasts share decades of hands-on home repair knowledge. We believe every homeowner can learn to fix it right and make it beautiful.',
  avatar: '/authors/team-avatar.jpg',
  expertise: [
    'General Home Repair',
    'Plumbing',
    'Electrical',
    'Carpentry',
    'Painting',
    'Flooring',
  ],
};

// =============================================================================
// Category Definitions (metadata only - full data in categories-data.ts)
// =============================================================================

export const categoryMeta: Record<string, { color: string; icon: string }> = {
  plumbing: { color: '#3B82F6', icon: 'Droplets' },
  electrical: { color: '#EAB308', icon: 'Zap' },
  'painting-walls': { color: '#22C55E', icon: 'Paintbrush' },
  flooring: { color: '#92400E', icon: 'Layers' },
  'kitchen-bath': { color: '#14B8A6', icon: 'CookingPot' },
  'doors-windows': { color: '#6366F1', icon: 'DoorOpen' },
  'hvac-climate': { color: '#EF4444', icon: 'Thermometer' },
  'outdoor-landscaping': { color: '#10B981', icon: 'TreePine' },
  'appliance-repair': { color: '#8B5CF6', icon: 'Wrench' },
  'furniture-decor': { color: '#F59E0B', icon: 'Armchair' },
};
