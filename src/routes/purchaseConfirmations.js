const express = require('express')
const {created, listar} = require('../controllers/purchaseConfirmations')


const router = express.Router()

router.get('/', async function(req,res) {
    try{
        //const response = await listar()
        res.status(200).json({response: 'In progress'})
    }catch(e){
        res.status(500).json({error: 'Internal server error', e})
    }
})

router.post('/', async function(req,res) {
    try{
        const Generate = req.headers.generate
        if(Generate==='true'){
            const response = await created()
            res.status(201).json({respons: 'test'})
        } else{
            res.status(204).json({message: 'word of verification is missing'})
        }
        
    }catch(e){
        res.status(500).json({error: 'Internal server error'})
    }
})

module.exports = router