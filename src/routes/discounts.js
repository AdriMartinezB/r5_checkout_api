const express = require('express')
const {created, list} = require('../controllers/discounts')


const router = express.Router()

router.get('/', async function(req,res) {
    try{
        const {phonenumber : PhoneNumber ,email: Email}= req.headers
        const response = await list({PhoneNumber, Email})
        res.status(200).json(response)
    }catch(e){
        res.status(500).json({error: 'Internal server error'})
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