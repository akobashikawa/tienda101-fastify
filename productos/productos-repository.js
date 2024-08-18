class ProductosRepository {

    constructor({ ProductoModel }) {
        this.ProductoModel = ProductoModel;
    }

    async getItems() {
        const items = await this.ProductoModel.findAll();
        return items;
    }

    async createItem(data) {
        return this.ProductoModel.create(data);
    }

}

module.exports = ProductosRepository;