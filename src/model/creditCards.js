const { DataTypes} = require('sequelize')
const { sequelize} = require('../db/db')

const CreditCards = sequelize.define('creditCard',
{
    OwnerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DocumentType: {
        type: DataTypes.STRING(2),
        allowNull: false,
    },
    DocumentNumber:{
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    CardNumber:{
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    CardType:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ExpirationDate:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    Cvv:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

module.exports = CreditCards