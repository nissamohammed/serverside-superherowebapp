//order of the command is important!! please follow this order( becuse : javascript is single thread programming language, line by line execution)

// import dotenv- to load environment variable.
require('dotenv').config()//config()-environment variables to load in process.env

//import express
const express = require('express')

//import cors
const cors = require('cors')

//import router
const router = require('./routes')

//import coonetion.js
require('./connection')

//create express server
//create an express application .the express() function us a top-level function exported by the express module.
const superheroServer = express()

//use of cors- to communicate with the view.
superheroServer.use(cors())

//use json() method - returns a middleware which can parse json formate.
superheroServer.use(express.json())

//use router
superheroServer.use(router)

//set port for the server
PORT = 4000 || process.env.PORT

//listen to the port - to resolve the request.
superheroServer.listen(PORT,()=>{
    console.log(`server running successsfully at port number : ${PORT}`);
})

