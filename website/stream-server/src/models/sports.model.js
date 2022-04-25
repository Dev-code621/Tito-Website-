const mongoose = require('mongoose')

const SportsSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    type: {
        type: String,
    },
    weight:{
        type:Number,
    }
    }, {
        timestamps: true
    }
)
module.exports = mongoose.model('sports', SportsSchema)