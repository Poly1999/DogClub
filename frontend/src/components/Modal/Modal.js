import './Modal.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createContact } from '../../api/api';
import { toast } from 'react-toastify';
import name from '../../images/contact-name.png';
import pet from '../../images/pet.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';
import close from '../../images/close-icon.png';

const schema = yup.object({
  ownerName: yup.string().required('Name is required'),
  dogName: yup.string().required('Dog name is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(/^\+1\d{10}$/, 'Format: +1XXXXXXXXXX'),
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email'),
});

function Modal({ onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async data => {
    try {
      await createContact(data);
      reset();
      toast.success('Your request has been sent!');
      onClose();
    } catch (error) {
      toast.error('Something went wrong, please try again!');
      console.log(error);
    }
  };

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

        <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
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

          <div className='form-input'>
            <img src={pet} alt='pet-name' />
            <input
              placeholder='Pet name'
              className='contact-input'
              {...register('dogName')}
            />
          </div>
          {errors.dogName && <p className='error'>{errors.dogName.message}</p>}

          <div className='form-input'>
            <img src={phone} alt='phone-num' />
            <input
              placeholder='Your phone'
              className='contact-input'
              {...register('phone')}
            />
          </div>
          {errors.phone && <p className='error'>{errors.phone.message}</p>}

          <div className='form-input'>
            <img src={email} alt='email' />
            <input
              placeholder='Your email'
              className='contact-input'
              {...register('email')}
            />
          </div>
          {errors.email && <p className='error'>{errors.email.message}</p>}

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
