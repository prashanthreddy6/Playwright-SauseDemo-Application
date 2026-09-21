import { chromium } from "@playwright/test";
import {userDetails } from "../config/config.js";
import {SauseDemoLogin} from '../setUp/SauseDemoLogin.js';

export default async function globalSetUp() {

    const browser=await chromium.launch();
    const page=await browser.newPage();

    const sauseDemo=new SauseDemoLogin(page);

    await sauseDemo.login(userDetails.userName,userDetails.password);

    await page.context().storageState({path:'playwright/.auth/user.json'});

    await page.waitForLoadState('load');

    await browser.close();

}
