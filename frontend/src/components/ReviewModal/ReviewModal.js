import './ReviewModal.css';
import close from '../../images/close-icon.png';
import { useState } from 'react';
import { createReview } from '../../api/api';
import { toast } from 'react-toastify';

function ReviewModal({ onClose, onReviewAdded }) {
  const [preview, setPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    ownerName: '',
    dogName: '',
    text: '',
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('ownerName', formData.ownerName);
    data.append('dogName', formData.dogName);
    data.append('text', formData.text);

    data.append('rating', rating);
    if (imageFile) {
      data.append('image', imageFile);
    }
    try {
      await createReview(data);
      onReviewAdded();
      toast.success('Your review has been sent!');
      onClose();
    } catch (error) {
      toast.error('Something went wrong, please try again!');
      console.log(error);
    }
  };

  return (
    <div className='review-modal'>
      <div className='review-modal-container'>
        <button className='review-modal-btn' onClick={onClose}>
          <img src={close} alt='close button' />
        </button>
        <h2 className='review-modal-title'>Leave your feedback</h2>
        <form className='review-form' onSubmit={handleSubmit}>
          <label className='review-input-label'>
            {preview ? (
              <img src={preview} alt='preview' className='review-preview-img' />
            ) : (
              <>
                <span className='review-input-plus'>+</span>
                <span>Add photo</span>
              </>
            )}
            <input
              type='file'
              accept='image/*'
              className='review-input-image'
              onChange={handleImageChange}
            />
          </label>
          <input
            placeholder='Your name'
            className='review-input'
            onChange={handleChange}
            name='ownerName'
          />
          <input
            placeholder='Your dog name'
            className='review-input'
            onChange={handleChange}
            name='dogName'
          />
          <textarea
            placeholder='Your review'
            className='review-input'
            onChange={handleChange}
            name='text'
          />

          <div className='review-stars'>
            {[1, 2, 3, 4, 5].map(star => (
              <span
                key={star}
                className={`review-star ${star <= (hover || rating) ? 'active' : ''}`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </span>
            ))}
          </div>
          <button type='submit' className='form-button'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewModal;
