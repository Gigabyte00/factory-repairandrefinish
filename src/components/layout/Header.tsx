"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Menu,
  X,
  ChevronDown,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackCTAClick } from "@/lib/analytics";
import { SearchBar } from "./SearchBar";

const categories = [
  { name: "Plumbing", slug: "plumbing" },
  { name: "Electrical", slug: "electrical" },
  { name: "Painting & Walls", slug: "painting-walls" },
  { name: "Flooring", slug: "flooring" },
  { name: "Kitchen & Bath", slug: "kitchen-bath" },
  { name: "Doors & Windows", slug: "doors-windows" },
  { name: "HVAC & Climate", slug: "hvac-climate" },
  { name: "Outdoor & Landscaping", slug: "outdoor-landscaping" },
  { name: "Appliance Repair", slug: "appliance-repair" },
  { name: "Furniture & Decor", slug: "furniture-decor" },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [categoriesOpen, setCategoriesOpen] = React.useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const categoriesRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close categories dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(e.target as Node)
      ) {
        setCategoriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 group"
          >
            <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary text-white transition-colors group-hover:bg-primary-600">
              <Wrench className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold leading-tight text-primary">
                Repair & Refinish
              </span>
              <span className="text-[10px] leading-none text-muted-foreground tracking-wide hidden sm:block">
                FIX IT RIGHT THE FIRST TIME
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/guides"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary-50"
            >
              Guides
            </Link>

            {/* Categories Dropdown */}
            <div ref={categoriesRef} className="relative">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg cursor-pointer",
                  categoriesOpen
                    ? "text-primary bg-primary-50"
                    : "text-foreground hover:text-primary hover:bg-primary-50"
                )}
              >
                Categories
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    categoriesOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-border bg-white shadow-lg p-2"
                  >
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/categories/${cat.slug}`}
                        onClick={() => setCategoriesOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-primary-50 hover:text-primary transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary-50"
            >
              About
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Search - Desktop */}
            <div className="hidden md:block">
              <SearchBar />
            </div>

            {/* Search - Mobile toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary-50 transition-colors cursor-pointer"
              aria-label="Toggle search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* CTA Button */}
            <Button
              variant="accent"
              size="sm"
              className="hidden sm:inline-flex"
              asChild
            >
              <Link href="#newsletter" onClick={() => trackCTAClick('Get Free Guide', 'header', '#newsletter')}>Get Free Guide</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary-50 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="py-3">
                <SearchBar autoFocus onClose={() => setSearchOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-16 right-0 bottom-0 w-80 max-w-[calc(100vw-2rem)] bg-white border-l border-border shadow-xl lg:hidden z-50 overflow-y-auto"
            >
              <nav className="p-4 space-y-1">
                <Link
                  href="/guides"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-primary-50 hover:text-primary transition-colors"
                >
                  Guides
                </Link>

                {/* Mobile Categories */}
                <div>
                  <button
                    onClick={() =>
                      setMobileCategoriesOpen(!mobileCategoriesOpen)
                    }
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-primary-50 hover:text-primary transition-colors cursor-pointer"
                  >
                    Categories
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        mobileCategoriesOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileCategoriesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-0.5 py-1">
                          {categories.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/categories/${cat.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-primary-50 hover:text-primary transition-colors"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-primary-50 hover:text-primary transition-colors"
                >
                  About
                </Link>

                <div className="pt-4 border-t border-border">
                  <Button
                    variant="accent"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <Link
                      href="#newsletter"
                      onClick={() => { setMobileMenuOpen(false); trackCTAClick('Get Free Guide', 'mobile-menu', '#newsletter'); }}
                    >
                      Get Free Guide
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
