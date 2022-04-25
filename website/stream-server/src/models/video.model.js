const mongoose = require('mongoose')

const VideoSchema = mongoose.Schema({
    video_url: {
        type: String,
        required: true
    },
    alive: {
        type: Boolean,
        default: true
    },
    start_time: {
        type: Number,
        required: true
    },
    league: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    home_team_image: {
        type: String,
        required: false
    },
    home_team_name: {
        type: String,
        required: false
    },
    away_team_image: {
        type: String,
        required: false
    },
    away_team_name: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('video', VideoSchema)