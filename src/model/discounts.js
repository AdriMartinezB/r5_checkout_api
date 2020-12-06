const { DataTypes} = require('sequelize')
const { sequelize} = require('../db/db')

const Discounts = sequelize.define('discount',
{
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PhoneNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    Discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    PriceTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    PriceDiscount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    RegistrationNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Discounts