import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Reviews from '../../components/Reviews/Reviews';

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Reviews />
    </div>
  );
}

export default HomePage;
