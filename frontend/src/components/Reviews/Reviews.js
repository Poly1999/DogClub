import './Reviews.css';
import { useEffect, useState } from 'react';
import { getReviews } from '../../api/api';
import ReviewModal from '../ReviewModal/ReviewModal';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchReviews = () => {
    getReviews()
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const visibleReviews = reviews.length
    ? [0, 1, 2].map(i => reviews[(currentIndex + i) % reviews.length])
    : [];

  return (
    <section className='reviews' id='reviews'>
      <div className='reviews-container'>
        <h2 className='reviews-title'>Happy customer</h2>
        <div className='reviews-slider'>
          <button className='reviews-prev' onClick={handlePrev}>
            ←
          </button>
          <ul className='reviews-list'>
            {visibleReviews.map(review => (
              <li key={review._id} className='reviews-item'>
                <img
                  src={review.image || 'https://via.placeholder.com/344x320'}
                  alt={review.ownerName}
                  className='reviews-img'
                />
                <p className='reviews-name'>
                  {review.ownerName} & {review.dogName}
                </p>
                <p className='reviews-text'>{review.text}</p>
                <div className='reviews-stars'>
                  <p className='stars'>{'★'.repeat(review.rating)}</p>
                  <p className='number'>{review.rating}/5</p>
                </div>
              </li>
            ))}
          </ul>
          <button className='reviews-next' onClick={handleNext}>
            →
          </button>
        </div>
        <div className='reviews-pagination'>
          <span className='reviews-dot active'></span>
          <span className='reviews-dot'></span>
          <span className='reviews-dot'></span>
        </div>
        <div className='feedback'>
          <p className='feedback-text'>
            Let us give feedback of experience with us
          </p>
          <button
            className='feedback-button'
            onClick={() => setIsModalOpen(true)}
          >
            Leave review
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ReviewModal
          onClose={() => setIsModalOpen(false)}
          onReviewAdded={fetchReviews}
        />
      )}
    </section>
  );
}

export default Reviews;
