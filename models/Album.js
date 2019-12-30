const mongoose = require('mongoose');

const AlbumSchema = mongoose.Schema({
    albumName: {
        type: String,
        require: true
    },
    PathBannerImage: {
        type: String,
        default: "https://images.freeimages.com/images/large-previews/843/grunge-floral-1154276.jpg",
        require: false
    },
    createdDate: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Albums', AlbumSchema);