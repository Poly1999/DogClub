const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// import routes
const productRoutes = require('./src/routes/productRoutes');
const reviewRoutes = require('./src/routes/reviewRoutes');
const contactRoutes = require('./src/routes/contactRoutes');

// connect routes
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/contacts', contactRoutes);

// connect MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));

// test rout
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

// listen the port from .env
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
