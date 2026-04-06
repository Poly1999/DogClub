const Product = require('../models/Product');

// get all products
const getAllProducts = async (req, res) => {
  try {
    const { category, sortBy, page = 1, limit = 8 } = req.query;

    const filter = {};
    if (category) {
      filter.category = category;
    }

    const skip = (page - 1) * limit;
    const total = await Product.countDocuments(filter);

    let sort = {};
    if (sortBy === 'cheaper') sort = { price: 1 };
    if (sortBy === 'expensive') sort = { price: -1 };
    if (sortBy === 'newest') sort = { createdAt: -1 };
    if (sortBy === 'popular') sort = { popularity: -1 };
    if (sortBy === 'name') sort = { name: 1 };

    const products = await Product.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(Number(limit));

    res.json({ products, total });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get one product by id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProducts, getProductById };
