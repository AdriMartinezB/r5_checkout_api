const Model = require('../model/pseUsers')

async function created(data) {
    try{
        const response = await Model.create(data)
        //await Model.destroy({where: {id : 1}})
        return {response, message: 'Data created'}
    }catch(e){ 
        return  {message:'error al crear la data', e}
    }

}

async function listar(params) {
    try{
        const data = await Model.findAll({where: params})
        const info = data.map(data=> data.dataValues)
        return info
    }catch(e){ 
        return  {message:'error obtener la data', e}
    }
}


module.exports = {
    created,
    listar,

}