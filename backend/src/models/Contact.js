const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },
    dogName: {
      type: String,
      // required: true,
    },
    phone: {
      type: Number,
      // required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Contact', contactSchema);
