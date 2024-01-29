const express = require("express");
const dotenv= require("dotenv");

const mongoose= require("mongoose");


//  configuring environment variables
dotenv.config();

const app= express();

const port =process.env.PORT;

mongoose.connect(process.env.DB_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${port}`)
    })
    
    
    console.log("Connected to database");
})
