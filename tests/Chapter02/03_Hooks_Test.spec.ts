import { afterEach, beforeEach } from 'node:test'
import {test, expect} from 'playwright/test'



test.beforeAll('before all tests runs', async()=> {
console.log('Before all')
})



test('test1', async({page}
)=>{
    console.log("In test1")

})


test('test2', async({page})=>{
      console.log("In test2")
})


test.afterAll('after all tests', async()=> {
console.log('After all tests')
})

test.beforeEach('before each test', async({page})=> {
console.log('Before each tests')
await page.goto('https://www.google.com')
})

test.afterEach('after each test', async()=> {
console.log('After each tests')
})


beforeEach

afterEach