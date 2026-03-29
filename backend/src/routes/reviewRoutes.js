const express = require('express');

const router = express.Router();

const {
  getAllReviews,
  createReview,
} = require('../controllers/reviewController');

// GET /api/reviews
router.get('/', getAllReviews);

// POST /api/reviews
router.post('/', createReview);

module.exports = router;
