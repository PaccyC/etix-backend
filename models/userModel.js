const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"firstName is required!"]
    },
    lastName:{
        type:String,
        required:[true,"lastName is required!"]
    },
    username:{
        type:String,
        required:[true,"username is required!"],
        min:[3,"Username must be at least 3 characters"]
    },
    email:{
        type:String,
        required:[true,"email is required!"]
    },
    password:{
        type:String,
        required:[true,"password is required!"],
        min:[6,"Password must be at least 6 characters"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    img:{
        type:String
    }

},
{timestamps:true}
)

const User= mongoose.model("User",userSchema)


module.exports=User;