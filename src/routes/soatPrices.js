const express = require('express')
const {created, listar} = require('../controllers/soatPrices')


const router = express.Router()

router.get('/:code', async function(req,res) {
    try{
        const {code}= req.params
        const response = await listar({code})
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