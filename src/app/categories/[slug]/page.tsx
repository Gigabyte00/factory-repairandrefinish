import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  DollarSign,
  Hammer,
  Droplets,
  Zap,
  Paintbrush,
  Layers,
  Wrench,
  Ruler,
  Thermometer,
  TreePine,
  Armchair,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  categories,
  getCategoryBySlug,
  getAllCategorySlugs,
} from "@/lib/categories-data";
import { getGuidesByCategory } from "@/lib/guides-data";
import {
  getDifficultyLabel,
  formatCurrency,
} from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="h-8 w-8" />,
  Zap: <Zap className="h-8 w-8" />,
  Paintbrush: <Paintbrush className="h-8 w-8" />,
  Layers: <Layers className="h-8 w-8" />,
  CookingPot: <Wrench className="h-8 w-8" />,
  DoorOpen: <Ruler className="h-8 w-8" />,
  Thermometer: <Thermometer className="h-8 w-8" />,
  TreePine: <TreePine className="h-8 w-8" />,
  Wrench: <Wrench className="h-8 w-8" />,
  Armchair: <Armchair className="h-8 w-8" />,
};

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} Guides`,
    description: category.description,
    openGraph: {
      title: `${category.name} Guides | Repair & Refinish`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryGuides = getGuidesByCategory(slug).filter(
    (g) => g.status === "published"
  );

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Categories", href: "/categories" },
            { label: category.name },
          ]}
        />
      </div>

      {/* Header */}
      <section className="py-12 md:py-16" style={{ backgroundColor: `${category.color}08` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5">
            <div
              className="flex items-center justify-center h-16 w-16 rounded-2xl shrink-0"
              style={{
                backgroundColor: `${category.color}15`,
                color: category.color,
              }}
            >
              {iconMap[category.icon] || <Wrench className="h-8 w-8" />}
            </div>
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                {category.name}
              </h1>
              <p className="mt-3 text-muted-foreground text-lg max-w-2xl leading-relaxed">
                {category.description}
              </p>
              <p className="mt-2 text-sm font-medium" style={{ color: category.color }}>
                {categoryGuides.length}{" "}
                {categoryGuides.length === 1 ? "Guide" : "Guides"} Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {categoryGuides.length === 0 ? (
            <div className="text-center py-20">
              <Search className="h-12 w-12 mx-auto text-muted-foreground/40 mb-4" />
              <h3 className="font-heading text-xl font-bold text-primary mb-2">
                Guides Coming Soon
              </h3>
              <p className="text-muted-foreground mb-4">
                We&apos;re working on expert guides for {category.name}. Check
                back soon or browse other categories.
              </p>
              <Button variant="default" asChild>
                <Link href="/categories">Browse All Categories</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryGuides.map((guide) => (
                <Link key={guide.id} href={`/guides/${guide.slug}`}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <Hammer className="h-12 w-12 text-primary-300" />
                      <div className="absolute top-3 right-3">
                        <Badge variant={guide.difficulty} className="text-xs">
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
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
