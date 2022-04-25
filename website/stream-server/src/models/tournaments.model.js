const mongoose = require('mongoose')

const TournamentSchema = mongoose.Schema({
    league: {
        type: String,
        unique: true,
        required: true
    },
    type: {
        type: String,
    }
    }, {
        timestamps: true
    }
)
module.exports = mongoose.model('tournaments', TournamentSchema)