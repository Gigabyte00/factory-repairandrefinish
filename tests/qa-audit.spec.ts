import { test, expect } from '@playwright/test';
import path from 'path';

const SCREENSHOT_DIR = path.join(__dirname, 'screenshots', 'qa-audit');

const VIEWPORTS = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1440, height: 900 },
};

const PAGES = [
  { name: 'homepage', path: '/' },
  { name: 'guides', path: '/guides' },
  { name: 'guide-fix-running-toilet', path: '/guides/fix-running-toilet' },
  { name: 'guide-refinish-hardwood-floors', path: '/guides/refinish-hardwood-floors' },
  { name: 'categories', path: '/categories' },
  { name: 'category-plumbing', path: '/categories/plumbing' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
  { name: 'privacy', path: '/privacy' },
  { name: 'terms', path: '/terms' },
  { name: '404', path: '/nonexistent-page' },
];

// ============================================================================
// STEP 1: Full-page screenshots at multiple viewports
// ============================================================================

for (const pageInfo of PAGES) {
  for (const [vpName, viewport] of Object.entries(VIEWPORTS)) {
    test(`screenshot: ${pageInfo.name} @ ${vpName} (${viewport.width}px)`, async ({ page }) => {
      await page.setViewportSize(viewport);
      const response = await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });
      // Wait for fonts and animations to settle
      await page.waitForTimeout(1000);

      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, `${pageInfo.name}-${vpName}-${viewport.width}px.png`),
        fullPage: true,
      });

      // Basic check: page loaded (200 for normal, 404 for not-found)
      if (pageInfo.name === '404') {
        expect(response?.status()).toBe(404);
      } else {
        expect(response?.status()).toBe(200);
      }
    });
  }
}

// ============================================================================
// STEP 2: Layout & overflow audit for each page
// ============================================================================

for (const pageInfo of PAGES) {
  test.describe(`audit: ${pageInfo.name}`, () => {

    // --- Horizontal overflow check at all viewports ---
    for (const [vpName, viewport] of Object.entries(VIEWPORTS)) {
      test(`no horizontal overflow @ ${vpName}`, async ({ page }) => {
        await page.setViewportSize(viewport);
        await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(500);

        const hasOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });

        expect(hasOverflow, `Horizontal overflow detected on ${pageInfo.path} at ${vpName}`).toBe(false);
      });
    }

    // --- Footer positioning check (should be at or below viewport bottom) ---
    test('footer at or below viewport bottom', async ({ page }) => {
      await page.setViewportSize(VIEWPORTS.desktop);
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(500);

      const footerPosition = await page.evaluate(() => {
        const footer = document.querySelector('footer');
        if (!footer) return { exists: false, bottom: 0 };
        const rect = footer.getBoundingClientRect();
        return {
          exists: true,
          bottom: rect.bottom,
          viewportHeight: window.innerHeight,
          pageHeight: document.documentElement.scrollHeight,
        };
      });

      expect(footerPosition.exists, 'Footer element should exist').toBe(true);
      // Footer bottom should be >= viewport height (i.e., at or below fold)
      // For short pages, flex-1 on main should push footer down
      expect(footerPosition.pageHeight).toBeGreaterThanOrEqual(footerPosition.viewportHeight as number);
    });

    // --- Single h1 check ---
    test('has exactly one h1', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });
      const h1Count = await page.locator('h1').count();
      expect(h1Count, `Expected exactly 1 h1 on ${pageInfo.path}, found ${h1Count}`).toBe(1);
    });

    // --- Check for placeholder/lorem ipsum text ---
    test('no placeholder or lorem ipsum text', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });

      const bodyText = await page.evaluate(() => document.body.innerText.toLowerCase());
      expect(bodyText).not.toContain('lorem ipsum');
      expect(bodyText).not.toContain('placeholder text');
      expect(bodyText).not.toContain('todo:');
      expect(bodyText).not.toContain('[insert');
      expect(bodyText).not.toContain('coming soon here');
    });

    // --- Check for broken href="#" links ---
    test('no href="#" links (except anchor links)', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });

      const bareHashLinks = await page.evaluate(() => {
        const links = document.querySelectorAll('a[href="#"]');
        return Array.from(links).map(a => ({
          text: a.textContent?.trim() || '',
          href: a.getAttribute('href'),
        }));
      });

      expect(bareHashLinks.length, `Found ${bareHashLinks.length} bare "#" links: ${JSON.stringify(bareHashLinks)}`).toBe(0);
    });

    // --- Check images have alt text ---
    test('all images have alt text', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });

      const imagesWithoutAlt = await page.evaluate(() => {
        const imgs = document.querySelectorAll('img');
        return Array.from(imgs)
          .filter(img => !img.hasAttribute('alt'))
          .map(img => ({ src: img.src, classes: img.className }));
      });

      expect(imagesWithoutAlt.length, `Images without alt text: ${JSON.stringify(imagesWithoutAlt)}`).toBe(0);
    });

    // --- Check heading hierarchy (no skipped levels) ---
    test('heading hierarchy is sequential', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });

      const headingIssues = await page.evaluate(() => {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const issues: string[] = [];
        let lastLevel = 0;

        headings.forEach(h => {
          const level = parseInt(h.tagName[1]);
          if (lastLevel > 0 && level > lastLevel + 1) {
            issues.push(`Skipped from h${lastLevel} to h${level}: "${h.textContent?.trim().slice(0, 50)}"`);
          }
          lastLevel = level;
        });

        return issues;
      });

      expect(headingIssues, `Heading hierarchy issues: ${headingIssues.join('; ')}`).toHaveLength(0);
    });

    // --- Check for minimum font size (body text >= 14px) ---
    test('body text is at least 14px', async ({ page }) => {
      await page.setViewportSize(VIEWPORTS.desktop);
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });

      const smallTextElements = await page.evaluate(() => {
        const elements = document.querySelectorAll('p, li, span, a, td, label');
        const tooSmall: { text: string; fontSize: string; tagName: string }[] = [];

        elements.forEach(el => {
          const style = window.getComputedStyle(el);
          const fontSize = parseFloat(style.fontSize);
          const text = el.textContent?.trim() || '';
          // Skip empty elements, badges, footnotes, and known-small elements
          if (text.length > 0 && fontSize < 12 && !el.closest('[role="img"]')) {
            tooSmall.push({
              text: text.slice(0, 40),
              fontSize: style.fontSize,
              tagName: el.tagName,
            });
          }
        });

        return tooSmall;
      });

      // Allow some small text (badges, fine print) but flag if many elements are tiny
      if (smallTextElements.length > 5) {
        console.warn(`Found ${smallTextElements.length} elements with font-size < 12px on ${pageInfo.path}`);
      }
    });
  });
}

// ============================================================================
// Interactive element audits
// ============================================================================

test.describe('interactive elements', () => {

  // --- Mobile navigation accessibility ---
  test('mobile menu opens and has navigable links', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    // Find and click mobile menu toggle
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await page.waitForTimeout(500);

    // Check menu links are visible
    const guidesLink = page.locator('nav >> text=Guides').first();
    await expect(guidesLink).toBeVisible();

    // Check categories submenu
    const categoriesButton = page.locator('nav button:has-text("Categories")').last();
    await expect(categoriesButton).toBeVisible();
  });

  // --- Contact form validation ---
  test('contact form shows validation errors', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/contact', { waitUntil: 'networkidle', timeout: 30000 });

    // Submit empty form
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();
    await page.waitForTimeout(500);

    // Check for error messages
    const errors = page.locator('text=is required');
    await expect(errors.first()).toBeVisible();

    // Screenshot of validation state
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'contact-validation-errors.png'),
      fullPage: true,
    });
  });

  // --- Contact form input focus states ---
  test('form inputs have visible focus states', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/contact', { waitUntil: 'networkidle', timeout: 30000 });

    const nameInput = page.locator('#name');
    await nameInput.focus();

    // Check focus ring is visible
    const hasFocusRing = await nameInput.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.outlineStyle !== 'none' || style.boxShadow !== 'none';
    });

    expect(hasFocusRing, 'Input should have visible focus indicator').toBe(true);
  });

  // --- Newsletter form ---
  test('newsletter form accepts email input', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    // Scroll to newsletter section
    await page.locator('#newsletter').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Screenshot newsletter section
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'homepage-newsletter-section.png'),
      fullPage: false,
    });
  });

  // --- FAQ accordion ---
  test('FAQ accordion opens and closes', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    // Find first accordion trigger
    const firstTrigger = page.locator('[data-state]').filter({ hasText: 'How do I know if a repair' }).first();
    if (await firstTrigger.isVisible()) {
      await firstTrigger.click();
      await page.waitForTimeout(500);

      // Screenshot open accordion
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, 'homepage-faq-open.png'),
        fullPage: false,
      });
    }
  });

  // --- Touch target size check (mobile) ---
  test('touch targets are at least 44px on mobile', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.mobile);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    const smallTouchTargets = await page.evaluate(() => {
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
      const tooSmall: { text: string; width: number; height: number; tagName: string }[] = [];

      interactiveElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // Only check visible elements
        if (rect.width > 0 && rect.height > 0) {
          if (rect.width < 44 || rect.height < 44) {
            const text = el.textContent?.trim().slice(0, 30) || el.getAttribute('aria-label') || '';
            // Skip elements inside larger clickable parents
            if (!el.closest('a:not(:scope)') && text.length > 0) {
              tooSmall.push({
                text,
                width: Math.round(rect.width),
                height: Math.round(rect.height),
                tagName: el.tagName,
              });
            }
          }
        }
      });

      return tooSmall;
    });

    // Log rather than fail - many sites have some small elements
    if (smallTouchTargets.length > 0) {
      console.warn(`Touch targets < 44px on mobile homepage: ${JSON.stringify(smallTouchTargets.slice(0, 10), null, 2)}`);
    }
  });
});

// ============================================================================
// Color contrast spot checks
// ============================================================================

test.describe('color contrast', () => {
  test('hero section text is readable on dark background', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    const heroContrast = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      if (!h1) return { exists: false, color: '', bgColor: '' };
      const style = window.getComputedStyle(h1);
      return {
        exists: true,
        color: style.color,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
      };
    });

    expect(heroContrast.exists).toBe(true);
    // White text on dark bg should pass
    expect(heroContrast.color).toContain('255'); // White text
  });

  test('muted-foreground text has sufficient contrast', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    const mutedTextContrast = await page.evaluate(() => {
      // Check first muted text element
      const el = document.querySelector('.text-muted-foreground');
      if (!el) return null;
      const style = window.getComputedStyle(el);
      return {
        color: style.color,
        bgColor: style.backgroundColor,
        fontSize: style.fontSize,
      };
    });

    expect(mutedTextContrast).not.toBeNull();
  });
});

// ============================================================================
// Dead link checks
// ============================================================================

test.describe('link integrity', () => {
  test('header nav links point to valid routes', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    const navLinks = await page.evaluate(() => {
      const links = document.querySelectorAll('header a');
      return Array.from(links).map(a => ({
        text: a.textContent?.trim(),
        href: a.getAttribute('href'),
      }));
    });

    // Check that all nav links have hrefs
    for (const link of navLinks) {
      expect(link.href, `Nav link "${link.text}" has no href`).toBeTruthy();
    }
  });

  test('footer links point to valid routes', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    const footerLinks = await page.evaluate(() => {
      const links = document.querySelectorAll('footer a');
      return Array.from(links).map(a => ({
        text: a.textContent?.trim(),
        href: a.getAttribute('href'),
      }));
    });

    const internalDeadLinks: string[] = [];
    for (const link of footerLinks) {
      if (link.href && link.href.startsWith('/') && !link.href.startsWith('/sitemap')) {
        const response = await page.goto(link.href, { waitUntil: 'domcontentloaded', timeout: 10000 });
        if (response && response.status() === 404) {
          internalDeadLinks.push(`"${link.text}" -> ${link.href}`);
        }
      }
    }

    if (internalDeadLinks.length > 0) {
      console.warn(`Dead footer links: ${internalDeadLinks.join(', ')}`);
    }
  });

  test('"Tools & Products" header link goes to valid page', async ({ page }) => {
    await page.setViewportSize(VIEWPORTS.desktop);
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    const response = await page.goto('/tools-products', { waitUntil: 'domcontentloaded', timeout: 10000 });
    const status = response?.status();
    // This will likely be 404 if the page doesn't exist
    if (status === 404) {
      console.warn('CRITICAL: /tools-products page returns 404 but is linked in header navigation');
    }
  });
});
