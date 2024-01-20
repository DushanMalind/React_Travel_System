
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

    updateCustomerRoom:async function (req,res,next) {
        try{
            const customerRoomId=req.params.id;
            const customerRoomData=req.body;

            const updateCustomerRoom=await CustomerRoom.findOneAndUpdate({
                id:customerRoomId
            },customerRoomData,
            {new:true});

            if (!updateCustomerRoom){
                res.status(404).json({
                    error:"CustomerRoom Not Found"
                });
            }
            res.status(200).json(updateCustomerRoom);

        }catch (error) {
            res.status(500).json({
                error:"Server Not Update Error DOWN"
            });
        }
    },

    userCount:async function (req,res,next) {
        try{
            const userCount = await CustomerRoom.find(req.params.id).countDocuments();
            console.log('User Count:', userCount);
            res.status(200).json(userCount);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },

    onlyBookedCustomerEmail: async function (req, res, next) {
        try {

            const requestedCustomerEmail = req.params.customerEmail;
            const bookedOrNoBooked = await CustomerRoom.find({ customerEmail: requestedCustomerEmail });



            console.log(bookedOrNoBooked);
            res.status(200).json(bookedOrNoBooked);

        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Server Error DOWN",
            });
        }
    }
   /* onlyBookedOrNoBookedCheckRoom:async function (req,res,next) {
        try {
            const Booked=req.params.roomsIsBooked;
            const bookedOrNoBooked=req.params.roomsIsBooked=await CustomerRoom.find({roomsIsBooked:Booked});
            console.log(bookedOrNoBooked);
            res.status(200).json(bookedOrNoBooked);

        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    }*/

/*    onlyBookedOrNoBookedCheckRoom: async function (req, res, next) {
        try {
            const requestedRoomsIsBooked = req.params.roomsIsBooked;
            const bookedOrNoBooked = await CustomerRoom.find({ roomsIsBooked: requestedRoomsIsBooked });

            //req.params.requestedCustomerEmail;
            //await CustomerRoom.find({customerEmail:requestedCustomerEmail});

            console.log(bookedOrNoBooked);
            res.status(200).json(bookedOrNoBooked);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Server Error DOWN",
            });
        }
    }*/




}

module.exports=CustomerController;

