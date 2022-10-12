const mongoose = require('mongoose')

const TTTrackerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tt_token: {
        type: String,
        required: false,
    },
    tt_pixel_id: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('TTTracker', TTTrackerSchema)