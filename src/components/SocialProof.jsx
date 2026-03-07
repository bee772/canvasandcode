// src/components/SocialProof.jsx
import React from 'react';
import { theme } from '../styles/theme';

const SocialProof = () => {
  const stats = [
    {
      number: '15+',
      label: 'Projects Completed',
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
    },
    {
      number: '15+',
      label: 'Happy Clients',
    },
    {
      number: '2+',
      label: 'Years Experience',
    },
  ];

  const styles = {
    section: {
      /* offWhite wasn't defined in theme, use linen for a light backdrop */
      backgroundColor: theme.colors.linen,
      padding: '4rem 2rem',
      borderTop: `1px solid ${theme.colors.lightGray}`,
      borderBottom: `1px solid ${theme.colors.lightGray}`,
      color: theme.colors.obsidian, // ensure section text defaults to dark
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    title: {
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '3rem',
      color: theme.colors.obsidian,
      fontFamily: theme.fonts.heading,
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
    },
    statItem: {
      textAlign: 'center',
      padding: '2rem',
      borderRadius: '8px',
      backgroundColor: theme.colors.white,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: theme.colors.slateBlue,
      marginBottom: '0.5rem',
      fontFamily: theme.fonts.heading,
    },
    statLabel: {
      fontSize: '1rem',
      color: theme.colors.obsidian,
      opacity: '0.8',
      fontFamily: theme.fonts.body,
    },
  };

  return (
    <section style={styles.section} id="social-proof">
      <div style={styles.container}>
        <h2 style={styles.title}>Trusted by Clients Worldwide</h2>
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statItem}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
