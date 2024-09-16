//import mongoose
const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log(`mongodb running successfully`);
}).catch((err)=>{
    console.log(`Not connected to mongodb backend !! due to ${err}`);
})