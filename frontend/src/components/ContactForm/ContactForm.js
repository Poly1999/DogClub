import './ContactForm.css';
import background from '../../images/contact-vector.png';
import dogLeft from '../../images/contact-dog-left.png';
import dogRight from '../../images/contact-dog-right.png';
import name from '../../images/contact-name.png';
import pet from '../../images/pet.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';

function ContactForm() {
  return (
    <section className='contact'>
      <img src={dogLeft} alt='dogLeft' className='dog-left' />
      <img src={dogRight} alt='dogRight' className='dog-right' />
      <img src={background} alt='background-contact' className='background' />
      <div className='contact-container'>
        <h2 className='contact-title'>
          Our experts will take care of your friend
        </h2>
        <p className='contact-text'>Fill out the form so we can contact you!</p>
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
    </section>
  );
}

export default ContactForm;
