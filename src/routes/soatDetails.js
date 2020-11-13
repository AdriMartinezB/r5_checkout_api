const express = require('express')
const {created, listar} = require('../controllers/soatDetails')


const router = express.Router()

router.get('/:RegistrationNumber', async function(req,res) {
    try{
        const {RegistrationNumber}= req.params
        const response = await listar({RegistrationNumber})
        res.status(200).json({response})
    }catch(e){
        res.status(500).json({error: 'Internal server error', e})
    }
})

router.post('/', async function(req,res) {
    try{
        const data = req.body
        const response = await created(data)
        res.status(201).json({response})
    }catch(e){
        res.status(500).json({error: 'Internal server error'})
    }
})

module.exports = router