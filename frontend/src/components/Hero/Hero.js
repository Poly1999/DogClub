import './Hero.css';
import dog from '../../images/dog-hero.png';
import background from '../../images/background-hero.png';
import paw from '../../images/paw-y-hero.png';
import pawp from '../../images/paw-p-hero.png';

function Hero() {
  return (
    <section className='hero'>
      <img src={background} alt='background-hero' className='hero-background' />
      <img src={paw} alt='big-paw' className='big-paw-one' />
      <img src={paw} alt='big-paw' className='big-paw-two' />

      <div className='hero-container'>
        <img src={pawp} alt='purple-paw' className='purple-paw' />
        <img src={paw} alt='yellow-paw' className='yellow-paw' />

        <div className='hero-left'>
          <h2 className='hero-title'>Taking care for your Smart Dog!</h2>
          <p className='hero-text'>
            Human–canine bonding is the relationship between dogs and humans
          </p>
          <button className='hero-button'>Explore more</button>
        </div>
        <div className='hero-right'>
          <img src={dog} alt='dog-hero' className='hero-image' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
