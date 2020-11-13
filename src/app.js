const express = require('express')
const config = require('./config')

const router = require('./routes/router')
const {connect} = require('./db/db')

const app = express()

//db(config.mongoUri)
connect()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use((_, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})

router(app)
//app.use('/api/test', router)

app.listen(config.port, function(){
    console.log(`app listen http://localhost:${config.port}`)
})