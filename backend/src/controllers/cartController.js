const Cart = require('../models/Cart');

// get all products from cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne().populate('items.productId');
    res.json(cart || { items: [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add product to cart
const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    let cart = await Cart.findOne();

    if (!cart) {
      cart = await Cart.create({ items: [{ productId }] });
    } else {
      const existingItem = cart.items.find(
        item => item.productId.toString() === productId,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.items.push({ productId });
      }
      await cart.save();
    }

    res.status(201).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// delete from cart
const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const cart = await Cart.findOne();

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(
      item => item.productId.toString() !== productId,
    );

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCart, addToCart, removeFromCart };
