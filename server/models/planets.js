const csv = require('csv')
const fs = require('fs')
const path = require('path')

function getHabitablePlanets(){
    return new Promise((resolve,reject)=>{
        let habitablePlanets = []
        fs.createReadStream(path.join(__dirname,'keplar-data.csv'))
        .pipe(csv.parse({
            columns:true,
            comment: '#'
        }))
        .on('data', data=>{
            if(data.koi_disposition === 'CONFIRMED' &&
            data.koi_insol > 0.36 && data.koi_insol < 1.11 &&
            data.koi_prad < 1.6
            )
            habitablePlanets.push(data)
        })
        .on('error', error=>{
            console.log(error)
            reject("Error occured while reading planets data")
        })
        .on('end',()=>{
            console.log(`${habitablePlanets.length} Habitable Planets Found`)
            resolve(habitablePlanets)
        })
    })
}



module.exports = {getHabitablePlanets}
