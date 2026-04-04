const Review = require('../models/Review');

// get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create new review
const cloudinary = require('../config/cloudinary');

const createReview = async (req, res) => {
  try {
    const { ownerName, dogName, text, rating } = req.body;

    let imageUrl = '';

    if (req.file) {
      const base64 = req.file.buffer.toString('base64');
      const dataUri = `data:${req.file.mimetype};base64,${base64}`;

      const result = await cloudinary.uploader.upload(dataUri, {
        folder: 'dogclub/reviews',
      });

      imageUrl = result.secure_url;
    }

    const review = await Review.create({
      ownerName,
      dogName,
      text,
      image: imageUrl,
      rating,
    });

    res.status(201).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllReviews, createReview };
