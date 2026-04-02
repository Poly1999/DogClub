import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Reviews from '../../components/Reviews/Reviews';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default HomePage;
