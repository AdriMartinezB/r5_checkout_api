const { DataTypes} = require('sequelize')
const { sequelize} = require('../db/db')

const PurchaseConfirmations = sequelize.define('purchaseConfirmation',
{
    ProductName1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ProductName2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ProductName3: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    TotalWithDiscount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    PaymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PaymentId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    RegistrationNumber:{
        type: DataTypes.STRING(6),
        allowNull: false,
    },
    Names:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    LastNames:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    PhoneNumber:{
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    DiscountCode1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    DiscountCode2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
})

module.exports = PurchaseConfirmations