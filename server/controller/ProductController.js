const {productList}=require("../contants/const");


const ProductController={
    getAllProduct:async function (req,res,next) {
        res.send(
            res.send(productList)
        );
    }
}

module.exports=ProductController;
