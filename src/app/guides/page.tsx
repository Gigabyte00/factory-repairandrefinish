"use client";

import * as React from "react";
import Link from "next/link";
import {
  Clock,
  DollarSign,
  Hammer,
  Search,
  ArrowUpDown,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { categories } from "@/lib/categories-data";
import { guides } from "@/lib/guides-data";
import {
  getDifficultyLabel,
  getDifficultyColor,
  formatCurrency,
} from "@/lib/utils";
import type { Difficulty } from "@/types";

const difficultyLevels: (Difficulty | "all")[] = [
  "all",
  "beginner",
  "intermediate",
  "advanced",
];

type SortOption = "newest" | "oldest" | "difficulty-asc" | "difficulty-desc";
const difficultyOrder: Record<Difficulty, number> = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
};

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<
    Difficulty | "all"
  >("all");
  const [sortBy, setSortBy] = React.useState<SortOption>("newest");
  const [searchQuery, setSearchQuery] = React.useState("");

  const publishedGuides = guides.filter((g) => g.status === "published");

  const filteredGuides = React.useMemo(() => {
    let result = [...publishedGuides];

    if (selectedCategory !== "all") {
      result = result.filter((g) => g.category === selectedCategory);
    }

    if (selectedDifficulty !== "all") {
      result = result.filter((g) => g.difficulty === selectedDifficulty);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.excerpt.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
        break;
      case "oldest":
        result.sort(
          (a, b) =>
            new Date(a.publishedAt).getTime() -
            new Date(b.publishedAt).getTime()
        );
        break;
      case "difficulty-asc":
        result.sort(
          (a, b) =>
            difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
        );
        break;
      case "difficulty-desc":
        result.sort(
          (a, b) =>
            difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty]
        );
        break;
    }

    return result;
  }, [publishedGuides, selectedCategory, selectedDifficulty, sortBy, searchQuery]);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Guides" }]} />
      </div>

      {/* Header */}
      <section className="bg-primary-900 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Home Repair & Improvement Guides
          </h1>
          <p className="mt-4 text-primary-200 text-lg max-w-2xl">
            Step-by-step tutorials for every skill level. Each guide includes
            tools, materials, cost estimates, and pro tips so you can fix it
            right the first time.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-white sticky top-16 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              {/* Category filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="h-9 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty filter */}
              <div className="flex gap-1">
                {difficultyLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedDifficulty(level)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                      selectedDifficulty === level
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-primary-50 hover:text-primary"
                    }`}
                  >
                    {level === "all" ? "All Levels" : getDifficultyLabel(level)}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="h-9 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="difficulty-asc">Easiest First</option>
                  <option value="difficulty-desc">Hardest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredGuides.length === 0 ? (
            <div className="text-center py-20">
              <Search className="h-12 w-12 mx-auto text-muted-foreground/40 mb-4" />
              <h3 className="font-heading text-xl font-bold text-primary mb-2">
                No guides found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search term.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedDifficulty("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                Showing {filteredGuides.length}{" "}
                {filteredGuides.length === 1 ? "guide" : "guides"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGuides.map((guide) => {
                  const category = categories.find(
                    (c) => c.slug === guide.category
                  );
                  return (
                    <Link key={guide.id} href={`/guides/${guide.slug}`}>
                      <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                        <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                          <Hammer className="h-12 w-12 text-primary-300" />
                          <div className="absolute top-3 left-3">
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
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
