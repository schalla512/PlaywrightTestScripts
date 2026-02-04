//Import playwright module
import {test, expect} from '@playwright/test'

//Write a test
test('My first playwright Typescrip test',async({page})=>{
  await page.goto('https://duckduckgo.com/');
  await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).click();
  await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('playwright by testers tatlk');
  await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).click();
  await expect(page).toHaveTitle('Playwright by Testers alk ✅ - YouTube')
})


//Go to url


// Serach with keywords

//click on playlist

//validate web page title