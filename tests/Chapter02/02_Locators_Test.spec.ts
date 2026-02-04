//Import playwright module
import { test, expect } from "@playwright/test";

//Write a test
test("Lccators in playwright", async ({ page }) => {

    let stepCounter = 0;

    const takeScreenshot = async (stepName: string) =>{
        stepCounter++;
        await page.screenshot({
            path : './screenshots/steps${stepCounter}'
        })


    }
  await page.goto("https://github.com/BakkappaN");


  

  //getByRole

  //   await page.getByRole('link',{name: 'Sign in'}).click()

  //getByLabel
  // await page.getByLabel('Homepage',{exact:true}).first().click()

  //getByAltText
  // await page.getByAltText("View BakkappaN's full-sized avatar").click()
  await page.getByTestId("stars").first().click();
  //getByTestId
  await page.getByTestId("projects").first().click();

  await page.getByTestId("repositories").first().click();

  await page.getByTestId("packages").first().click();

  await page.getByText("Sign up").click().then(()=>{
        page.getByPlaceholder('Email').fill('test')
  })

  


   await page.waitForTimeout(5000)
});
