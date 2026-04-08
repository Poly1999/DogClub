import './NutritionPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { getProducts, addToCart } from '../../api/api';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../../context/CartContext';

function NutritionPage() {
  const [activeSort, setActiveSort] = useState('popularity');
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const { fetchCartCount } = useCart();

  const handleAddToCart = async productId => {
    try {
      await addToCart(productId);
      fetchCartCount();
      toast.success('Product added to cart');
    } catch (error) {
      toast.error('Something went wrong!');
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts({ sortBy: activeSort, page: currentPage, limit: 8 })
      .then(response => {
        setProducts(response.data.products);
        setTotal(response.data.total);
      })
      .catch(error => {
        console.log(error);
      });
  }, [activeSort, currentPage]);

  return (
    <>
      <Header />

      <main>
        <div>
          <div className='nut-container'>
            <h2 className='nut-title'>Nutrition</h2>
            <div className='sort-box'>
              <p className='sort-text'>Sorting:</p>
              <div className='button-box'>
                <button
                  className={`sort-button ${activeSort === 'popularity' ? 'active' : ''}`}
                  onClick={() => setActiveSort('popularity')}
                >
                  Popularity
                </button>
                <button
                  className={`sort-button ${activeSort === 'cheaper' ? 'active' : ''}`}
                  onClick={() => setActiveSort('cheaper')}
                >
                  Cheaper first
                </button>
                <button
                  className={`sort-button ${activeSort === 'expensive' ? 'active' : ''}`}
                  onClick={() => setActiveSort('expensive')}
                >
                  More expensive first
                </button>
                <button
                  className={`sort-button ${activeSort === 'name' ? 'active' : ''}`}
                  onClick={() => setActiveSort('name')}
                >
                  By name
                </button>
                <button
                  className={`sort-button ${activeSort === 'newest' ? 'active' : ''}`}
                  onClick={() => setActiveSort('newest')}
                >
                  New ones first
                </button>
              </div>
            </div>
          </div>

          <ul className='nut-card'>
            {products.map(product => (
              <li key={product._id} className='card-item'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='card-img'
                />
                <div className='card-stars'>
                  <p className='stars-vendor'>
                    Vendor code: {product._id.slice(-5)}
                  </p>
                  <p className='stars'>{'★'.repeat(product.rating)}</p>
                </div>
                <p className='card-text'>{product.name}</p>
                <div className='card-price'>
                  <p className='new-price'>${product.price}</p>
                  {product.oldPrice && (
                    <p className='old-price'>${product.oldPrice}</p>
                  )}
                </div>
                <button
                  className='card-button'
                  onClick={() => handleAddToCart(product._id)}
                >
                  Buy
                </button>
              </li>
            ))}
          </ul>

          <div className='pagination'>
            <button
              className='pagination-arrow'
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              ‹
            </button>

            {Array.from({ length: Math.ceil(total / 8) }, (_, i) => i + 1).map(
              page => (
                <button
                  key={page}
                  className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ),
            )}

            <button
              className='pagination-arrow'
              onClick={() =>
                setCurrentPage(prev => Math.min(prev + 1, Math.ceil(total / 8)))
              }
              disabled={currentPage === Math.ceil(total / 8)}
            >
              ›
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NutritionPage;
