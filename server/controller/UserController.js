
const UserModel=require('../model/UserModel');

const UserController={
    getUserName:async function (req,res,next) {
        try{
            const userName=await UserModel.find();
            res.status(200).json(userName);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },

    getUser:async function (req,res,next) {
        try{
            const userId=req.params.id;
            const user=await UserModel.find({id:userId});
            res.status(200).json(user);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    }

}

module.exports=UserController;
