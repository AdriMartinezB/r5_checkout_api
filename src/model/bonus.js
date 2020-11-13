const { DataTypes} = require('sequelize')
const { sequelize} = require('../db/db')

const Bonus = sequelize.define('bonu',
{
    Agreement: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Code: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    Redeemed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Bonus