const mongoose = require("mongoose");
const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    animalName: {
        type: String,
        required: true,
    },
    animalType: {
        type: String,
        required: true,
    },
    animalAge: {
        type: String,
        required: true
    },
    animalBreed: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    animalImage: {
        type: String,
        required: true
    }
}, { timestamps: true });
module.exports = mongoose.model("animal", animalSchema);
