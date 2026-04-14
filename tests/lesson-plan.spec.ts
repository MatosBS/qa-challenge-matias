import { test, expect } from '@playwright/test';

test('page loads and shows the lesson plan generator', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Lesson Plan Generator' })).toBeVisible();
  await expect(page.getByPlaceholder(/Enter a lesson plan topic/)).toBeVisible();
});
