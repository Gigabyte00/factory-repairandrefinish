import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('form loads with all fields', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toContainText('Get in Touch');

    // Name field
    const nameInput = page.locator('#name');
    await expect(nameInput).toBeVisible();

    // Email field
    const emailInput = page.locator('#email');
    await expect(emailInput).toBeVisible();

    // Subject select
    const subjectSelect = page.locator('#subject');
    await expect(subjectSelect).toBeVisible();

    // Message textarea
    const messageTextarea = page.locator('#message');
    await expect(messageTextarea).toBeVisible();

    // Submit button - scope to the contact form specifically
    const submitBtn = page.getByRole('button', { name: 'Send Message' });
    await expect(submitBtn).toBeVisible();
  });

  test('form validates: submitting empty shows errors', async ({ page }) => {
    const submitBtn = page.getByRole('button', { name: 'Send Message' });
    await submitBtn.click();

    // Should show validation errors
    const nameError = page.locator('text=Name is required');
    await expect(nameError).toBeVisible();

    const emailError = page.locator('text=Email is required');
    await expect(emailError).toBeVisible();

    const subjectError = page.locator('text=Please select a subject');
    await expect(subjectError).toBeVisible();

    const messageError = page.locator('text=Message is required');
    await expect(messageError).toBeVisible();
  });

  test('form validates: invalid email shows error', async ({ page }) => {
    const nameInput = page.locator('#name');
    await nameInput.fill('Test User');

    // Use an email that passes HTML5 type="email" validation but fails the
    // custom regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/ (no TLD after the dot).
    // "user@domain" passes browser validation but the custom regex requires a dot in the domain part.
    const emailInput = page.locator('#email');
    await emailInput.fill('user@domain');

    const subjectSelect = page.locator('#subject');
    await subjectSelect.selectOption('General Question');

    const messageTextarea = page.locator('#message');
    await messageTextarea.fill('This is a test message for validation.');

    const submitBtn = page.getByRole('button', { name: 'Send Message' });
    await submitBtn.click();

    const emailError = page.locator('text=Please enter a valid email address');
    await expect(emailError).toBeVisible();
  });

  test('successful form submission shows success message', async ({ page }) => {
    const nameInput = page.locator('#name');
    await nameInput.fill('John Smith');

    const emailInput = page.locator('#email');
    await emailInput.fill('john@example.com');

    const subjectSelect = page.locator('#subject');
    await subjectSelect.selectOption('General Question');

    const messageTextarea = page.locator('#message');
    await messageTextarea.fill('This is a test message for the contact form.');

    const submitBtn = page.getByRole('button', { name: 'Send Message' });
    await submitBtn.click();

    // Should show success toast
    const toast = page.locator('text=/Message sent|Thanks for reaching out/').first();
    await expect(toast).toBeVisible({ timeout: 5000 });
  });
});
