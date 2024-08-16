const fp = require('fastify-plugin');
const ProductosService = require('../productos/productos-service');

async function servicesPlugin(fastify, options) {

    const productosService = new ProductosService(fastify.repositories);

    const services = {
        productosService,
    };

    fastify.decorate('services', services);

}

module.exports = fp(servicesPlugin);