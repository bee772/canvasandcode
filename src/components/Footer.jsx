// src/components/Footer.jsx
import React, { useState } from 'react';
import { theme } from '../styles/theme';
import './Footer.css'; // We'll create this for additional animations

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      backgroundColor: theme.colors.obsidian,
      color: theme.colors.white,
      padding: theme.spacing?.xxl || '5rem 2rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      maxWidth: theme.containerMaxWidth || '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    // Decorative background elements
    decoration: {
      position: 'absolute',
      top: '-150px',
      right: '-100px',
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${theme.colors.brickRed}15, transparent 70%)`,
      zIndex: 1,
    },
    decoration2: {
      position: 'absolute',
      bottom: '-200px',
      left: '-150px',
      width: '500px',
      height: '500px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${theme.colors.slateBlue}15, transparent 70%)`,
      zIndex: 1,
    },
    // Main content grid
    mainContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: theme.spacing?.xl || '4rem',
      marginBottom: theme.spacing?.xl || '4rem',
    },
    // Brand section
    brandSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing?.md || '1.5rem',
    },
    logo: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      marginBottom: theme.spacing?.sm || '1rem',
    },
    canvasPart: {
      fontFamily: theme.fonts.canvas,
      color: theme.colors.brickRed,
      fontStyle: 'italic',
      textShadow: `0 0 10px ${theme.colors.brickRed}40`,
    },
    codePart: {
      fontFamily: theme.fonts.code,
      color: theme.colors.slateBlue,
      textShadow: `0 0 10px ${theme.colors.slateBlue}40`,
    },
    amp: {
      fontFamily: theme.fonts.body,
      color: theme.colors.white,
      margin: '0 0.3rem',
      opacity: 0.7,
    },
    tagline: {
      fontFamily: theme.fonts.body,
      fontSize: '1rem',
      opacity: 0.8,
      lineHeight: '1.8',
      maxWidth: '300px',
      color: theme.colors.white,
    },
    // Stats section
    statsContainer: {
      display: 'flex',
      gap: theme.spacing?.lg || '2rem',
      marginTop: theme.spacing?.sm || '1rem',
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: '700',
      color: theme.colors.brickRed,
      fontFamily: theme.fonts.code,
      lineHeight: 1.2,
    },
    statLabel: {
      fontSize: '0.85rem',
      opacity: 0.6,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    // Section titles
    sectionTitle: {
      fontFamily: theme.fonts.heading || theme.fonts.body,
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: theme.spacing?.lg || '2rem',
      color: theme.colors.white,
      position: 'relative',
      paddingBottom: '0.5rem',
      borderBottom: `2px solid ${theme.colors.brickRed}30`,
    },
    // Quick links
    quickLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing?.sm || '1rem',
    },
    quickLink: {
      color: theme.colors.white,
      opacity: 0.7,
      textDecoration: 'none',
      fontFamily: theme.fonts.body,
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.3rem 0',
      borderBottom: '1px solid transparent',
    },
    quickLinkHover: {
      opacity: 1,
      color: theme.colors.brickRed,
      borderBottomColor: theme.colors.brickRed,
      transform: 'translateX(5px)',
    },
    linkArrow: {
      fontSize: '1.2rem',
      opacity: 0,
      transition: 'all 0.3s ease',
    },
    // Bottom bar
    bottomBar: {
      borderTop: `1px solid ${theme.colors.brickRed}20`,
      paddingTop: theme.spacing?.lg || '2rem',
      marginTop: theme.spacing?.xl || '3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: theme.spacing?.md || '1.5rem',
    },
    copyright: {
      fontSize: '0.9rem',
      opacity: 0.6,
      fontFamily: theme.fonts.body,
    },
    // Newsletter
    newsletterContainer: {
      marginTop: theme.spacing?.xl || '3rem',
      padding: theme.spacing?.lg || '2rem',
      background: 'rgba(255, 255, 255, 0.02)',
      borderRadius: theme.borderRadius?.lg || '16px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
    },
    newsletterTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: theme.colors.white,
    },
    newsletterText: {
      fontSize: '0.9rem',
      opacity: 0.7,
      marginBottom: theme.spacing?.md || '1.5rem',
    },
    newsletterForm: {
      display: 'flex',
      gap: '1rem',
    },
    newsletterInput: {
      flex: 1,
      padding: '0.8rem 1.2rem',
      background: 'rgba(255, 255, 255, 0.05)',
      border: `1px solid rgba(255, 255, 255, 0.1)`,
      borderRadius: theme.borderRadius?.md || '8px',
      color: theme.colors.white,
      fontFamily: theme.fonts.body,
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    newsletterButton: {
      padding: '0.8rem 2rem',
      background: `linear-gradient(135deg, ${theme.colors.brickRed}, ${theme.colors.slateBlue})`,
      border: 'none',
      borderRadius: theme.borderRadius?.md || '8px',
      color: theme.colors.white,
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: theme.fonts.body,
    },
    // Media queries
    '@media (max-width: 968px)': {
      mainContent: {
        gridTemplateColumns: '1fr',
      },
    },
    '@media (max-width: 768px)': {
      mainContent: {
        gridTemplateColumns: '1fr',
      },
      bottomBar: {
        flexDirection: 'column',
        textAlign: 'center',
      },
      newsletterForm: {
        flexDirection: 'column',
      },
    },
  };

  // Quick links
  const quickLinks = [
    { name: 'Home', href: '#', icon: '🏠' },
    { name: 'Work', href: '#work', icon: '💼' },
    { name: 'Services', href: '#services', icon: '⚡' },
    { name: 'Contact', href: '#contact', icon: '📬' },
  ];

  const [hoveredLink, setHoveredLink] = useState(null);
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer style={styles.footer}>
      {/* Decorative elements */}
      <div style={styles.decoration}></div>
      <div style={styles.decoration2}></div>

      <div style={styles.container}>
        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Brand Column with Stats */}
          <div style={styles.brandSection}>
            <div style={styles.logo}>
              <span style={styles.canvasPart}>Canvas</span>
              <span style={styles.amp}>&</span>
              <span style={styles.codePart}>Code</span>
            </div>
            <p style={styles.tagline}>
              Where beautiful design meets powerful code. Creating digital experiences 
              that grow businesses and delight users.
            </p>
            
            {/* Stats */}
            <div style={styles.statsContainer}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>15+</span>
                <span style={styles.statLabel}>Projects</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>15+</span>
                <span style={styles.statLabel}>Clients</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>2+</span>
                <span style={styles.statLabel}>Years</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={styles.sectionTitle}>Quick Links</h4>
            <div style={styles.quickLinks}>
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  style={{
                    ...styles.quickLink,
                    ...(hoveredLink === index ? styles.quickLinkHover : {}),
                  }}
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span>{link.icon}</span>
                  {link.name}
                  <span style={styles.linkArrow}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div style={styles.newsletterContainer}>
          <h5 style={styles.newsletterTitle}>Stay in the loop</h5>
          <p style={styles.newsletterText}>
            Get monthly insights on design, development, and creative business.
          </p>
          <form style={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.newsletterInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" style={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <div style={styles.copyright}>
            © {currentYear} Canvas & Code. Crafted with precision and passion.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;