import './About.css';
import aboutImage from '../../images/about-image.png';
import vector from '../../images/about-vector.png';
import paw from '../../images/about-paw.png';

function About() {
  return (
    <section className='about'>
      <div className='about-container'>
        <div className='about-left'>
          <img
            src={aboutImage}
            alt='about-dog-image'
            className='about-dog-image'
          />
          <img src={vector} alt='about-dog-vector' />
          <img src={paw} alt='about-paw' className='about-paw-one' />
          <img src={paw} alt='about-paw' className='about-paw-two' />
          <img src={paw} alt='about-paw' className='about-paw-three' />
        </div>
        <div className='about-right'>
          <h2 className='about-title'>Less talk and more walk</h2>
          <p className='about-text'>
            Sometimes our career, lifestyle, or routines can make it difficult
            to provide your pet with the recommended amount of exercise that
            they need. Which is why, it’s okay to use an extra hand in walking
            dogs so they are in perfect shape, mentally and physically.
          </p>
          <button className='about-button'>Explore More</button>
        </div>
      </div>
    </section>
  );
}

export default About;
