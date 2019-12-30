const mongoose = require('mongoose');

const PhotoSchema = mongoose.Schema({
    albumId: {
        type: String,
        require: true
    },
    photoName: {
        type: String,
        require: true
    },
    photoDescription: {
        type: String,
        require: true
    },
    photoUrl: {
        type: String,
        require: true
    },
    photoDateCreated: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Photos',PhotoSchema);