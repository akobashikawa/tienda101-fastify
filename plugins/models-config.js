const Producto = require('../productos/producto-model');
const Venta = require('../ventas/venta-model');

module.exports = (sequelize) => {
    Producto.init(sequelize);
    Venta.init(sequelize);

    Producto.hasMany(Venta, { foreignKey: 'producto_id' });
    Venta.belongsTo(Producto, { foreignKey: 'producto_id' });

    return {
        Producto,
        Venta,
    }
};