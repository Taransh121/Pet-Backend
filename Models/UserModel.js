const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    phone: {
        type: String,
        required: true,
    },
}, { timeStamps: true });

module.exports = mongoose.model('User', userSchema);