const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
        
    },
    launchDate: Date,
    mission: String,
    rocket: String,
    target: {
        type: String,
        required: true
    },
    upcoming: Boolean,
    success: {
        type: Boolean,
        default: true,
        required: true
    },
    customers: [String]

})  


module.exports = mongoose.model('Launch', launchesSchema)