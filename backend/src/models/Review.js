const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },
    dogName: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Review', reviewSchema);
