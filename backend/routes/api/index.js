const express = require("express")
const route = express.Router()
const regRoute = require("./registrationRoute")
const productRoute = require("./productRoute")

route.use("/auth",regRoute )
route.use("/product", productRoute)



module.exports = route