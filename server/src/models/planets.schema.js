const mongoose = require('mongoose');

const planetsSchema = new mongoose.Schema({
    keplerName: String,

})


module.exports = mongoose.model('Planet', planetsSchema)