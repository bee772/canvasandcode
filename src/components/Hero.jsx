// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { theme } from '../styles/theme';
import Button from './UI/Button';

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 768;

  const styles = {
    section: {
      backgroundColor: theme.colors.linen,
      padding: isMobile ? '2rem 1rem' : isTablet ? '3rem 1.5rem' : '4rem 2rem',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : '1fr 1fr',
      gap: isMobile ? '2rem' : isTablet ? '3rem' : '4rem',
      alignItems: 'center',
    },
    contentColumn: {
      textAlign: isMobile ? 'center' : 'left',
    },
    headline: {
      fontSize: isMobile ? '2.2rem' : isTablet ? '2.8rem' : '3.5rem',
      lineHeight: '1.2',
      marginBottom: isMobile ? '1rem' : '1.5rem',
      fontWeight: '700',
    },
    art: {
      color: theme.colors.brickRed,
      fontFamily: theme.fonts.canvas,
      fontStyle: 'italic',
    },
    algorithm: {
      color: theme.colors.slateBlue,
      fontFamily: theme.fonts.code,
    },
    subhead: {
      fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.2rem',
      color: theme.colors.obsidian,
      opacity: '0.8',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      fontFamily: theme.fonts.body,
      lineHeight: '1.6',
      padding: isMobile ? '0 0.5rem' : 0,
    },
    buttonGroup: {
      display: 'flex',
      gap: isMobile ? '1rem' : '1rem',
      justifyContent: isMobile ? 'center' : 'flex-start',
      flexWrap: 'wrap',
    },
    illustration: {
      backgroundColor: 'rgba(40,85,189,0.1)',
      height: isMobile ? '250px' : isTablet ? '350px' : '400px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      color: theme.colors.slateBlue,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '8px',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.contentColumn}>
          <h1 style={styles.headline}>
            Where <span style={styles.art}>Art</span> Meets{' '}
            <span style={styles.algorithm}>Algorithm</span>
          </h1>
          <p style={styles.subhead}>
            {isMobile 
              ? "I build websites that are beautiful to look at and powerful enough to grow your business."
              : "I build websites that are beautiful to look at and powerful enough to grow your business. Design-driven development, delivered."}
          </p>
          <div style={styles.buttonGroup}>
            <a href="#work" style={{ textDecoration: 'none' }}>
              <Button variant="primary" size={isMobile ? "medium" : "large"}>
                {isMobile ? "View Work" : "View My Work"}
              </Button>
            </a>
            <a href="#apply" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size={isMobile ? "medium" : "large"}>
                {isMobile ? "Let's Talk" : "Let's Talk"}
              </Button>
            </a>
          </div>
        </div>
        <div style={styles.illustration}>
          <img 
            src="/images/profile.png"
            alt="Design and Development"
            style={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;