const mongoose = require("mongoose")
const mongoURI = "mongodb+srv://Riyan:Mynameisriyan@news.5nvmx.mongodb.net/test"

const connecttomongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to database")
    })
}

module.exports = connecttomongo