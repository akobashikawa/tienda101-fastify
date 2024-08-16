const ProductosController = require('./productos-controller');

async function productosRouter(fastify, options) {
  const productosController = new ProductosController(fastify.services);

  fastify.get('/', (request, reply) => productosController.getItems(request, reply));
}

module.exports = productosRouter;