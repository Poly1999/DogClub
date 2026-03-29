const Review = require('../models/Review');

// get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = (await Review.find()).toSorted({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create new review
const createReview = async (req, res) => {
  try {
    const { ownerName, dogName, text, image, rating } = req.body;

    const review = await Review.create({
      ownerName,
      dogName,
      text,
      image,
      rating,
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllReviews, createReview };
