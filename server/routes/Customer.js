var express=require('express');
var router=express.Router();

const CustomerController=require('../controller/CustomerController');

router.post('/byTheRoom',CustomerController.customerByTheRoom);

module.exports=router;
