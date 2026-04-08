import './CartPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { getCart, removeFromCart } from '../../api/api';
import { useCart } from '../../context/CartContext';
import { useEffect, useState } from 'react';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const { fetchCartCount } = useCart();

  const fetchCart = () => {
    getCart()
      .then(response => {
        setCartItems(response.data.items || []);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + item.productId.price * item.quantity;
  }, 0);

  const tax = subtotal * 0.07;
  const delivery = subtotal >= 700 ? 0 : 10;
  const total = subtotal + tax + delivery;

  const handleRemove = async productId => {
    try {
      await removeFromCart(productId);
      fetchCart();
      fetchCartCount();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className='cart-container'>
        <h2 className='cart-title'>Cart</h2>
        <div className='cart-content'>
          <ul className='cart-list'>
            {cartItems.map(item => (
              <li key={item._id} className='cart-item'>
                <img
                  src={item.productId.image}
                  alt={item.productId.name}
                  className='cart-item-img'
                />
                <div className='cart-item-info'>
                  <p className='cart-item-name'>{item.productId.name}</p>
                  <p className='cart-item-quantity'>
                    Quantity: {item.quantity}
                  </p>
                  <p className='cart-item-price'>${item.productId.price}</p>
                  <button
                    className='cart-item-remove'
                    onClick={() => handleRemove(item.productId._id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className='cart-summary'>
            <h3 className='cart-summary-title'>Order summary</h3>
            <div className='cart-summary-row'>
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className='cart-summary-row'>
              <p>Tax (7%)</p>
              <p>${tax.toFixed(2)}</p>
            </div>
            <div className='cart-summary-row'>
              <p>Delivery</p>
              <p>{delivery === 0 ? 'Free' : `$${delivery}`}</p>
            </div>
            {delivery > 0 && (
              <p className='cart-free-delivery'>
                Free delivery on orders over $700
              </p>
            )}
            <div className='cart-summary-total'>
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
