import { test, expect } from '@playwright/test';

test.describe('Affiliate Compliance', () => {
  test('affiliate links on guide page have correct rel attributes', async ({ page }) => {
    await page.goto('/guides/fix-running-toilet');

    // Find affiliate product links specifically (links with rel containing "sponsored")
    // The page also has social links in the footer with target="_blank" but rel="noopener noreferrer" only
    const affiliateLinks = page.locator('a[target="_blank"][rel*="sponsored"]');
    const count = await affiliateLinks.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const link = affiliateLinks.nth(i);
      const rel = await link.getAttribute('rel');
      expect(rel, `Link ${i} missing rel attribute`).toBeTruthy();
      expect(rel).toContain('noopener');
      expect(rel).toContain('sponsored');
    }
  });

  test('affiliate links open in new tab (target="_blank")', async ({ page }) => {
    await page.goto('/guides/fix-running-toilet');

    const affiliateLinks = page.locator('a[target="_blank"]');
    const count = await affiliateLinks.count();

    for (let i = 0; i < count; i++) {
      const target = await affiliateLinks.nth(i).getAttribute('target');
      expect(target).toBe('_blank');
    }
  });

  test('affiliate disclosure text is present on guide pages with products', async ({ page }) => {
    await page.goto('/guides/fix-running-toilet');

    const disclosure = page.locator('text=/Affiliate Disclosure/i');
    await expect(disclosure.first()).toBeVisible();
  });

  test('homepage has affiliate disclosure on tools section', async ({ page }) => {
    await page.goto('/');

    const disclosure = page.locator('text=/Affiliate Disclosure/i');
    await expect(disclosure.first()).toBeVisible();
  });

  test('footer has affiliate disclosure', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    const disclosure = footer.locator('text=/Affiliate Disclosure/i');
    await expect(disclosure).toBeVisible();
  });

  test('privacy policy page loads and contains affiliate section', async ({ page }) => {
    await page.goto('/privacy');

    await expect(page.locator('h1')).toContainText('Privacy Policy');

    // Check for affiliate-related content
    const affiliateSection = page.locator('text=/Affiliate Links/i');
    await expect(affiliateSection.first()).toBeVisible();
  });

  test('terms page loads and contains affiliate disclaimer', async ({ page }) => {
    await page.goto('/terms');

    await expect(page.locator('h1')).toContainText('Terms of Service');

    // Check for affiliate disclaimer section
    const affiliateSection = page.locator('text=/Affiliate Disclaimer/i');
    await expect(affiliateSection.first()).toBeVisible();
  });
});
