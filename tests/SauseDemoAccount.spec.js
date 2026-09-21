import {test,expect} from '@playwright/test';

test('account Page',async ({page})=>{
    await page.goto("https://sauce-demo.myshopify.com/");
})