const http = require('http');
require('dotenv').config()

const app = require("./app")
const mongoose = require('mongoose')
const {loadPlanetsData} = require('./models/planets.model')

const PORT  = process.env.PORT || 8000
const MONGO_URL = process.env.MONGO_URL


const server = http.createServer(app)

mongoose.connection.once('open', ()=>{
    console.log('MongoDB connected')
})

mongoose.connection.on('error', (error)=>{
    console.error(error.message)
})

async function startServer() {

    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();
    server.listen(PORT, ()=>{
        console.log(`Listening on ${PORT}`)
    })
}


startServer();