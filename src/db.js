const db = require('mongoose')

db.Promise = global.Promise

function connect(uri){
    db.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> console.log('db conectada con exito'))
        .catch((e)=> console.log(`db, ${e}`))
}

module.exports = connect