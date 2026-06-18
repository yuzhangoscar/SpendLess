import { test, expect } from '@playwright/test';

test.describe('Spend Less app', () => {
  test('shows the welcome screen', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('welcome-text')).toBeVisible();
    await expect(page.getByTestId('welcome-text')).toContainText('Welcome to Spend Less');
  });
});
