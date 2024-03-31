
const express = require("express")
const route = express.Router()
const regController = require("../../controller/regController")
const apiSecure = require("../../middleWire/apiSecure")
const otpController = require("../../controller/otpController")
const forgotPassController = require("../../controller/forgotPassController")
const newPassController = require("../../controller/newPassController")
const loginController = require("../../controller/loginController")

route.post("/registration", apiSecure ,regController)
route.post("/login",loginController)
route.post("/otpvalidation", otpController )
route.post("/forgotPass", forgotPassController )
route.post("/newPass", newPassController )

module.exports = route
