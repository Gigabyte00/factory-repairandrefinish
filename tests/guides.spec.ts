import { test, expect } from '@playwright/test';

test.describe('Guides Listing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/guides');
  });

  test('page loads with title', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Guides');
  });

  test('guide cards are visible', async ({ page }) => {
    const guideCards = page.locator('a[href^="/guides/"]');
    const count = await guideCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('can filter guides by category using dropdown', async ({ page }) => {
    // Get initial count
    const showingText = page.locator('text=/Showing \\d+ guide/');
    await expect(showingText).toBeVisible();

    // Select a category from the dropdown
    const categorySelect = page.locator('select').first();
    await categorySelect.selectOption('plumbing');

    // Wait for filter to apply
    await page.waitForTimeout(500);

    // Verify filtered results
    const filteredText = page.locator('text=/Showing \\d+ guide/');
    await expect(filteredText).toBeVisible();
  });

  test('can filter guides by difficulty', async ({ page }) => {
    // Click on "Beginner" difficulty button
    const beginnerBtn = page.locator('button', { hasText: 'Beginner' });
    await expect(beginnerBtn).toBeVisible();
    await beginnerBtn.click();

    // Wait for filter to apply
    await page.waitForTimeout(500);

    // Verify filtered results still showing
    const showingText = page.locator('text=/Showing \\d+ guide/');
    await expect(showingText).toBeVisible();
  });

  test('clicking a guide card navigates to guide detail page', async ({ page }) => {
    const firstGuide = page.locator('a[href^="/guides/"]').first();
    const href = await firstGuide.getAttribute('href');
    expect(href).toBeTruthy();

    await firstGuide.click();
    await expect(page).toHaveURL(new RegExp(`/guides/.+`));
  });

  test('search filters guides', async ({ page }) => {
    // There are two search inputs - one in header, one in the filters section.
    // Target the one inside the main content area.
    const searchInput = page.locator('main input[placeholder="Search guides..."]');
    await expect(searchInput).toBeVisible();

    await searchInput.fill('toilet');
    await page.waitForTimeout(500);

    const showingText = page.locator('text=/Showing \\d+ guide/');
    await expect(showingText).toBeVisible();
  });
});

test.describe('Individual Guide Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/guides/fix-running-toilet');
  });

  test('page loads with title, category badge, and difficulty badge', async ({ page }) => {
    const title = page.locator('h1');
    await expect(title).toBeVisible();
    await expect(title).toContainText('Running Toilet');

    // Category badge
    const categoryBadge = page.locator('a[href^="/categories/"] >> text=Plumbing').first();
    await expect(categoryBadge).toBeVisible();

    // Difficulty badge
    const difficultyBadge = page.locator('text=/Beginner|Intermediate|Advanced/').first();
    await expect(difficultyBadge).toBeVisible();
  });

  test('"What You\'ll Need" section with tools and materials', async ({ page }) => {
    const section = page.locator('#tools-materials');
    await expect(section).toBeVisible();

    // Tools card
    const toolsCard = section.locator('text=Tools').first();
    await expect(toolsCard).toBeVisible();

    // Materials card
    const materialsCard = section.locator('text=Materials').first();
    await expect(materialsCard).toBeVisible();
  });

  test('step-by-step content with numbered steps', async ({ page }) => {
    const stepsHeading = page.getByRole('heading', { name: 'Step-by-Step Instructions' });
    await expect(stepsHeading).toBeVisible();

    // Check for step elements
    const steps = page.locator('[data-step]');
    const count = await steps.count();
    expect(count).toBeGreaterThan(0);
  });

  test('affiliate product cards present', async ({ page }) => {
    const productsSection = page.locator('section', { hasText: 'Recommended Products' });
    // The section may or may not exist based on whether the guide has products
    // For fix-running-toilet, we expect products
    await expect(productsSection).toBeVisible();
  });

  test('affiliate links have rel="noopener noreferrer sponsored"', async ({ page }) => {
    // Find affiliate product links specifically (scoped to rel containing "sponsored")
    const affiliateLinks = page.locator('a[target="_blank"][rel*="sponsored"]');
    const count = await affiliateLinks.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const rel = await affiliateLinks.nth(i).getAttribute('rel');
      expect(rel).toContain('noopener');
      expect(rel).toContain('sponsored');
    }
  });

  test('FAQ section present on guide page', async ({ page }) => {
    const faqSection = page.locator('#faq');
    await expect(faqSection).toBeVisible();

    const questions = faqSection.locator('[data-state]');
    const count = await questions.count();
    expect(count).toBeGreaterThan(0);
  });

  test('related guides section present', async ({ page }) => {
    const relatedSection = page.locator('text=Related Guides');
    await expect(relatedSection).toBeVisible();

    const relatedCards = page.locator('section', { hasText: 'Related Guides' }).locator('a[href^="/guides/"]');
    const count = await relatedCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('breadcrumbs show correct hierarchy', async ({ page }) => {
    // Breadcrumbs should show: Home > Guides > [Category] > [Title]
    const breadcrumbs = page.locator('nav[aria-label="Breadcrumb"], nav:has(a[href="/guides"])').first();
    await expect(breadcrumbs).toBeVisible();

    // Should have a link to /guides
    await expect(breadcrumbs.locator('a[href="/guides"]')).toBeVisible();
  });

  test('table of contents present', async ({ page }) => {
    const toc = page.locator('text=In This Guide');
    await expect(toc).toBeVisible();
  });

  test('take guide page screenshot', async ({ page }) => {
    await page.screenshot({
      path: 'tests/screenshots/guide-page.png',
      fullPage: true,
    });
  });
});
