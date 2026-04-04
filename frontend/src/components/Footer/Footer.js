import './Footer.css';
import { Link, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createContact } from '../../api/api';
import { toast } from 'react-toastify';
import logo from '../../images/logo.png';
import instagram from '../../images/instagram-icon.png';
import facebook from '../../images/facebook-icon.png';
import email from '../../images/email.png';
import name from '../../images/contact-name.png';
import dog from '../../images/dog-footer.png';

const schema = yup.object({
  ownerName: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email'),
});

function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    try {
      await createContact(data);
      reset();
      toast.success('Your request has been sent!');
    } catch (error) {
      toast.error('Something went wrong, please try again!');
      console.log(error);
    }
  };

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <Link
            to='/'
            className='footer-logo'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
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
              <NavLink
                to='/'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Less talk
              </NavLink>
            </li>
            <li className='footer-item'>
              <NavLink to='/nutrition'>Services category </NavLink>
            </li>
            <li className='footer-item'>
              <NavLink
                to='/#reviews'
                onClick={() =>
                  document
                    .getElementById('reviews')
                    .scrollIntoView({ behavior: 'smooth' })
                }
              >
                Happy customer
              </NavLink>
            </li>
            <li className='footer-item'>
              <NavLink
                to='/#contacts'
                onClick={() =>
                  document
                    .getElementById('contacts')
                    .scrollIntoView({ behavior: 'smooth' })
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <form className='footer-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-input'>
            <img src={email} alt='email' />
            <input
              placeholder='Your email'
              className='contact-input'
              {...register('email')}
            />
          </div>
          {errors.email && <p className='error'>{errors.email.message}</p>}

          <div className='form-input'>
            <img src={name} alt='contact-name' />
            <input
              placeholder='Your name'
              className='contact-input'
              {...register('ownerName')}
            />
          </div>
          {errors.ownerName && (
            <p className='error'>{errors.ownerName.message}</p>
          )}

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
