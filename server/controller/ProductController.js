const {productList}=require("../contants/const");
const Product=require('../model/Product');


const ProductController={
    getAllProduct:async function (req,res,next) {
        /*res.send(
            res.send(productList)
        );*/
        try{
            const productList=await Product.find();
            res.status(200).json(productList);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    },

    saveProduct: async function(req,res,next){
        try {
            const productData=req.body;
            const product=await Product.create(productData);
            res.status(200).json(product);
        }catch (error) {
         console.error(error);
            res.status(500).json({
                error:"Server Error DOWN"
            });
        }
    }
}

module.exports=ProductController;
