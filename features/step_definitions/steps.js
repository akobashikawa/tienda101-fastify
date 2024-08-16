const { Given, When, Then } = require('@cucumber/cucumber');
const { chai, chaiHttp, expect } = require('./test-config.js');

const fastify = require('../../app.js');


Given('que el servicio está corriendo', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('hago una solicitud a {string}', function (route) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('debería recibir una respuesta con un código de estado {int}', function (code) {
    // Then('debería recibir una respuesta con un código de estado {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('la respuesta debería contener una lista de productos', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});