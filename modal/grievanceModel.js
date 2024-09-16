//import mongoose
const mongoose = require('mongoose')

const grievanceSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    character:{
        type:String,
        required:true
    },
    complaint:{
        type:String,
        required:true
    },
    urgency:{
        type:String,
        required:true
    },
    response:{
        type:String,
        required:true
    }  
})

const complaints = mongoose.model("complaints",grievanceSchema)
module.exports = complaints