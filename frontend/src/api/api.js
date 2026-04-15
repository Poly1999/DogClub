import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// get review
export const getReviews = () => API.get('/reviews');

// create new review
export const createReview = data => API.post('/reviews', data);

// send contact form
export const createContact = data => API.post('/contacts', data);

// get all products with filters and sort
export const getProducts = params => API.get('/products', { params });

// get cart
export const getCart = () => API.get('/cart');

// add product to cart
export const addToCart = productId => API.post('/cart', { productId });

//delete product from cart
export const removeFromCart = productId => API.delete(`/cart/${productId}`);
