var express=require('express');
var router=express.Router();

const PaymentController=require('../controller/PaymentController');

router.post('/save',PaymentController.payment);

router.get('/allPayment',PaymentController.allPayment);

router.get('/totalPayment',PaymentController.totalPayment);

router.get('/onlyPaymentCustomerEmail/:customerEmail',PaymentController.onlyPaymentCustomerEmail);

module.exports=router;


