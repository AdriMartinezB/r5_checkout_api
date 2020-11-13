require('dotenv').config()

const config = {
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    mongoUri: process.env.MONGO_URI,
    pgUri:process.env.POSTGRES_URI,
    pgUser:process.env.POSTGRES_USER,
    pgPassword:process.env.POSTGRES_PASSWORD,
    pgDB:process.env.POSTGRES_DB
}

module.exports = config