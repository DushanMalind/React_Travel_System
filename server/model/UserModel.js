const mongoose = require('mongoose');

const User = mongoose.Schema({
    "id":{
        required: true,
        type: Number,
        unique: true,
        index: true
    },

    "userName":{
        required: true,
        type: String,
        unique: true,
    },

    "password":{
        required: true,
        type: String,
    },
});

const user = mongoose.model('User',User);

module.exports = user;
