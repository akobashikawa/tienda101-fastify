class VentasRepository {

    constructor({ Venta, Producto }) {
        this.Venta = Venta;
        this.Producto = Producto;
    }

    async getItems() {
        const items = await this.Venta.findAll({
            include: [
                { model: this.Producto, as: 'Producto' }
            ]
        });
        return items;
    }

    async getItemById(id) {
        const item = await this.Venta.findByPk(id);
        return item;
    }

    async createItem(data) {
        return this.Venta.create(data);
    }

    async updateItem(id, data) {
        const item = await this.Venta.findByPk(id);
        if (item) {
            return await item.update(data);
        }
        return null;
    }

    async deleteItem(id) {
        const item = await this.Venta.findByPk(id);
        if (item) {
            return await item.destroy();
        }
        return null;
    }

}

module.exports = VentasRepository;