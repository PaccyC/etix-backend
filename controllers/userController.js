const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt")
const User = require("../models/userModel")
const dotenv =require("dotenv")
const crypto = require("crypto")
const {encode}= require("hi-base32")
const OTPAuth = require("otpauth")
dotenv.config();
const creatToken= async(_id)=>{
 return jwt.sign({_id:_id},process.env.SECRET_KEY,{expiresIn:"2d"})
}



const register= async (req,res)=>{

const {firstName,lastName,username,email,phoneNumber,password,img} =req.body;

// check if user is already registered

try {
    const user = await User.findOne({email})
if(user){
    return res.json({message:"User already exists"}).status(400)
}

const salt = await bcrypt.genSalt(10);
const hashedPassword= await bcrypt.hash(password,salt);

const newUser= await User.create({
    firstName,
    lastName,
    username,
    email,
    phoneNumber,
    password:hashedPassword,
    img
})
 
await newUser.save();


const token= await creatToken(newUser._id)
return res.json({user:newUser, token}).status(200)
} catch (error) {
    console.log(error)
    return res.status(400).json({message:error.message})
}




}

const login= async (req,res)=>{
   
    const {username,password}= req.body

    try{
        const user = await User.findOne({username:username})
        if(!user){
            return res.json({message:"User not found"}).status(400)
        }
    
        if (!username || !password){
            return res.json({message:"Username and password are required"}).status(400)
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({message:"Invalid credentials"}).status(400)
        }
       
        const token= await creatToken(user._id)
       
        return res.json({user:user,otp_enabled:user.otp_enabled, token}).status(200)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:err.message})
    }

}
const getUsers=async (req,res)=>{
    try{
        const users= await User.find();
        return res.json(users).status(200)
    }catch(e){
        return res.status(400).json({message: e.message});
    }
    
}

const updateUser= async (req,res)=>{
}


// To generate the base32 encoded secret key
const generateRandomBase32 = () => {
    const buffer = crypto.randomBytes(15);

    const base32 = encode(buffer).replace(/=/g, "").substring(0, 24);
    return base32;
};


const genetateOTP = async (req,res)=>{
try{
const {user_id}=req.body;
const user= await User.findById(user_id)
if(!user){
    return res.json({message:"User not found"})
              .status(400)
}
const base32_secret= generateRandomBase32();
let totp= new OTPAuth.TOTP({
    issuer:"codevoweb.com",
    label:"CodevoWeb",
    algorithm:"SHA1",
    secret:base32_secret,
})


let otpauth_url=totp.toString();
await User.findByIdAndUpdate(user_id,{
    otp_auth_url:otpauth_url,
    otp_base32:base32_secret,
})
res.status(200).json({
    base32:base32_secret,
    otpauth_url,
})
} 

catch(err){
res.status(500).json({
    status:"error",
    message:err.message
});
}
} ;
module.exports={
    register,
    login,
    getUsers,
    updateUser,
    genetateOTP
}