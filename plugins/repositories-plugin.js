const fp = require('fastify-plugin');
const ProductosRepository = require('../productos/productos-repository');

async function repositoriesPlugin(fastify, options) {

    const productosRepository = new ProductosRepository(fastify.models);

    const repositories = {
        productosRepository,
    };

    fastify.decorate('repositories', repositories);

}

module.exports = fp(repositoriesPlugin);