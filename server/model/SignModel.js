const mongoose = require('mongoose');

const SignModel = mongoose.Schema({
    "firstName": {
        required: true,
        type: String

    },

    "lastName": {
        required: true,
        type: String
    },

    "address": {
        required: true,
        type: String
    },

    "contact": {
        required: true,
        type: Number
    },

    "email": {
        required: true,
        type: String,
        unique: true,
    },

    "password": {
        required: true,
        type: String,
    },

    "confirmPassword": {
        required: true,
        type: String,
    },
        "isAdmin": {
            type: Boolean,
            default: true, // Default value is false, change if needed
        },

},
    {versionKey: false}
);

const signModel = mongoose.model('SignModel', SignModel);

module.exports = signModel;
