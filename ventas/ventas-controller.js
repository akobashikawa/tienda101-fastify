class VentasController {
    constructor({ ventasService }) {
        this.ventasService = ventasService;
    }

    async getItems(request, reply) {
        try {
            const items = await this.ventasService.getItems();
            reply.send(items);
        } catch (error) {
            request.log.error(error);
            reply.code(500).send({ error: error.message });
        }
    }

    async getItemById(request, reply) {
        try {
            const id = request.params.id;
            const item = await this.ventasService.getItemById(id);
            if (item) {
                reply.send(item);
            } else {
                reply.status(404).send({ error: 'Venta no encontrada' });
            }
        } catch (error) {
            request.log.error(error);
            reply.code(500).send({ error: error.message });
        }
    }

    async createItem(request, reply) {
        try {
            const { producto_id, precio, cantidad } = request.body;

            if (!producto_id || precio < 0) {
                reply.code(400).send({ error: 'Datos inválidos' });
                return;
            }

            const newItem = await this.ventasService.createItem({ producto_id, precio, cantidad });
            reply.code(201).send(newItem);
        } catch (error) {
            request.log.error(error);
            reply.code(500).send({ error: error.message });
        }
    }

    async updateItem(request, reply) {
        try {
            const id = request.params.id;
            const { producto_id, precio, cantidad } = request.body;

            if (!producto_id || precio < 0) {
                reply.code(400).send({ error: 'Datos inválidos' });
                return;
            }

            const updatedItem = await this.ventasService.updateItem(id, { producto_id, precio, cantidad });
            if (updatedItem) {
                reply.send(updatedItem);
            } else {
                reply.status(404).send({ error: 'Venta no encontrada' });
            }
        } catch (error) {
            request.log.error(error);
            reply.code(500).send({ error: error.message });
        }
    }

    async deleteItem(request, reply) {
        try {
            const id = request.params.id;

            const result = await this.ventasService.deleteItem(id);
            if (result) {
                reply.code(200).send({ message: 'Venta eliminada exitosamente' });
            } else {
                reply.status(404).send({ error: 'Venta no encontrada' });
            }
        } catch (error) {
            request.log.error(error);
            reply.code(500).send({ error: error.message });
        }
    }
}

module.exports = VentasController;
