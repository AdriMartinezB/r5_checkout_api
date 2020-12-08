const Model = require('../model/dbclients')
const {listar, updated} = require('./soatDetails')

async function created(data) {
    try{
        console.log(data.RegistrationNumber)
        if (data.RegistrationNumber.length !== 6){
            return {message: 'RegistrationNumber incorrect'}
        }else{
            const detailSoat = await listar({RegistrationNumber:data.RegistrationNumber})
            if (detailSoat.SoatDiscount === 0 || detailSoat.SoatDiscount === null){
                let SoatDiscount = parseInt(Math.floor((Math.random()*50000)+1000))
                console.log(SoatDiscount)
                await updated({SoatDiscount}, {RegistrationNumber:data.RegistrationNumber})
            }
        }
        const newDetailSoat = await listar({RegistrationNumber:data.RegistrationNumber})
        const PriceTotal = parseInt(newDetailSoat.PriceSoat)
        const Discount = parseInt(newDetailSoat.SoatDiscount)
        const PriceDiscount =  parseInt(PriceTotal-Discount)
        console.log(PriceDiscount)
        const eData = {
            Email: data.Email,
            PhoneNumber: data.PhoneNumber,
            Discount,
            PriceTotal,
            PriceDiscount,
            RegistrationNumber: data.RegistrationNumber,
            ProductName: 'SOAT'
        }
        const response = await Model.create(eData)
        return response 
    }catch(e){ 
        return  {message:'error al crear la data', e}
    }

}

async function list(params) {
    try{
        const data = await Model.findOne({where: params})
        //const info = data.map(data=> data.dataValues)
        return data.dataValues
    }catch(e){ 
        return  {message:'error obtener la data', e}
    }
}

module.exports = {
    created,
    list
}