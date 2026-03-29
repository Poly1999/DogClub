const Product = require('../models/Product');

// get all products
const getAllProducts = async (req, res) => {
  try {
    const { category, sortBy } = req.query;

    const filter = {};
    if (category) {
      filter.category = category;
    }

    let sort = {};
    if (sortBy === 'price_asc') sort = { price: 1 };
    if (sortBy === 'price_desc') sort = { price: -1 };
    if (sortBy === 'newest') sort = { createdAt: -1 };
    if (sortBy === 'popuar') sort = { popularity: -1 };
    if (sortBy === 'name') sort = { name: 1 };

    const products = await Product.find(filter).sort(sort);

    res.json(products);
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
