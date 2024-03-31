
const  DataSchema  = require("../model/dataSchema")
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

 const newPassController = async (req,res)=>{
    const {password, token} = req.body
    
    var decoded = jwt.verify(token, 'shhhhh');

    let findUser = await DataSchema.findOne({email:decoded.email})

    if(findUser){
        bcrypt.hash(password, 10, async function(err, hash) {
            
          let updated =  await DataSchema.findOneAndUpdate({email:decoded.email},{password : hash})
          res.send(updated)
        });
    }else{
        res.send("email not found")
    }
   
 }

 module.exports = newPassController