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
  const [isSortOpen, setIsSortOpen] = useState(false);
  const { fetchCartCount } = useCart();
  const sortOptions = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'cheaper', label: 'Cheaper first' },
    { value: 'expensive', label: 'More expensive first' },
    { value: 'name', label: 'By name' },
    { value: 'newest', label: 'New ones first' },
  ];

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
              <button
                type='button'
                className='sort-mobile-trigger'
                onClick={() => setIsSortOpen(true)}
              >
                <span className='sort-mobile-icon'>⇅</span>
                {sortOptions.find(option => option.value === activeSort)?.label}
              </button>
              <div className='button-box'>
                {sortOptions.map(option => (
                  <button
                    key={option.value}
                    className={`sort-button ${
                      activeSort === option.value ? 'active' : ''
                    }`}
                    onClick={() => setActiveSort(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
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
                  className={`pagination-btn ${
                    currentPage === page ? 'active' : ''
                  }`}
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

      {isSortOpen && (
        <div className='sort-modal' onClick={() => setIsSortOpen(false)}>
          <div
            className='sort-modal-content'
            onClick={e => e.stopPropagation()}
          >
            <h3 className='sort-modal-title'>Sorting</h3>
            <ul className='sort-modal-list'>
              {sortOptions.map(option => (
                <li key={option.value}>
                  <button
                    type='button'
                    className={`sort-modal-option ${
                      activeSort === option.value ? 'active' : ''
                    }`}
                    onClick={() => {
                      setActiveSort(option.value);
                      setIsSortOpen(false);
                    }}
                  >
                    <span>{option.label}</span>
                    <span className='sort-modal-arrow'>›</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default NutritionPage;
