//import
const mangoose = require('mongoose')

//schema
//all input field from front end
const userSchema = new mangoose.Schema({
     email:{
        type:String,
        required:true,
        unique:true
     },
     password:{
        type:String,
        required:true
     }
     

})

const users = mangoose.model("users",userSchema)
module.exports = users