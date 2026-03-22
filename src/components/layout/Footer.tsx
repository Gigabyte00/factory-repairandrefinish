"use client";

import * as React from "react";
import Link from "next/link";
import {
  Wrench,
  Mail,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { trackNewsletterSignup, trackEmailCapture } from "@/lib/analytics";

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

const resources = [
  { name: "All Guides", href: "/guides" },
  { name: "All Categories", href: "/categories" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "YouTube", href: "https://youtube.com", icon: Youtube },
];

// Pinterest icon (Lucide doesn't have one, so we use a simple custom SVG)
function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 12a4 4 0 1 1 8 0c0 3-2 6-3 7" />
      <path d="M9.5 15.5L7.5 22" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      trackNewsletterSignup('footer', email);
      trackEmailCapture('footer');
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-primary-900 text-primary-100">
      {/* Newsletter Banner */}
      <div className="border-b border-primary-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-xl font-bold text-white">
                Get Weekly Repair Tips
              </h3>
              <p className="text-sm text-primary-300 mt-1">
                Join 10,000+ homeowners who fix it right the first time.
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              aria-label="Newsletter signup"
              className="flex w-full max-w-md gap-2"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for weekly tips"
                  className="pl-9 bg-primary-800 border-primary-600 text-white placeholder:text-primary-400 focus:ring-accent/40 focus:border-accent"
                />
              </div>
              <Button type="submit" variant="accent" size="md">
                {subscribed ? "Subscribed!" : "Subscribe"}
                {!subscribed && <ArrowRight className="h-4 w-4" />}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent text-white">
                <Wrench className="h-4 w-4" />
              </div>
              <span className="font-heading text-lg font-bold text-white">
                Repair & Refinish
              </span>
            </Link>
            <p className="text-sm text-primary-300 leading-relaxed">
              Expert home repair and improvement guides written by professional
              contractors. We help you fix it right the first time with clear,
              step-by-step instructions.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary-800 text-primary-300 hover:bg-accent hover:text-white transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary-800 text-primary-300 hover:bg-accent hover:text-white transition-colors"
              >
                <PinterestIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-sm text-primary-300 hover:text-accent transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="text-sm text-primary-300 hover:text-accent transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-300 hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-sm text-primary-300 hover:text-accent transition-colors"
                >
                  Browse Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-300 hover:text-accent transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@repairandrefinish.com"
                  className="text-sm text-primary-300 hover:text-accent transition-colors"
                >
                  hello@repairandrefinish.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Affiliate Disclosure */}
      <div className="border-t border-primary-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-primary-400 leading-relaxed text-center">
            <strong className="text-primary-300">Affiliate Disclosure:</strong>{" "}
            Repair & Refinish is reader-supported. When you buy through links on
            our site, we may earn an affiliate commission at no additional cost
            to you. This helps us continue creating free, in-depth repair
            guides. We only recommend products we&apos;ve tested or thoroughly
            researched.
          </p>
        </div>
      </div>

      <Separator className="bg-primary-800" />

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-400">
            &copy; {new Date().getFullYear()} Repair & Refinish. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-primary-400 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-primary-400 hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-xs text-primary-400 hover:text-accent transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
