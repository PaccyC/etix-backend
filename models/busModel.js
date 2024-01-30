const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
    numberOfSits: {
        type: String,
        required: true
    },
    licensePlate: {
        type: String,
        required: true 
    },
    company: {
        type: String,
        required: true
    }
});

const Bus = mongoose.model("Bus", busSchema);

module.exports = Bus;
