import { test, expect } from '@playwright/test';

test.describe('Spend Less app', () => {
  test('shows the auth or setup screen', async ({ page }) => {
    await page.goto('/');

    const setupPrompt = page.getByTestId('clerk-setup-prompt');
    const authScreen = page.getByTestId('auth-screen');
    const signedInScreen = page.getByTestId('signed-in-screen');

    await expect(setupPrompt.or(authScreen).or(signedInScreen)).toBeVisible();
  });
});
