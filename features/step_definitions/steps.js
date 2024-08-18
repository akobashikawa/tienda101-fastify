const { BeforeAll, AfterAll, Before, After, Given, When, Then } = require('@cucumber/cucumber');
const { assertThat, is, not, containsString, hasProperty } = require('hamjest');
// const sinon = require('sinon');
// const puppeteer = require('puppeteer');
// const { app } = require('../../server');
const app = require('../../app');

BeforeAll(async function () {
    // browser = await puppeteer.launch();
    // page = await browser.newPage();
});

AfterAll(async function () {
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

When('hago una solicitud POST a {string} con el siguiente cuerpo', async function (route, body) {
    // this.response = await page.evaluate(async (route, body) => {
    //     const res = await fetch(`http://localhost:3000${route}`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body
    //     });
    //     const data = await res.json();
    //     return { status: res.status, body: data };
    // }, route, body);
    this.response = await app.inject({
        method: 'POST',
        url: route,
        payload: JSON.parse(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    this.responseBody = await this.response.json();
});

Then('la respuesta debería contener un producto con el nombre {string} y precio {float}', async function (nombre, precio) {
    assertThat(this.responseBody, hasProperty('nombre', nombre));
    assertThat(this.responseBody, hasProperty('precio', precio));
});

Given('que existe un producto con id {int}', async function (id) {
    const data = { nombre: 'Producto Nuevo', precio: 123.40, costo: 100.00, inventario: 20 };
    await app.services.productosService.createItem(data);
});

Then('la respuesta debería contener un producto con el id {int}', async function (id) {
    assertThat(this.responseBody, hasProperty('id', id));
});