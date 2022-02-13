const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const credSchema = new Schema({
    "website": {
        type: String,
        required: true,
        unique: true
    },
    "username": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("Credential", credSchema)