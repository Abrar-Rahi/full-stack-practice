const mongoose = require('mongoose');

let mongoConfig = ()=>{
    mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.skerrfb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{console.log("database connected")})

}

module.exports = mongoConfig