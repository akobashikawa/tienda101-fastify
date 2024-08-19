class VentasRepository {

    constructor({ VentaModel }) {
        this.VentaModel = VentaModel;
    }

    async getItems() {
        const items = await this.VentaModel.findAll();
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