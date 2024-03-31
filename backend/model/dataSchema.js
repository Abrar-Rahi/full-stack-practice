const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const {Schema} = mongoose

const dataSchema = new Schema({
    name : String,
    email : String,
    password : String,
    otp : String,
    isEmailVarified : {
      type : Boolean,
      default : false
    },
    role : {
        type : String,
        enum : ["user","merchant","admin"],
        default : "user"
    }
},{
    timestamps:true
})

module.exports = mongoose.model("User", dataSchema)