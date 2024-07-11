const mongoose = require('mongoose')

const albumSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    genres: {
      type: [String],
      required: true,
    }, 
    price: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    }, 
  },
  {
    timestamps: true
  }
)

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;