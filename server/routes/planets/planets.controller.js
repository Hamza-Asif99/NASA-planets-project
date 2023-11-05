const planets = ['earth','mars']
const planetsModel = require ('../../models/planets')

const getAllPlanets = async(req,res)=>{
    try{
        const planets = await planetsModel.getHabitablePlanets()
        res.json(planets)
    }catch(err){
        res.status(500).json({error: "Could not fetch planets data"})
    }
}

module.exports = {
    getAllPlanets
}