
const express = require("express")
const route = express.Router()
const addCategoryController = require("../../controller/addCategoryController")
const getCategoryController = require("../../controller/getCategory")



route.post("/addCategory", addCategoryController)



route.get("/allCategory", getCategoryController )
module.exports = route
