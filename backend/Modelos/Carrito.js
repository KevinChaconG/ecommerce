const { DataTypes } = require('sequelize')
const sequelize = require('../db/Conexion')

const Carrito = sequelize.define('Carrito', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  productoId: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  nombreProducto: {
    type: DataTypes.STRING
  },
  precioProducto: {
    type: DataTypes.DOUBLE
  },
  isvProducto: {
    type: DataTypes.DOUBLE
  },
  imagenProducto: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'carrito',
  timestamps: false
})

module.exports = Carrito
