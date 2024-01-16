const mongoose=require('mongoose');

const CustomerRoom=mongoose.Schema({


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

    "roomsIsAvailable":{
        required:true,
        type:Boolean,
        default:true
    },

    "roomsIsBooked":{
        required:true,
        type:Boolean,
        default:false

    },


},
    {
        versionKey:false
    }
);

const customerRoom=mongoose.model('CustomerRoom',CustomerRoom);

module.exports=customerRoom;
