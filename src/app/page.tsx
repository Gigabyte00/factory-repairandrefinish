import Link from "next/link";
import {
  Search,
  BookOpen,
  ListChecks,
  Trophy,
  Star,
  Clock,
  DollarSign,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Mail,
  Wrench,
  Hammer,
  Ruler,
  ShieldCheck,
  Droplets,
  Zap,
  Paintbrush,
  Layers,
  Thermometer,
  TreePine,
  Armchair,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { categories } from "@/lib/categories-data";
import { getFeaturedGuides } from "@/lib/guides-data";
import { siteConfig } from "@/lib/site-config";
import { NewsletterForm } from "@/components/NewsletterForm";
import {
  getDifficultyLabel,
  getDifficultyColor,
  formatCurrency,
  getRetailerName,
  formatDate,
} from "@/lib/utils";

/* ── Icon map for categories ─────────────────────────────────────────── */
const iconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="h-6 w-6" />,
  Zap: <Zap className="h-6 w-6" />,
  Paintbrush: <Paintbrush className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  CookingPot: <Wrench className="h-6 w-6" />,
  DoorOpen: <Ruler className="h-6 w-6" />,
  Thermometer: <Thermometer className="h-6 w-6" />,
  TreePine: <TreePine className="h-6 w-6" />,
  Wrench: <Wrench className="h-6 w-6" />,
  Armchair: <Armchair className="h-6 w-6" />,
};

export default function HomePage() {
  const featuredGuides = getFeaturedGuides(3);

  return (
    <>
      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <section className="relative overflow-hidden bg-primary-900">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="hero-gradient absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
              Fix It Right.{" "}
              <span className="text-accent">Make It Beautiful.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-200 leading-relaxed max-w-2xl text-pretty">
              The definitive home repair and improvement resource. Expert
              step-by-step guides, tool recommendations, and cost estimates for
              every skill level — from first-time fixers to seasoned DIYers.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link href="/guides">
                  <BookOpen className="h-5 w-5" />
                  Browse Guides
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="#newsletter">
                  <Mail className="h-5 w-5" />
                  Get Free Toolkit Checklist
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6 sm:gap-8">
              {[
                { icon: <BookOpen className="h-5 w-5" />, label: "500+ Guides" },
                { icon: <ListChecks className="h-5 w-5" />, label: "10 Categories" },
                { icon: <ShieldCheck className="h-5 w-5" />, label: "Expert Reviewed" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-primary-200"
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10">
                    {badge.icon}
                  </div>
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          HOW IT WORKS
          ================================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              How It Works
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Three simple steps to completing any home repair or improvement
              project with confidence.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                icon: <Search className="h-7 w-7" />,
                title: "Find Your Project",
                description:
                  "Browse our 10 categories or search 500+ guides covering every room and system in your home. Each guide is rated by difficulty so you know what you're getting into.",
              },
              {
                step: "02",
                icon: <ListChecks className="h-7 w-7" />,
                title: "Follow Step-by-Step",
                description:
                  "Every guide includes a complete tool and material list, cost estimate, numbered instructions with pro tips, and safety warnings. No guesswork required.",
              },
              {
                step: "03",
                icon: <Trophy className="h-7 w-7" />,
                title: "Finish Like a Pro",
                description:
                  "Complete your project with professional-quality results. Save money on contractor bills, build real skills, and enjoy the satisfaction of doing it yourself.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="relative mx-auto flex items-center justify-center h-16 w-16 rounded-2xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                  <span className="absolute -top-2 -right-2 flex items-center justify-center h-7 w-7 rounded-full bg-accent text-white text-xs font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FEATURED CATEGORIES
          ================================================================ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                Browse by Category
              </h2>
              <p className="mt-3 text-muted-foreground text-lg">
                10 categories covering every corner of your home.
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/categories">
                View All Categories
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/categories/${cat.slug}`}>
                <Card className="h-full category-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ "--category-color": cat.color } as React.CSSProperties}>
                  <CardHeader className="pb-3">
                    <div
                      className="flex items-center justify-center h-11 w-11 rounded-xl mb-3"
                      style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                    >
                      {iconMap[cat.icon] || <Wrench className="h-6 w-6" />}
                    </div>
                    <CardTitle className="text-base">{cat.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {cat.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          LATEST GUIDES
          ================================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                Latest Guides
              </h2>
              <p className="mt-3 text-muted-foreground text-lg">
                Our most recent step-by-step repair and improvement tutorials.
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/guides">
                View All Guides
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => {
              const diffColors = getDifficultyColor(guide.difficulty);
              const category = categories.find(
                (c) => c.slug === guide.category
              );
              return (
                <Link key={guide.id} href={`/guides/${guide.slug}`}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    {/* Image placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <Hammer className="h-12 w-12 text-primary-300" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {category && (
                          <Badge
                            variant="secondary"
                            className="bg-white/90 backdrop-blur-sm text-xs"
                          >
                            {category.name}
                          </Badge>
                        )}
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge
                          variant={guide.difficulty}
                          className="text-xs"
                        >
                          {getDifficultyLabel(guide.difficulty)}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-accent transition-colors line-clamp-2">
                        {guide.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {guide.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {guide.estimatedTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3.5 w-3.5" />
                          {formatCurrency(guide.estimatedCost.low)} -{" "}
                          {formatCurrency(guide.estimatedCost.high)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          DIY VS PRO
          ================================================================ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              Should You DIY or Hire a Pro?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Some jobs are perfect for a Saturday afternoon. Others need a
              licensed professional. Here's how to tell the difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DIY column */}
            <Card className="border-2 border-emerald-200 bg-emerald-50/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700">
                    <Hammer className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl text-emerald-800">
                    Do It Yourself When...
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "The repair is cosmetic — painting, patching holes, caulking",
                    "No permits are required for the work",
                    "The project doesn't involve main electrical panels or gas lines",
                    "You have time to research and work carefully",
                    "The cost savings justify the learning curve",
                    "Safety risk is low and mistakes are reversible",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Pro column */}
            <Card className="border-2 border-amber-200 bg-amber-50/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-amber-100 text-amber-700">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl text-amber-800">
                    Hire a Professional When...
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "The job requires a building permit or inspection",
                    "You're working with the main electrical panel (200+ amps)",
                    "Gas lines, sewer mains, or structural walls are involved",
                    "The repair involves asbestos, mold, or lead paint abatement",
                    "Your homeowner's insurance requires licensed work",
                    "A mistake could cause injury, flooding, or fire",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button variant="default" size="lg" asChild>
              <Link href="/guides?difficulty=beginner">
                Browse Beginner-Friendly Guides
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================================
          NEWSLETTER / LEAD CAPTURE
          ================================================================ */}
      <section id="newsletter" className="py-16 md:py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-accent/20 text-accent mb-6">
            <Mail className="h-7 w-7" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Get Our Free Home Repair Toolkit Checklist
          </h2>
          <p className="mt-4 text-primary-200 text-lg">
            Join 10,000+ homeowners who fix it right the first time. Plus, get
            weekly tips delivered to your inbox.
          </p>

          {/* Benefits */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 text-sm text-primary-300">
            {[
              "Weekly repair tips & tutorials",
              "Seasonal maintenance checklists",
              "Exclusive tool deals & reviews",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Email form */}
          <NewsletterForm
            variant="hero"
            buttonText="Get Free Checklist"
            className="mt-8"
          />

          <p className="mt-4 text-xs text-primary-400">
            No spam, ever. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* ================================================================
          POPULAR TOOLS
          ================================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              Essential Tools for Every Homeowner
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Our team-tested recommendations for the tools you'll reach for
              again and again.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "DeWalt 20V MAX Drill/Driver Kit",
                description:
                  "The one tool every homeowner needs. Drills holes, drives screws, and handles 90% of home repair tasks.",
                price: 99,
                rating: 4.8,
                reviewCount: 42000,
                retailer: "amazon" as const,
                badge: "Most Popular",
              },
              {
                name: "Channellock 430 Pliers, 10\"",
                description:
                  "The go-to pliers for plumbing, automotive, and general repair. Adjustable jaw grips any size nut or pipe.",
                price: 17.98,
                rating: 4.8,
                reviewCount: 22100,
                retailer: "amazon" as const,
              },
              {
                name: "Stanley FatMax 25ft Tape Measure",
                description:
                  "Wide blade stays rigid at long extensions. Accurate markings, durable housing, and a belt clip that actually holds.",
                price: 24.98,
                rating: 4.7,
                reviewCount: 18400,
                retailer: "homedepot" as const,
                badge: "Editor's Pick",
              },
              {
                name: "3M High Strength Patch Kit",
                description:
                  "Complete drywall repair kit for holes up to 5 inches. Includes patch, compound, primer, and putty knife.",
                price: 14.97,
                rating: 4.4,
                reviewCount: 8900,
                retailer: "amazon" as const,
              },
            ].map((tool) => (
              <Card key={tool.name} className="product-card relative overflow-hidden">
                {tool.badge && (
                  <div className="affiliate-badge">{tool.badge}</div>
                )}
                {/* Image placeholder */}
                <div className="h-40 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <Wrench className="h-10 w-10 text-muted-foreground/30" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm leading-tight line-clamp-2">
                    {tool.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < Math.floor(tool.rating)
                            ? "star-filled fill-current"
                            : "star-empty"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({(tool.reviewCount / 1000).toFixed(1)}K)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-primary">
                      {formatCurrency(tool.price, tool.price % 1 !== 0)}
                    </span>
                    <Badge variant={tool.retailer} className="text-[10px]">
                      {getRetailerName(tool.retailer)}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            <strong>Affiliate Disclosure:</strong> We earn a small commission
            when you buy through our links at no extra cost to you. This supports
            our free guide creation.
          </p>
        </div>
      </section>

      {/* ================================================================
          FAQ
          ================================================================ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Common questions from homeowners getting started with DIY repair.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "How do I know if a repair is safe to do myself?",
                a: "Start with our difficulty ratings. Beginner guides cover low-risk projects like fixing a running toilet or patching drywall. Intermediate projects may involve basic plumbing or electrical work within a single circuit. Advanced projects require more skill and tools. If a guide includes a warning about permits, gas lines, structural work, or main electrical panels, that's a strong signal to hire a licensed professional.",
              },
              {
                q: "What tools should every homeowner own?",
                a: "A basic home repair toolkit should include: a cordless drill/driver, an adjustable wrench, tongue-and-groove pliers, a 25-foot tape measure, a utility knife, a level, a stud finder, screwdrivers (Phillips and flathead), a hammer, pliers, and a flashlight. With these tools, you can tackle about 80% of common household repairs. Our tool recommendation section has specific brand and model picks at every budget.",
              },
              {
                q: "How accurate are your cost estimates?",
                a: "Our cost estimates are based on national average material prices from Home Depot, Lowe's, and Amazon as of 2026. Actual costs vary by region and material choices. We provide a low-mid-high range to cover budget, mid-range, and premium options. We also show the typical cost of hiring a professional for comparison, so you can see exactly how much you'd save by doing it yourself.",
              },
              {
                q: "Can I really save money doing repairs myself?",
                a: "Absolutely. Labor is the biggest cost in most home repairs. A plumber charges $150-$300 to fix a running toilet — a $15 DIY job. A handyman charges $75-$200 to patch drywall — a $10-$25 DIY job. Even complex projects like refinishing hardwood floors can save you $1,000-$3,000 compared to hiring a contractor. Our guides show the exact DIY vs. Pro cost comparison for every project.",
              },
              {
                q: "What if I make a mistake during a repair?",
                a: "Most common home repairs are forgiving. Patched drywall that isn't perfectly smooth? Sand and add another coat of compound. Paint brush marks? Sand lightly and apply another coat. Toilet still running after replacing the flapper? The fill valve is usually the next thing to check. Our guides include troubleshooting sections and 'what if' scenarios for exactly this reason.",
              },
              {
                q: "Do I need experience to follow your guides?",
                a: "No. Our beginner guides assume zero prior experience and explain every term, tool, and technique from scratch. We include detailed descriptions for each step, pro tips for better results, and clear warnings about safety hazards. If you can follow a recipe, you can follow our guides.",
              },
              {
                q: "Are the product recommendations unbiased?",
                a: "We recommend products based on quality, value, and reliability — not commission rates. Many of our links are affiliate links, which means we earn a small commission when you purchase through them at no extra cost to you. This is how we fund our free guide creation. We only recommend products our team has tested or thoroughly researched, and we clearly disclose all affiliate relationships.",
              },
              {
                q: "How often do you publish new guides?",
                a: "We publish new guides weekly and update existing guides whenever products change, techniques improve, or building codes are updated. Every guide shows its publish date and last-updated date so you can verify the information is current.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA
          ================================================================ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
            Ready to Start Your Next Project?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse 500+ expert-written guides covering plumbing, electrical,
            painting, flooring, and more. Every guide includes tools, materials,
            cost estimates, and step-by-step instructions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link href="/guides">
                <BookOpen className="h-5 w-5" />
                Browse All Guides
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/categories">
                <ListChecks className="h-5 w-5" />
                Explore Categories
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
