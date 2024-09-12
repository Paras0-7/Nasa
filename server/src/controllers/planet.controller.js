const {getAllPlanets: getPlanets} = require('./../models/planets.model')

const getAllPlanets = async function(req,res){
    res.status(200).json(await getPlanets())
}




module.exports = {
    getAllPlanets
}