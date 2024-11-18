const mongoose=require("mongoose")
const connection=mongoose.connect()
require('dotenv').config(process.env.MONGO_URL)

module.exports={connection}