class ProductosRepository {

    constructor({ ProductoModel }) {console.log(ProductoModel)
        this.ProductoModel = ProductoModel;
    }

    async getItems() {
        const items = await this.ProductoModel.findAll();
        return items;
    }

}

module.exports = ProductosRepository;