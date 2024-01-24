const mongoose=require('mongoose');

const Payment=mongoose.Schema({

    "id":{
        required:true,
        type:Number
    },

    "customerName":{
        required:true,
        type:String
    },

    "customerEmail":{
        required:true,
        type:String
    },

    "customerContact":{
        required:true,
        type:Number
    },

    "customerAddress":{
        required:true,
        type:String
    },

    "title":{
        required:true,
        type:String
    },

    "price":{
        required:true,
        type:Number
    },

    "customerPaymentDate":{
        type: Date,
        default: Date.now,
        required: true
    },

    "totalPayment":{
        required:true,
        type:Number
    },

    "bookingDateTime":{
        required:true,
        type:String
    },



});

const payment=mongoose.model('Payment',Payment);

module.exports=payment;
