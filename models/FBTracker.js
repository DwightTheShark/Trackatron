const mongoose = require('mongoose')

const FBTrackerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fb_token: {
        type: String,
        required: false,
    },
    fb_pixel_id: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('FBTracker', FBTrackerSchema)