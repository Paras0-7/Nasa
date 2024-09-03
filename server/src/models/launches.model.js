const launches = new Map();

let latestFlightNo = 10;
const launch = {
    mission : 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    flightNumber: latestFlightNo,
    customers: ['NASA', 'EPAM'],
    upcoming: true,
    success: true,
}


launches.set(launch.flightNumber, launch)

let getLaunches = ()=>{
    return Array.from(launches.values())
}


let addNewLaunch = function(launch){
    latestFlightNo++;
    
    launches.set(latestFlightNo, Object.assign(launch, {
        success:true,
        upcoming: true,
        flightNumber: latestFlightNo
    }))
}


let deleteLaucnch = function(flightNumber){
    let launch = launches.get(+flightNumber);
    launch.upcoming = false;
    launch.success = false;
    return launch;
}
module.exports = {
   getLaunches,
   addNewLaunch,
   deleteLaucnch
}