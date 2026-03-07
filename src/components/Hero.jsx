// src/components/Hero.jsx
import React from 'react';
import { theme } from '../styles/theme';
import Button from './UI/Button';

const Hero = () => {
  const styles = {
    section: {
      backgroundColor: theme.colors.linen,
      padding: '4rem 2rem',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center',
    },
    headline: {
      fontSize: '3.5rem',
      lineHeight: '1.2',
      marginBottom: '1.5rem',
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
      fontSize: '1.2rem',
      color: theme.colors.obsidian,
      opacity: '0.8',
      marginBottom: '2rem',
      fontFamily: theme.fonts.body,
      lineHeight: '1.6',
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
    },
    illustration: {
      /* use a translucent background instead of applying opacity to the whole container
         so the img inside remains fully opaque */
      backgroundColor: 'rgba(40,85,189,0.1)',
      height: '400px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      color: theme.colors.slateBlue,
    },
    // Mobile
    '@media (max-width: 768px)': {
      container: {
        gridTemplateColumns: '1fr',
        gap: '2rem',
      },
      headline: {
        fontSize: '2.5rem',
      },
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div>
          <h1 style={styles.headline}>
            Where <span style={styles.art}>Art</span> Meets{' '}
            <span style={styles.algorithm}>Algorithm</span>
          </h1>
          <p style={styles.subhead}>
            I build websites that are beautiful to look at and powerful enough 
            to grow your business. Design-driven development, delivered.
          </p>
          <div style={styles.buttonGroup}>
            <a href="#work" style={{ textDecoration: 'none' }}>
            <Button variant="primary">View My Work</Button>
          </a>
          <a href="#apply" style={{ textDecoration: 'none' }}>
            <Button variant="secondary">Let's Talk</Button>
          </a>
          </div>
        </div>
        <div style={styles.illustration}>
          <img 
            src="/images/profile.png"
            alt="Design and Development"
            style={{ width: '100%', height: '100%', borderRadius: '8px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;