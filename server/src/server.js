const http = require('http');
const app = require("./app")
const os = require('os')
const mongoose = require('mongoose')
const {loadPlanetsData} = require('./models/planets.model')

const PORT  = process.env.PORT || 8000
const MONGO_URL = "mongodb+srv://Paras:vU182Skzxq7CZsGO@zoro7.hm9fh.mongodb.net/nasa?retryWrites=true&w=majority&appName=Zoro7"


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