const {getLaunches, addNewLaunch, deleteLaucnch} = require('../models/launches.model')

const getAllLaunches = function(req,res){  

    return res.status(200).json(getLaunches())

}


const createNewLaunch = function(req,res){
    let launch = req.body;
    console.log(launch)
    launch.launchDate = new Date(launch.launchDate);
    addNewLaunch(launch);
    return res.status(201).json(launch)

}


const httpAbortLaunch = function(req,res){

    const launchId = req.params.id;
    const response = deleteLaucnch(launchId);
    res.status(200).json(response)
}

module.exports = {
    getAllLaunches,
    createNewLaunch,
    httpAbortLaunch
}