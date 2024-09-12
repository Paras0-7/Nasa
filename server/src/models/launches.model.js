const launches = require('./launches.schema')
const planets = require('./planets.schema')


const launch = {
    mission : 'Paras Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    flightNumber: 10,
    customers: ['NASA', 'EPAM'],
    upcoming: true,
    success: true,
}


saveLaunch(launch)

async function getLatesFlightNumber(){
    const latesLaunch = await launches.findOne().sort('-flightNumber');

    if(!latesLaunch)    return 10;
    return latesLaunch.flightNumber + 1;
}

let getLaunches = async ()=>{
    return await launches.find({})
}


async function saveLaunch(launch){
    const planet = await planets.findOne({
        keplerName: launch.target
    })

    if(!planet){
        return;
    }

    await launches.updateOne({
        flightNumber: launch.flightNumber
    }, launch,{upsert: true})
}

let addNewLaunch = async function(launch){
    
    const latestFlightNumber = await getLatesFlightNumber();
    Object.assign(launch, {
            success:true,
            upcoming: true,
            flightNumber: latestFlightNumber
        })


    await saveLaunch(launch)


    
    // launches1.set(latestFlightNo, Object.assign(launch, {
    //     success:true,
    //     upcoming: true,
    //     flightNumber: latestFlightNo
    // }))
}


let deleteLaunch = async function(launchId){
    await launches.updateOne({
        flightNumber: launchId
    }, {
        upcoming: false,
        success: false
    })
}
module.exports = {
   getLaunches,
   addNewLaunch,
   deleteLaunch
}