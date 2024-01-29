const express = require("express");
const dotenv= require("dotenv");
const mongoose= require("mongoose");
const userRoutes= require("./routes/userRoutes")



const app= express();
//  configuring environment variables
dotenv.config();


const port =process.env.PORT;

app.use(express.json())


mongoose.connect(process.env.DB_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${port}`)
    })
    
    
    console.log("Connected to database");
})
.catch(err => console.log(err))

app.use("/api/user",userRoutes)