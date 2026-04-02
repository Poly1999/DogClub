import './Reviews.css';
import christin from '../../images/reviews-cris.png';
import anna from '../../images/reviews-anna.png';
import sindy from '../../images/reviews-sindy.png';

function Reviews() {
  return (
    <section className='reviews' id='reviews'>
      <div className='reviews-container'>
        <h2 className='reviews-title'>Happy customer</h2>
        <div className='reviews-slider'>
          <button className='reviews-prev'>←</button>
          <ul className='reviews-list'>
            <li className='reviews-item'>
              <img src={christin} alt='chris-image' className='reviews-img' />
              <p className='reviews-name'>Christin & Tom</p>
              <p className='reviews-text'>
                Love the overall workout experience!
              </p>
              <div className='reviews-stars'>
                <p className='stars'>★ ★ ★ ★ ★</p>
                <p className='number'>5/5</p>
              </div>
            </li>
            <li className='reviews-item'>
              <img src={anna} alt='anna-image' className='reviews-img' />
              <p className='reviews-name'>Anna & Tobby</p>
              <p className='reviews-text'>
                Amazing Products & Delivery on time.
              </p>
              <div className='reviews-stars'>
                <p className='stars'>★ ★ ★ ★</p>
                <p className='number'>4/5</p>
              </div>
            </li>
            <li className='reviews-item'>
              <img src={sindy} alt='sindy-image' className='reviews-img' />
              <p className='reviews-name'>Sindy & Kitch</p>
              <p className='reviews-text'>Great job with the trainer!</p>
              <div className='reviews-stars'>
                <p className='stars'>★ ★ ★ ★ ★</p>
                <p className='number'>5/5</p>
              </div>
            </li>
          </ul>
          <button className='reviews-next'>→</button>
        </div>
        <div className='reviews-pagination'>
          <span className='reviews-dot active'></span>
          <span className='reviews-dot'></span>
          <span className='reviews-dot'></span>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
