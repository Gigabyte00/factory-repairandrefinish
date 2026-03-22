// =============================================================================
// Repair & Refinish - TypeScript Type Definitions
// =============================================================================

/** Difficulty levels for guides */
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

/** Supported affiliate retailers */
export type Retailer = 'homedepot' | 'lowes' | 'wayfair' | 'amazon';

/** Lead capture sources */
export type LeadSource =
  | 'newsletter'
  | 'guide-download'
  | 'cost-calculator'
  | 'tool-finder'
  | 'exit-intent'
  | 'inline-cta';

/** Post/content status */
export type ContentStatus = 'draft' | 'published' | 'archived';

// -----------------------------------------------------------------------------
// Guide Types
// -----------------------------------------------------------------------------

export interface GuideStep {
  stepNumber: number;
  title: string;
  description: string;
  imagePrompt: string;
  proTip?: string;
  warning?: string;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  difficulty: Difficulty;
  estimatedTime: string;
  estimatedCost: CostEstimate;
  tools: string[];
  materials: string[];
  steps: GuideStep[];
  tips: string[];
  warnings: string[];
  affiliateProducts: AffiliateProduct[];
  featuredImage: string;
  publishedAt: string;
  updatedAt: string;
  author: Author;
  seo: SEO;
  faqs: FAQ[];
  relatedGuides?: string[];
  status: ContentStatus;
}

// -----------------------------------------------------------------------------
// Category
// -----------------------------------------------------------------------------

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  guideCount: number;
  color: string;
}

// -----------------------------------------------------------------------------
// Affiliate Products
// -----------------------------------------------------------------------------

export interface AffiliateProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  affiliateUrl: string;
  retailer: Retailer;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  badge?: string;
}

// -----------------------------------------------------------------------------
// Lead Capture
// -----------------------------------------------------------------------------

export interface LeadCapture {
  email: string;
  name?: string;
  source: LeadSource;
  interests: string[];
}

// -----------------------------------------------------------------------------
// Tool Recommendation
// -----------------------------------------------------------------------------

export interface ToolRecommendation {
  name: string;
  description: string;
  affiliateProducts: AffiliateProduct[];
  useCases: string[];
}

// -----------------------------------------------------------------------------
// Cost Estimate
// -----------------------------------------------------------------------------

export interface CostEstimate {
  low: number;
  mid: number;
  high: number;
  diyVsPro: string;
}

// -----------------------------------------------------------------------------
// FAQ
// -----------------------------------------------------------------------------

export interface FAQ {
  question: string;
  answer: string;
}

// -----------------------------------------------------------------------------
// Author
// -----------------------------------------------------------------------------

export interface Author {
  name: string;
  bio: string;
  avatar: string;
  expertise: string[];
}

// -----------------------------------------------------------------------------
// SEO
// -----------------------------------------------------------------------------

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

// -----------------------------------------------------------------------------
// Site Configuration
// -----------------------------------------------------------------------------

export interface SiteColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  accent: string;
  accentLight: string;
  accentDark: string;
  success: string;
  warning: string;
  danger: string;
  neutral50: string;
  neutral100: string;
  neutral200: string;
  neutral300: string;
  neutral400: string;
  neutral500: string;
  neutral600: string;
  neutral700: string;
  neutral800: string;
  neutral900: string;
  neutral950: string;
}

export interface SiteFonts {
  heading: string;
  body: string;
}

export interface SocialLinks {
  youtube?: string;
  facebook?: string;
  instagram?: string;
  pinterest?: string;
  twitter?: string;
  tiktok?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export interface SiteConfig {
  name: string;
  domain: string;
  tagline: string;
  description: string;
  url: string;
  colors: SiteColors;
  fonts: SiteFonts;
  socials: SocialLinks;
  navigation: NavItem[];
  footer: FooterSection[];
  analytics: {
    plausibleDomain?: string;
    gaId?: string;
  };
  seo: SEO;
}

// -----------------------------------------------------------------------------
// Newsletter Subscriber
// -----------------------------------------------------------------------------

export interface NewsletterSubscriber {
  id: string;
  email: string;
  name?: string;
  subscribedAt: string;
  interests: string[];
  confirmed: boolean;
  source: LeadSource;
}

// -----------------------------------------------------------------------------
// Search Result
// -----------------------------------------------------------------------------

export interface SearchResult {
  type: 'guide' | 'category' | 'product';
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  url: string;
  category?: string;
  difficulty?: Difficulty;
  score: number;
}
