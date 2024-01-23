var express=require('express');
var router=express.Router();

const CustomerController=require('../controller/CustomerController');

router.post('/byTheRoom',CustomerController.customerByTheRoom);

router.get('/getAllCustomerRoom',CustomerController.getAllCustomerRoom);

router.put('/updateCustomerRoom/:id',CustomerController.updateCustomerRoom);

router.get('/userCount',CustomerController.userCount);

router.get('/booking/:customerEmail',CustomerController.onlyBookedCustomerEmail);

router.get('/payment/:customerEmail',CustomerController.onlyPaymentCustomerEmail);

router.delete('/delete/:id',CustomerController.deleteRequest);

module.exports=router;
