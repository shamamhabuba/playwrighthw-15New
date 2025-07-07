import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    const path = require('path');
    //const filePath = `file://${path.resolve('resourse/dummy-order.html')}`;
    const filePath = `file://${path.resolve('html/button.html')}`;
    await page.goto(filePath);
})
//we pass page which is already pass local html opened
test('ok popup ', async ({ page }) => {

    // no action required
    // just verify element
    await page.getByTestId('username').fill('random-name')
    await page.getByTestId('email').fill('shama@mhabuba.ee')
    //await page.getByTestId('username').fill('random-name')
    await page.getByTestId('submit-order').click()



});