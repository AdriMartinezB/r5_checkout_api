const { DataTypes} = require('sequelize')
const { sequelize} = require('../db/db')

const CreditCards = sequelize.define('creditcard',
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
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    CardNumber:{
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER(3),
        allowNull: false,
    }
})

module.exports = CreditCards