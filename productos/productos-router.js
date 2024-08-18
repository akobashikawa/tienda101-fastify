const ProductosController = require('./productos-controller');

async function productosRouter(fastify, options) {
  const productosController = new ProductosController(fastify.services);

  fastify.get('/', (request, reply) => productosController.getItems(request, reply));
  fastify.post('/', (request, reply) => productosController.createItem(request, reply));
}

module.exports = productosRouter;