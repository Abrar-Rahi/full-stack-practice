const express = require("express")
const route = express.Router()
const apiRoute = require("./api")



route.use(process.env.BASE_URL,apiRoute)

route.use(process.env.BASE_URL, (req,res)=>{res.send("api URL is not correct")})

module.exports = route