import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  DollarSign,
  Wrench,
  Package,
  Star,
  ExternalLink,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PrintButton, ShareButton } from "@/components/GuideActions";
import { NewsletterForm } from "@/components/NewsletterForm";
import {
  guides,
  getGuideBySlug,
  getAllGuideSlugs,
  getFeaturedGuides,
} from "@/lib/guides-data";
import { categories, getCategoryBySlug } from "@/lib/categories-data";
import { siteConfig } from "@/lib/site-config";
import {
  getDifficultyLabel,
  getDifficultyColor,
  formatCurrency,
  formatCostRange,
  formatDate,
  getRetailerName,
  getStarRating,
  formatNumber,
  estimateReadingTime,
} from "@/lib/utils";

/* ── Static params ─────────────────────────────────────────────────── */
export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

/* ── Metadata ──────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide Not Found" };

  return {
    title: guide.seo.title,
    description: guide.seo.description,
    keywords: guide.seo.keywords,
    openGraph: {
      title: guide.seo.title,
      description: guide.seo.description,
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      authors: [guide.author.name],
      images: guide.seo.ogImage ? [{ url: guide.seo.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.seo.title,
      description: guide.seo.description,
    },
  };
}

/* ── Page ──────────────────────────────────────────────────────────── */
export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const category = getCategoryBySlug(guide.category);
  const diffColors = getDifficultyColor(guide.difficulty);
  const readingTime = estimateReadingTime(guide.content);
  const relatedGuides = (guide.relatedGuides || [])
    .map((s) => getGuideBySlug(s))
    .filter(Boolean);

  /* JSON-LD HowTo structured data */
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guide.excerpt,
    image: guide.featuredImage,
    totalTime: `PT${guide.estimatedTime.replace(/[^0-9]/g, "")}M`,
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: guide.estimatedCost.mid,
    },
    supply: guide.materials.map((m) => ({
      "@type": "HowToSupply",
      name: m,
    })),
    tool: guide.tools.map((t) => ({
      "@type": "HowToTool",
      name: t,
    })),
    step: guide.steps.map((s) => ({
      "@type": "HowToStep",
      position: s.stepNumber,
      name: s.title,
      text: s.description,
    })),
  };

  const faqJsonLd = guide.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Guides", href: "/guides" },
            ...(category
              ? [
                  {
                    label: category.name,
                    href: `/categories/${category.slug}`,
                  },
                ]
              : []),
            { label: guide.title },
          ]}
        />
      </div>

      <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
          {/* ── Main Content Column ─────────────────────────────────── */}
          <div>
            {/* Guide Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {category && (
                  <Link href={`/categories/${category.slug}`}>
                    <Badge
                      variant="secondary"
                      className="hover:bg-primary-100 transition-colors cursor-pointer"
                    >
                      {category.name}
                    </Badge>
                  </Link>
                )}
                <Badge variant={guide.difficulty}>
                  {getDifficultyLabel(guide.difficulty)}
                </Badge>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight text-balance">
                {guide.title}
              </h1>

              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {guide.excerpt}
              </p>

              {/* Meta row */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {guide.estimatedTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4" />
                  {formatCostRange(
                    guide.estimatedCost.low,
                    guide.estimatedCost.high
                  )}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4" />
                  {readingTime}
                </span>
              </div>

              {/* Author & dates */}
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-100 text-primary">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {guide.author.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Published {formatDate(guide.publishedAt)} &middot; Updated{" "}
                    {formatDate(guide.updatedAt)}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex gap-3 no-print">
                <PrintButton />
                <ShareButton
                  title={guide.title}
                  url={`${siteConfig.url}/guides/${guide.slug}`}
                />
              </div>
            </header>

            {/* Featured image placeholder */}
            <div className="relative h-64 md:h-80 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-10 overflow-hidden">
              <Wrench className="h-16 w-16 text-primary-300" />
            </div>

            {/* ── Table of Contents ──────────────────────────────────── */}
            <nav className="mb-10 p-6 rounded-xl bg-muted/50 border border-border">
              <h2 className="font-heading text-lg font-bold text-primary mb-4">
                In This Guide
              </h2>
              <ol className="space-y-2">
                <li>
                  <a
                    href="#tools-materials"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary-100 text-primary text-xs font-bold">
                      1
                    </span>
                    What You&apos;ll Need
                  </a>
                </li>
                {guide.steps.map((step) => (
                  <li key={step.stepNumber}>
                    <a
                      href={`#step-${step.stepNumber}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary-100 text-primary text-xs font-bold">
                        {step.stepNumber + 1}
                      </span>
                      {step.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#tips-warnings"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary-100 text-primary text-xs font-bold">
                      {guide.steps.length + 2}
                    </span>
                    Tips & Warnings
                  </a>
                </li>
                {guide.faqs.length > 0 && (
                  <li>
                    <a
                      href="#faq"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary-100 text-primary text-xs font-bold">
                        {guide.steps.length + 3}
                      </span>
                      FAQ
                    </a>
                  </li>
                )}
              </ol>
            </nav>

            {/* ── What You'll Need ──────────────────────────────────── */}
            <section id="tools-materials" className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                What You&apos;ll Need
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tools */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Tools</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="checklist space-y-1">
                      {guide.tools.map((tool, i) => (
                        <li key={i}>{tool}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Materials */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-accent" />
                      <CardTitle className="text-base">Materials</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="checklist space-y-1">
                      {guide.materials.map((material, i) => (
                        <li key={i}>{material}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* ── Cost Estimate ──────────────────────────────────────── */}
            <section className="mb-12">
              <div className="cost-card">
                <h3 className="font-heading text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Cost Estimate
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Budget
                    </p>
                    <p className="font-heading text-xl font-bold text-primary">
                      {formatCurrency(guide.estimatedCost.low)}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Mid-Range
                    </p>
                    <p className="font-heading text-xl font-bold text-accent">
                      {formatCurrency(guide.estimatedCost.mid)}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Premium
                    </p>
                    <p className="font-heading text-xl font-bold text-primary">
                      {formatCurrency(guide.estimatedCost.high)}
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Lightbulb className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <p>{guide.estimatedCost.diyVsPro}</p>
                </div>
              </div>
            </section>

            {/* ── Step-by-Step Instructions ──────────────────────────── */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-primary mb-8">
                Step-by-Step Instructions
              </h2>

              <div className="space-y-0">
                {guide.steps.map((step, i) => (
                  <div
                    key={step.stepNumber}
                    id={`step-${step.stepNumber}`}
                    className="guide-step"
                    data-step={step.stepNumber}
                  >
                    {/* Progress indicator */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-heading text-lg font-bold text-primary">
                          {step.title}
                        </h3>
                        <span className="text-xs text-muted-foreground no-print">
                          Step {step.stepNumber} of {guide.steps.length}
                        </span>
                      </div>
                      <Progress
                        value={(step.stepNumber / guide.steps.length) * 100}
                        className="h-1.5 no-print"
                        indicatorClassName="bg-gradient-to-r from-primary to-accent"
                      />
                    </div>

                    <p className="text-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Image placeholder */}
                    <div className="h-40 rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-4">
                      <span className="text-xs text-muted-foreground">
                        {step.imagePrompt.slice(0, 60)}...
                      </span>
                    </div>

                    {step.proTip && (
                      <div className="pro-tip">
                        <p>{step.proTip}</p>
                      </div>
                    )}

                    {step.warning && (
                      <div className="warning-callout">
                        <p>{step.warning}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ── Product Recommendations ────────────────────────────── */}
            {guide.affiliateProducts.length > 0 && (
              <section className="mb-12">
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                  Recommended Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {guide.affiliateProducts.map((product) => {
                    const stars = getStarRating(product.rating);
                    return (
                      <Card key={product.id} className="product-card relative overflow-hidden">
                        {product.badge && (
                          <div className="affiliate-badge">{product.badge}</div>
                        )}
                        <div className="h-32 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                          <Package className="h-8 w-8 text-muted-foreground/30" />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm leading-tight">
                            {product.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                            {product.description}
                          </p>
                          <div className="flex items-center gap-1 mb-2">
                            {Array.from({ length: stars.full }).map((_, i) => (
                              <Star
                                key={`full-${i}`}
                                className="h-3.5 w-3.5 star-filled fill-current"
                              />
                            ))}
                            {stars.half && (
                              <Star className="h-3.5 w-3.5 star-filled fill-current opacity-50" />
                            )}
                            {Array.from({ length: stars.empty }).map((_, i) => (
                              <Star
                                key={`empty-${i}`}
                                className="h-3.5 w-3.5 star-empty"
                              />
                            ))}
                            <span className="text-xs text-muted-foreground ml-1">
                              ({formatNumber(product.reviewCount, true)})
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-heading font-bold text-primary">
                              {formatCurrency(product.price, true)}
                            </span>
                            <a
                              href={product.affiliateUrl}
                              target="_blank"
                              rel="nofollow noopener noreferrer sponsored"
                              className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                            >
                              {getRetailerName(product.retailer)}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  <strong>Affiliate Disclosure:</strong> We earn a small
                  commission when you buy through our links at no extra cost to
                  you.
                </p>
              </section>
            )}

            {/* ── Tips & Warnings ────────────────────────────────────── */}
            <section id="tips-warnings" className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                Tips & Warnings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guide.tips.length > 0 && (
                  <Card className="border-emerald-200 bg-emerald-50/30">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-emerald-600" />
                        <CardTitle className="text-base text-emerald-800">
                          Pro Tips
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {guide.tips.map((tip, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
                {guide.warnings.length > 0 && (
                  <Card className="border-red-200 bg-red-50/30">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                        <CardTitle className="text-base text-red-800">
                          Safety Warnings
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {guide.warnings.map((warning, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <AlertTriangle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                            <span>{warning}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </section>

            {/* ── FAQ ────────────────────────────────────────────────── */}
            {guide.faqs.length > 0 && (
              <section id="faq" className="mb-12">
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {guide.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`guide-faq-${i}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

            {/* ── Inline CTA ─────────────────────────────────────────── */}
            <section className="mb-12 p-8 rounded-xl bg-primary-900 text-center no-print">
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Found this guide helpful?
              </h3>
              <p className="text-primary-200 text-sm mb-6">
                Get more repair tutorials and maintenance checklists delivered
                to your inbox every week.
              </p>
              <NewsletterForm variant="inline" buttonText="Subscribe" />
            </section>

            {/* ── Related Guides ──────────────────────────────────────── */}
            {relatedGuides.length > 0 && (
              <section className="mb-12">
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                  Related Guides
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedGuides.map((related) => {
                    if (!related) return null;
                    const relCat = getCategoryBySlug(related.category);
                    return (
                      <Link key={related.id} href={`/guides/${related.slug}`}>
                        <Card className="h-full group hover:shadow-md transition-all hover:-translate-y-0.5">
                          <CardHeader className="pb-2">
                            <div className="flex gap-2 mb-2">
                              {relCat && (
                                <Badge variant="secondary" className="text-[10px]">
                                  {relCat.name}
                                </Badge>
                              )}
                              <Badge
                                variant={related.difficulty}
                                className="text-[10px]"
                              >
                                {getDifficultyLabel(related.difficulty)}
                              </Badge>
                            </div>
                            <CardTitle className="text-sm group-hover:text-accent transition-colors">
                              {related.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {related.excerpt}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* ── Sidebar ─────────────────────────────────────────────── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Quick stats card */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Quick Reference</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Difficulty</span>
                    <Badge variant={guide.difficulty} className="text-xs">
                      {getDifficultyLabel(guide.difficulty)}
                    </Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-medium">{guide.estimatedTime}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">DIY Cost</span>
                    <span className="font-medium text-accent">
                      {formatCostRange(
                        guide.estimatedCost.low,
                        guide.estimatedCost.high
                      )}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Steps</span>
                    <span className="font-medium">{guide.steps.length}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tools</span>
                    <span className="font-medium">{guide.tools.length}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Top product */}
              {guide.affiliateProducts[0] && (
                <Card className="product-card relative overflow-hidden">
                  {guide.affiliateProducts[0].badge && (
                    <div className="affiliate-badge">
                      {guide.affiliateProducts[0].badge}
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Top Pick
                    </p>
                    <CardTitle className="text-sm leading-tight">
                      {guide.affiliateProducts[0].name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                      {guide.affiliateProducts[0].description}
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-heading font-bold text-primary">
                        {formatCurrency(
                          guide.affiliateProducts[0].price,
                          true
                        )}
                      </span>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(guide.affiliateProducts[0].rating)
                                ? "star-filled fill-current"
                                : "star-empty"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <a
                      href={guide.affiliateProducts[0].affiliateUrl}
                      target="_blank"
                      rel="nofollow noopener noreferrer sponsored"
                    >
                      <Button variant="accent" size="sm" className="w-full">
                        View on{" "}
                        {getRetailerName(guide.affiliateProducts[0].retailer)}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              )}

              {/* Newsletter sidebar */}
              <Card className="bg-primary-900 border-primary-700 text-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-white">
                    Weekly Repair Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-primary-300 mb-3">
                    Get guides like this delivered to your inbox every week.
                  </p>
                  <NewsletterForm variant="sidebar" />
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
