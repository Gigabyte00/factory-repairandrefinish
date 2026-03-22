import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads with correct title containing "Repair & Refinish"', async ({ page }) => {
    await expect(page).toHaveTitle(/Repair\s*&\s*Refinish/);
  });

  test('hero section visible with main heading', async ({ page }) => {
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Fix It Right');
    await expect(heading).toContainText('Make It Beautiful');
  });

  test('CTA buttons present and clickable', async ({ page }) => {
    const browseGuidesBtn = page.locator('a[href="/guides"]', { hasText: 'Browse Guides' }).first();
    await expect(browseGuidesBtn).toBeVisible();

    const freeChecklistBtn = page.locator('a[href="#newsletter"]', { hasText: 'Get Free Toolkit Checklist' });
    await expect(freeChecklistBtn).toBeVisible();

    // Test click navigates properly
    await browseGuidesBtn.click();
    await expect(page).toHaveURL('/guides');
  });

  test('categories grid shows 10 categories', async ({ page }) => {
    const section = page.locator('section', { hasText: 'Browse by Category' });
    await expect(section).toBeVisible();

    const categoryCards = section.locator('a[href^="/categories/"]');
    await expect(categoryCards).toHaveCount(10);
  });

  test('each category card links to correct URL', async ({ page }) => {
    const expectedSlugs = [
      'plumbing', 'electrical', 'painting-walls', 'flooring',
      'kitchen-bath', 'doors-windows', 'hvac-climate',
      'outdoor-landscaping', 'appliance-repair', 'furniture-decor',
    ];

    for (const slug of expectedSlugs) {
      const link = page.locator(`a[href="/categories/${slug}"]`).first();
      await expect(link).toBeVisible();
    }
  });

  test('featured guides section shows guide cards', async ({ page }) => {
    const section = page.locator('section', { hasText: 'Latest Guides' });
    await expect(section).toBeVisible();

    const guideCards = section.locator('a[href^="/guides/"]');
    const count = await guideCards.count();
    expect(count).toBe(3);
  });

  test('newsletter form present and accepts email', async ({ page }) => {
    const newsletterSection = page.locator('#newsletter');
    await expect(newsletterSection).toBeVisible();

    const emailInput = newsletterSection.locator('input[type="email"]');
    await expect(emailInput).toBeVisible();

    const submitBtn = newsletterSection.locator('button[type="submit"]');
    await expect(submitBtn).toBeVisible();

    // Fill in email and submit
    await emailInput.fill('test@example.com');
    await submitBtn.click();

    // Should show success toast
    const toast = page.locator('[data-sonner-toast], [role="status"], [data-state="open"]').first();
    await expect(toast).toBeVisible({ timeout: 5000 });
  });

  test('FAQ section present with accordion items', async ({ page }) => {
    const faqSection = page.locator('section', { hasText: 'Frequently Asked Questions' });
    await expect(faqSection).toBeVisible();

    // Should have accordion triggers (questions)
    const questions = faqSection.locator('[data-state]');
    const count = await questions.count();
    expect(count).toBeGreaterThan(0);
  });

  test('footer visible with expected links', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Check key footer links
    await expect(footer.locator('a[href="/contact"]')).toBeVisible();
    await expect(footer.locator('a[href="/privacy"]')).toBeVisible();
    await expect(footer.locator('a[href="/terms"]')).toBeVisible();
  });

  test('navigation header present with logo and menu items', async ({ page }) => {
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Logo
    const logo = header.locator('a[href="/"]').first();
    await expect(logo).toBeVisible();
    await expect(logo).toContainText('Repair & Refinish');

    // Nav links (desktop)
    await expect(header.locator('a[href="/guides"]').first()).toBeVisible();
    await expect(header.locator('a[href="/about"]').first()).toBeVisible();
  });

  test('take homepage screenshot', async ({ page }) => {
    await page.screenshot({
      path: 'tests/screenshots/homepage.png',
      fullPage: true,
    });
  });
});
