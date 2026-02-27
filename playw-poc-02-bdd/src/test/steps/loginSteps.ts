import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture"

setDefaultTimeout(60 * 1000 * 2);

Given('que eu acesso a pagina StartPage', async function () {
    await pageFixture.page.goto(process.env.BASEURL);
});

When('eu pesquiso por {string}', async function (searchTerm) {
    let searchField = pageFixture.page.getByPlaceholder('Search privately');
    await expect(searchField).toBeVisible();

    await pageFixture.page.getByPlaceholder('Search privately').click();
    await pageFixture.page.getByPlaceholder('Search privately').fill(searchTerm);

});

When('eu clico em Pesquisar', async function () {
    await pageFixture.page.getByRole('search', { name: 'top search bar' }).getByLabel('search button').click();
});

Then('eu vejo a pagina de pesquisa', async function () {
    //await pageFixture.page.waitForTimeout(5000);
    await pageFixture.page.waitForLoadState();

    //await expect(pageFixture.page.getByTestId("Images")).toContainText("Images");
    let images = pageFixture.page.getByTestId("Images");
    await expect(images).toBeVisible();
});
