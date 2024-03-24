
const  DataSchema  = require("../model/dataSchema")

 const otpController = async (req,res)=>{
    const {email,otp} = req.body
    existingUser = await DataSchema.findOne({email:email})

    if(existingUser.otp == otp){
        await DataSchema.findOneAndUpdate({email:email},{otp:""})
        res.send("otp verification done")
    }else{
        res.send("wrong otp. please try again later")

    }
 }

 module.exports = otpController