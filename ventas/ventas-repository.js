class VentasRepository {

    constructor({ VentaModel, ProductoModel }) {
        this.VentaModel = VentaModel;
        this.ProductoModel = ProductoModel;
    }

    async getItems() {
        const items = await this.VentaModel.findAll({
            include: [
                { model: this.ProductoModel, as: 'Producto' }
            ]
        });
        return items;
    }

    async getItemById(id) {
        const item = await this.VentaModel.findByPk(id);
        return item;
    }

    async createItem(data) {
        return this.VentaModel.create(data);
    }

    async updateItem(id, data) {
        const item = await this.VentaModel.findByPk(id);
        if (item) {
            return await item.update(data);
        }
        return null;
    }

    async deleteItem(id) {
        const item = await this.VentaModel.findByPk(id);
        if (item) {
            return await item.destroy();
        }
        return null;
    }

}

module.exports = VentasRepository;