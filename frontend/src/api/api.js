import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
});

// get review
export const getReviews = () => API.get('/reviews');

// create new review
export const createReview = data => API.post('/reviews', data);

// send contact form
export const createContact = data => API.post('/contacts', data);

// get all products with filters and sort
export const getProducts = params => API.get('/products', { params });
