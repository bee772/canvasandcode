// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { theme } from '../styles/theme';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [email, setEmail] = useState('');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 768;
  // isSmallDesktop removed since it's not used

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', href: '#', icon: '🏠' },
    { name: 'Work', href: '#work', icon: '💼' },
    { name: 'Services', href: '#services', icon: '⚡' },
    { name: 'Contact', href: '#contact', icon: '📬' },
  ];

  const styles = {
    footer: {
      backgroundColor: theme.colors.obsidian,
      color: theme.colors.white,
      padding: isMobile ? '3rem 1rem 1.5rem' : isTablet ? '4rem 1.5rem 2rem' : '5rem 2rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
      padding: isMobile ? '0 0.5rem' : 0,
    },
    decoration: {
      position: 'absolute',
      top: '-150px',
      right: '-100px',
      width: isMobile ? '200px' : '400px',
      height: isMobile ? '200px' : '400px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${theme.colors.brickRed}15, transparent 70%)`,
      zIndex: 1,
    },
    decoration2: {
      position: 'absolute',
      bottom: '-200px',
      left: '-150px',
      width: isMobile ? '250px' : '500px',
      height: isMobile ? '250px' : '500px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${theme.colors.slateBlue}15, transparent 70%)`,
      zIndex: 1,
    },
    mainContent: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : '2fr 1fr',
      gap: isMobile ? '2rem' : '4rem',
      marginBottom: isMobile ? '2rem' : '4rem',
    },
    brandSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '1rem' : '1.5rem',
      textAlign: isMobile ? 'center' : 'left',
    },
    logo: {
      fontSize: isMobile ? '1.8rem' : '2.2rem',
      fontWeight: 'bold',
      marginBottom: isMobile ? '0.5rem' : '1rem',
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
      fontSize: isMobile ? '0.9rem' : '1rem',
      opacity: 0.8,
      lineHeight: '1.8',
      maxWidth: isMobile ? '100%' : '300px',
      color: theme.colors.white,
      margin: isMobile ? '0 auto' : 0,
    },
    statsContainer: {
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-start',
      gap: isMobile ? '1rem' : '2rem',
      marginTop: isMobile ? '1rem' : '1rem',
      flexWrap: 'wrap',
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMobile ? 'center' : 'flex-start',
      minWidth: isMobile ? '80px' : 'auto',
    },
    statNumber: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: '700',
      color: theme.colors.brickRed,
      fontFamily: theme.fonts.code,
      lineHeight: 1.2,
    },
    statLabel: {
      fontSize: isMobile ? '0.75rem' : '0.85rem',
      opacity: 0.6,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    sectionTitle: {
      fontFamily: theme.fonts.heading || theme.fonts.body,
      fontSize: isMobile ? '1.1rem' : '1.2rem',
      fontWeight: '600',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      color: theme.colors.white,
      position: 'relative',
      paddingBottom: '0.5rem',
      borderBottom: `2px solid ${theme.colors.brickRed}30`,
      textAlign: isMobile ? 'center' : 'left',
    },
    quickLinks: {
      display: 'flex',
      flexDirection: isMobile ? 'row' : 'column',
      justifyContent: isMobile ? 'center' : 'flex-start',
      flexWrap: 'wrap',
      gap: isMobile ? '1rem' : '1rem',
    },
    quickLink: {
      color: theme.colors.white,
      opacity: 0.7,
      textDecoration: 'none',
      fontFamily: theme.fonts.body,
      fontSize: isMobile ? '0.9rem' : '0.95rem',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: isMobile ? '0.5rem' : '0.3rem 0',
      borderBottom: '1px solid transparent',
    },
    quickLinkHover: {
      opacity: 1,
      color: theme.colors.brickRed,
      borderBottomColor: theme.colors.brickRed,
      transform: isMobile ? 'none' : 'translateX(5px)',
    },
    linkArrow: {
      fontSize: '1.2rem',
      opacity: 0,
      transition: 'all 0.3s ease',
      display: isMobile ? 'none' : 'inline',
    },
    bottomBar: {
      borderTop: `1px solid ${theme.colors.brickRed}20`,
      paddingTop: isMobile ? '1.5rem' : '2rem',
      marginTop: isMobile ? '2rem' : '3rem',
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1.5rem',
    },
    copyright: {
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      opacity: 0.6,
      fontFamily: theme.fonts.body,
      textAlign: isMobile ? 'center' : 'left',
      width: isMobile ? '100%' : 'auto',
    },
    newsletterContainer: {
      marginTop: isMobile ? '2rem' : '3rem',
      padding: isMobile ? '1.5rem' : '2rem',
      background: 'rgba(255, 255, 255, 0.02)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
    },
    newsletterTitle: {
      fontSize: isMobile ? '1.1rem' : '1.2rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: theme.colors.white,
      textAlign: isMobile ? 'center' : 'left',
    },
    newsletterText: {
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      opacity: 0.7,
      marginBottom: '1.5rem',
      textAlign: isMobile ? 'center' : 'left',
    },
    newsletterForm: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '1rem',
    },
    newsletterInput: {
      flex: 1,
      padding: isMobile ? '0.8rem' : '0.8rem 1.2rem',
      background: 'rgba(255, 255, 255, 0.05)',
      border: `1px solid rgba(255, 255, 255, 0.1)`,
      borderRadius: '8px',
      color: theme.colors.white,
      fontFamily: theme.fonts.body,
      outline: 'none',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '0.9rem' : '1rem',
      minHeight: isMobile ? '44px' : 'auto',
    },
    newsletterButton: {
      padding: isMobile ? '0.8rem' : '0.8rem 2rem',
      background: `linear-gradient(135deg, ${theme.colors.brickRed}, ${theme.colors.slateBlue})`,
      border: 'none',
      borderRadius: '8px',
      color: theme.colors.white,
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: theme.fonts.body,
      fontSize: isMobile ? '0.9rem' : '1rem',
      minHeight: isMobile ? '44px' : 'auto',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.decoration}></div>
      <div style={styles.decoration2}></div>

      <div style={styles.container}>
        <div style={styles.mainContent}>
          <div style={styles.brandSection}>
            <div style={styles.logo}>
              <span style={styles.canvasPart}>Canvas</span>
              <span style={styles.amp}>&</span>
              <span style={styles.codePart}>Code</span>
            </div>
            <p style={styles.tagline}>
              {isMobile 
                ? "Beautiful design meets powerful code."
                : "Where beautiful design meets powerful code. Creating digital experiences that grow businesses and delight users."}
            </p>
            
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

          <div>
            <h4 style={styles.sectionTitle}>Quick Links</h4>
            <div style={styles.quickLinks}>
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  style={{
                    ...styles.quickLink,
                    ...(hoveredLink === index && !isMobile ? styles.quickLinkHover : {}),
                  }}
                  onMouseEnter={() => !isMobile && setHoveredLink(index)}
                  onMouseLeave={() => !isMobile && setHoveredLink(null)}
                >
                  <span>{link.icon}</span>
                  {link.name}
                  <span style={styles.linkArrow}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.newsletterContainer}>
          <h5 style={styles.newsletterTitle}>Stay in the loop</h5>
          <p style={styles.newsletterText}>
            {isMobile 
              ? "Get monthly insights on design & dev." 
              : "Get monthly insights on design, development, and creative business."}
          </p>
          <form style={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder={isMobile ? "Your email" : "Enter your email"}
              style={styles.newsletterInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" style={styles.newsletterButton}>
              {isMobile ? "Subscribe" : "Subscribe"}
            </button>
          </form>
        </div>

        <div style={styles.bottomBar}>
          <div style={styles.copyright}>
            © {currentYear} Canvas & Code. {isMobile ? "" : "Crafted with precision and passion."}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;