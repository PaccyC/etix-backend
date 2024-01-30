const userController= require("../controllers/userController");
const express = require("express");

const router= express.Router();

router.get("/",userController.getUsers)

router.post("/signup",userController.register)

router.post("/login",userController.login)
router.post("/otp/generate",userController.genetateOTP)


module.exports=router;