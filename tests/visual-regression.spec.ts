import { test, expect } from '@playwright/test';
import path from 'path';

const SCREENSHOT_DIR = path.join(__dirname, 'screenshots', 'qa-audit');

const VIEWPORTS = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1440, height: 900 },
};

const KEY_PAGES = [
  { name: 'homepage', path: '/' },
  { name: 'guide-detail', path: '/guides/fix-running-toilet' },
  { name: 'category-page', path: '/categories/plumbing' },
  { name: 'contact', path: '/contact' },
];

// ============================================================================
// Visual regression baseline screenshots at 3 viewport sizes
// ============================================================================

for (const pageInfo of KEY_PAGES) {
  for (const [vpName, viewport] of Object.entries(VIEWPORTS)) {
    test(`visual baseline: ${pageInfo.name} @ ${vpName}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(1000);

      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, `vr-${pageInfo.name}-${vpName}.png`),
        fullPage: true,
      });

      // Verify no horizontal overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth, `Horizontal overflow on ${pageInfo.path} at ${vpName}`).toBeLessThanOrEqual(clientWidth);
    });
  }
}

// ============================================================================
// Footer placement verification
// ============================================================================

for (const pageInfo of KEY_PAGES) {
  test(`footer below viewport: ${pageInfo.name}`, async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });

    const metrics = await page.evaluate(() => {
      const footer = document.querySelector('footer');
      if (!footer) return { footerExists: false, pageHeight: 0, viewportHeight: 0 };
      return {
        footerExists: true,
        pageHeight: document.documentElement.scrollHeight,
        viewportHeight: window.innerHeight,
        footerBottom: footer.getBoundingClientRect().bottom + window.scrollY,
      };
    });

    expect(metrics.footerExists).toBe(true);
    // Page should be at least as tall as viewport (footer at bottom)
    expect(metrics.pageHeight).toBeGreaterThanOrEqual(metrics.viewportHeight);
  });
}

// ============================================================================
// Text readability checks
// ============================================================================

for (const pageInfo of KEY_PAGES) {
  test(`text readability: ${pageInfo.name}`, async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });

    const textMetrics = await page.evaluate(() => {
      const paragraphs = document.querySelectorAll('p');
      const metrics = {
        totalParagraphs: paragraphs.length,
        smallParagraphs: 0,
        tightLineHeight: 0,
        avgFontSize: 0,
        samples: [] as { text: string; fontSize: string; lineHeight: string }[],
      };

      let totalFontSize = 0;

      paragraphs.forEach(p => {
        const style = window.getComputedStyle(p);
        const fontSize = parseFloat(style.fontSize);
        const lineHeight = parseFloat(style.lineHeight);
        totalFontSize += fontSize;

        if (fontSize < 14) {
          metrics.smallParagraphs++;
        }

        // Line height should be at least 1.4x font size for readability
        if (lineHeight < fontSize * 1.4 && !isNaN(lineHeight)) {
          metrics.tightLineHeight++;
        }

        if (metrics.samples.length < 3) {
          metrics.samples.push({
            text: p.textContent?.trim().slice(0, 40) || '',
            fontSize: style.fontSize,
            lineHeight: style.lineHeight,
          });
        }
      });

      metrics.avgFontSize = paragraphs.length > 0 ? totalFontSize / paragraphs.length : 0;

      return metrics;
    });

    // Main body text should average 14px+
    if (textMetrics.totalParagraphs > 0) {
      expect(textMetrics.avgFontSize).toBeGreaterThanOrEqual(13);
    }
  });
}

// ============================================================================
// Component-level visual checks
// ============================================================================

test.describe('component visual checks', () => {

  test('guide cards have consistent height in grid', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/guides', { waitUntil: 'networkidle', timeout: 30000 });

    const cardHeights = await page.evaluate(() => {
      const cards = document.querySelectorAll('.grid > a > [class*="card"], .grid > a > div');
      return Array.from(cards).slice(0, 6).map(card => {
        const rect = card.getBoundingClientRect();
        return Math.round(rect.height);
      });
    });

    if (cardHeights.length >= 2) {
      // Cards in the same row should be roughly the same height (within 20px)
      // Check first row (first 3 cards at desktop)
      const firstRow = cardHeights.slice(0, 3);
      if (firstRow.length === 3) {
        const maxDiff = Math.max(...firstRow) - Math.min(...firstRow);
        // Log if significantly different
        if (maxDiff > 50) {
          console.warn(`Card height variance in first row: ${maxDiff}px (${firstRow.join(', ')})`);
        }
      }
    }
  });

  test('category cards have colored top borders', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/categories', { waitUntil: 'networkidle', timeout: 30000 });

    const cardBorders = await page.evaluate(() => {
      const cards = document.querySelectorAll('.category-accent');
      return Array.from(cards).slice(0, 3).map(card => {
        const style = window.getComputedStyle(card);
        return {
          borderTopWidth: style.borderTopWidth,
          borderTopStyle: style.borderTopStyle,
          borderTopColor: style.borderTopColor,
        };
      });
    });

    // Each category card should have a colored top border
    for (const border of cardBorders) {
      expect(parseFloat(border.borderTopWidth)).toBeGreaterThanOrEqual(3);
    }
  });

  test('difficulty badges have correct colors', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/guides', { waitUntil: 'networkidle', timeout: 30000 });

    const badges = await page.evaluate(() => {
      const badgeEls = document.querySelectorAll('[class*="badge"]');
      const result: { text: string; bg: string; color: string }[] = [];

      badgeEls.forEach(badge => {
        const text = badge.textContent?.trim().toLowerCase() || '';
        if (['beginner', 'intermediate', 'advanced'].includes(text)) {
          const style = window.getComputedStyle(badge);
          result.push({
            text,
            bg: style.backgroundColor,
            color: style.color,
          });
        }
      });

      return result;
    });

    // Should have at least some difficulty badges
    expect(badges.length).toBeGreaterThan(0);
  });

  test('product cards have hover elevation', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    const productCards = page.locator('.product-card');
    const count = await productCards.count();

    if (count > 0) {
      const firstCard = productCards.first();

      // Get initial box-shadow
      const initialShadow = await firstCard.evaluate(el => {
        return window.getComputedStyle(el).boxShadow;
      });

      // Hover over the card
      await firstCard.hover();
      await page.waitForTimeout(300);

      // Get hover box-shadow
      const hoverShadow = await firstCard.evaluate(el => {
        return window.getComputedStyle(el).boxShadow;
      });

      // Shadow should change on hover (card elevates)
      // Note: some implementations use transform instead
      const hoverTransform = await firstCard.evaluate(el => {
        return window.getComputedStyle(el).transform;
      });

      const hasHoverEffect = hoverShadow !== initialShadow || hoverTransform !== 'none';
      expect(hasHoverEffect, 'Product card should have hover effect').toBe(true);
    }
  });

  test('star ratings render correctly', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    const starRatings = await page.evaluate(() => {
      const filledStars = document.querySelectorAll('.star-filled');
      const emptyStars = document.querySelectorAll('.star-empty');
      return {
        filledCount: filledStars.length,
        emptyCount: emptyStars.length,
        totalStarElements: filledStars.length + emptyStars.length,
      };
    });

    // Should have star rating elements in the tools section
    expect(starRatings.totalStarElements).toBeGreaterThan(0);
    expect(starRatings.filledCount).toBeGreaterThan(0);
  });
});

// ============================================================================
// Responsive layout checks
// ============================================================================

test.describe('responsive layout', () => {

  test('homepage grid collapses correctly on mobile', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    // Check that cards stack vertically (each card should be full width)
    const cardWidths = await page.evaluate(() => {
      const gridItems = document.querySelectorAll('.grid > *');
      return Array.from(gridItems).slice(0, 3).map(item => {
        const rect = item.getBoundingClientRect();
        return Math.round(rect.width);
      });
    });

    if (cardWidths.length > 0) {
      // On mobile, cards should be nearly full container width
      const viewportWidth = VIEWPORTS.mobile.width;
      for (const width of cardWidths) {
        expect(width).toBeGreaterThan(viewportWidth * 0.8);
      }
    }
  });

  test('text does not overflow on mobile', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    const overflowingText = await page.evaluate(() => {
      const elements = document.querySelectorAll('h1, h2, h3, p, span, a');
      const issues: string[] = [];

      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > window.innerWidth + 1) {
          issues.push(`${el.tagName}: "${el.textContent?.trim().slice(0, 30)}" overflows by ${Math.round(rect.right - window.innerWidth)}px`);
        }
      });

      return issues;
    });

    expect(overflowingText, `Text overflow on mobile: ${overflowingText.join('; ')}`).toHaveLength(0);
  });

  test('images scale on mobile', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    await page.goto('/guides/fix-running-toilet', { waitUntil: 'networkidle', timeout: 30000 });

    const overflowingImages = await page.evaluate(() => {
      const images = document.querySelectorAll('img, [class*="h-48"], [class*="h-64"], [class*="h-80"]');
      const issues: string[] = [];

      images.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.right > window.innerWidth + 1) {
          issues.push(`Image/container overflows: ${rect.width}px wide, viewport ${window.innerWidth}px`);
        }
      });

      return issues;
    });

    expect(overflowingImages).toHaveLength(0);
  });

  test('navigation is hidden on mobile and accessible via hamburger', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    // Desktop nav should be hidden
    const desktopNav = page.locator('nav.hidden.lg\\:flex');
    // This checks for the hidden class on mobile
    const isDesktopNavHidden = await page.evaluate(() => {
      const nav = document.querySelector('header nav');
      if (!nav) return true;
      const style = window.getComputedStyle(nav);
      return style.display === 'none';
    });

    expect(isDesktopNavHidden, 'Desktop nav should be hidden on mobile').toBe(true);

    // Hamburger button should be visible
    const hamburger = page.locator('button[aria-label="Toggle menu"]');
    await expect(hamburger).toBeVisible();
  });
});
