import Link from "next/link";
import { Search, Home, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/lib/categories-data";
import { getFeaturedGuides } from "@/lib/guides-data";

export default function NotFound() {
  const popularGuides = getFeaturedGuides(3);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Header */}
        <div className="mb-10">
          <p className="font-heading text-7xl font-bold text-primary-200 mb-4">
            404
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Try searching for what you need or browse our popular
            content below.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12 max-w-md mx-auto">
          <form action="/guides" method="get" className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              name="q"
              placeholder="Search for a guide..."
              aria-label="Search for a guide"
              className="h-12 w-full rounded-xl border border-input bg-background pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            />
          </form>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
          <Button variant="default" size="lg" asChild>
            <Link href="/">
              <Home className="h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/guides">
              <BookOpen className="h-5 w-5" />
              Browse Guides
            </Link>
          </Button>
        </div>

        {/* Popular Guides */}
        {popularGuides.length > 0 && (
          <div className="text-left">
            <h2 className="font-heading text-xl font-bold text-primary mb-6">
              Popular Guides
            </h2>
            <div className="space-y-3">
              {popularGuides.map((guide) => (
                <Link key={guide.id} href={`/guides/${guide.slug}`}>
                  <Card className="group hover:shadow-md transition-all hover:-translate-y-0.5">
                    <CardContent className="flex items-center justify-between py-4 px-5">
                      <div>
                        <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                          {guide.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {guide.estimatedTime} &middot;{" "}
                          {guide.difficulty.charAt(0).toUpperCase() +
                            guide.difficulty.slice(1)}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Popular Categories */}
        <div className="mt-10 text-left">
          <h2 className="font-heading text-xl font-bold text-primary mb-4">
            Browse Categories
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 6).map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="inline-flex items-center rounded-full border border-border px-3.5 py-1.5 text-sm font-medium text-foreground hover:bg-primary-50 hover:text-primary hover:border-primary-200 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
