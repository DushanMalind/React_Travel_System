
const Payment=require('../model/PaymentModel');


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

}

module.exports=PaymentController;
