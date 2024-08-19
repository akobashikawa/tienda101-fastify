const fp = require('fastify-plugin');
const ProductosService = require('../productos/productos-service');
const VentasService = require('../ventas/ventas-service');

async function servicesPlugin(fastify, options) {

    const productosService = new ProductosService({...fastify.repositories});
    const ventasService = new VentasService({...fastify.repositories, productosService});

    const services = {
        productosService,
        ventasService,
    };

    fastify.decorate('services', services);

}

module.exports = fp(servicesPlugin);