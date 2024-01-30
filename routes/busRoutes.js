const busController=require("../controllers/busController")
const authMiddleware=require("../middlewares/authMiddleware")
const express= require("express");

const router= express.Router();


router.use(authMiddleware)

router.get("/",busController.getBuses);
router.post("/add-bus",busController.addBus);
router.delete("/:id",busController.removeBus);


module.exports=router;