const soatDetails = require('./soatDetails')
const bonus = require('./bonus')
const creditCards = require('./creditCards')
const marketCarts = require('./marketCarts')
const pseUsers = require('./pseUsers')
const services = require('./services')
const purchaseConfirmations = require('./purchaseConfirmations')
const soatPrices = require('./soatPrices')
const ups = require('./ups')
const dbclients = require('./dbclients')


const router = function (server) {
    server.use('/api/soatDetails', soatDetails)
    server.use('/api/bonus', bonus)
    server.use('/api/creditCards', creditCards)
    server.use('/api/marketCarts', marketCarts)
    server.use('/api/pseUsers', pseUsers)
    server.use('/api/services', services)
    server.use('/api/purchaseConfirmations', purchaseConfirmations)
    server.use('/api/soatPrices', soatPrices)
    server.use('/api/ups', ups)
    server.use('/api/dbclients', dbclients)
}

module.exports = router

