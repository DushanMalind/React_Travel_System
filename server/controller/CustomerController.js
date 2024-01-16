
const CustomerRoom=require('../model/CustomerRoomModel');

const CustomerController={

    customerByTheRoom: async (req,res)=>{
        try{

            const customerRoomData=req.body;
            console.log(customerRoomData);
            const customerRoom=await CustomerRoom.create(customerRoomData);
            res.status(200).json("By Room Is Booking.Now You File Payment From");
            console.log(customerRoomData);

        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },

    getAllCustomerRoom:async function (req,res,next) {
        try{
            const customerRoomList=await CustomerRoom.find();
            res.status(200).json(customerRoomList);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },



}

module.exports=CustomerController;

