const mongoose = require('mongoose');

const CustomerRoom = mongoose.Schema({
        "id": {
            required: true,
            type: Number,

        },
        "room": {
            required: true,
            type: String
        },

        "image": {
            required: true,
            type: String
        },

        "title": {
            required: true,
            type: String
        },

        "roomCount": {
            required: true,
            type: String
        },

        "description": {
            required: true,
            type: String
        },

        "price": {
            required: true,
            type: Number
        },

        "availability": {
            required: true,
            type: String,
            validate: {
                validator: function (value) {
                    // Your custom validation logic for the 'availability' field
                    return ['available', 'not available'].includes(value.toLowerCase());
                },
                message: props => `${props.value} is not a valid availability status. Use 'available' or 'not available'.`,
            },
        },

      /*  "CustomerId": {
            required: true,
            type: Number
        },*/

        "customerName": {
            required: true,
            type: String
        },

        "customerEmail": {
            required: true,
            type: String
        },

        "customerContact": {
            required: true,
            type: String
        },

        "customerAddress": {
            required: true,
            type: String
        },

        "roomsIsBooked": {
            required: true,
            type: String,
            default: "Not Booked"

        },

        "bookingDateTime": {
            type: Date,
            default: Date.now,
            required: true
        },



    },
    {
        versionKey: false
    }
);

const customerRoom = mongoose.model('CustomerRoom', CustomerRoom);

module.exports = customerRoom;
