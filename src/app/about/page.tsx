import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ShieldCheck,
  Lightbulb,
  Users,
  Heart,
  ArrowRight,
  CheckCircle2,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the Repair & Refinish mission: empowering every homeowner with expert, step-by-step repair guides written by professional contractors.",
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About" }]} />
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="container-content">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight text-balance">
            We Believe Every Homeowner Deserves the Knowledge to Fix and Improve
            Their Home
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Repair &amp; Refinish was built on a simple idea: the information
            you need to fix things shouldn&apos;t be scattered across forums,
            buried in hour-long videos, or locked behind paywalls. We create
            clear, expert-written, step-by-step guides that turn intimidating
            repairs into manageable weekend projects.
          </p>
        </div>
      </section>

      <Separator />

      {/* Our Story */}
      <section className="py-12 md:py-20">
        <div className="container-content">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-6">
            Why We Built This
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-5 leading-relaxed">
            <p>
              Most people don&apos;t realize that 80% of common household
              repairs — a running toilet, a patched wall, a stuck door — are
              simple fixes that anyone can learn. The materials rarely cost more
              than $20. The tools are things you probably already own. The only
              missing ingredient is good instruction.
            </p>
            <p>
              We started Repair &amp; Refinish to fill that gap. Our team of
              experienced contractors, carpenters, electricians, and plumbers
              translates decades of hands-on knowledge into guides that assume
              no prior experience. We tell you exactly what tools to grab, what
              materials to buy, what each step looks like, and — just as
              importantly — what to avoid.
            </p>
            <p>
              Every guide includes a realistic cost estimate comparing DIY with
              hiring a professional, so you can make an informed choice about
              what to tackle yourself and when to pick up the phone. We&apos;re
              not here to convince you to DIY everything — we&apos;re here to
              make sure you succeed when you do.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-10 text-center">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-6 w-6" />,
                title: "Research-Backed",
                description:
                  "Every guide is based on manufacturer specifications, building codes, and best practices from professional trade organizations. We don't guess — we verify.",
              },
              {
                icon: <Lightbulb className="h-6 w-6" />,
                title: "Step-by-Step",
                description:
                  "Each repair is broken into numbered steps with clear descriptions, pro tips for better results, and safety warnings. We include tool and material lists so you know exactly what you need before you start.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Expert Reviewed",
                description:
                  "Our content is written and reviewed by licensed contractors and experienced tradespeople. We clearly label when a project requires permits or a licensed professional.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-100 text-primary mb-5">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-12 md:py-20">
        <div className="container-content">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-6">
            What We Cover
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our 10 categories span every major area of home repair and
            improvement:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Plumbing — faucets, toilets, drains, water heaters",
              "Electrical — outlets, switches, fixtures, panels",
              "Painting & Walls — interior paint, drywall, texture, wallpaper",
              "Flooring — hardwood, tile, vinyl, carpet, laminate",
              "Kitchen & Bath — cabinets, counters, fixtures, tile",
              "Doors & Windows — hanging, replacing, weatherstripping",
              "HVAC & Climate — heating, cooling, insulation, thermostats",
              "Outdoor & Landscaping — decks, patios, fences, drainage",
              "Appliance Repair — washers, dryers, dishwashers, fridges",
              "Furniture & Decor — refinishing, upholstery, shelving",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Affiliate Disclosure */}
      <section className="py-12 md:py-20">
        <div className="container-content">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-6">
            How We Make Money
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Transparency matters to us. Repair &amp; Refinish is
              reader-supported. When we recommend a tool or material and you
              purchase it through one of our links, we may earn a small
              affiliate commission from retailers like Amazon, Home Depot,
              Lowe&apos;s, and Wayfair. This costs you nothing extra — the price
              is exactly the same whether you use our link or go directly to the
              retailer.
            </p>
            <p>
              These commissions fund the time it takes to research, write, and
              maintain our guides. We never let affiliate relationships
              influence our recommendations. We only recommend products our team
              has tested or thoroughly researched, and we disclose affiliate
              relationships clearly throughout the site.
            </p>
            <p>
              If we recommend a $6 toilet flapper, it&apos;s because that $6
              toilet flapper is genuinely the best option — not because it pays
              the highest commission.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-accent/20 text-accent mb-6">
            <Wrench className="h-7 w-7" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Fix Something?
          </h2>
          <p className="text-primary-200 text-lg mb-8">
            Browse our growing library of expert repair guides. Every one is
            free, detailed, and designed to get you from &ldquo;I have no idea
            what I&apos;m doing&rdquo; to &ldquo;I can&apos;t believe I did
            that myself.&rdquo;
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link href="/guides">
              Browse All Guides
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
