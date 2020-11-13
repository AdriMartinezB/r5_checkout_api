const Model = require('../model/bonus')


async function created(data) {
    try{
        let Characters = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789"
        let code = ''
        for (i=0; i<10; i++) code +=Characters.charAt(Math.floor(Math.random()*Characters.length))
        const Redeemed= false
        const newData = {...data, Code: code, Redeemed}
        const response = await Model.create(newData)
        const{Agreement, Code, Email}= response
        return {Agreement, Code, Email}
    }catch(e){ 
        return  {message:'error al crear la data'}
    }

}

module.exports = {
    created
}