"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, FileText, ArrowRight, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { guides } from "@/lib/guides-data";
import { categories } from "@/lib/categories-data";

const categoryFilters = [
  "All",
  ...categories.map((c) => c.name),
] as const;

interface SearchBarProps {
  autoFocus?: boolean;
  onClose?: () => void;
}

export function SearchBar({ autoFocus = false, onClose }: SearchBarProps) {
  const [query, setQuery] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState<string>("All");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const filteredResults = React.useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    const categorySlugMap = Object.fromEntries(
      categories.map((c) => [c.name, c.slug])
    );
    return guides
      .filter((g) => g.status === "published")
      .filter((g) => {
        const matchesQuery =
          g.title.toLowerCase().includes(lower) ||
          g.excerpt.toLowerCase().includes(lower) ||
          g.category.toLowerCase().includes(lower);
        const activeCatSlug = categorySlugMap[activeCategory];
        const matchesCategory =
          activeCategory === "All" || g.category === activeCatSlug;
        return matchesQuery && matchesCategory;
      })
      .slice(0, 5)
      .map((g) => {
        const cat = categories.find((c) => c.slug === g.category);
        return {
          title: g.title,
          category: cat?.name ?? g.category,
          excerpt: g.excerpt,
          slug: `/guides/${g.slug}`,
        };
      });
  }, [query, activeCategory]);

  // Keyboard shortcut: Cmd+K / Ctrl+K
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
        inputRef.current?.blur();
        onClose?.();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Close on outside click
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-focus on mount when requested
  React.useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
      setIsOpen(true);
    }
  }, [autoFocus]);

  const showResults = isOpen && query.trim().length > 0;

  return (
    <div ref={containerRef} className="relative">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.trim()) setIsOpen(true);
          }}
          onFocus={() => {
            if (query.trim()) setIsOpen(true);
          }}
          placeholder="Search guides..."
          aria-label="Search guides"
          className={cn(
            "h-9 w-full rounded-lg border border-input bg-muted/50 pl-9 pr-20 text-sm",
            "placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-white",
            "transition-all duration-200",
            "md:w-64 md:focus:w-80"
          )}
        />
        {/* Keyboard shortcut hint */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-0.5">
          {query ? (
            <button
              onClick={() => {
                setQuery("");
                setIsOpen(false);
                inputRef.current?.focus();
              }}
              className="p-0.5 rounded text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          ) : (
            <kbd className="pointer-events-none flex items-center gap-0.5 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
              <Command className="h-2.5 w-2.5" />K
            </kbd>
          )}
        </div>
        {/* Mobile clear button */}
        {query && (
          <button
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 md:hidden p-1 rounded text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 w-full min-w-[320px] md:min-w-[400px] rounded-xl border border-border bg-white shadow-xl overflow-hidden z-50"
          >
            {/* Category Filters */}
            <div className="flex items-center gap-1 p-2 border-b border-border overflow-x-auto no-scrollbar">
              {categoryFilters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "shrink-0 rounded-full px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary-50 hover:text-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto">
              {filteredResults.length > 0 ? (
                <div className="p-2 space-y-1">
                  {filteredResults.map((result) => (
                    <a
                      key={result.slug}
                      href={result.slug}
                      onClick={() => {
                        setIsOpen(false);
                        setQuery("");
                        onClose?.();
                      }}
                      className="flex items-start gap-3 rounded-lg p-3 hover:bg-primary-50 transition-colors group"
                    >
                      <FileText className="h-5 w-5 mt-0.5 text-muted-foreground group-hover:text-primary shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary truncate">
                          {result.title}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                          {result.excerpt}
                        </p>
                        <span className="inline-block mt-1 text-[10px] font-medium text-accent bg-accent-50 px-1.5 py-0.5 rounded">
                          {result.category}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 mt-1 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all shrink-0" />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <Search className="h-8 w-8 mx-auto text-muted-foreground/40 mb-2" />
                  <p className="text-sm text-muted-foreground">
                    No results found for &ldquo;{query}&rdquo;
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    Try a different search term or category
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            {filteredResults.length > 0 && (
              <div className="border-t border-border p-2">
                <a
                  href={`/search?q=${encodeURIComponent(query)}`}
                  onClick={() => {
                    setIsOpen(false);
                    onClose?.();
                  }}
                  className="flex items-center justify-center gap-2 rounded-lg py-2 text-xs font-medium text-primary hover:bg-primary-50 transition-colors"
                >
                  View all results
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
