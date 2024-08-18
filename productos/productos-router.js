const ProductosController = require('./productos-controller');

async function productosRouter(fastify, options) {
  const productosController = new ProductosController(fastify.services);

  fastify.get('/', (request, reply) => productosController.getItems(request, reply));
  fastify.get('/:id', (request, reply) => productosController.getItemById(request, reply));
  fastify.post('/', (request, reply) => productosController.createItem(request, reply));
}

module.exports = productosRouter;