const mongoose = require('mongoose');

require('dotenv').config();

const Product = require('./models/Product');
const Review = require('./models/Review');

const products = [
  {
    name: 'Dry food for dogs of average breeds Savory 3 kg (turkey and lamb) ',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_xd7hwo.png',
    category: 'nutrition',
    rating: 4,
    popularity: 15,
    size: 'medium',
  },
  {
    name: 'Dry food for dogs of small breeds Savory 3 kg (lamb) ',
    price: 140,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_2_tqcbs3.png',
    category: 'nutrition',
    rating: 5,
    popularity: 10,
    size: 'small',
  },
  {
    name: 'Dry food for dogs of all breeds Savory 3 kg (rabbit and duck) ',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 8,
    size: 'all',
  },
  {
    name: 'Dry food for dogs of all breeds Savory 5 kg (rabbit and duck)',
    price: 346,
    oldPrice: 450,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 5,
    size: 'large',
  },

  {
    name: 'Dry food for dogs of small breeds Savory 3 kg (lamb)',
    price: 140,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_2_tqcbs3.png',
    category: 'nutrition',
    rating: 5,
    popularity: 7,
    size: 'small',
  },

  {
    name: 'Dry food for dogs of all breeds Savory 3 kg (rabbit and duck)',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 3,
    popularity: 8,
    size: 'small',
  },

  {
    name: 'Dry food for dogs of average breeds Savory 3 kg (turkey and lamb)',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_xd7hwo.png',
    category: 'nutrition',
    rating: 4,
    popularity: 8,
    size: 'medium',
  },

  {
    name: 'Dry food for dogs of all breeds Savory 5 kg (rabbit and duck)',
    price: 346,
    oldPrice: 450,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 9,
    size: 'large',
  },
  {
    name: 'Dry food for dogs of average breeds Savory 3 kg (turkey and lamb) ',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_xd7hwo.png',
    category: 'nutrition',
    rating: 4,
    popularity: 15,
    size: 'medium',
  },

  {
    name: 'Dry food for dogs of small breeds Savory 3 kg (lamb)',
    price: 140,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_2_tqcbs3.png',
    category: 'nutrition',
    rating: 5,
    popularity: 7,
    size: 'small',
  },

  {
    name: 'Dry food for dogs of all breeds Savory 3 kg (rabbit and duck)',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 3,
    popularity: 8,
    size: 'small',
  },

  {
    name: 'Dry food for dogs of average breeds Savory 3 kg (turkey and lamb)',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_xd7hwo.png',
    category: 'nutrition',
    rating: 4,
    popularity: 8,
    size: 'medium',
  },

  {
    name: 'Dry food for dogs of small breeds Savory 3 kg (lamb) ',
    price: 140,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_2_tqcbs3.png',
    category: 'nutrition',
    rating: 5,
    popularity: 10,
    size: 'small',
  },
  {
    name: 'Dry food for dogs of all breeds Savory 3 kg (rabbit and duck) ',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 8,
    size: 'all',
  },
  {
    name: 'Dry food for dogs of all breeds Savory 5 kg (rabbit and duck)',
    price: 346,
    oldPrice: 450,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 5,
    size: 'large',
  },

  {
    name: 'Dry food for dogs of small breeds Savory 3 kg (lamb)',
    price: 140,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_2_tqcbs3.png',
    category: 'nutrition',
    rating: 5,
    popularity: 7,
    size: 'small',
  },

  {
    name: 'Dry food for dogs of average breeds Savory 3 kg (turkey and lamb)',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_xd7hwo.png',
    category: 'nutrition',
    rating: 4,
    popularity: 8,
    size: 'medium',
  },

  {
    name: 'Dry food for dogs of all breeds Savory 5 kg (rabbit and duck)',
    price: 346,
    oldPrice: 450,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 9,
    size: 'large',
  },
  {
    name: 'Dry food for dogs of average breeds Savory 3 kg (turkey and lamb) ',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_xd7hwo.png',
    category: 'nutrition',
    rating: 4,
    popularity: 15,
    size: 'medium',
  },
  {
    name: 'Dry food for dogs of small breeds Savory 3 kg (lamb) ',
    price: 140,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_2_tqcbs3.png',
    category: 'nutrition',
    rating: 5,
    popularity: 10,
    size: 'small',
  },
  {
    name: 'Dry food for dogs of all breeds Savory 3 kg (rabbit and duck) ',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 8,
    size: 'all',
  },
  {
    name: 'Dry food for dogs of all breeds Savory 5 kg (rabbit and duck)',
    price: 346,
    oldPrice: 450,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 5,
    size: 'large',
  },

  {
    name: 'Dry food for dogs of small breeds Savory 3 kg (lamb)',
    price: 140,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_2_tqcbs3.png',
    category: 'nutrition',
    rating: 5,
    popularity: 7,
    size: 'small',
  },

  {
    name: 'Dry food for dogs of all breeds Savory 3 kg (rabbit and duck)',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 3,
    popularity: 8,
    size: 'small',
  },

  {
    name: 'Dry food for dogs of average breeds Savory 3 kg (turkey and lamb)',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_xd7hwo.png',
    category: 'nutrition',
    rating: 4,
    popularity: 8,
    size: 'medium',
  },

  {
    name: 'Dry food for dogs of all breeds Savory 5 kg (rabbit and duck)',
    price: 346,
    oldPrice: 450,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 9,
    size: 'large',
  },
  {
    name: 'Dry food for dogs of average breeds Savory 3 kg (turkey and lamb) ',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_xd7hwo.png',
    category: 'nutrition',
    rating: 4,
    popularity: 15,
    size: 'medium',
  },
  {
    name: 'Dry food for dogs of small breeds Savory 3 kg (lamb) ',
    price: 140,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_2_tqcbs3.png',
    category: 'nutrition',
    rating: 5,
    popularity: 10,
    size: 'small',
  },
  {
    name: 'Dry food for dogs of all breeds Savory 3 kg (rabbit and duck) ',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 8,
    size: 'all',
  },
  {
    name: 'Dry food for dogs of all breeds Savory 5 kg (rabbit and duck)',
    price: 346,
    oldPrice: 450,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 5,
    size: 'large',
  },

  {
    name: 'Dry food for dogs of small breeds Savory 3 kg (lamb)',
    price: 140,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_2_tqcbs3.png',
    category: 'nutrition',
    rating: 5,
    popularity: 7,
    size: 'small',
  },

  {
    name: 'Dry food for dogs of all breeds Savory 3 kg (rabbit and duck)',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 3,
    popularity: 8,
    size: 'small',
  },

  {
    name: 'Dry food for dogs of average breeds Savory 3 kg (turkey and lamb)',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_xd7hwo.png',
    category: 'nutrition',
    rating: 4,
    popularity: 8,
    size: 'medium',
  },

  {
    name: 'Dry food for dogs of all breeds Savory 5 kg (rabbit and duck)',
    price: 346,
    oldPrice: 450,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 9,
    size: 'large',
  },
  {
    name: 'Dry food for dogs of average breeds Savory 3 kg (turkey and lamb) ',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_xd7hwo.png',
    category: 'nutrition',
    rating: 4,
    popularity: 15,
    size: 'medium',
  },
  {
    name: 'Dry food for dogs of small breeds Savory 3 kg (lamb) ',
    price: 140,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_2_tqcbs3.png',
    category: 'nutrition',
    rating: 5,
    popularity: 10,
    size: 'small',
  },
  {
    name: 'Dry food for dogs of all breeds Savory 3 kg (rabbit and duck) ',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 8,
    size: 'all',
  },
  {
    name: 'Dry food for dogs of all breeds Savory 5 kg (rabbit and duck)',
    price: 346,
    oldPrice: 450,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 5,
    size: 'large',
  },

  {
    name: 'Dry food for dogs of small breeds Savory 3 kg (lamb)',
    price: 140,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_2_tqcbs3.png',
    category: 'nutrition',
    rating: 5,
    popularity: 7,
    size: 'small',
  },

  {
    name: 'Dry food for dogs of all breeds Savory 5 kg (rabbit and duck)',
    price: 346,
    oldPrice: 450,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 5,
    popularity: 9,
    size: 'large',
  },

  {
    name: 'Dry food for dogs of small breeds Savory 3 kg (lamb)',
    price: 140,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_7_2_tqcbs3.png',
    category: 'nutrition',
    rating: 5,
    popularity: 7,
    size: 'small',
  },

  {
    name: 'Dry food for dogs of all breeds Savory 3 kg (rabbit and duck)',
    price: 136,
    oldPrice: 320,
    image:
      'https://res.cloudinary.com/dj21215qk/image/upload/v1775412224/image_6_gdebbk.png',
    category: 'nutrition',
    rating: 3,
    popularity: 8,
    size: 'small',
  },
];

const reviews = [
  {
    ownerName: 'Christina',
    dogName: 'Tom',
    text: 'Amazing service! My dog loves coming here.',
    image: '/images/review1.jpg',
    rating: 5,
  },
  {
    ownerName: 'Anna',
    dogName: 'Tobby',
    text: 'Great place for my dog. Highly recommend!',
    image: '/images/review2.jpg',
    rating: 4,
  },
  {
    ownerName: 'Sindy',
    dogName: 'Kitch',
    text: 'Professional staff and lovely atmosphere.',
    image: '/images/review3.jpg',
    rating: 5,
  },
];

// function that runs seed
const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

    // first we need clear the collections
    await Product.deleteMany();
    // await Review.deleteMany();
    console.log('Collections cleared');

    // add new
    await Product.insertMany(products);
    await Review.insertMany(reviews);
    console.log('Data seeded successfully!');
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
