const { throws } = require("hamjest");

class VentasService {

    constructor({ ventasRepository, productosService }) {
        this.ventasRepository = ventasRepository;
        this.productosService = productosService;
    }

    ping() {
        return 'pong';
    }

    async getItems() {
        return this.ventasRepository.getItems();
    }

    async getItemById(id) {
        return this.ventasRepository.getItemById(id);
    }

    async createItem(data) {
        const producto = await this.productosService.getItemById(data.producto_id);
        const productoData = producto.dataValues;
        if (productoData.cantidad - data.cantidad < 0) {
            throw new Error('La cantidad es mayor a las existencias');
        }
        const costo = producto.costo;
        data.ganancia = data.cantidad * (data.precio - costo);

        productoData.cantidad -= data.cantidad;
        await this.productosService.updateItem(productoData.id, productoData);
        return this.ventasRepository.createItem(data);
    }

    async updateItem(id, data) {
        return this.ventasRepository.updateItem(id, data);
    }

    async deleteItem(id) {
        return this.ventasRepository.deleteItem(id);
    }

}

module.exports = VentasService;