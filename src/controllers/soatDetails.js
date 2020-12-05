const Model = require('../model/soatDetails')
const ModelPrice = require('../model/soatPrices')

async function created(data) {
    try{
        const ValidityStartDate = new Date(data.ValidityStartDate)
        const ValidityEndDate = new Date(data.ValidityEndDate)
        const newData = {...data, ValidityEndDate, ValidityStartDate}
        const response = await Model.create(newData)
        console.log({message:'data created'})
        return {message:'data created', response}
    }catch(e){ 
        return  {message:'error al crear la data', e}
    }

}

async function listar(params) {
    try{
        const data = await Model.findOne({where: params})
        const code = data.dataValues.PriceSoat
        const dataPrice = await ModelPrice.findOne({where: {code}})
        const price = dataPrice.dataValues.price
        const response = { ...data.dataValues, PriceSoat:price}
        //const info = data.map(data=> data.dataValues)
        return response
    }catch(e){ 
        return  {message:'error obtener la data', e}
    }
}

async function updated(data, params) {
    try{
        console.log(data, params)
        const info = await Model.update(data,{where: params})
        //const info = data.map(data=> data.dataValues)
        return info.dataValues
    }catch(e){ 
        return  {message:'error al actualizar la data', e}
    }
}


module.exports = {
    created,
    listar,
    updated
}