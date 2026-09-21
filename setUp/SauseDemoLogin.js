import { BaseUrl } from "../config/config";

export class SauseDemoLogin{

    constructor(page){
        this.page=page;
        this.userName=page.locator("#customer_email");
        this.password=page.locator("#customer_password");
        this.signIN=page.locator("input[value='Sign In']");
    }

    async login(usercode,passcode){
        await this.page.goto(BaseUrl);
        await this.userName.fill(usercode);
        await this.password.fill(passcode);
        await this.signIN.click();
    }
}