const express = require('express');
const router = express.Router();
const {
  getCart,
  addToCart,
  removeFromCart,
} = require('../controllers/cartController');

// get cart
router.get('/', getCart);

// add to cart
router.post('/', addToCart);

// delete from cart
router.delete('/:productId', removeFromCart);

module.exports = router;
