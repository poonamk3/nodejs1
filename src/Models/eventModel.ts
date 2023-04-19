const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: [true, "eventName is required"]
    },
    eventDate: {
        type: Date,
        required: [true, "eventDate is required"]
    },
    eventType: {
        type: String,
        lowecase: true,
        enum: {
            values: ['birthday', 'anniversery', 'festival', 'other'],
            message: "{value} is not supported"
        }
    },
    description: {
        type: String
    },
    creator: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
    images: [{
        type: String,
        required: [true, "image is required"]
    }]
})

export const Event = mongoose.model('event', eventSchema)
