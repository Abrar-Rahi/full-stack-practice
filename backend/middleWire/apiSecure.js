let apiSecure = (req,res,next)=>{
     if(req.headers.authorization == "api secure"){
        next()
     }else{
        res.send("api security alert.please verify with correct api URL")
     }
}

module.exports = apiSecure