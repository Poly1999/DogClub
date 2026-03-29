const mongoose = require('mongoose');

// how looks one product in base
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['grooming', 'nutrition', 'training', 'bathing'],
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    size: {
      type: String,
      enum: ['small', 'medium', 'large', 'all'],
      default: 'all',
    },
    popularity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Product', productSchema);
