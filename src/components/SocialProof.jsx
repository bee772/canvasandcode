// src/components/SocialProof.jsx
import React, { useState, useEffect } from 'react';
import { theme } from '../styles/theme';

const SocialProof = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 768;

  const stats = [
    {
      number: '15+',
      label: 'Projects Completed',
      mobileLabel: 'Projects',
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      mobileLabel: 'Satisfaction',
    },
    {
      number: '15+',
      label: 'Happy Clients',
      mobileLabel: 'Clients',
    },
    {
      number: '2+',
      label: 'Years Experience',
      mobileLabel: 'Years',
    },
  ];

  const getGridColumns = () => {
    if (isMobile) return 'repeat(2, 1fr)';
    if (isTablet) return 'repeat(2, 1fr)';
    return 'repeat(4, 1fr)';
  };

  const styles = {
    section: {
      backgroundColor: theme.colors.linen,
      padding: isMobile ? '2rem 1rem' : isTablet ? '3rem 1.5rem' : '4rem 2rem',
      borderTop: `1px solid ${theme.colors.lightGray}`,
      borderBottom: `1px solid ${theme.colors.lightGray}`,
      color: theme.colors.obsidian,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    title: {
      fontSize: isMobile ? '1.5rem' : isTablet ? '1.8rem' : '2rem',
      textAlign: 'center',
      marginBottom: isMobile ? '2rem' : '3rem',
      color: theme.colors.obsidian,
      fontFamily: theme.fonts.heading,
      lineHeight: 1.3,
      padding: isMobile ? '0 0.5rem' : 0,
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: getGridColumns(),
      gap: isMobile ? '1rem' : '2rem',
    },
    statItem: {
      textAlign: 'center',
      padding: isMobile ? '1.5rem 1rem' : '2rem',
      borderRadius: '8px',
      backgroundColor: theme.colors.white,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease',
      '@media (hover: hover)': {
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    statNumber: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.2rem' : '2.5rem',
      fontWeight: 'bold',
      color: theme.colors.slateBlue,
      marginBottom: '0.5rem',
      fontFamily: theme.fonts.heading,
      lineHeight: 1.2,
    },
    statLabel: {
      fontSize: isMobile ? '0.8rem' : '1rem',
      color: theme.colors.obsidian,
      opacity: '0.8',
      fontFamily: theme.fonts.body,
      lineHeight: 1.4,
    },
  };

  return (
    <section style={styles.section} id="social-proof">
      <div style={styles.container}>
        <h2 style={styles.title}>
          {isMobile ? "Trusted by Clients" : "Trusted by Clients Worldwide"}
        </h2>
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statItem}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>
                {isMobile ? stat.mobileLabel : stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;