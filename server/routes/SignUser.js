var express=require('express');
var router=express.Router();
const signController=require('../controller/SignController');


router.post('/save',signController.saveUser);

/*router.get('/all',signController.getAllUser);*/

router.post('/oneUser',signController.getUserLogin);

router.post('/updateUser',signController.updateUser);

/*router.get('/find/:email',signController.getUserName);*/


module.exports=router;
