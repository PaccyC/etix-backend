
const mongoose= require("mongoose");

const connectToDb= ()=>{
    mongoose.connect(process.env.DB_URI)
    .then(()=>{
        console.log("Connected to database");
    })

}

module.exports=connectToDb();