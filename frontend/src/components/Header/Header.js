import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';

function Header() {
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
              <NavLink to='/nutrition'>Services category </NavLink>
            </li>
            <li className='header-item'>
              <NavLink to='/#reviews'>Happy customer</NavLink>
            </li>
            <li className='header-item'>
              <NavLink to='/#contacts'>Contact</NavLink>
            </li>
          </ul>
          <div className='header-buttons'>
            <button className='header-button-cart'>
              <img src={cart} alt='cart' />
            </button>
            <button className='header-button-contact'>Contact us</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
