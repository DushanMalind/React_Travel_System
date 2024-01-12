const SignModel=require('../model/signModel');


const SignController={
    getAllUser:async function (req,res,next) {
        try{
            const userList=await SignModel.find();
            res.status(200).json(userList);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },

    saveUser: async function(req,res,next){
        try {
            const userData=req.body;
            const user=await SignModel.create(userData);
            res.status(200).json("Success Fully Data Add");
        }catch (error) {
         console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    }
}

module.exports=SignController;
