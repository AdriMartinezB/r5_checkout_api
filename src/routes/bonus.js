const express = require('express')
const {created} = require('../controllers/bonus')


const router = express.Router()

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