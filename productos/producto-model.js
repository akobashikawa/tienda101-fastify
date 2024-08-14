const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-config');

const Producto = sequelize.define('Producto', {
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
});

sequelize.sync();

module.exports = Producto;