const {parse} = require('csv-parse');
const path =require('path')
const planets = require('./planets.schema.js')
const fs = require('fs')


function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}


function loadPlanetsData(){
    return new Promise((resolve,reject)=>{fs.createReadStream(path.join(__dirname,'../data/kepler_data.csv'))
        .pipe(parse({
            comment: '#',
            columns: true
        }))
        .on('data', async (data)=>{
            if(isHabitablePlanet(data)) await planets.updateOne({
                keplerName: data.kepler_name
            },{keplerName: data.kepler_name}, {
                upsert: true
            })
        }).on('end', ()=>{
            resolve();
        }).on('error',(error)=>{
            console.log(error)
        })
    })

}


async function getAllPlanets(){
    return await planets.find({});
}



module.exports ={
    loadPlanetsData,
    getAllPlanets
}

