const bcrypt = require('bcrypt');
const  DataSchema  = require("../model/dataSchema")


 const loginController = async (req,res)=>{
    const {email,password} = req.body
    

    let findUser = await DataSchema.findOne({email:email})

    if(findUser){
        bcrypt.compare(password, findUser.password, function(err, result) {
            if(result == true){
                console.log(result);
                res.send(findUser)

            }else{

                res.send("invalid credintial")
            }
        });
        
    }else{
        res.send("invalid credintial")
    }
   
 }

 module.exports = loginController