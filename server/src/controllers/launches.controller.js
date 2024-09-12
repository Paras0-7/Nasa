const {getLaunches, addNewLaunch, deleteLaunch} = require('../models/launches.model')

const getAllLaunches = async function(req,res){  

    return res.status(200).json(await getLaunches())

}


const createNewLaunch = async function(req,res){
    let launch = req.body;
    console.log(launch)
    launch.launchDate = new Date(launch.launchDate);
    await addNewLaunch(launch);
    return res.status(201).json(launch)

}

// vU182Skzxq7CZsGO

const httpAbortLaunch = async function(req,res){

    const launchId = req.params.id;
    const response = await deleteLaunch(launchId);
    res.status(200).json(response)
}

module.exports = {
    getAllLaunches,
    createNewLaunch,
    httpAbortLaunch
}