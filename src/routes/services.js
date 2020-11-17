const express = require('express')
const {created, listar} = require('../controllers/services')


const router = express.Router()

router.get('/', async function(req,res) {
    try{
        const response = await listar()
        res.status(200).json(response)
    }catch(e){
        res.status(500).json({error: 'Internal server error', e})
    }
})

router.post('/', async function(req,res) {
    try{
        const data = req.body
        const response = await created(data)
        res.status(201).json(response)
    }catch(e){
        res.status(500).json({error: 'Internal server error'})
    }
})

module.exports = router