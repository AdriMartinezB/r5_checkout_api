const Model = require('../model/creditCards')

async function created(data) {
    try{
        const ExpirationDate = new Date(data.ExpirationDate)
        const newData = {...data, ExpirationDate}
        const response = await Model.create(newData)
        return response,{message:'data created'}
    }catch(e){ 
        return  {message:'error al crear la data', e}
    }

}

async function listar(params) {
    try{
        const data = await Model.findAll({where: params})
        const info = data.map(data=> {
            let cardNumber= new String(data.CardNumber.slice(12,16))
            const details = {
                OwnerName: data.OwnerName,
                DocumentType: data.DocumentType,
                DocumentNumber: data.DocumentNumber,
                CardType: data.CardType,
                CardNumber: parseInt(cardNumber),
                Cvv: data.Cvv
            }
            return details
        })
        console.log(info)
        return info
    }catch(e){ 
        return  {message:'error obtener la data', e}
    }
}

module.exports = {
    created,
    listar
}