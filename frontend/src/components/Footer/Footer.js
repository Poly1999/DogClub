import './Footer.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import instagram from '../../images/instagram-icon.png';
import facebook from '../../images/facebook-icon.png';
import email from '../../images/email.png';
import name from '../../images/contact-name.png';
import dog from '../../images/dog-footer.png';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <Link to='/' className='footer-logo'>
            <img src={logo} alt='logo' />
          </Link>
          <div className='footer-social'>
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
        </div>
        <nav className='footer-nav'>
          <ul className='footer-list'>
            <li className='footer-item'>
              <NavLink to='/'>Less talk </NavLink>
            </li>
            <li className='footer-item'>
              <NavLink to='/nutrition'>Services category </NavLink>
            </li>
            <li className='footer-item'>
              <NavLink to='/#reviews'>Happy customer</NavLink>
            </li>
            <li className='footer-item'>
              <NavLink to='/#contacts'>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <form className='footer-form'>
          <div className='form-input'>
            <img src={email} alt='email' />
            <input placeholder='Your email' className='contact-input' />
          </div>
          <div className='form-input'>
            <img src={name} alt='contact-name' />
            <input placeholder='Your name' className='contact-input' />
          </div>
          <button className='contact-button'>Contact us</button>
          <label className='contact-label'>
            <input type='checkbox' className='checkbox' />
            <p className='contact-privacy'>I agree to the privacy policy</p>
          </label>
        </form>
      </div>
      <img src={dog} alt='dog-footer' className='footer-dog' />
    </footer>
  );
}

export default Footer;
