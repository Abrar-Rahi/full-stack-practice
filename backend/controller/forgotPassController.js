const DataSchema = require("../model/dataSchema")
var jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");


 const forgotPassController = async (req,res)=>{
    const {email} = req.body

    existingUser = await DataSchema.findOne({email:email})

    if(existingUser){

        var token = jwt.sign({ email: email }, 'shhhhh');

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "rahiabrar177@gmail.com",
                pass: "fcen kmox lmrc ongq",
            },
          });

          const info = await transporter.sendMail({
            from: 'rahiabrar177@gmail.com', // sender address
            to: email, // list of receivers
            subject: "new password", 
            html: `<a href="http://localhost:5173/newPass/${token}">please click here for Recovery password.</a>`, // html body
          });
       
    }else{
        res.send("email not found")

    }
   
 }

 module.exports = forgotPassController