const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema(
  {
    liker: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    painting: {
      type: Schema.Types.ObjectId,
      ref: 'paintings'
    }
  }
)

//unique compound index, forces unique liker, painting relationship
LikeSchema.index({ liker: 1, painting: 1 }, { unique: true })

module.exports = Like = mongoose.model('Like', LikeSchema);