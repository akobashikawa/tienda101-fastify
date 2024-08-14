class ProductosController {
    constructor({ productosService }) {
        this.productosService = productosService;
    }

    async getItems(request, reply) {
        try {
            const items = await this.productosService.getItems();
            reply.send(items);
        } catch (error) {
            console.log(error)
            reply.status(500).send({ error: error.message });
        }
    }
}

module.exports = ProductosController;
