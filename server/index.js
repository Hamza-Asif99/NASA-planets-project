const path = require('path')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const planetsRouter = require('./routes/planets/planets.router')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors({
    origin:'http://localhost:3001'
}))
app.use(express.json())
app.use(morgan('short'))
app.use(express.static(path.join(__dirname,'public')))
app.use('/planets',planetsRouter)

app.listen(PORT,()=>{console.log('server started')})