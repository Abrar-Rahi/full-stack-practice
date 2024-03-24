
const express = require("express")
const route = express.Router()
const regController = require("../../controller/regController")
const apiSecure = require("../../middleWire/apiSecure")
const otpController = require("../../controller/otpController")

route.post("/registration", apiSecure ,regController)
route.post("/otpvalidation", otpController )

module.exports = route
