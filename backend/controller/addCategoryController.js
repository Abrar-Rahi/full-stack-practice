const CategorySchema = require("../model/categorySchema")

const addCategoryController = (req,res)=>{
     let {categoryName , ownerId} = req.body
     
     let catData = new CategorySchema({
          categoryName : categoryName,
          ownerId : ownerId
     })
     catData.save()
     res.send(catData)
}

module.exports = addCategoryController