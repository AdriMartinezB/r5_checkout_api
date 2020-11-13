const { DataTypes} = require('sequelize')
const { sequelize} = require('../db/db')

const PseUsers = sequelize.define('pseUser',
{
    Bank: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DocumentType: {
        type: DataTypes.STRING(2),
        allowNull: false,
    },
    ClientType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DocumentNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

module.exports = PseUsers