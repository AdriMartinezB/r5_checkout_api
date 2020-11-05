require('dotenv').config()

const config = {
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    mongoUri: process.env.MONGO_URI
}

module.exports = config