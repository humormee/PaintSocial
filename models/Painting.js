const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaintingSchema = new Schema({
    artist: {
        type: Schema.Types.ObjectId,
        required: true
    },
    painting_image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    // description: {
    //     type: Text,
    //     required: false
    // },
    // category: {
    //     type: String,
    //     required: false
    // },
    // tag: {
    //     type: String,
    //     required: false
    // }
  })
  
  module.exports = Painting = mongoose.model('Painting', PaintingSchema);  