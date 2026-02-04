import{test, expect} from '@playwright/test'

test('Capture screenshots in playwright',async({page})=>{
await page.goto('https://www.youtube.com/@testerstalk')

//Element screenshot
await page.locator('#page-header-container').screenshot({path: './screenshots/ElementScreenshot.png'})

//Page screenshot
await page.screenshot({path: './screenshots/PageScreenshot.png'})

//Full page screenshot
await page.screenshot({path: './screenshots/fullpage.png',fullPage:true})



})