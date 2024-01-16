const mongoose=require('mongoose');

const CustomerRoom=mongoose.Schema({
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

    "roomsIsAvailable":{
        required:true,
        type:Boolean
    },

    "roomsIsBooked":{
        required:true,
        type:Boolean
    },





},
    {
        versionKey:false
    }
);

const customerRoom=mongoose.model('customerRoomModel',CustomerRoom);

module.exports=customerRoom;
