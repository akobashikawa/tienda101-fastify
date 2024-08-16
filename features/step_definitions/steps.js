const { Before, After, Given, When, Then } = require('@cucumber/cucumber');
const { assertThat, is, not, containsString } = require('hamjest');
const sinon = require('sinon');
const puppeteer = require('puppeteer');
const server = require('../../server');

Before(async function () {

});

After(async function () {
 
});

Given('que el servicio está corriendo', async function () {
    return 'pending';
});

When('hago una solicitud a {string}', async function (route) {
    return 'pending';
});

Then('debería recibir una respuesta con un código de estado {int}', function (statusCode) {
    return 'pending';
});

Then('la respuesta debería contener una lista de productos', function () {
    return 'pending';
});