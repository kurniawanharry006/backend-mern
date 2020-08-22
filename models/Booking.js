const mongoose = require('mongoose');
const {
    ObjectId
}


const bookingSchema = new mongoose.Schema({
    bookingStartDate: {
        type: Date,
        required: true
    },
    bookingEndDate: {
        type: Date,
        required: true
    },
    itemId: [{
        _id: {
            type: ObjectId,
            ref: 'Item',
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        night: {
            type: Number,
            required: true
        }
    }],

    memberId: [{
        type: ObjectId,
        ref: 'Member'
    }],
    bankId: [{
        type: ObjectId,
        ref: 'Bank'
    }],
    proofPayment: {
        type: String,
        require: true
    },
    bankFrom: {
        type: String,
        require: true
    },
    accountHolder: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }


})

module.exports = mongoose.model('Booking', bookingSchema)