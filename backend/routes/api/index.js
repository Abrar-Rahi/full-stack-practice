const express = require("express")
const route = express.Router()
const regRoute = require("./registrationRoute")

route.use("/auth",regRoute )



module.exports = route