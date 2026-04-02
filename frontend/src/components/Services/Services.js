import './Services.css';
import imgGroom from '../../images/services-groom.png';
import imgNutr from '../../images/services-nutrition.png';
import imgTrain from '../../images/services-tran.png';
import imgBath from '../../images/services-bath.png';
import background from '../../images/services-vector.png';

function Services() {
  return (
    <section className='services' id='services'>
      <img
        src={background}
        alt='services-background'
        className='services-background'
      />
      <div className='services-container'>
        <h2 className='services-title'>Services category</h2>
        <div className='services-card'>
          <ul className='services-list'>
            <li className='services-item'>
              <img
                src={imgGroom}
                alt='services-img-grooming'
                className='services-card-img
              '
              />
              <p className='services-card-text'>Grooming</p>
            </li>
            <li className='services-item'>
              <img
                src={imgNutr}
                alt='services-img-nitrition'
                className='services-card-img
              '
              />
              <p className='services-card-text'>Nutrition</p>
            </li>
            <li className='services-item'>
              <img
                src={imgTrain}
                alt='services-img-training'
                className='services-card-img
              '
              />
              <p className='services-card-text'>Trainig</p>
            </li>
            <li className='services-item'>
              <img
                src={imgBath}
                alt='services-img-bathing'
                className='services-card-img
              '
              />
              <p className='services-card-text'>Bathing</p>
            </li>
          </ul>
          <a href='/nutrition' className='services-link'>
            more services →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
