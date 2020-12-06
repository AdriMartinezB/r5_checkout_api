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
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Image: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Services