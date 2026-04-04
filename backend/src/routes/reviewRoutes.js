const express = require('express');

const router = express.Router();

const upload = require('../middleware/upload');

const {
  getAllReviews,
  createReview,
} = require('../controllers/reviewController');

// GET /api/reviews
router.get('/', getAllReviews);

// POST /api/reviews
router.post('/', upload.single('image'), createReview);

module.exports = router;
