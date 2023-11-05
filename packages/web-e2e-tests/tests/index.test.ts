import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const title = page.getByRole('link', { name: /vercel/i });

  await expect(title).toBeVisible();
});
