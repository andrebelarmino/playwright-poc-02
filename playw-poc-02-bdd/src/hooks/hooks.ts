import { Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep, Status } from "@cucumber/cucumber";
import { Page, Browser, chromium, BrowserContext } from "playwright";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";


let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    //browser = await chromium.launch({ headless: false });
    getEnv();
    browser = await invokeBrowser();
});


Before(async function () {
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;

});

AfterStep(async function ({ pickle, result }) {
    const img = await pageFixture.page.screenshot({ path: "./test-results/screenshots/" + pickle.name, type: "png" });
    await this.attach(img, "image/png");
});

After(async function ({ pickle, result }) {
    console.log(result?.status);
    // screenshot
    if (result?.status == Status.FAILED) {
        const img = await pageFixture.page.screenshot({ path: "./test-results/screenshots/" + pickle.name, type: "png" });
        await this.attach(img, "image/png");
    }
    await pageFixture.page.close();
    await context.close();
});

AfterAll(async function () {
    await browser.close();
});
