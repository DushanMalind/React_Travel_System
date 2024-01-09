var express=require('express');
var router=express.Router();
const {productList,test}=require('../contants/const');
const productController=require("../controller/ProductController");



/*router.get('/all', function(req, res, next) {
  res.send(
      res.send(productList)
  );
});*/

router.get('/all',productController.getAllProduct);

router.post('/save',productController.saveProduct);


module.exports=router;
