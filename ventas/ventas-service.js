const { throws } = require("hamjest");

class VentasService {

    constructor({ ventasRepository, productosService, personasService }) {
        this.ventasRepository = ventasRepository;
        this.productosService = productosService;
        this.personasService = personasService;
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
        const persona = await this.personasService.getItemById(data.persona_id);

        if (!persona) {
            throw new Error('La persona no existe: ' + data.persona_id);
        }

        const producto = await this.productosService.getItemById(data.producto_id);

        if (!producto) {
            throw new Error('El producto no existe: ' + data.producto_id);
        }

        const productoData = producto.dataValues;
        if (productoData.cantidad < 0) {
            throw new Error('No hay suficientes existencias');
        }
        if (productoData.cantidad - data.cantidad < 0) {
            throw new Error('No hay suficientes existencias');
        }

        const nuevaCantidad = productoData.cantidad - data.cantidad;
        await this.productosService.updateItem(productoData.id, {cantidad: nuevaCantidad});

        return this.ventasRepository.createItem(data);
    }

    async updateItem(id, data) {
        const venta = await this.getItemById(id);

        if (!venta) {
            throw new Error('Venta no encontrada');
        }

        const persona = await this.personasService.getItemById(data.persona_id);

        if (!persona) {
            throw new Error('Persona no encontrada');
        }

        const producto = await this.productosService.getItemById(data.producto_id);

        if (!producto) {
            throw new Error('Producto no encontrado');
        }

        const productoData = producto.dataValues;
        if (productoData.cantidad < 0) {
            throw new Error('No hay suficientes existencias');
        }
        if (productoData.cantidad - data.cantidad < 0) {
            throw new Error('No hay suficientes existencias');
        }
        
        const diferencia = data.cantidad - venta.dataValues.cantidad;
        const nuevaCantidad = productoData.cantidad - diferencia;
        await this.productosService.updateItem(productoData.id, {cantidad: nuevaCantidad});
        
        const ventaData = Object.assign(venta.dataValues, data);
        return this.ventasRepository.updateItem(id, ventaData);
    }

    async deleteItem(id) {
        return this.ventasRepository.deleteItem(id);
    }

}

module.exports = VentasService;