import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplets,
  Zap,
  Paintbrush,
  Layers,
  Wrench,
  Ruler,
  Thermometer,
  TreePine,
  Armchair,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { categories } from "@/lib/categories-data";
import { guides } from "@/lib/guides-data";

export const metadata: Metadata = {
  title: "All Categories",
  description:
    "Browse home repair and improvement guides by category. 10 categories covering plumbing, electrical, painting, flooring, kitchen & bath, doors & windows, HVAC, outdoor, appliances, and furniture.",
};

const iconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="h-7 w-7" />,
  Zap: <Zap className="h-7 w-7" />,
  Paintbrush: <Paintbrush className="h-7 w-7" />,
  Layers: <Layers className="h-7 w-7" />,
  CookingPot: <Wrench className="h-7 w-7" />,
  DoorOpen: <Ruler className="h-7 w-7" />,
  Thermometer: <Thermometer className="h-7 w-7" />,
  TreePine: <TreePine className="h-7 w-7" />,
  Wrench: <Wrench className="h-7 w-7" />,
  Armchair: <Armchair className="h-7 w-7" />,
};

export default function CategoriesPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Categories" }]} />
      </div>

      {/* Header */}
      <section className="bg-primary-900 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Guide Categories
          </h1>
          <p className="mt-4 text-primary-200 text-lg max-w-2xl">
            10 categories covering every room, system, and surface in your home.
            Find the repair or improvement project you need and get started.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const guideCount = guides.filter(
                (g) => g.category === cat.slug && g.status === "published"
              ).length;
              return (
                <Link key={cat.id} href={`/categories/${cat.slug}`}>
                  <Card
                    className="h-full category-accent group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={
                      { "--category-color": cat.color } as React.CSSProperties
                    }
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div
                          className="flex items-center justify-center h-12 w-12 rounded-xl"
                          style={{
                            backgroundColor: `${cat.color}15`,
                            color: cat.color,
                          }}
                        >
                          {iconMap[cat.icon] || (
                            <Wrench className="h-7 w-7" />
                          )}
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
                      </div>
                      <CardTitle className="text-xl mt-4 group-hover:text-accent transition-colors">
                        {cat.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {cat.description}
                      </p>
                      <span
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{ color: cat.color }}
                      >
                        {guideCount > 0
                          ? `${guideCount} ${guideCount === 1 ? "Guide" : "Guides"}`
                          : "Coming Soon"}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
