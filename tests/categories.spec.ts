import { test, expect } from '@playwright/test';

test.describe('Categories Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/categories');
  });

  test('page loads with all 10 categories', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Guide Categories');

    // Scope to the main content grid to exclude header/footer category links
    const mainSection = page.locator('main');
    const categoryCards = mainSection.locator('a[href^="/categories/"]');
    await expect(categoryCards).toHaveCount(10);
  });

  test('each category card is clickable', async ({ page }) => {
    const firstCard = page.locator('a[href^="/categories/"]').first();
    const href = await firstCard.getAttribute('href');
    expect(href).toBeTruthy();

    await firstCard.click();
    await expect(page).toHaveURL(new RegExp(`/categories/.+`));
  });

  test('take categories page screenshot', async ({ page }) => {
    await page.screenshot({
      path: 'tests/screenshots/categories-page.png',
      fullPage: true,
    });
  });
});

test.describe('Individual Category Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/categories/plumbing');
  });

  test('shows category name and description', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Plumbing');

    // Description text
    const description = page.locator('text=/faucets|drains|toilets/i').first();
    await expect(description).toBeVisible();
  });

  test('shows filtered guides for that category', async ({ page }) => {
    const guideCards = page.locator('a[href^="/guides/"]');
    const count = await guideCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('breadcrumbs present', async ({ page }) => {
    // Should have breadcrumb with link to /categories
    const categoriesLink = page.locator('a[href="/categories"]');
    await expect(categoriesLink.first()).toBeVisible();
  });

  test('shows guide count', async ({ page }) => {
    const guidesAvailable = page.locator('text=/\\d+ Guides? Available/');
    await expect(guidesAvailable).toBeVisible();
  });
});
