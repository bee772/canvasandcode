// src/components/FinalCTA.jsx
import React from 'react';
import { theme } from '../styles/theme';
import Button from './UI/Button';

const FinalCTA = () => {
  const styles = {
    section: {
      padding: '6rem 2rem',
      /* subtle gradient for depth */
      background: `linear-gradient(135deg, ${theme.colors.slateBlue} 0%, ${theme.colors.brickRed} 100%)`,
      position: 'relative',
      overflow: 'hidden',
      color: theme.colors.white,
    },
    pattern: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: '0.15',
      backgroundImage: `radial-gradient(${theme.colors.white} 1px, transparent 1px)`,
      backgroundSize: '40px 40px',
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
    },
    title: {
      fontSize: '3rem',
      color: theme.colors.white,
      marginBottom: '1rem',
      fontFamily: theme.fonts.body,
      fontWeight: '700',
      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: theme.colors.white,
      opacity: '0.9',
      marginBottom: '2.5rem',
      fontFamily: theme.fonts.body,
      lineHeight: '1.6',
      textShadow: '0 1px 3px rgba(0,0,0,0.4)',
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginBottom: '3rem',
      flexWrap: 'wrap',
    },
    statItem: {
      textAlign: 'center',
      backgroundColor: 'rgba(255,255,255,0.2)',
      padding: '1.5rem 2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      minWidth: '120px',
    },
    statNumber: {
      fontSize: '2.25rem',
      fontWeight: '700',
      color: theme.colors.white,
      marginBottom: '0.2rem',
      textShadow: '0 1px 2px rgba(0,0,0,0.4)',
    },
    statLabel: {
      fontSize: '0.85rem',
      color: theme.colors.white,
      opacity: '0.85',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      flexWrap: 'wrap',
    },
    '@media (max-width: 768px)': {
      title: {
        fontSize: '2rem',
      },
      statsContainer: {
        gap: '1.5rem',
      },
    },
  };

  return (
    <section style={styles.section} id="contact">
      <div style={styles.pattern} />
      <div style={styles.container}>
        <h2 style={styles.title}>Ready to bring your vision to life?</h2>
        <p style={styles.subtitle}>
          Let's create something amazing together. Whether you need a brand-new site 
          or want to revamp an existing one, I'm here to help.
        </p>

        <div style={styles.statsContainer}>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>15+</div>
            <div style={styles.statLabel}>Projects Completed</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>100%</div>
            <div style={styles.statLabel}>Client Satisfaction</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>24h</div>
            <div style={styles.statLabel}>Average Response</div>
          </div>
        </div>

        <div style={styles.buttonWrapper}>
          <a href="#apply" style={{ textDecoration: 'none' }}>
            <Button 
              variant="primary" 
              size="large"
            >
              🚀 Start Your Project
            </Button>
          </a>
          <a href="#apply" style={{ textDecoration: 'none' }}>
            
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;