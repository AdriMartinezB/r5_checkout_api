const express = require('express')
const {created, listar} = require('../controllers/pseUsers')


const router = express.Router()

router.get('/:DocumentNumber', async function(req,res) {
    try{
        const {DocumentNumber}= req.params
        const response = await listar({DocumentNumber})
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