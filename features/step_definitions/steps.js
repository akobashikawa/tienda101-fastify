const { Before, After, Given, When, Then } = require('@cucumber/cucumber');
const { assertThat, is, not, containsString } = require('hamjest');
// const sinon = require('sinon');
// const puppeteer = require('puppeteer');
// const { app } = require('../../server');
const app = require('../../app');

Before(async function () {
    // browser = await puppeteer.launch();
    // page = await browser.newPage();
});

After(async function () {
    // await browser.close();
    await app.close();
});

Given('que el servicio está corriendo', async function () {

});

When('hago una solicitud a {string}', async function (route) {
    // this.response = await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0' });
    this.response = await app.inject({ url: `http://localhost:3000${route}` });
    this.responseBody = await this.response.json();
});

Then('debería recibir una respuesta con un código de estado {int}', function (statusCode) {
    // assertThat(this.response.status(), is(statusCode));
    assertThat(this.response.statusCode, is(statusCode));
});

Then('la respuesta debería contener una lista de productos', async function () {
    // const body = await this.response.text();
    // assertThat(body, containsString('productos'));
    assertThat(Array.isArray(this.responseBody), is(true));
});