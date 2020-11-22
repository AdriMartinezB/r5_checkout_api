const { DataTypes} = require('sequelize')
const { sequelize} = require('../db/db')

const SoatPrices = sequelize.define('soatPrice',
{
    code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    vehicleType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

module.exports = SoatPrices