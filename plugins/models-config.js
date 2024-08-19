const ProductoModel = require('../productos/producto-model');
const VentaModel = require('../ventas/venta-model');

module.exports = (sequelize) => {
    ProductoModel.init(sequelize);
    VentaModel.init(sequelize);

    ProductoModel.hasMany(VentaModel, { foreignKey: 'producto_id' });
    VentaModel.belongsTo(ProductoModel, { foreignKey: 'producto_id' });

    return {
        ProductoModel,
        VentaModel,
    }
};