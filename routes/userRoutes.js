const userController= require("../controllers/userController");
const express = require("express");

const router= express.Router();

router.get("/",userController.getUsers)

router.post("/signup",userController.register)

router.post("/login",userController.login)
router.post("/otp/generate",userController.genetateOTP)
router.post("/otp/verify",userController.verifyOTP)
router.post("/otp/validate",userController.validateOTP)
router.post("/otp/disable",userController.disableOTP)




module.exports=router;