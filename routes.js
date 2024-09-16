//path setting ('/')-  use seperate file, so we use this file

//1) import express
const express = require('express')

//import admincontroller file
const adminController =require('./controller/adminController')
//import grievanceController
const grievanceController = require('./controller/grievanceController')
 



//2) create an object for router class
const router = new express.Router()




//3) set up path for each request from view

//login
router.post('/login',adminController.loginController)

//add complaints
router.post('/addcomplaint',grievanceController.addComplaintController)

//to get allcomplaints
router.get('/allcomplaints',grievanceController.getAllComplaintsController)

//4) export the router
module.exports = router