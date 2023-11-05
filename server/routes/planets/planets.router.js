const {Router} = require('express')
const planetsController = require('./planets.controller')
const planetsRouter = Router()

planetsRouter.get('/',planetsController.getAllPlanets)

module.exports = planetsRouter 