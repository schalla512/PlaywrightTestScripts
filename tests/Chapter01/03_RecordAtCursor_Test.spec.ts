//Import playwright module
import {test, expect} from '@playwright/test'

//Write a test
test('Record at cursor test',async({page})=>{
  await page.goto('https://duckduckgo.com/');
  await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).click();
  await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('playwright by testers tatlk');
  await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).click();
  await expect(page.getByLabel('#1 Playwright Tutorial Full').locator('#video-title')).toContainText('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial');
  await expect(page.getByLabel('#2 Playwright API Testing').locator('#video-title')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');
  await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
  await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full Course 2025'})).toBeVisible();
  await expect(page.getByRole('link', { name: '#2 Playwright API Testing Tutorial Crash Course 2024' })).toBeVisible();
})


//Go to url


// Serach with keywords

//click on playlist

//validate web page title