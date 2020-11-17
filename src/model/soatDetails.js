const { DataTypes} = require('sequelize')
const { sequelize} = require('../db/db')


const SoatDetails = sequelize.define('soatDetail',{
    OwnerNames: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    OwnerLastNames: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DocumentType:{
        type: DataTypes.STRING(2),
        allowNull: false,
        length: 2
    },
    DocumentNumber:{
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    ValidityStartDate:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    ValidityEndDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    InsuranceCompany: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PolicyNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    FasecoldaCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    RegistrationNumber: {
        type: DataTypes.STRING(6),
        allowNull: false
    },
    CarMake: {
        type: DataTypes.STRING,
        allowNull: false
    },
    VehicleType:{
        type: DataTypes.STRING,
        allowNull: false
    },
    RegistrationYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    CarModel:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SoatDiscount:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


module.exports = SoatDetails