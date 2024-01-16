const mongoose=require('mongoose');

const Product=mongoose.Schema({
    "id":{
        required:true,
        type:Number,
        unique:true,
        index:true
    },

    "room":{
        required:true,
        type:String
    },

    "image":{
        required:true,
        type:String
    },

    "title":{
        required:true,
        type:String
    },

    "roomCount":{
        required:true,
        type:String
    },

    "description":{
        required:true,
        type:String
    },

    "price":{
        required:true,
        type:Number
    },

    "availability": {
        required: true,
        type: String
    }

},
    {
        versionKey:false
    }

);

const product=mongoose.model('Product',Product);

module.exports=product;
