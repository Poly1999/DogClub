import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { useCart } from '../../context/CartContext';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className='header'>
      <div>
        <nav className='header-nav'>
          <Link to='/' className='header-logo'>
            <img src={logo} alt='logo' />
          </Link>
          <ul className='header-list'>
            <li className='header-item'>
              <NavLink to='/'>Less talk </NavLink>
            </li>
            <li className='header-item'>
              <Link to='/nutrition'>Services category </Link>
            </li>
            <li className='header-item'>
              <a href='#reviews'>Reviews</a>
            </li>
            <li className='header-item'>
              <a href='#contacts'>Contact</a>
            </li>
          </ul>
          <div className='header-buttons'>
            <Link to='/cart' className='header-button-cart'>
              <img src={cart} alt='cart' />
              {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
            </Link>

            <button
              className='header-button-contact'
              onClick={() => setIsOpen(true)}
            >
              Contact us
            </button>
          </div>
        </nav>
        {isOpen && <Modal onClose={() => setIsOpen(false)} />}
      </div>
    </header>
  );
}
export default Header;
