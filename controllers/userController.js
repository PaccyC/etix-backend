const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt")
const User = require("../models/userModel")
const dotenv =require("dotenv")
dotenv.config();
const creatToken= async(_id)=>{
 return jwt.sign({_id:_id},process.env.SECRET_KEY,{expiresIn:"2d"})
}

console.log(process.env.SECRET_KEY);
const register= async (req,res)=>{

const {firstName,lastName,username,email,password,img} =req.body;

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
        return res.json({user:user, token}).status(200)
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


module.exports={
    register,
    login,
    getUsers,
    updateUser
}