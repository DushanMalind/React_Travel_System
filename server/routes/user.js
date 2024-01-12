var express=require('express');
var router=express.Router();
const userController=require("../controller/UserController");


router.get('/login',userController.getUserLogin);

module.exports=router;
