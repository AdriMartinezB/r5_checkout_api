const { DataTypes} = require('sequelize')
const { sequelize} = require('../db/db')

const MarketCarts = sequelize.define('marketCart',
{
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PhoneNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    ProductName1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Price1: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Discount1: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ProductName2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Price2: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Discount2: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ProductName3: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Price3: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Discount3: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ProductName4: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Price4: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Discount4: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = MarketCarts