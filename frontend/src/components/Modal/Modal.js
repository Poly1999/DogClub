import './Modal.css';
import name from '../../images/contact-name.png';
import pet from '../../images/pet.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';
import close from '../../images/close-icon.png';

function Modal({ onClose }) {
  return (
    <div className='modal'>
      <div className='modal-container'>
        <button className='close-button' onClick={onClose}>
          <img src={close} alt='close button' />
        </button>
        <h2 className='modal-title'>
          Our experts will take care of your friend
        </h2>
        <p className='modal-text'>Fill out the form so we can contact you!</p>

        <form className='contact-form'>
          <div className='form-input'>
            <img src={name} alt='contact-name' />
            <input placeholder='Your name' className='contact-input' />
          </div>

          <div className='form-input'>
            <img src={pet} alt='pet-name' />
            <input placeholder='Pet name' className='contact-input' />
          </div>
          <div className='form-input'>
            <img src={phone} alt='phone-num' />
            <input placeholder='Your phone' className='contact-input' />
          </div>

          <div className='form-input'>
            <img src={email} alt='email' />
            <input placeholder='Your email' className='contact-input' />
          </div>
          <button className='contact-button'>Contact us</button>
          <label className='contact-label'>
            <input type='checkbox' className='checkbox' />
            <p className='contact-privacy'>I agree to the privacy policy</p>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Modal;
