const bcrypt = require('bcrypt');
const blankInput = require("../helpers/blankInput")
const emailValidation = require("../helpers/emailValidation")
const passValidation = require("../helpers/passValidation")
const DataSchema = require("../model/dataSchema")
const otpGenerator = require('otp-generator')
const nodemailer = require("nodemailer");

const regController = async (req,res)=>{
    
    const {name,email,password} = req.body

    if(blankInput(name)){
        res.send("name required")
    }else if(blankInput(email)){
        res.send("email required")

    }else if(emailValidation(email)){
         res.send("valid email required")
    }else if(blankInput(email)){
        res.send("email required")

    }else if(blankInput(password)){
        res.send("password required")

    }else if(passValidation(password)){
        res.send("checks if an uppercase, lowercase, digit or @#$!%*?& are used in the password. It also limits the length to be 6 minimum")

    }else{
        let existingUser = await DataSchema.find({email:email})
        if(existingUser.length > 0){
            res.send(`${email} is alredy in use`)
        }else{
            let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
            bcrypt.hash(password, 10, async function(err, hash) {

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
                    subject: "Hello ✔", 
                    html: otp, // html body
                  });

                let User = new DataSchema({
                    name,email, password:hash, otp:otp
                })
                User.save()
                res.send(User)
            });
        }


    }
   
}

module.exports = regController