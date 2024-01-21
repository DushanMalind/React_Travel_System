const mongoose=require('mongoose');

const Payment=mongoose.Schema({


    "customerName":{
        required:true,
        type:String
    },

    "customerEmail":{
        required:true,
        type:String
    },

    "customerPhone":{
        required:true,
        type:Number
    },

    "customerAddress":{
        required:true,
        type:String
    },

    "roomTitle":{
        required:true,
        type:String
    },


    "customerPaymentDate":{
        required:true,
        type:Date
    },

    "bookingDateTime":{
        required:true,
        type:Date
    },


    "customerRoomType":{
        required:true,
        type:String
    },


    "customerTotalPrice":{
        required:true,
        type:Number
    }


});
