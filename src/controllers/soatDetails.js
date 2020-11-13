const Model = require('../model/soatDetails')

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
        //const info = data.map(data=> data.dataValues)
        return data.dataValues
    }catch(e){ 
        return  {message:'error obtener la data', e}
    }
}

module.exports = {
    created,
    listar
}