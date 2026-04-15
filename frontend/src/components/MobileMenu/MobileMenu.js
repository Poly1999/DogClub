import { Link, NavLink } from 'react-router-dom';
import './MobileMenu.css';
import logo from '../../images/logo.png';
import instagram from '../../images/instagram-icon.png';
import facebook from '../../images/facebook-icon.png';

function MobileMenu({ onClose, onContactClick }) {
  return (
    <div className='mobile-menu-overlay'>
      <div className='mobile-menu-container'>
        <div className='mobile-menu-header'>
          <Link to='/' className='mobile-menu-logo' onClick={onClose}>
            <img src={logo} alt='logo' />
          </Link>

          <button
            type='button'
            className='mobile-menu-close'
            onClick={onClose}
            aria-label='Close menu'
          >
            ×
          </button>
        </div>

        <nav className='mobile-menu-nav'>
          <ul className='mobile-menu-list'>
            <li className='mobile-menu-item'>
              <NavLink to='/' onClick={onClose}>
                Less talk
              </NavLink>
            </li>
            <li className='mobile-menu-item'>
              <Link to='/nutrition' onClick={onClose}>
                Services category
              </Link>
            </li>
            <li className='mobile-menu-item'>
              <a href='#reviews' onClick={onClose}>
                Happy customer
              </a>
            </li>
            <li className='mobile-menu-item'>
              <a href='#contacts' onClick={onClose}>
                Contact
              </a>
            </li>
          </ul>

          <div className='mobile-menu-socials'>
            <a href='https://instagram.com/' target='_blank' rel='noreferrer'>
              <img
                src={instagram}
                alt='instagram-social'
                className='instagram-icon'
              />
            </a>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'>
              <img
                src={facebook}
                alt='facebook-social'
                className='facebook-icon'
              />
            </a>
          </div>

          <button
            type='button'
            className='mobile-menu-contact'
            onClick={onContactClick}
          >
            Contact us
          </button>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
