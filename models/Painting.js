const { text } = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaintingSchema = new Schema(
    {
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    desription: {
        type: String
    },
    painting_image: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Painting = mongoose.model('Painting', PaintingSchema);  