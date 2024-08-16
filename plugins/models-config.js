const ProductoModel = require('../productos/producto-model');

module.exports = (sequelize) => {
    ProductoModel.init(sequelize);

    return {
        ProductoModel,
    }
};