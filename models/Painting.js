const { text } = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaintingSchema = new Schema(
    {
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    painting_image: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    // comments: {
    //     type: Array,
    //     required: false
    // },
    // likes: {
    //     type: Array,
    //     required: false
    // }
})

module.exports = Painting = mongoose.model('Painting', PaintingSchema);  