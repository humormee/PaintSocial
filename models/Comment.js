const { text } = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    commenter: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    painting: {
      type: Schema.Types.ObjectId,
      ref: 'paintings'
    },
    description: {
      type: String,
      required: true
    }
  }
)

module.exports = Painting = mongoose.model('Comment', CommentSchema);