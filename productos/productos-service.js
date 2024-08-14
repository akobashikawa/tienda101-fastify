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

}

module.exports = ProductosService;