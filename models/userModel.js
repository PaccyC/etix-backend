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
        // required:[true,"email is required!"],
        unique:[true,"email already exists!"]
    },
    password:{
        type:String,
        required:[true,"password is required!"],
        min:[6,"Password must be at least 6 characters"]
    },
    phoneNumber:{
    type:String,
    required:[true,"phoneNumber is required!"]
    },

    isAdmin:{
        type:Boolean,
        default:false
    },
    img:{
        type:String
    },
    otp_enabled:{
        type:Boolean,
        default:false
    },
    otp_verified:{
        type:Boolean,
        default:false
    }, 
    otp_ascii: { type: String },
    otp_hex: { type: String },
    otp_base32: { type: String },
    otp_auth_url: { type: String },

},
{timestamps:true}
)

const User= mongoose.model("User",userSchema)


module.exports=User;