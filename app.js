const express = require("express");
const dotenv= require("dotenv");
const mongoose= require("mongoose");
const userRoutes= require("./routes/userRoutes")
const busRoutes= require("./routes/busRoutes")
const cors= require("cors")
const morgan= require("morgan")

const app= express();
//  configuring environment variables
dotenv.config();


const port =process.env.PORT;

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.static('public'));

// Setting database connection
mongoose.connect(process.env.DB_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${port}`)
    })
    
    
    console.log("Connected to database");
})
.catch(err => console.log(err))

app.use("/api/auth",userRoutes)


app.use("/api/bus",busRoutes)

app.all("*",(req,res)=>{
    return res.status(404).json({
        status: "fail",
        message: `Route: ${req.originalUrl} not found`,
      });
})