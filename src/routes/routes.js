const express = require('express')
const model = require('../model/model')

const https = require('https')

const router = express.Router()

router.get('/', async function(req,res) {
    const query = req.query
    if(query.username){
        try{
            const RegistrationNumber = query.RegistrationNumber
            const username = query.username
            console.log(RegistrationNumber, username)

            const options = {
                hostname: 'www.regcheck.org.uk',
                path: `/api/reg.asmx/CheckColombia?RegistrationNumber=${RegistrationNumber}&username=${username}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'Content-Type: application/x-www-form-urlencoded',
                    'Content-Length': length
                }
            }
            await https.request(options, res => {
                console.log(res)
                res.on('data', info =>{
                    console.log({data: info})  
                    res.status(200).json({data: info})
                })
            })


            /*await https.get(`https://www.regcheck.org.uk/api/reg.asmx/CheckColombia?RegistrationNumber=${RegistrationNumber}&username=${username}`, (resp) =>{
                let info = ''
                resp.on('data',(chunk)=>{ 
                    console.log(info)
                    return info += chunk})
                resp.on('end', () => res.status(200).json({data: info}))
                resp.on('error', (err)=>res.status(500).send(err))
            })*/

        }catch(e){ res.status(500).send(e) }

    }else {
        console.log('get')
        let filter = {RegistrationNumber: query.RegistrationNumber}
        await model.findOne(filter)
            .then((data)=>res.status(200).json({data}))
            .catch((e)=>res.status(500).send(e))
    }
})

router.post('/', async function(req,res) {
    const data = req.body
    const newData = new model(data)
    console.log('post')
    newData.save()
        .then(()=>res.status(201).send('created'))
        .catch((e)=>res.status(500).send(e))
    
})

module.exports = router