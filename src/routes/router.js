const soatDetails = require('./soatDetails')
const bonus = require('./bonus')
const creditCards = require('./creditCards')


const router = function (server) {
    server.use('/api/soatDetails', soatDetails)
    server.use('/api/bonus', bonus)
    server.use('/api/creditCards', creditCards)
}

module.exports = router

