class ProductosController {
    constructor({ productosService }) {
        this.productosService = productosService;
    }

    async getItems(request, reply) {
        try {
            const items = await this.productosService.getItems();
            reply.send(items);
        } catch (error) {
            request.log.error(error);
            reply.code(500).send({ error: error.message });
        }
    }

    async getItemById(request, reply) {
        try {
            const id = request.params.id;
            const item = await this.productosService.getItemById(id);
            if (item) {
                reply.send(item);
            } else {
                reply.status(404).send({ error: 'Product not found' });
            }
        } catch (error) {
            request.log.error(error);
            reply.code(500).send({ error: error.message });
        }
    }

    async createItem(request, reply) {
        try {
            const { nombre, precio, costo, inventario } = request.body;

            if (!nombre || precio < 0) {
                reply.code(400).send({ error: 'Datos inválidos' });
                return;
            }

            const newItem = await this.productosService.createItem({ nombre, precio, costo, inventario });
            reply.code(201).send(newItem);
        } catch (error) {
            request.log.error(error);
            reply.code(500).send({ error: error.message });
        }
    }
}

module.exports = ProductosController;
