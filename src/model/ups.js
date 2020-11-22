const { DataTypes} = require('sequelize')
const { sequelize} = require('../db/db')

const Ups = sequelize.define('up',
{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    registrationNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    dateNotification:{
        type: DataTypes.DATE,
        allowNull:false,
    }
})

module.exports = Ups