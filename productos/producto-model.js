const { DataTypes, Model } = require('sequelize');

class ProductoModel extends Model {

    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false
            },
            precio: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0
            },
            costo: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0
            },
            inventario: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
        }, {
            sequelize,
            modelName: 'Producto',
            tableName: 'Productos',
        });
    }
}

module.exports = ProductoModel;