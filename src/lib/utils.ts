import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Difficulty, Retailer } from '@/types';

// =============================================================================
// Repair & Refinish - Utility Functions
// =============================================================================

/**
 * Merge Tailwind CSS classes with conflict resolution.
 * Combines clsx for conditional classes with tailwind-merge for deduplication.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as USD currency.
 * @param amount - The dollar amount
 * @param showCents - Whether to show cents (default: false for whole dollar amounts)
 */
export function formatCurrency(amount: number, showCents = false): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  }).format(amount);
}

/**
 * Format a date string into a human-readable format.
 * @param dateString - ISO date string or Date object
 * @param style - 'long' for "January 15, 2025", 'short' for "Jan 15, 2025", 'relative' for "3 days ago"
 */
export function formatDate(
  dateString: string | Date,
  style: 'long' | 'short' | 'relative' = 'long'
): string {
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;

  if (style === 'relative') {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    }
    if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    }
    const years = Math.floor(diffDays / 365);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
  });
}

/**
 * Convert a string to a URL-safe slug.
 * @param text - The text to slugify
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Estimate reading time for content.
 * Average reading speed: 238 words per minute (based on research).
 * @param content - The text content (can include markdown)
 * @returns Formatted string like "5 min read"
 */
export function estimateReadingTime(content: string): string {
  const plainText = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[#*_~`>\[\]()!|-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 238));
  return `${minutes} min read`;
}

/**
 * Get the Tailwind color classes for a difficulty level.
 * Returns an object with bg, text, and border classes.
 */
export function getDifficultyColor(difficulty: Difficulty): {
  bg: string;
  text: string;
  border: string;
  badge: string;
} {
  switch (difficulty) {
    case 'beginner':
      return {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        border: 'border-emerald-200',
        badge: 'bg-emerald-100 text-emerald-800',
      };
    case 'intermediate':
      return {
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        border: 'border-amber-200',
        badge: 'bg-amber-100 text-amber-800',
      };
    case 'advanced':
      return {
        bg: 'bg-red-50',
        text: 'text-red-700',
        border: 'border-red-200',
        badge: 'bg-red-100 text-red-800',
      };
  }
}

/**
 * Get the human-readable label for a difficulty level.
 */
export function getDifficultyLabel(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'beginner':
      return 'Beginner Friendly';
    case 'intermediate':
      return 'Intermediate';
    case 'advanced':
      return 'Advanced';
  }
}

/**
 * Get the logo path or placeholder for a retailer.
 */
export function getRetailerLogo(retailer: Retailer): string {
  switch (retailer) {
    case 'homedepot':
      return '/retailers/home-depot.svg';
    case 'lowes':
      return '/retailers/lowes.svg';
    case 'wayfair':
      return '/retailers/wayfair.svg';
    case 'amazon':
      return '/retailers/amazon.svg';
  }
}

/**
 * Get the display name for a retailer.
 */
export function getRetailerName(retailer: Retailer): string {
  switch (retailer) {
    case 'homedepot':
      return 'Home Depot';
    case 'lowes':
      return "Lowe's";
    case 'wayfair':
      return 'Wayfair';
    case 'amazon':
      return 'Amazon';
  }
}

/**
 * Truncate text to a maximum length, adding ellipsis if needed.
 * Breaks at word boundaries to avoid cutting words.
 * @param text - The text to truncate
 * @param maxLength - Maximum character length (default: 160)
 */
export function truncate(text: string, maxLength = 160): string {
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace === -1) return truncated + '...';
  return truncated.slice(0, lastSpace) + '...';
}

/**
 * Generate a cost range string from a CostEstimate.
 */
export function formatCostRange(low: number, high: number): string {
  return `${formatCurrency(low)} - ${formatCurrency(high)}`;
}

/**
 * Generate star rating display data.
 * @param rating - Rating value (0-5)
 * @returns Object with full stars, half stars, and empty stars counts
 */
export function getStarRating(rating: number): {
  full: number;
  half: boolean;
  empty: number;
} {
  const clamped = Math.max(0, Math.min(5, rating));
  const full = Math.floor(clamped);
  const half = clamped - full >= 0.25 && clamped - full < 0.75;
  const empty = 5 - full - (half ? 1 : 0);
  return { full, half, empty };
}

/**
 * Format a large number with commas or abbreviations.
 * @param num - The number to format
 * @param abbreviate - Use K/M abbreviations for large numbers
 */
export function formatNumber(num: number, abbreviate = false): string {
  if (abbreviate) {
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  }
  return new Intl.NumberFormat('en-US').format(num);
}
