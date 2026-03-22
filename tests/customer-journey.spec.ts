import { test, expect } from '@playwright/test';

test.describe('Customer Journeys', () => {
  test('Journey 1: Homepage -> Categories -> Category -> Guide -> Affiliate Product', async ({ page }) => {
    // Start at homepage
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();

    // Click on a category from the homepage
    const plumbingLink = page.locator('a[href="/categories/plumbing"]').first();
    await plumbingLink.click();
    await expect(page).toHaveURL('/categories/plumbing');
    await expect(page.locator('h1')).toContainText('Plumbing');

    // Click on a guide
    const guideLink = page.locator('a[href^="/guides/"]').first();
    const guideHref = await guideLink.getAttribute('href');
    await guideLink.click();
    await expect(page).toHaveURL(guideHref!);

    // Verify guide content loads
    await expect(page.locator('h1')).toBeVisible();

    // Check for recommended products section
    const productsSection = page.locator('text=Recommended Products');
    if (await productsSection.isVisible()) {
      // Affiliate product link should exist
      const affiliateLink = page.locator('a[target="_blank"][rel*="sponsored"]').first();
      await expect(affiliateLink).toBeVisible();
    }
  });

  test('Journey 2: Homepage -> Browse Guides -> Guide -> Share Button', async ({ page }) => {
    await page.goto('/');

    // Click "Browse Guides" CTA
    const browseBtn = page.locator('a[href="/guides"]', { hasText: 'Browse Guides' }).first();
    await browseBtn.click();
    await expect(page).toHaveURL('/guides');

    // Click first guide
    const guideLink = page.locator('a[href^="/guides/"]').first();
    await guideLink.click();
    await expect(page).toHaveURL(/\/guides\/.+/);

    // Check for Share button
    const shareBtn = page.locator('button', { hasText: /Share/i });
    if (await shareBtn.isVisible()) {
      await shareBtn.click();
      // Should trigger share action (or show share UI)
      await page.waitForTimeout(500);
    }
  });

  test('Journey 3: Homepage -> Subscribe to Newsletter -> Confirmation', async ({ page }) => {
    await page.goto('/');

    // Scroll to newsletter section
    const newsletter = page.locator('#newsletter');
    await newsletter.scrollIntoViewIfNeeded();

    // Fill in email
    const emailInput = newsletter.locator('input[type="email"]');
    await emailInput.fill('journey3@example.com');

    // Submit
    const submitBtn = newsletter.locator('button[type="submit"]');
    await submitBtn.click();

    // Should see success feedback
    const success = page.locator('text=/subscribed|inbox|checklist/i').first();
    await expect(success).toBeVisible({ timeout: 5000 });
  });

  test('Journey 4: Guide Page -> Table of Contents -> Navigate Steps -> Complete', async ({ page }) => {
    await page.goto('/guides/fix-running-toilet');

    // Table of contents should be visible
    const toc = page.locator('text=In This Guide');
    await expect(toc).toBeVisible();

    // Click on "What You'll Need" in ToC
    const toolsLink = page.locator('a[href="#tools-materials"]');
    await expect(toolsLink).toBeVisible();
    await toolsLink.click();

    // The tools-materials section should now be in view
    const toolsSection = page.locator('#tools-materials');
    await expect(toolsSection).toBeInViewport();

    // Navigate to a step
    const stepLink = page.locator('a[href="#step-1"]');
    if (await stepLink.isVisible()) {
      await stepLink.click();
      const stepSection = page.locator('#step-1');
      await expect(stepSection).toBeInViewport();
    }

    // Navigate to Tips & Warnings
    const tipsLink = page.locator('a[href="#tips-warnings"]');
    await expect(tipsLink).toBeVisible();
    await tipsLink.click();
    const tipsSection = page.locator('#tips-warnings');
    await expect(tipsSection).toBeInViewport();
  });

  test('Journey 5: Category -> Guides -> Select Beginner Guide -> Read Through', async ({ page }) => {
    await page.goto('/categories/plumbing');

    // Should see guides
    const guideCards = page.locator('a[href^="/guides/"]');
    const count = await guideCards.count();
    expect(count).toBeGreaterThan(0);

    // Find a guide with "Beginner" badge
    const beginnerBadge = page.locator('a[href^="/guides/"]').filter({
      has: page.locator('text=/Beginner/i'),
    }).first();

    if (await beginnerBadge.isVisible()) {
      await beginnerBadge.click();
    } else {
      // Just click first guide
      await guideCards.first().click();
    }

    await expect(page).toHaveURL(/\/guides\/.+/);

    // Read through - verify all major sections
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('#tools-materials')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Step-by-Step Instructions' })).toBeVisible();
    await expect(page.locator('#tips-warnings')).toBeVisible();
  });
});
