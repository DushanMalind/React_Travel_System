
const UserModel=require('../model/UserModel');

const UserController={
   getUserLogin:async function (req,res,next) {
       const {email,password}=req.body;
         try {
             const user = await UserModel.findOne({email: email});
             if (user) {
                 if (user.password === password) {
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

module.exports=UserController;
