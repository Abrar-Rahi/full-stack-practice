const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const {Schema} = mongoose

const categorySchema = new Schema({
   categoryName : {
    type : String,
    require : true ,
    unique : true
   },
   ownerId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
   },
   status : {
    type : String,
    enum : ["pending", "approved", "reject"],
    default : "pending"
   }
},{
    timestamps:true
})

module.exports = mongoose.model("Category", categorySchema)