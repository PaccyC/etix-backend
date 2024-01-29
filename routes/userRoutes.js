const userController= require("../controllers/userController");
const express = require("express");

const router= express.Router();

router.get("/",userController.getUsers)

router.post("/signup",userController.register)

router.post("/login",userController.login)



module.exports=router;