async function productosRouter(fastify, opts) {
  // const ProductoModel = require('./producto-model');
  const ProductosRepository = require('./productos-repository');
  const ProductosService = require('./productos-service');
  const ProductosController = require('./productos-controller');
  
  const productosRepository = new ProductosRepository(fastify.models);
  const productosService = new ProductosService({ productosRepository });
  const productosController = new ProductosController({ productosService });

  fastify.get('/', (request, reply) => productosController.getItems(request, reply));
}

module.exports = productosRouter;