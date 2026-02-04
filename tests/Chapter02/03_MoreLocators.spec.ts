//Import playwright module
import { test, expect } from "@playwright/test";

//Write a test
test("Lccators in playwright", async ({ page }) => {


    await page.goto("https://www.google.com");

    // await page.locator('input[name="search_query"]').fill('testers talk')

await page.getByTitle('Search').fill('playwright by testers talk')


await page.getByTitle('Search').press('Enter')

  //getByAltText
  // await page.getByAltText("View BakkappaN's full-sized avatar").click()
//   await page.getByTestId("stars").first().click();
//   //getByTestId
//   await page.getByTestId("projects").first().click();

//   await page.getByTestId("repositories").first().click();

//   await page.getByTestId("packages").first().click();

//   await page.getByText("Sign up").click().then(()=>{
//         page.getByPlaceholder('Email').fill('test')
//   })

  


   await page.waitForTimeout(5000)
});
