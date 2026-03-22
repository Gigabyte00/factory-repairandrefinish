import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('header navigation links work - Guides', async ({ page }) => {
    await page.goto('/');
    await page.locator('header a[href="/guides"]').first().click();
    await expect(page).toHaveURL('/guides');
    await expect(page.locator('h1')).toContainText('Guides');
  });

  test('header navigation links work - About', async ({ page }) => {
    await page.goto('/');
    await page.locator('header a[href="/about"]').first().click();
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('logo links to homepage', async ({ page }) => {
    await page.goto('/guides');
    const logo = page.locator('header a[href="/"]').first();
    await logo.click();
    await expect(page).toHaveURL('/');
  });

  test('mobile menu opens and closes', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    // Hamburger button should be visible
    const menuToggle = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuToggle).toBeVisible();

    // Open mobile menu
    await menuToggle.click();

    // Mobile menu panel slides in from right - it's a fixed panel outside the main nav
    // Wait for animation to complete
    await page.waitForTimeout(600);

    // The mobile menu items are rendered in a separate panel, look for visible links with mobile menu text
    const mobileGuidesLink = page.locator('a[href="/guides"]:visible').first();
    await expect(mobileGuidesLink).toBeVisible();

    const mobileAboutLink = page.locator('a[href="/about"]:visible').first();
    await expect(mobileAboutLink).toBeVisible();

    // Close the menu
    await menuToggle.click();
    await page.waitForTimeout(500);
  });

  test('breadcrumbs on guide pages navigate correctly', async ({ page }) => {
    await page.goto('/guides/fix-running-toilet');

    // Click Guides breadcrumb
    const guidesBreadcrumb = page.locator('a[href="/guides"]').first();
    await expect(guidesBreadcrumb).toBeVisible();
    await guidesBreadcrumb.click();
    await expect(page).toHaveURL('/guides');
  });

  test('footer links work', async ({ page }) => {
    await page.goto('/');

    // Contact link in footer
    const contactLink = page.locator('footer a[href="/contact"]');
    await expect(contactLink).toBeVisible();
    await contactLink.click();
    await expect(page).toHaveURL('/contact');
  });

  test('404 page shows for non-existent URL', async ({ page }) => {
    const response = await page.goto('/this-does-not-exist');

    // Page should render 404 content
    const heading = page.locator('h1');
    await expect(heading).toContainText('Page Not Found');

    // 404 indicator
    const fourOhFour = page.locator('text=404');
    await expect(fourOhFour).toBeVisible();
  });

  test('404 page has search bar and navigation options', async ({ page }) => {
    await page.goto('/this-does-not-exist');

    // Search input
    const searchInput = page.locator('input[name="q"]');
    await expect(searchInput).toBeVisible();

    // Navigation buttons
    const homeBtn = page.locator('a[href="/"]', { hasText: 'Go Home' });
    await expect(homeBtn).toBeVisible();

    const guidesBtn = page.locator('a[href="/guides"]', { hasText: 'Browse Guides' });
    await expect(guidesBtn).toBeVisible();

    // Popular guides
    const popularGuides = page.locator('text=Popular Guides');
    await expect(popularGuides).toBeVisible();
  });
});
