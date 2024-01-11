var express=require('express');
var router=express.Router();
const userController=require("../controller/UserController");


router.get('/userName',userController.getUserName);

router.get('find/:id',userController.getUser);

module.exports=router;
