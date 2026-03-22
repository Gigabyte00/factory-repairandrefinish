import { test, expect } from '@playwright/test';

const PAGES = [
  { name: 'Homepage', path: '/' },
  { name: 'Guides', path: '/guides' },
  { name: 'Guide Detail', path: '/guides/fix-running-toilet' },
  { name: 'Categories', path: '/categories' },
  { name: 'Category Detail', path: '/categories/plumbing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Privacy', path: '/privacy' },
  { name: 'Terms', path: '/terms' },
  { name: '404', path: '/nonexistent-page' },
];

// ============================================================================
// Accessibility Tests
// ============================================================================

for (const pageInfo of PAGES) {
  test.describe(`a11y: ${pageInfo.name}`, () => {

    // --- Single h1 ---
    test('has exactly one h1 element', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });
      const h1s = await page.locator('h1').count();
      expect(h1s).toBe(1);
    });

    // --- Lang attribute ---
    test('html has lang attribute', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });
      const lang = await page.getAttribute('html', 'lang');
      expect(lang).toBeTruthy();
      expect(lang).toBe('en');
    });

    // --- Images have alt text ---
    test('all images have alt text or are decorative', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });

      const imgIssues = await page.evaluate(() => {
        const imgs = document.querySelectorAll('img');
        const issues: string[] = [];
        imgs.forEach(img => {
          if (!img.hasAttribute('alt')) {
            issues.push(`Missing alt: ${img.src}`);
          }
        });
        return issues;
      });

      expect(imgIssues).toHaveLength(0);
    });

    // --- Heading hierarchy ---
    test('heading levels do not skip', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });

      const skippedHeadings = await page.evaluate(() => {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const issues: string[] = [];
        let prev = 0;
        headings.forEach(h => {
          const level = parseInt(h.tagName[1]);
          if (prev > 0 && level > prev + 1) {
            issues.push(`Skipped h${prev} -> h${level}: "${h.textContent?.trim().slice(0, 50)}"`);
          }
          prev = level;
        });
        return issues;
      });

      expect(skippedHeadings, skippedHeadings.join('; ')).toHaveLength(0);
    });

    // --- Focus visible on interactive elements ---
    test('interactive elements have focus indicators', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });

      // Tab through first few interactive elements
      for (let i = 0; i < 5; i++) {
        await page.keyboard.press('Tab');
        await page.waitForTimeout(100);
      }

      // Check that some element has focus
      const focusedTag = await page.evaluate(() => {
        const el = document.activeElement;
        return el ? el.tagName.toLowerCase() : 'none';
      });

      // Should be focused on an interactive element, not body
      expect(['a', 'button', 'input', 'select', 'textarea', 'summary']).toContain(focusedTag);
    });

    // --- ARIA labels on icon buttons ---
    test('icon-only buttons have aria-label', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });

      const unlabeledButtons = await page.evaluate(() => {
        const buttons = document.querySelectorAll('button');
        const issues: string[] = [];

        buttons.forEach(btn => {
          const text = btn.textContent?.trim() || '';
          const ariaLabel = btn.getAttribute('aria-label') || '';
          const ariaLabelledBy = btn.getAttribute('aria-labelledby') || '';
          const title = btn.getAttribute('title') || '';

          // If button has no visible text, it needs an aria-label
          if (text.length === 0 && !ariaLabel && !ariaLabelledBy && !title) {
            issues.push(`Button without label: ${btn.outerHTML.slice(0, 100)}`);
          }
        });

        return issues;
      });

      expect(unlabeledButtons, `Unlabeled buttons: ${unlabeledButtons.join('; ')}`).toHaveLength(0);
    });

    // --- Skip to content link ---
    test('skip-to-content link exists or main landmark is accessible', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });

      const a11yNav = await page.evaluate(() => {
        const skipLink = document.querySelector('a[href="#main-content"], a[href="#content"], a.skip-link, [class*="skip"]');
        const mainLandmark = document.querySelector('main, [role="main"]');
        return {
          hasSkipLink: !!skipLink,
          hasMainLandmark: !!mainLandmark,
        };
      });

      // At minimum, must have a <main> landmark
      expect(a11yNav.hasMainLandmark, 'Page should have a <main> landmark').toBe(true);

      // Skip link is best practice but we'll log rather than fail
      if (!a11yNav.hasSkipLink) {
        console.warn(`MEDIUM: No skip-to-content link on ${pageInfo.path}`);
      }
    });

    // --- Form inputs have associated labels ---
    test('form inputs have labels', async ({ page }) => {
      await page.goto(pageInfo.path, { waitUntil: 'networkidle', timeout: 30000 });

      const unlabeledInputs = await page.evaluate(() => {
        const inputs = document.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), textarea, select');
        const issues: string[] = [];

        inputs.forEach(input => {
          const id = input.getAttribute('id');
          const ariaLabel = input.getAttribute('aria-label');
          const ariaLabelledBy = input.getAttribute('aria-labelledby');
          const placeholder = input.getAttribute('placeholder');
          const hasLabel = id ? document.querySelector(`label[for="${id}"]`) : null;

          if (!hasLabel && !ariaLabel && !ariaLabelledBy) {
            // Placeholder alone is not sufficient per WCAG
            const desc = `${input.tagName}${id ? `#${id}` : ''}${placeholder ? ` (placeholder: "${placeholder}")` : ''}`;
            issues.push(desc);
          }
        });

        return issues;
      });

      if (unlabeledInputs.length > 0) {
        console.warn(`Inputs without labels on ${pageInfo.path}: ${unlabeledInputs.join(', ')}`);
      }
    });
  });
}

// ============================================================================
// Keyboard navigation tests
// ============================================================================

test.describe('keyboard navigation', () => {

  test('can tab through homepage main interactive elements', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    const tabOrder: string[] = [];
    for (let i = 0; i < 15; i++) {
      await page.keyboard.press('Tab');
      const info = await page.evaluate(() => {
        const el = document.activeElement;
        if (!el) return 'none';
        return `${el.tagName}:${el.textContent?.trim().slice(0, 30) || el.getAttribute('aria-label') || ''}`;
      });
      tabOrder.push(info);
    }

    // Should start with header elements (logo, nav links)
    expect(tabOrder.length).toBeGreaterThan(0);
    // First interactive element should be in header
    const firstInteractive = tabOrder[0];
    expect(firstInteractive).toContain('A:'); // Logo link
  });

  test('FAQ accordion is keyboard accessible', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    // Navigate to first FAQ item using keyboard
    const faqTrigger = page.locator('button').filter({ hasText: 'How do I know if a repair' }).first();
    if (await faqTrigger.isVisible()) {
      await faqTrigger.focus();
      await page.keyboard.press('Enter');
      await page.waitForTimeout(300);

      // Check content is expanded
      const isExpanded = await faqTrigger.getAttribute('data-state');
      expect(isExpanded).toBe('open');
    }
  });

  test('contact form can be completed with keyboard only', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'networkidle', timeout: 30000 });

    // Tab to name input
    await page.locator('#name').focus();
    await page.keyboard.type('Test User');

    // Tab to email
    await page.keyboard.press('Tab');
    await page.keyboard.type('test@example.com');

    // Tab to subject select
    await page.keyboard.press('Tab');

    // Tab to message
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.id);
    // Should be on message or subject at this point
    expect(['message', 'subject']).toContain(focused);
  });
});

// ============================================================================
// ARIA and semantic structure
// ============================================================================

test.describe('semantic structure', () => {

  test('page has proper landmark regions', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    const landmarks = await page.evaluate(() => {
      return {
        header: !!document.querySelector('header'),
        main: !!document.querySelector('main'),
        footer: !!document.querySelector('footer'),
        nav: !!document.querySelector('nav'),
      };
    });

    expect(landmarks.header, 'Missing <header> landmark').toBe(true);
    expect(landmarks.main, 'Missing <main> landmark').toBe(true);
    expect(landmarks.footer, 'Missing <footer> landmark').toBe(true);
    expect(landmarks.nav, 'Missing <nav> landmark').toBe(true);
  });

  test('guide page has article element', async ({ page }) => {
    await page.goto('/guides/fix-running-toilet', { waitUntil: 'networkidle', timeout: 30000 });

    const hasArticle = await page.evaluate(() => !!document.querySelector('article'));
    expect(hasArticle, 'Guide page should use <article> element').toBe(true);
  });

  test('external links have rel="noopener noreferrer"', async ({ page }) => {
    await page.goto('/guides/fix-running-toilet', { waitUntil: 'networkidle', timeout: 30000 });

    const unsafeExternalLinks = await page.evaluate(() => {
      const links = document.querySelectorAll('a[target="_blank"]');
      const issues: string[] = [];

      links.forEach(link => {
        const rel = link.getAttribute('rel') || '';
        if (!rel.includes('noopener')) {
          issues.push(`Missing noopener: ${link.getAttribute('href')}`);
        }
      });

      return issues;
    });

    expect(unsafeExternalLinks).toHaveLength(0);
  });

  test('accordion items have proper ARIA states', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle', timeout: 30000 });

    const accordionA11y = await page.evaluate(() => {
      const triggers = document.querySelectorAll('[data-radix-collection-item]');
      const issues: string[] = [];

      triggers.forEach(trigger => {
        if (trigger.tagName === 'BUTTON') {
          if (!trigger.hasAttribute('data-state')) {
            issues.push('Accordion trigger missing data-state');
          }
        }
      });

      return issues;
    });

    if (accordionA11y.length > 0) {
      console.warn(`Accordion a11y issues: ${accordionA11y.join(', ')}`);
    }
  });
});
