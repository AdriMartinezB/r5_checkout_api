const Model = require('../model/marketCarts')
const {listar, updated} = require('../controllers/soatDetails')

async function created(data) {
    try{
        if (data.RegistrationNumber.length !== 6 ){
            return {message: 'RegistrationNumber incorrect'}
        }
        if (data.ProductName1 === 'SOAT'){
            const detailSoat = await listar({RegistrationNumber:data.RegistrationNumber})
            if (detailSoat.SoatDiscount === 0 || detailSoat.SoatDiscount === null){
                let SoatDiscount = parseInt(Math.floor((Math.random()*50000)+1000))
                console.log(SoatDiscount)
                await updated({SoatDiscount}, {RegistrationNumber:data.RegistrationNumber})
            }
        }
        const newDetailSoat = await listar({RegistrationNumber:data.RegistrationNumber})
        const eData = {
            Email: data.Email,
            PhoneNumber: data.PhoneNumber,
            ProductName1: data.ProductName1,
            Price1: data.Price1,
            Discount1: data.ProductName1 === 'SOAT'? newDetailSoat.SoatDiscount: data.Discount1 || 0 ,
            ProductName2: data.ProductName2 || '',
            Price2: data.Price2 || 0,
            Discount2: data.Discount2 || 0,
            ProductName3: data.ProductName3 || '',
            Price3: data.Price3 || 0,
            Discount3: data.Discount3 || 0,
            ProductName4: data.ProductName4 || '',
            Price4: data.Price4 || 0,
            Discount4: data.Discount4 || 0,
            message: 'Ok'
        }
        const Total = parseInt((data.Price1-eData.Discount1)+(eData.Price2-eData.Discount2)+(eData.Price3-eData.Discount3)+(eData.Price4-eData.Discount4))
        const newData= {
            ...eData,
            Total
        }
        const response = await Model.create(newData)
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

async function update(data, params) {
    try{

        const datos =await Model.findOne({where: params})
        const info = datos.dataValues
        const prices = {
            price1 : info.Price1,
            discount1: info.Discount1,
            price2 : data.Price2 || info.Price2,
            discount2: data.Discount2 || info.Discount2,
            price3 : data.Price3 || info.Price3,
            discount3: data.Discount3 || info.Discount3
        }
        const Total = parseInt((prices.price1-prices.discount1)+(prices.price2-prices.discount2)+(prices.price3-prices.discount3))
        const upData = {
            ...data,
            Total
        }
        await Model.update(upData,{where: params})
        //const info = data.map(data=> data.dataValues)
        return {message: 'data se actualizo con exito'}
    }catch(e){ 
        return  {message:'error al actualizar la data', e}
    }
}

module.exports = {
    created,
    list,
    update
}