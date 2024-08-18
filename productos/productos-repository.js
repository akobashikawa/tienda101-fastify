class ProductosRepository {

    constructor({ ProductoModel }) {
        this.ProductoModel = ProductoModel;
    }

    async getItems() {
        const items = await this.ProductoModel.findAll();
        return items;
    }

    async getItemById(id) {
        const item = await this.ProductoModel.findByPk(id);
        return item;
    }

    async createItem(data) {
        return this.ProductoModel.create(data);
    }

    async updateItem(id, data) {
        const item = await this.ProductoModel.findByPk(id);
        if (item) {
            return await item.update(data);
        }
        return null;
    }

}

module.exports = ProductosRepository;