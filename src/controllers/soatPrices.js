const Model = require('../model/soatPrices')

async function created(data) {
    try{
        const response = await Model.create(data)
        //await Model.destroy({where: {id : 11}})
        return response, {message:'data created'}
    }catch(e){ 
        return  {message:'error al crear la data', e}
    }

}

async function listar(params) {
    try{
        const data = await Model.findOne({where: params})
        //const info = data.map(data=> data.dataValues)
        return {price : data.dataValues.price}
    }catch(e){ 
        return  {message:'error obtener la data', e}
    }
}



module.exports = {
    created,
    listar,
}