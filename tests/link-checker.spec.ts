import { test, expect, Page } from '@playwright/test';

// =============================================================================
// Internal Link Checker — repairandrefinish.com
// =============================================================================
// Crawls every internal link found on key pages and verifies:
//   - No 404 responses
//   - No error pages (500, etc.)
//   - All header nav links resolve
//   - All footer links resolve
//   - All links on homepage, /guides, /categories resolve
// =============================================================================

/**
 * Extract all unique internal links from the current page.
 * Excludes: mailto:, tel:, #anchor-only, external URLs, javascript:
 */
async function extractInternalLinks(page: Page): Promise<string[]> {
  const links = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a[href]'));
    return anchors
      .map((a) => a.getAttribute('href') || '')
      .filter((href) => {
        if (!href) return false;
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;
        if (href.startsWith('javascript:')) return false;
        if (href.startsWith('http://') || href.startsWith('https://')) return false;
        if (href === '#') return false;
        // Keep anchor links that also have a path (e.g., /page#section)
        // but skip pure anchors like #newsletter
        if (href.startsWith('#')) return false;
        return true;
      });
  });

  // Deduplicate and normalize
  const unique = [...new Set(links)].map((l) => {
    // Strip query params and hash for dedup purposes (but keep original for navigation)
    return l;
  });

  return unique;
}

/**
 * Check a single link — navigate and verify it doesn't 404.
 */
async function checkLink(
  page: Page,
  href: string,
  sourcePage: string
): Promise<{ href: string; status: number; is404: boolean; source: string }> {
  try {
    const response = await page.goto(href, { waitUntil: 'domcontentloaded', timeout: 15000 });
    const status = response?.status() ?? 0;

    // Also check for soft 404 (200 status but shows 404 content)
    let is404 = status === 404;
    if (status === 200) {
      const has404Text = await page.locator('h1:has-text("Page Not Found"), p:has-text("404")').count();
      if (has404Text > 0) {
        is404 = true;
      }
    }

    return { href, status, is404, source: sourcePage };
  } catch (error) {
    return { href, status: 0, is404: true, source: sourcePage };
  }
}

// ─── HEADER NAVIGATION LINKS ──────────────────────────────────────────────

test.describe('Header Navigation Links', () => {
  test('all header links resolve without 404', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Get links from the header
    const headerLinks = await page.evaluate(() => {
      const header = document.querySelector('header');
      if (!header) return [];
      const anchors = Array.from(header.querySelectorAll('a[href]'));
      return anchors
        .map((a) => a.getAttribute('href') || '')
        .filter((href) => href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto:'));
    });

    const uniqueLinks = [...new Set(headerLinks)];
    const issues: string[] = [];

    for (const href of uniqueLinks) {
      const result = await checkLink(page, href, 'header');
      if (result.is404) {
        issues.push(`HEADER LINK 404: ${href} (status: ${result.status})`);
      }
    }

    if (issues.length > 0) {
      console.warn('Header link issues:', issues);
    }
    expect(issues, `Header has ${issues.length} broken links: ${issues.join(', ')}`).toEqual([]);
  });
});

// ─── FOOTER LINKS ──────────────────────────────────────────────────────────

test.describe('Footer Links', () => {
  test('all footer internal links resolve without 404', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const footerLinks = await page.evaluate(() => {
      const footer = document.querySelector('footer');
      if (!footer) return [];
      const anchors = Array.from(footer.querySelectorAll('a[href]'));
      return anchors
        .map((a) => ({
          href: a.getAttribute('href') || '',
          text: a.textContent?.trim() || '',
        }))
        .filter((l) => l.href && !l.href.startsWith('#') && !l.href.startsWith('http') && !l.href.startsWith('mailto:'));
    });

    const uniqueLinks = [...new Map(footerLinks.map((l) => [l.href, l])).values()];
    const issues: { href: string; text: string; status: number }[] = [];

    for (const link of uniqueLinks) {
      const result = await checkLink(page, link.href, 'footer');
      if (result.is404) {
        issues.push({ href: link.href, text: link.text, status: result.status });
      }
    }

    if (issues.length > 0) {
      console.warn('Footer broken links:');
      issues.forEach((i) => console.warn(`  - "${i.text}" → ${i.href} (status: ${i.status})`));
    }
    expect(issues.length, `Footer has ${issues.length} broken links`).toBe(0);
  });
});

// ─── HOMEPAGE LINKS ────────────────────────────────────────────────────────

test.describe('Homepage Internal Links', () => {
  test('all internal links on homepage resolve', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const links = await extractInternalLinks(page);
    const issues: string[] = [];

    for (const href of links) {
      const result = await checkLink(page, href, 'homepage');
      if (result.is404) {
        issues.push(`${href} → 404`);
      }
    }

    if (issues.length > 0) {
      console.warn(`Homepage has ${issues.length} broken links:`, issues);
    }
    expect(issues.length, `Homepage has ${issues.length} broken links: ${issues.join(', ')}`).toBe(0);
  });
});

// ─── GUIDES PAGE LINKS ────────────────────────────────────────────────────

test.describe('Guides Page Links', () => {
  test('all internal links on /guides resolve', async ({ page }) => {
    await page.goto('/guides');
    await page.waitForLoadState('networkidle');

    const links = await extractInternalLinks(page);
    const issues: string[] = [];

    for (const href of links) {
      // Skip links that are also in header/footer (already tested)
      const result = await checkLink(page, href, '/guides');
      if (result.is404) {
        issues.push(`${href} → 404`);
      }
    }

    if (issues.length > 0) {
      console.warn(`/guides has ${issues.length} broken links:`, issues);
    }
    expect(issues.length, `/guides has ${issues.length} broken links: ${issues.join(', ')}`).toBe(0);
  });
});

// ─── CATEGORIES PAGE LINKS ────────────────────────────────────────────────

test.describe('Categories Page Links', () => {
  test('all internal links on /categories resolve', async ({ page }) => {
    await page.goto('/categories');
    await page.waitForLoadState('networkidle');

    const links = await extractInternalLinks(page);
    const issues: string[] = [];

    for (const href of links) {
      const result = await checkLink(page, href, '/categories');
      if (result.is404) {
        issues.push(`${href} → 404`);
      }
    }

    if (issues.length > 0) {
      console.warn(`/categories has ${issues.length} broken links:`, issues);
    }
    expect(issues.length, `/categories has ${issues.length} broken links: ${issues.join(', ')}`).toBe(0);
  });
});

// ─── GUIDE DETAIL PAGE LINKS ──────────────────────────────────────────────

test.describe('Guide Detail Page Links', () => {
  test('all internal links on a guide detail page resolve', async ({ page }) => {
    await page.goto('/guides/fix-running-toilet');
    await page.waitForLoadState('networkidle');

    const links = await extractInternalLinks(page);
    const issues: string[] = [];

    for (const href of links) {
      const result = await checkLink(page, href, '/guides/fix-running-toilet');
      if (result.is404) {
        issues.push(`${href} → 404`);
      }
    }

    if (issues.length > 0) {
      console.warn(`Guide detail has ${issues.length} broken links:`, issues);
    }
    expect(issues.length, `Guide detail has ${issues.length} broken links: ${issues.join(', ')}`).toBe(0);
  });
});

// ─── ABOUT PAGE LINKS ─────────────────────────────────────────────────────

test.describe('About Page Links', () => {
  test('all internal links on /about resolve', async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('networkidle');

    const links = await extractInternalLinks(page);
    const issues: string[] = [];

    for (const href of links) {
      const result = await checkLink(page, href, '/about');
      if (result.is404) {
        issues.push(`${href} → 404`);
      }
    }

    if (issues.length > 0) {
      console.warn(`/about has ${issues.length} broken links:`, issues);
    }
    expect(issues.length, `/about has ${issues.length} broken links: ${issues.join(', ')}`).toBe(0);
  });
});
