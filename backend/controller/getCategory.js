const categorySchema = require("../model/categorySchema")

const getCategoryController = async (req,res)=>{

    let allCat = await categorySchema.find({})

    res.send(allCat)

}

module.exports = getCategoryController