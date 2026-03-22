import { test, expect } from '@playwright/test';

test.describe('Mobile Responsiveness', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('homepage renders correctly at mobile viewport', async ({ page }) => {
    await page.goto('/');

    // Hero heading visible
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    // No horizontal scrollbar - check body width
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // +1 for rounding

    await page.screenshot({
      path: 'tests/screenshots/homepage-mobile.png',
      fullPage: false,
    });
  });

  test('mobile menu hamburger visible and functional', async ({ page }) => {
    await page.goto('/');

    const menuToggle = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuToggle).toBeVisible();

    // Desktop nav should be hidden
    const desktopNav = page.locator('nav.hidden.lg\\:flex');
    // On mobile, the desktop nav should not be visible
    // (it has class hidden lg:flex, so at 375px it should be hidden)
    await expect(desktopNav).toBeHidden();

    // Open mobile menu
    await menuToggle.click();
    await page.waitForTimeout(500);

    // Mobile nav links should appear
    const guidesLink = page.locator('a:visible', { hasText: 'Guides' }).first();
    await expect(guidesLink).toBeVisible();
  });

  test('guide page readable on mobile (no horizontal scroll)', async ({ page }) => {
    await page.goto('/guides/fix-running-toilet');

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);

    // Content is visible
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
  });

  test('category grid adjusts on mobile', async ({ page }) => {
    await page.goto('/categories');

    // Verify page loads properly
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    // Cards should stack on mobile (single column)
    const firstCard = page.locator('a[href^="/categories/"]').first();
    await expect(firstCard).toBeVisible();

    // Check that cards are full width on mobile
    const cardBox = await firstCard.boundingBox();
    expect(cardBox).toBeTruthy();
    // On mobile (375px), with padding, card should be nearly full width
    expect(cardBox!.width).toBeGreaterThan(300);
  });

  test('email capture forms usable on mobile', async ({ page }) => {
    await page.goto('/');

    // Scroll to newsletter section
    const newsletter = page.locator('#newsletter');
    await newsletter.scrollIntoViewIfNeeded();

    const emailInput = newsletter.locator('input[type="email"]');
    await expect(emailInput).toBeVisible();

    // Should be able to type in the input
    await emailInput.fill('mobile@test.com');
    const value = await emailInput.inputValue();
    expect(value).toBe('mobile@test.com');
  });

  test('footer stacks on mobile', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();

    // Footer should be visible and not horizontally overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });
});
