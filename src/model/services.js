const { DataTypes} = require('sequelize')
const { sequelize} = require('../db/db')

const Services = sequelize.define('service',
{
    SureName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

module.exports = Services