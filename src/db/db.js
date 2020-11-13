const { Sequelize } = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(
    config.pgDB,
    config.pgUser,
    config.pgPassword,
    {
        host:config.pgUri, 
        dialect: 'postgres', 
        define:{
            freezeTableName: false,
            timestamps: false
        }
    })

async function connect() {
    try{
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    }catch(error){
        console.error('Unable to connect to the database:', error)
    }
}

module.exports = {connect, sequelize}