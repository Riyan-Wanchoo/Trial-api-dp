const mongoose = require("mongoose")
const mongoURI = process.env.MONGODB_URI

const connecttomongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to database")
    })
}

module.exports = connecttomongo