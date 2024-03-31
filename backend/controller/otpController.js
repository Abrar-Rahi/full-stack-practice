
const  DataSchema  = require("../model/dataSchema")

 const otpController = async (req,res)=>{
    const {email,otp} = req.body
    existingUser = await DataSchema.findOne({email:email})

    if(existingUser.otp == otp && existingUser.isEmailVarified == false){
        await DataSchema.findOneAndUpdate({email:email},{otp:"", isEmailVarified:true})
        res.send("otp verification done")
    }else{
        res.send("wrong otp. please try again later")

    }
 }

 module.exports = otpController