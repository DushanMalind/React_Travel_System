var express=require('express');
var router=express.Router();

const PaymentController=require('../controller/PaymentController');

router.post('/save',PaymentController.payment);

module.exports=router;


