const express = require('express');
const { getAllLaunches, createNewLaunch, httpAbortLaunch } = require('../controllers/launches.controller');


const launchesRouter = express.Router();
launchesRouter.get('/launches',getAllLaunches)

launchesRouter.post('/launches',createNewLaunch)

launchesRouter.delete('/launches/:id',httpAbortLaunch)

module.exports = launchesRouter