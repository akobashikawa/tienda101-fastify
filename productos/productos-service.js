class ProductosService {

    constructor({ productosRepository }) {
        this.productosRepository = productosRepository;
    }

    ping() {
        return 'pong';
    }

    async getItems() {
        return this.productosRepository.getItems();
    }

    async getItemById(id) {
        return this.productosRepository.getItemById(id);
    }

    async createItem(data) {
        if (!data.nombre || data.precio < 0) {
            throw new Error('Datos inválidos');
        }

        return this.productosRepository.createItem(data);
    }

}

module.exports = ProductosService;