# Repair & Refinish - CLAUDE.md

Definitive reference for any AI assistant working on this codebase.

---

## Project Overview

| Field | Value |
|-------|-------|
| **Site Name** | Repair & Refinish |
| **Domain** | repairandrefinish.com |
| **Tagline** | Fix It Right. Make It Beautiful. |
| **Purpose** | Comprehensive home repair and improvement tutorial/guide website |
| **Monetization** | Affiliate links (Home Depot, Lowe's, Wayfair, Amazon) |
| **Lead Generation** | Email capture for weekly newsletter |
| **Tech Stack** | Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, App Router |
| **Deployment** | Vercel |
| **Content Source** | Static TypeScript files (no database yet) |

This is a **standalone custom site**, not a multi-tenant template. All brand details are hardcoded in `src/lib/site-config.ts`.

---

## Brand Identity

### Name & Tagline
- **Name:** Repair & Refinish
- **Tagline:** "Fix It Right. Make It Beautiful."
- **Description:** Expert DIY guides for home repair and improvement. Step-by-step instructions, tool recommendations, and cost estimates for every skill level.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Primary** | `#1E3A5F` | Headings, buttons, trust elements |
| **Primary Light** | `#2A5080` | Hover states, secondary elements |
| **Primary Dark** | `#142840` | Deep backgrounds, footer |
| **Accent** | `#E8712B` | CTAs, links, highlights, interactive elements |
| **Accent Light** | `#F0944E` | Hover states for accent elements |
| **Accent Dark** | `#C95D1E` | Active/pressed states |
| **Success** | `#059669` | Positive states, beginner badges, checkmarks |
| **Warning** | `#D97706` | Caution states, intermediate badges |
| **Danger** | `#DC2626` | Error states, advanced badges, safety warnings |
| **Neutral 50-950** | `#FAFAF9` to `#0C0A09` | Warm stone-toned neutrals (not gray) |

**Retailer Brand Colors (CSS variables):**
- Home Depot: `#F96302`
- Lowe's: `#004990`
- Wayfair: `#7B2D8E`
- Amazon: `#FF9900`

**Difficulty Colors:**
- Beginner: `#16a34a` (green)
- Intermediate: `#eab308` (yellow)
- Advanced: `#dc2626` (red)

### Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| **Headings** | Space Grotesk | 600-700 | All h1-h6, card titles, section headers |
| **Body** | Inter | 400-500 | Paragraphs, UI text, descriptions |

Fonts are loaded via `next/font/google` with CSS variables `--font-space-grotesk` and `--font-inter`. Tailwind classes: `font-heading` and `font-sans`.

### Tone of Voice
- **Confident but approachable** — speak like a knowledgeable neighbor, not a textbook
- **Action-oriented** — use imperative verbs ("Turn the valve", "Apply the compound")
- **Safety-conscious** — always include warnings for electrical, gas, structural, or hazardous work
- **Honest about limitations** — tell readers when to call a pro instead
- **Cost-transparent** — always show DIY vs. pro cost comparisons
- **Jargon-explained** — define technical terms the first time they appear

---

## Architecture

### Directory Structure

```
factory-repairandrefinish/
├── CLAUDE.md                        # This file
├── AGENTS.md                        # Next.js agent rules
├── package.json                     # Dependencies & scripts
├── next.config.ts                   # Next.js config (minimal)
├── tailwind.config.ts               # Tailwind v4 config (colors, typography plugin)
├── tsconfig.json                    # TypeScript config (strict, @/* paths)
├── postcss.config.mjs               # PostCSS config
├── eslint.config.mjs                # ESLint config
├── public/                          # Static assets (images, favicons, OG images)
│
└── src/
    ├── app/                         # Next.js App Router pages
    │   ├── layout.tsx               # Root layout (fonts, Header, Footer, Toaster)
    │   ├── page.tsx                 # Homepage (hero, categories, guides, FAQ, CTA)
    │   ├── not-found.tsx            # 404 page
    │   ├── globals.css              # Design tokens, @theme, custom CSS classes
    │   ├── robots.ts                # robots.txt generation
    │   ├── sitemap.ts               # sitemap.xml generation
    │   ├── favicon.ico
    │   │
    │   ├── guides/
    │   │   ├── page.tsx             # Guide listing (search, filter, sort) [Client Component]
    │   │   └── [slug]/page.tsx      # Individual guide detail page [Server Component]
    │   │
    │   ├── categories/
    │   │   ├── page.tsx             # Category listing
    │   │   └── [slug]/page.tsx      # Category detail (guides in category)
    │   │
    │   ├── about/page.tsx           # About page
    │   ├── contact/page.tsx         # Contact page
    │   ├── privacy/page.tsx         # Privacy policy
    │   └── terms/page.tsx           # Terms of service
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx           # Site header with navigation
    │   │   ├── Footer.tsx           # Site footer with link sections
    │   │   ├── Breadcrumbs.tsx      # Breadcrumb navigation
    │   │   └── SearchBar.tsx        # Search input component
    │   │
    │   ├── guides/
    │   │   ├── GuideCard.tsx        # Guide preview card
    │   │   ├── GuideStepCard.tsx    # Individual step in a guide
    │   │   ├── GuideFAQ.tsx         # FAQ accordion for guides
    │   │   ├── GuideProgress.tsx    # Step progress indicator
    │   │   ├── TableOfContents.tsx  # In-guide navigation
    │   │   ├── ToolsList.tsx        # Tools/materials checklist
    │   │   ├── CostEstimateCard.tsx # Cost breakdown card
    │   │   └── RelatedGuides.tsx    # Related guides grid
    │   │
    │   ├── affiliate/
    │   │   ├── ProductCard.tsx      # Product card with affiliate link [Client]
    │   │   ├── ProductGrid.tsx      # Product grid layout
    │   │   ├── InlineProductCTA.tsx  # Inline product recommendation
    │   │   ├── RetailerBadge.tsx    # Retailer logo/name badge
    │   │   └── AffiliateDisclosure.tsx # FTC disclosure component [Client]
    │   │
    │   ├── lead-capture/
    │   │   ├── EmailCaptureForm.tsx  # Reusable email form
    │   │   ├── ExitIntentPopup.tsx   # Exit-intent modal [Client]
    │   │   ├── StickyLeadBar.tsx     # Scroll-triggered bottom bar [Client]
    │   │   └── InlineLeadCapture.tsx # In-content email capture
    │   │
    │   ├── social/
    │   │   └── ShareButtons.tsx     # Social sharing buttons
    │   │
    │   ├── NewsletterForm.tsx       # Newsletter signup (hero/inline/sidebar variants) [Client]
    │   ├── GuideActions.tsx         # Print & Share buttons [Client]
    │   │
    │   └── ui/                      # Base UI components (Radix-based)
    │       ├── accordion.tsx
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── checkbox.tsx
    │       ├── dialog.tsx
    │       ├── input.tsx
    │       ├── progress.tsx
    │       ├── scroll-area.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── skeleton.tsx
    │       ├── tabs.tsx
    │       ├── textarea.tsx
    │       ├── toast.tsx
    │       └── tooltip.tsx
    │
    ├── lib/
    │   ├── site-config.ts           # Brand config, navigation, footer, SEO defaults
    │   ├── categories-data.ts       # 10 category definitions + lookup helpers
    │   ├── guides-data.ts           # All guide data + query helpers (~794 lines)
    │   └── utils.ts                 # cn(), formatCurrency, formatDate, slugify, etc.
    │
    └── types/
        └── index.ts                 # All TypeScript type definitions
```

### Routing Structure

| Route | File | Type | Description |
|-------|------|------|-------------|
| `/` | `app/page.tsx` | Server | Homepage with hero, categories, guides, FAQ |
| `/guides` | `app/guides/page.tsx` | Client | Guide listing with search, filter, sort |
| `/guides/[slug]` | `app/guides/[slug]/page.tsx` | Server | Individual guide (SSG via `generateStaticParams`) |
| `/categories` | `app/categories/page.tsx` | Server | Category grid |
| `/categories/[slug]` | `app/categories/[slug]/page.tsx` | Server | Category detail with filtered guides |
| `/about` | `app/about/page.tsx` | Server | About page |
| `/contact` | `app/contact/page.tsx` | Server | Contact page |
| `/privacy` | `app/privacy/page.tsx` | Server | Privacy policy |
| `/terms` | `app/terms/page.tsx` | Server | Terms of service |
| `/sitemap.xml` | `app/sitemap.ts` | Server | Auto-generated sitemap |
| `/robots.txt` | `app/robots.ts` | Server | robots.txt |

### Component Hierarchy

```
RootLayout (layout.tsx)
├── Header (layout/Header.tsx)
├── main
│   └── [Page Content]
│       ├── Homepage (page.tsx)
│       │   ├── Hero section
│       │   ├── How It Works
│       │   ├── Category Grid → categories-data.ts
│       │   ├── Featured Guides → guides-data.ts
│       │   ├── DIY vs Pro section
│       │   ├── Newsletter CTA → NewsletterForm
│       │   ├── Popular Tools (inline affiliate products)
│       │   └── FAQ Accordion
│       │
│       ├── Guide Detail ([slug]/page.tsx)
│       │   ├── Breadcrumbs
│       │   ├── Guide Header (title, meta, author, actions)
│       │   ├── Table of Contents
│       │   ├── Tools & Materials cards
│       │   ├── Cost Estimate card
│       │   ├── Step-by-Step sections (guide-step CSS class)
│       │   │   ├── Progress bar
│       │   │   ├── Pro Tips (.pro-tip)
│       │   │   └── Warnings (.warning-callout)
│       │   ├── Product Recommendations (affiliate cards)
│       │   ├── Tips & Warnings
│       │   ├── FAQ Accordion
│       │   ├── Inline Newsletter CTA
│       │   ├── Related Guides
│       │   └── Sidebar (sticky)
│       │       ├── Quick Reference card
│       │       ├── Top Product pick
│       │       └── Newsletter signup
│       │
│       └── Guides Listing (guides/page.tsx)
│           ├── Search bar
│           ├── Category filter pills
│           ├── Difficulty filter pills
│           ├── Sort dropdown
│           └── Guide cards grid
│
├── Footer (layout/Footer.tsx)
└── Toaster (ui/toast.tsx)
```

### Data Flow

```
Static TypeScript Data (no database)
┌─────────────────────┐
│ src/lib/             │
│ ├─ site-config.ts    │──▶ Brand config, nav, footer, SEO
│ ├─ categories-data.ts│──▶ 10 categories with lookup helpers
│ ├─ guides-data.ts    │──▶ Full guide objects with query helpers
│ └─ utils.ts          │──▶ Formatting, class merging, ratings
└─────────────────────┘
         │
         ▼
┌─────────────────────┐
│ Pages & Components   │──▶ Import data directly, no API calls
│ (Server Components)  │     SSG via generateStaticParams
└─────────────────────┘
         │
         ▼
┌─────────────────────┐
│ Client Components    │──▶ Interactivity only (forms, filters,
│ ('use client')       │     exit intent, sticky bar, toasts)
└─────────────────────┘
```

---

## Content Model

### Guide Structure

Every guide is a complete `Guide` object defined in `src/types/index.ts`:

```typescript
interface Guide {
  id: string;              // "guide-fix-running-toilet"
  slug: string;            // "fix-running-toilet" (URL path)
  title: string;           // "How to Fix a Running Toilet"
  excerpt: string;         // 1-2 sentence summary
  content: string;         // Markdown body (intro text, context)
  category: string;        // Category slug: "plumbing"
  difficulty: Difficulty;  // "beginner" | "intermediate" | "advanced"
  estimatedTime: string;   // "20-30 minutes"
  estimatedCost: CostEstimate;
  tools: string[];         // List of required tools
  materials: string[];     // List of required materials
  steps: GuideStep[];      // Numbered step-by-step instructions
  tips: string[];          // Pro tips list
  warnings: string[];      // Safety warnings list
  affiliateProducts: AffiliateProduct[];
  featuredImage: string;   // Path to hero image
  publishedAt: string;     // ISO datetime
  updatedAt: string;       // ISO datetime
  author: Author;          // { name, bio, avatar, expertise[] }
  seo: SEO;                // { title, description, keywords[], ogImage }
  faqs: FAQ[];             // { question, answer }[]
  relatedGuides?: string[];// Slugs of related guides
  status: ContentStatus;   // "draft" | "published" | "archived"
}
```

**GuideStep:**
```typescript
interface GuideStep {
  stepNumber: number;      // 1-based
  title: string;           // "Diagnose the Problem"
  description: string;     // Full step text
  imagePrompt: string;     // AI image generation prompt (placeholder for now)
  proTip?: string;         // Optional pro tip for this step
  warning?: string;        // Optional safety warning for this step
}
```

**CostEstimate:**
```typescript
interface CostEstimate {
  low: number;             // Budget option in USD
  mid: number;             // Mid-range option
  high: number;            // Premium option
  diyVsPro: string;        // Comparison text: "A plumber charges $150-$300..."
}
```

### Category System

10 categories defined in `src/lib/categories-data.ts`:

| ID | Slug | Name | Icon | Color |
|----|------|------|------|-------|
| `cat-plumbing` | `plumbing` | Plumbing | Droplets | `#3B82F6` |
| `cat-electrical` | `electrical` | Electrical | Zap | `#EAB308` |
| `cat-painting-walls` | `painting-walls` | Painting & Walls | Paintbrush | `#22C55E` |
| `cat-flooring` | `flooring` | Flooring | Layers | `#92400E` |
| `cat-kitchen-bath` | `kitchen-bath` | Kitchen & Bath | CookingPot | `#14B8A6` |
| `cat-doors-windows` | `doors-windows` | Doors & Windows | DoorOpen | `#6366F1` |
| `cat-hvac-climate` | `hvac-climate` | HVAC & Climate | Thermometer | `#EF4444` |
| `cat-outdoor-landscaping` | `outdoor-landscaping` | Outdoor & Landscaping | TreePine | `#10B981` |
| `cat-appliance-repair` | `appliance-repair` | Appliance Repair | Wrench | `#8B5CF6` |
| `cat-furniture-decor` | `furniture-decor` | Furniture & Decor | Armchair | `#F59E0B` |

**Helper functions:**
- `getCategoryBySlug(slug)` — lookup by slug
- `getCategoryById(id)` — lookup by id
- `getAllCategorySlugs()` — array of all slugs (for static params)

### Affiliate Product Model

```typescript
interface AffiliateProduct {
  id: string;              // "prod-fluidmaster-400a"
  name: string;            // "Fluidmaster 400A Universal Fill Valve"
  description: string;     // Short product description
  price: number;           // 8.98 (USD)
  affiliateUrl: string;    // Full affiliate URL
  retailer: Retailer;      // "homedepot" | "lowes" | "wayfair" | "amazon"
  imageUrl: string;        // Path to product image
  rating: number;          // 4.5 (out of 5)
  reviewCount: number;     // 28400
  badge?: string;          // "Best Seller", "Best Value", "Editor's Pick"
}
```

### Lead Capture Model

```typescript
interface LeadCapture {
  email: string;
  name?: string;
  source: LeadSource;      // "newsletter" | "guide-download" | "cost-calculator" |
                           // "tool-finder" | "exit-intent" | "inline-cta"
  interests: string[];     // Category slugs
}
```

---

## Design System

### CSS Architecture

Tailwind CSS v4 is used with **CSS-first configuration**. Design tokens are defined in two places:

1. **`src/app/globals.css`** — CSS custom properties in `:root` and `@theme inline` block (primary source)
2. **`tailwind.config.ts`** — Legacy plugin support (typography) and reference

### Color Tokens (CSS Variables)

```css
/* Primary palette */
--primary: #1E3A5F;
--primary-foreground: #ffffff;
--primary-50 through --primary-900

/* Accent palette */
--accent: #E8712B;
--accent-foreground: #ffffff;
--accent-50 through --accent-900

/* Warm neutrals */
--warm-50: #FAFAF9 through --warm-950: #0C0A09

/* Semantic */
--background: #ffffff;
--foreground: #1a1a2e;
--muted: #F5F5F7;
--muted-foreground: #6b7280;
--card: #ffffff;
--border: #e5e7eb;
--ring: #1E3A5F;
--destructive: #dc2626;
--success: #059669;
--warning: #D97706;

/* Difficulty */
--beginner: #16a34a;
--intermediate: #eab308;
--advanced: #dc2626;

/* Retailer */
--homedepot: #F96302;
--lowes: #004990;
--wayfair: #7B2D8E;
--amazon: #FF9900;
```

### Custom CSS Classes

Defined in `globals.css`, used throughout the site:

| Class | Purpose |
|-------|---------|
| `.guide-step` | Step card with numbered circle indicator and connecting line |
| `.pro-tip` | Blue-left-bordered callout with "Pro Tip" header |
| `.warning-callout` | Red-left-bordered callout with "Warning" header |
| `.cost-card` | Gradient background card for cost estimates |
| `.checklist` | Styled checkbox list for tools/materials |
| `.difficulty-badge` | Pill badge with difficulty-appropriate color |
| `.product-card` | Card with hover lift + shadow effect |
| `.affiliate-badge` | Absolute-positioned accent badge (top-right) |
| `.hero-gradient` | Diagonal gradient overlay for hero sections |
| `.category-accent` | Top-border using `--category-color` CSS var |
| `.star-filled` / `.star-empty` | Star rating colors |
| `.newsletter-input` | Custom focus ring for newsletter inputs |
| `.text-gradient` | Primary-to-accent text gradient |
| `.glass` | Glassmorphism effect (blur + translucent bg) |
| `.shimmer` | Loading placeholder animation |
| `.progress-bar` / `.progress-bar-fill` | Animated progress bar |
| `.section-divider` | Gradient horizontal rule |
| `.container-narrow` | max-width: 42rem |
| `.container-content` | max-width: 56rem |
| `.container-wide` | max-width: 80rem |

### Component Library

Base UI components are in `src/components/ui/`. They are Radix UI primitives wrapped with Tailwind styles, using the `cn()` utility for class merging:

- **Accordion** — Radix `@radix-ui/react-accordion`
- **Badge** — Custom with difficulty and retailer variants
- **Button** — CVA-based with variants: `default`, `accent`, `outline`, `ghost`, `destructive`
- **Card** — CardHeader, CardTitle, CardContent, CardFooter
- **Checkbox** — Radix `@radix-ui/react-checkbox`
- **Dialog** — Radix `@radix-ui/react-dialog`
- **Input** — Standard text input
- **Progress** — Radix `@radix-ui/react-progress`
- **Select** — Radix `@radix-ui/react-select`
- **Separator** — Radix `@radix-ui/react-separator`
- **Skeleton** — Loading placeholder
- **Tabs** — Radix `@radix-ui/react-tabs`
- **Textarea** — Multi-line text input
- **Toast** — Radix `@radix-ui/react-toast` with success/destructive variants
- **Tooltip** — Radix `@radix-ui/react-tooltip`

### Layout Conventions

- **Max content width:** `max-w-7xl` (80rem) with `px-4 sm:px-6 lg:px-8` padding
- **Section spacing:** `py-16 md:py-24`
- **Card gap:** `gap-4` to `gap-6`
- **Border radius:** `--radius: 0.5rem` base, used via `rounded-lg`, `rounded-xl`, `rounded-2xl`
- **Shadows:** `--shadow-sm` through `--shadow-xl` (warm-toned, not gray)

---

## Adding Content

### How to Add a New Guide

Add a new guide object to the `guides` array in `src/lib/guides-data.ts`:

```typescript
{
  id: 'guide-your-guide-slug',
  slug: 'your-guide-slug',
  title: 'How to [Action] a [Thing]',
  excerpt: '1-2 sentence summary with a compelling hook and value proposition.',
  content: `Longer markdown introduction text. This appears above the step-by-step
instructions. Include context, why this matters, and what the reader will learn.

## Why This Matters

Contextual paragraph explaining the problem.

## Before You Start

Prep instructions.`,
  category: 'plumbing',  // Must match a category slug
  difficulty: 'beginner', // 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: '20-30 minutes',
  estimatedCost: {
    low: 5,
    mid: 15,
    high: 30,
    diyVsPro: 'A plumber typically charges $150-$300 for this repair. DIY cost is $5-$30 for parts.',
  },
  tools: [
    'Adjustable wrench',
    'Tongue-and-groove pliers',
  ],
  materials: [
    'Replacement part',
    'Teflon tape',
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Step Title (Imperative Verb)',
      description: 'Detailed step description. Be specific about actions, measurements, and expected results.',
      imagePrompt: 'Descriptive prompt for AI image generation of this step',
      proTip: 'Optional expert tip for better results.',
      warning: 'Optional safety warning.',
    },
    // ... more steps
  ],
  tips: [
    'General pro tips that apply to the whole project.',
  ],
  warnings: [
    'General safety warnings.',
  ],
  affiliateProducts: [
    {
      id: 'prod-unique-id',
      name: 'Product Name',
      description: 'Why this product is recommended.',
      price: 19.99,
      affiliateUrl: 'https://www.amazon.com/dp/XXXXXXX',
      retailer: 'amazon',
      imageUrl: '/products/product-image.jpg',
      rating: 4.5,
      reviewCount: 12000,
      badge: 'Best Seller', // Optional
    },
  ],
  featuredImage: '/guides/your-guide-hero.jpg',
  publishedAt: '2026-03-22T09:00:00Z',
  updatedAt: '2026-03-22T09:00:00Z',
  author: defaultAuthor,
  seo: {
    title: 'How to [Action] a [Thing] (Step-by-Step) | Repair & Refinish',
    description: 'SEO meta description (150-160 chars). Include primary keyword and value proposition.',
    keywords: ['primary keyword', 'secondary keyword', 'long-tail keyword'],
    ogImage: '/guides/your-guide-og.jpg',
  },
  faqs: [
    {
      question: 'Common question about this topic?',
      answer: 'Thorough answer with practical details.',
    },
  ],
  relatedGuides: ['other-guide-slug', 'another-guide-slug'],
  status: 'published', // Set to 'draft' to hide from listings
},
```

**Checklist for new guides:**
1. `slug` must be unique and URL-safe (lowercase, hyphens only)
2. `category` must match an existing category slug
3. `steps` must be numbered sequentially starting at 1
4. Include at least 2-4 affiliate products relevant to the guide
5. Include at least 3-5 FAQs (these generate JSON-LD FAQPage schema)
6. Include at least 3 tips and 2 warnings
7. Set `status: 'published'` when ready (guides with `status: 'draft'` are hidden)
8. Fill in `relatedGuides` with slugs of 2-3 related guides

### How to Add a New Category

Add to the `categories` array in `src/lib/categories-data.ts`:

```typescript
{
  id: 'cat-your-category',     // Prefix with 'cat-'
  slug: 'your-category',       // URL-safe slug
  name: 'Your Category',       // Display name
  description: 'Description of what this category covers (1-2 sentences).',
  icon: 'LucideIconName',      // Must match a Lucide React icon name
  guideCount: 0,               // Currently static, not auto-computed
  color: '#HexColor',          // Category accent color
},
```

Then add the category to these locations:
1. `src/lib/site-config.ts` → `categoryMeta` record (color + icon)
2. `src/lib/site-config.ts` → `navigation[2].children` array (Categories dropdown)
3. `src/app/page.tsx` → `iconMap` record (map icon name to JSX)

### How to Add Affiliate Products

Products are embedded in each guide's `affiliateProducts` array. Follow this format:

```typescript
{
  id: 'prod-brand-model',           // Unique ID, prefixed with 'prod-'
  name: 'Brand Model Name',
  description: 'Why this product is the right choice for this guide.',
  price: 19.99,
  affiliateUrl: 'https://full-affiliate-url',
  retailer: 'amazon',               // 'homedepot' | 'lowes' | 'wayfair' | 'amazon'
  imageUrl: '/products/filename.jpg',
  rating: 4.5,                      // Out of 5
  reviewCount: 12000,
  badge: 'Best Seller',             // Optional: 'Best Seller', 'Best Value', 'Editor\'s Pick'
}
```

### Content Guidelines

- **Title format:** "How to [Verb] a/an [Noun]" (e.g., "How to Fix a Running Toilet")
- **Excerpt length:** 1-2 sentences, under 200 characters
- **Step descriptions:** 3-6 sentences per step, specific and actionable
- **Pro tips:** Insider knowledge that saves time or improves results
- **Warnings:** Safety-critical information, always err on the side of caution
- **FAQ answers:** 2-4 sentences, directly answering the question
- **SEO title:** Include primary keyword + "(Step-by-Step)" or "(Easy Fix)" + "| Repair & Refinish"
- **SEO description:** 150-160 characters, include primary keyword early

---

## SEO

### JSON-LD Structured Data

Two schema types are generated on guide detail pages (`guides/[slug]/page.tsx`):

**HowTo Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Guide title",
  "description": "Guide excerpt",
  "image": "Featured image path",
  "totalTime": "PT30M",
  "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": 15 },
  "supply": [{ "@type": "HowToSupply", "name": "Material name" }],
  "tool": [{ "@type": "HowToTool", "name": "Tool name" }],
  "step": [{ "@type": "HowToStep", "position": 1, "name": "Step title", "text": "Description" }]
}
```

**FAQPage Schema** (generated when guide has FAQs):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "?", "acceptedAnswer": { "@type": "Answer", "text": "..." } }
  ]
}
```

### Metadata Generation

- **Root layout** (`layout.tsx`) sets default metadata with `metadataBase: new URL("https://repairandrefinish.com")`
- **Title template:** `"%s | Repair & Refinish"` — pages only need to set their own title
- **Guide pages** use `generateMetadata()` to set per-page OG, Twitter card, and article metadata
- **OpenGraph:** type `website` for home, `article` for guides (with `publishedTime`, `modifiedTime`, `authors`)
- **Twitter:** `summary_large_image` card type

### Sitemap Structure

Generated by `src/app/sitemap.ts`:

| Section | Priority | Change Frequency |
|---------|----------|------------------|
| Homepage `/` | 1.0 | weekly |
| `/guides` | 0.9 | daily |
| `/categories` | 0.8 | weekly |
| `/guides/[slug]` | 0.8 | weekly |
| `/categories/[slug]` | 0.7 | weekly |
| `/about` | 0.5 | monthly |
| `/contact` | 0.4 | monthly |
| `/privacy`, `/terms` | 0.2 | yearly |

### Robots.txt

- Allows all crawlers on `/`
- Disallows `/api/` and `/_next/`
- Points to sitemap at `https://repairandrefinish.com/sitemap.xml`

---

## Lead Generation

### Email Capture Touchpoints

| Component | Location | Trigger | Session Storage Key |
|-----------|----------|---------|---------------------|
| **NewsletterForm (hero)** | Homepage `#newsletter` section | Always visible | None |
| **NewsletterForm (inline)** | Guide detail page (after FAQ) | Always visible | None |
| **NewsletterForm (sidebar)** | Guide detail page sidebar | Always visible (sticky) | None |
| **StickyLeadBar** | Bottom of viewport | Appears after 50% scroll | `rr-sticky-bar-dismissed` |
| **ExitIntentPopup** | Full-page modal | Mouse leaves viewport (desktop) or back button (mobile) | `rr-exit-intent-shown` |
| **InlineLeadCapture** | Mid-content in guides | Always visible | None |

### Exit Intent Behavior

- **Desktop:** Triggers when mouse cursor leaves the viewport (via `mouseleave` event with `clientY <= 0`)
- **Mobile:** Triggers on `popstate` event (back button)
- **Frequency:** Once per session (uses `sessionStorage` key `rr-exit-intent-shown`)
- **Modal:** Animated with Framer Motion (spring animation), includes backdrop blur, dismissible via X button or backdrop click

### Sticky Bar Behavior

- **Appears:** After user scrolls past 50% of page height
- **Dismissible:** X button sets `sessionStorage` key `rr-sticky-bar-dismissed`
- **Animation:** Slides up from bottom with spring animation (Framer Motion)
- **Contains:** Email input + Subscribe button + dismiss control
- **Backdrop:** Frosted glass effect (`bg-card/95 backdrop-blur-md`)

### Form Validation

- All email forms use HTML5 `required` attribute and `type="email"`
- Currently no server-side validation (forms use `setTimeout` mock)
- Zod is installed but not yet integrated for form validation
- Toast notifications confirm subscription success

---

## Affiliate Integration

### FTC Compliance Requirements

All affiliate links and product recommendations MUST include proper disclosure:

1. **Inline disclosure** on every page with affiliate products:
   > "Affiliate Disclosure: We earn a small commission when you buy through our links at no extra cost to you."

2. **Per-product micro-disclosure** on ProductCard:
   > "Affiliate link - we may earn a commission"

3. **Full disclosure component** (`AffiliateDisclosure.tsx`) with expandable "Why we have affiliate links" explanation

4. **Dedicated disclosure page** at `/affiliate-disclosure` (linked in footer)

### Link Attributes

All affiliate links MUST include these `rel` attributes:

```html
<a href="..." target="_blank" rel="nofollow noopener sponsored">
```

- `nofollow` — tells search engines not to pass PageRank
- `noopener` — security: prevents `window.opener` access
- `sponsored` — Google's required attribute for paid/affiliate links

Note: some links in the codebase use `rel="noopener noreferrer sponsored"` (without `nofollow`). The canonical pattern should include both `nofollow` and `sponsored`.

### Disclosure Placement Rules

1. **Above the fold** on any page with product recommendations
2. **Below product grids** in guide pages
3. **In footer** site-wide (link to full disclosure page)
4. **On each product card** (micro-disclosure text)

### Retailer Badge System

The `RetailerBadge` component and `Badge` variant system display retailer-specific branding:

| Retailer | Color | Badge Text |
|----------|-------|------------|
| Home Depot | `#F96302` | "Home Depot" |
| Lowe's | `#004990` | "Lowe's" |
| Wayfair | `#7B2D8E` | "Wayfair" |
| Amazon | `#FF9900` | "Amazon" |

Utility functions: `getRetailerName(retailer)`, `getRetailerLogo(retailer)`.

---

## Development

### Commands

```bash
npm run dev       # Start dev server (Next.js 16 with Turbopack)
npm run build     # Production build (must exit 0)
npm run start     # Start production server
npm run lint      # Run ESLint
```

There is no separate `type-check` script. TypeScript checking runs as part of `npm run build`.

### Running Locally

```bash
cd factory-repairandrefinish
npm install       # Install dependencies
npm run dev       # http://localhost:3000
```

No environment variables are required for local development. The site runs entirely on static data.

### Dependencies

**Core:**
- `next` 16.2.1, `react` 19.2.4, `react-dom` 19.2.4
- `typescript` ^5

**UI:**
- `@radix-ui/react-*` — Accordion, Checkbox, Dialog, Dropdown Menu, Label, Progress, Select, Separator, Slot, Tabs, Toast, Tooltip
- `class-variance-authority` — Component variant system
- `clsx` + `tailwind-merge` — Class name utilities
- `lucide-react` — Icon library
- `framer-motion` — Animations (exit intent, sticky bar)

**Content:**
- `react-markdown` + `remark-gfm` — Markdown rendering (installed, not yet heavily used)
- `zod` — Schema validation (installed, not yet integrated with forms)

**Styling:**
- `tailwindcss` ^4, `@tailwindcss/postcss`, `@tailwindcss/typography`
- `next-themes` — Theme switching (installed, not yet active)

### Build Output

The site builds as a static export where possible. Guide pages use `generateStaticParams()` for SSG. The guides listing page (`/guides`) is a Client Component due to interactive search/filter/sort.

### Important: Next.js Version

This project uses **Next.js 16** (not 14 or 15). Before making changes to Next.js APIs, routing, or configuration, consult `node_modules/next/dist/docs/` for the latest API documentation. Some APIs and conventions differ from earlier versions.

---

## Conventions

### File Naming

- **Pages:** `page.tsx` (Next.js App Router convention)
- **Layouts:** `layout.tsx`
- **Components:** PascalCase (e.g., `GuideCard.tsx`, `ProductGrid.tsx`)
- **Utilities:** camelCase (e.g., `utils.ts`, `site-config.ts`)
- **Types:** PascalCase interfaces in `src/types/index.ts`
- **Data files:** kebab-case (e.g., `guides-data.ts`, `categories-data.ts`)

### Component Patterns

**Server Components** (default):
- All page components (`page.tsx`)
- Layout components
- Data-fetching components
- No `'use client'` directive

**Client Components** (explicit `'use client'`):
- Forms and interactive inputs (`NewsletterForm.tsx`, `SearchBar.tsx`)
- State-dependent UI (`ExitIntentPopup.tsx`, `StickyLeadBar.tsx`)
- Event handlers (`GuideActions.tsx` — print/share)
- Expandable/collapsible content (`AffiliateDisclosure.tsx`)
- Pages with search/filter (`guides/page.tsx`)

**Pattern:** Keep Client Components as small and leaf-level as possible. Pass data from Server Components via props.

### Import Path Aliases

All imports use the `@/` alias mapped to `./src/*`:

```typescript
import { siteConfig } from '@/lib/site-config';
import { Button } from '@/components/ui/button';
import type { Guide } from '@/types';
```

Never use relative imports like `../../lib/utils`. Always use `@/`.

### CSS Class Naming

- Use Tailwind utility classes for all styling
- Use `cn()` from `@/lib/utils` for conditional/merged classes
- Use custom CSS classes (defined in `globals.css`) for complex repeated patterns
- Use CSS custom properties (`var(--token)`) for theme values
- Use `style={{ "--category-color": color } as React.CSSProperties}` for dynamic CSS variables

### Print Styles

The site includes print-optimized CSS in `globals.css`. Elements with class `no-print` are hidden when printing. Guide steps use `page-break-inside: avoid`.

---

## Future Roadmap

### Phase 1: Database Integration
- **Supabase PostgreSQL** for guides, categories, products, and subscribers
- Migrate static data from `guides-data.ts` and `categories-data.ts` to database
- Server Actions for form submissions (newsletter, contact)
- Real-time subscriber count

### Phase 2: User Accounts
- Supabase Auth for user registration/login
- Saved/bookmarked guides
- Project progress tracking (mark steps as complete)
- Personalized recommendations based on completed guides

### Phase 3: Comment System
- Threaded comments on guides
- Moderation queue
- User reputation system
- "I completed this project" success stories

### Phase 4: Search
- Algolia or Meilisearch integration
- Full-text search across guides, tools, and FAQs
- Autocomplete suggestions
- Search analytics

### Phase 5: Analytics & Monitoring
- Plausible Analytics (privacy-focused, already configured in site config)
- Google Search Console integration
- Affiliate link click tracking
- Content performance dashboards

### Phase 6: Content Expansion
- Video embed support (YouTube tutorials)
- Before/after photo galleries
- User-submitted project photos
- Seasonal maintenance calendar
- Cost calculator tool (interactive)
- Tool finder quiz

### Phase 7: Monetization Expansion
- Display advertising (after sufficient traffic)
- Sponsored guide partnerships
- Premium downloadable PDF guides
- Email course sequences (drip campaigns)

---

## Quick Reference

### Key File Locations

| Need to... | Edit this file |
|------------|----------------|
| Change brand name/tagline | `src/lib/site-config.ts` |
| Add a new guide | `src/lib/guides-data.ts` |
| Add a new category | `src/lib/categories-data.ts` + `site-config.ts` |
| Change colors | `src/app/globals.css` (CSS vars) + `tailwind.config.ts` |
| Change fonts | `src/app/layout.tsx` (imports) + `globals.css` + `tailwind.config.ts` |
| Add navigation link | `src/lib/site-config.ts` → `navigation` |
| Add footer link | `src/lib/site-config.ts` → `footer` |
| Change metadata/SEO defaults | `src/app/layout.tsx` |
| Add a utility function | `src/lib/utils.ts` |
| Add a new type | `src/types/index.ts` |
| Add a UI component | `src/components/ui/` |
| Modify print styles | `src/app/globals.css` (bottom) |

### Utility Functions Available

| Function | Purpose | File |
|----------|---------|------|
| `cn(...classes)` | Merge Tailwind classes with conflict resolution | `utils.ts` |
| `formatCurrency(amount, showCents?)` | Format as USD ($15 or $15.99) | `utils.ts` |
| `formatDate(date, style?)` | Format date (long/short/relative) | `utils.ts` |
| `slugify(text)` | Convert text to URL slug | `utils.ts` |
| `estimateReadingTime(content)` | "5 min read" from markdown text | `utils.ts` |
| `getDifficultyColor(difficulty)` | Get bg/text/border classes | `utils.ts` |
| `getDifficultyLabel(difficulty)` | "Beginner Friendly" etc. | `utils.ts` |
| `getRetailerName(retailer)` | "Home Depot", "Lowe's" etc. | `utils.ts` |
| `getRetailerLogo(retailer)` | Path to retailer logo SVG | `utils.ts` |
| `formatCostRange(low, high)` | "$5 - $30" | `utils.ts` |
| `getStarRating(rating)` | { full, half, empty } counts | `utils.ts` |
| `formatNumber(num, abbreviate?)` | "28.4K" or "28,400" | `utils.ts` |
| `truncate(text, maxLength?)` | Truncate at word boundary | `utils.ts` |

### Guide Data Query Helpers

| Function | Purpose | File |
|----------|---------|------|
| `getGuideBySlug(slug)` | Find single guide by slug | `guides-data.ts` |
| `getGuidesByCategory(slug)` | All guides in a category | `guides-data.ts` |
| `getGuidesByDifficulty(level)` | All guides at a difficulty | `guides-data.ts` |
| `getAllGuideSlugs()` | All published slugs (for SSG) | `guides-data.ts` |
| `getFeaturedGuides(count?)` | Most recent published guides | `guides-data.ts` |
| `searchGuides(query)` | Text search across guides | `guides-data.ts` |

---

**Last Updated:** March 22, 2026
