const SignModel=require('../model/signModel');
const UserModel = require("../model/UserModel");


const SignController={
    /*getAllUser:async function (req,res,next) {
        try{
            const userList=await SignModel.find();
            res.status(200).json(userList);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },*/

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
    },

 /*   getUserName:async function (req,res,next) {
        try{
            const emails=req.params.email;
            const user=await SignModel.findOne({email:emails});
            res.status(200).json(user);
        }catch (error) {
            console.log(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });

        }
    },*/

    getUserLogin:async function (req,res,next) {
        try {
            const {email,password}=req.body;

            const user = await SignModel.findOne({email});
             console.log("user: "+user);
             if (user) {
                 if (user.password === password) {

                     user.password="You are not allowed to see this";
                     user.confirmPassword="You are not allowed to see this";

                     res.status(200).json(user);
                 } else {
                     res.status(400).json({
                            error: "Password Not Match"

                     });
                 }
             } else {
                 res.status(400).json({
                     error: "User Not Found"
                 });

             }

        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    }







}

module.exports=SignController;
