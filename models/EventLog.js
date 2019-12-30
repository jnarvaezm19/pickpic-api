const mongoose = require('mongoose');

const EventLogSchema = mongoose.Schema({
    eventName: {
        type: String,
        require: true
    },
    typeEvent:{
        type: String,
        require: true
    },
    eventDescription: {
        type: String,
        require: true
    },
    eventStatus: {
        type: String,
        require: true
    },
    eventDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('EventLog', EventLogSchema);