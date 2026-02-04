import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).click();
  await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');
  await page.getByTestId('ai-toggle-integrated').getByRole('button', { name: 'Search' }).click();
  await page.locator('label').first().click();
  await page.getByLabel('playwright by testers talk').locator('div').filter({ hasText: /^playwright by testers talk$/ }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).click();
  await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
});