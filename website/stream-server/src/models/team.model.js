const mongoose = require('mongoose')

const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    league: {
        type: String
    },
    logo: {
        type: String,
        required: true
    }}, {
        timestamps: true
    }
)
module.exports = mongoose.model('team', TeamSchema)