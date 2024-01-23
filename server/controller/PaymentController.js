
const Payment=require('../model/PaymentModel');
const CustomerRoom = require("../model/CustomerRoomModel");


const PaymentController={

    payment: async (req,res)=>{
        try{

                const paymentData=req.body;
                console.log(paymentData);
                const payment=await Payment.create(paymentData);
                res.status(200).json("Payment Is Done");
                console.log(paymentData);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },

    allPayment:async function (req,res,next) {
        try{
            const paymentList=await Payment.find();
            res.status(200).json(paymentList);
            console.log(paymentList);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },

    totalPayment:async function (req,res,next) {
        try{

            const totalPayment=await Payment.aggregate([
                {
                    $group:{
                        _id:null,
                        total:{$sum:"$price"}
                    }
                }
            ]);

            res.status(200).json(totalPayment);
            console.log(totalPayment);

        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },

    onlyPaymentCustomerEmail:async function (req,res,next) {
        try{

            const requestedCustomerEmail=req.params.customerEmail;

            let totalPayment=0;

            const paymentList=await Payment.find({customerEmail:requestedCustomerEmail});

            paymentList.forEach(function (payment) {
                totalPayment+=payment.totalPayment;
            });

            console.log(totalPayment);
            res.status(200).json({totalPayment});


        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    }

}

module.exports=PaymentController;
