import { test, expect } from '@playwright/test';

test.describe('SEO', () => {
  test('homepage has proper meta title and description', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Repair\s*&\s*Refinish/);

    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /.+/);
    const descContent = await description.getAttribute('content');
    expect(descContent!.length).toBeGreaterThan(50);
  });

  test('guide pages have unique meta titles', async ({ page }) => {
    await page.goto('/guides/fix-running-toilet');

    const title = await page.title();
    expect(title).toContain('Toilet');
    expect(title).toContain('Repair & Refinish');
  });

  test('JSON-LD structured data present on guide pages (HowTo)', async ({ page }) => {
    await page.goto('/guides/fix-running-toilet');

    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThan(0);

    // Parse first JSON-LD and check type
    const firstJsonLd = await jsonLd.first().textContent();
    expect(firstJsonLd).toBeTruthy();
    const parsed = JSON.parse(firstJsonLd!);
    expect(parsed['@type']).toBe('HowTo');
    expect(parsed['@context']).toBe('https://schema.org');
    expect(parsed.name).toBeTruthy();
    expect(parsed.step).toBeTruthy();
    expect(parsed.step.length).toBeGreaterThan(0);
  });

  test('OG meta tags present on homepage', async ({ page }) => {
    await page.goto('/');

    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /.+/);

    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute('content', /.+/);

    const ogType = page.locator('meta[property="og:type"]');
    await expect(ogType).toHaveAttribute('content', 'website');
  });

  test('OG meta tags present on guide pages', async ({ page }) => {
    await page.goto('/guides/fix-running-toilet');

    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /.+/);

    const ogType = page.locator('meta[property="og:type"]');
    await expect(ogType).toHaveAttribute('content', 'article');
  });

  test('sitemap accessible at /sitemap.xml', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);

    const contentType = response?.headers()['content-type'];
    expect(contentType).toContain('xml');
  });

  test('robots.txt accessible at /robots.txt', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);

    const body = await page.locator('body').textContent();
    expect(body).toContain('User-Agent');
  });

  test('all pages have proper heading hierarchy (one h1 per page)', async ({ page }) => {
    const pagesToCheck = ['/', '/guides', '/categories', '/about', '/contact', '/privacy', '/terms'];

    for (const url of pagesToCheck) {
      await page.goto(url);
      const h1Elements = page.locator('h1');
      const count = await h1Elements.count();
      expect(count, `Page ${url} should have exactly 1 h1, found ${count}`).toBe(1);
    }
  });
});
