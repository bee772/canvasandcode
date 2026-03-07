// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import Testimonial from './components/Testimonial';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ApplyForm from './components/ApplyForm';
import { theme } from './styles/theme';
import './styles/global.css'; // You'll create this for base styles

function App() {
  // Smooth scroll for anchor links
  React.useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div style={{ backgroundColor: theme.colors.linen }}>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <FeaturedWork />
        <Testimonial />
        <FinalCTA />
        <ApplyForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;