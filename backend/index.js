require('dotenv').config()
const express = require("express")
const cors = require('cors')
const app = express()
const route = require("./routes")
const mongoConfig = require('./config/mongoConfig')

//DB CONFIG
mongoConfig()
//DB CONFIG

app.use(cors())
app.use(express.json())
app.use(route)

app.listen(process.env.PORT, ()=>{console.log(`port connected ${process.env.PORT}`)})