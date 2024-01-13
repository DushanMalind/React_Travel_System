
const UserModel=require('../model/UserModel');

const UserController={
   getUserLogin:async function (req,res,next) {
         try {
             const {email,password}=req.body;
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
           /*  console.log(email);
             console.log(password);
             const user=await UserModel.findOne({email:email,password:password});
             console.log(user);
             res.send(user);*/
         }catch (error) {
             console.error(error);
             res.status(500).json({
                 error:"Server Error DOWN"
             });
         }
   }
}

module.exports=UserController;
