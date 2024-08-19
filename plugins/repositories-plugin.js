const fp = require('fastify-plugin');
const ProductosRepository = require('../productos/productos-repository');
const VentasRepository = require('../ventas/ventas-repository');

async function repositoriesPlugin(fastify, options) {

    const productosRepository = new ProductosRepository(fastify.models);
    const ventasRepository = new VentasRepository(fastify.models);

    const repositories = {
        productosRepository,
        ventasRepository,
    };

    fastify.decorate('repositories', repositories);

}

module.exports = fp(repositoriesPlugin);