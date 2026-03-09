// src/components/FinalCTA.jsx
import React, { useState, useEffect } from 'react';
import { theme } from '../styles/theme';
import Button from './UI/Button';

const FinalCTA = () => {
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
      padding: isMobile ? '3rem 1rem' : isTablet ? '4rem 1.5rem' : '6rem 2rem',
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
      backgroundSize: isMobile ? '20px 20px' : '40px 40px',
    },
    container: {
      maxWidth: isMobile ? '100%' : '800px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
      padding: isMobile ? '0 0.5rem' : 0,
    },
    title: {
      fontSize: isMobile ? '1.8rem' : isTablet ? '2.4rem' : '3rem',
      color: theme.colors.white,
      marginBottom: '1rem',
      fontFamily: theme.fonts.body,
      fontWeight: '700',
      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
      lineHeight: 1.3,
    },
    subtitle: {
      fontSize: isMobile ? '0.95rem' : '1.2rem',
      color: theme.colors.white,
      opacity: '0.9',
      marginBottom: isMobile ? '2rem' : '2.5rem',
      fontFamily: theme.fonts.body,
      lineHeight: '1.6',
      textShadow: '0 1px 3px rgba(0,0,0,0.4)',
      padding: isMobile ? '0 0.5rem' : 0,
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '1rem' : '2rem',
      marginBottom: isMobile ? '2rem' : '3rem',
      flexWrap: 'wrap',
    },
    statItem: {
      textAlign: 'center',
      backgroundColor: 'rgba(255,255,255,0.2)',
      padding: isMobile ? '1rem' : '1.5rem 2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      minWidth: isMobile ? '80px' : '120px',
      width: isMobile ? 'calc(33.333% - 0.7rem)' : 'auto',
    },
    statNumber: {
      fontSize: isMobile ? '1.5rem' : '2.25rem',
      fontWeight: '700',
      color: theme.colors.white,
      marginBottom: '0.2rem',
      textShadow: '0 1px 2px rgba(0,0,0,0.4)',
    },
    statLabel: {
      fontSize: isMobile ? '0.7rem' : '0.85rem',
      color: theme.colors.white,
      opacity: '0.85',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '1rem' : '1.5rem',
      flexWrap: 'wrap',
    },
  };

  return (
    <section style={styles.section} id="contact">
      <div style={styles.pattern} />
      <div style={styles.container}>
        <h2 style={styles.title}>
          {isMobile 
            ? "Ready to start?" 
            : "Ready to bring your vision to life?"}
        </h2>
        <p style={styles.subtitle}>
          {isMobile 
            ? "Let's create something amazing together."
            : "Let's create something amazing together. Whether you need a brand-new site or want to revamp an existing one, I'm here to help."}
        </p>

        <div style={styles.statsContainer}>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>15+</div>
            <div style={styles.statLabel}>Projects</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>100%</div>
            <div style={styles.statLabel}>Satisfaction</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>24h</div>
            <div style={styles.statLabel}>Response</div>
          </div>
        </div>

        <div style={styles.buttonWrapper}>
          <a href="#apply" style={{ textDecoration: 'none' }}>
            <Button 
              variant="primary" 
              size={isMobile ? "medium" : "large"}
            >
              {isMobile ? "🚀 Start Project" : "🚀 Start Your Project"}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;