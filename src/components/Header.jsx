// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { theme } from '../styles/theme';
import Button from './UI/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for header shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    header: {
      backgroundColor: theme.colors.linen,
      padding: scrolled ? '0.5rem 2rem' : '1rem 2rem',
      borderBottom: `1px solid ${theme.colors.lightGray}`,
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 4px 10px rgba(0,0,0,0.05)' : 'none',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
    },
    canvasPart: {
      fontFamily: theme.fonts.canvas,
      color: theme.colors.brickRed,
      fontStyle: 'italic',
    },
    codePart: {
      fontFamily: theme.fonts.code,
      color: theme.colors.slateBlue,
    },
    amp: {
      fontFamily: theme.fonts.body,
      color: theme.colors.obsidian,
      margin: '0 0.2rem',
    },
    profileContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '0.3rem 1rem 0.3rem 0.3rem',
      backgroundColor: scrolled ? 'transparent' : theme.colors.white,
      borderRadius: '40px',
      border: scrolled ? 'none' : `1px solid ${theme.colors.lightGray}`,
      transition: 'all 0.3s ease',
    },
    profileImage: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: `2px solid ${theme.colors.brickRed}`,
    },
    profileName: {
      display: scrolled ? 'none' : 'block',
      fontFamily: theme.fonts.body,
      fontSize: '0.9rem',
      fontWeight: '500',
      color: theme.colors.obsidian,
    },
    profileTitle: {
      display: scrolled ? 'none' : 'block',
      fontFamily: theme.fonts.body,
      fontSize: '0.8rem',
      color: theme.colors.obsidian,
      opacity: '0.6',
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
      color: theme.colors.obsidian,
      fontFamily: theme.fonts.body,
      fontWeight: '500',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
    linkHover: {
      color: theme.colors.brickRed,
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: theme.colors.obsidian,
    },
    // Mobile styles
    '@media (max-width: 768px)': {
      mobileMenuButton: {
        display: 'block',
      },
      navLinks: {
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        position: 'absolute',
        top: '70px',
        left: 0,
        right: 0,
        backgroundColor: theme.colors.linen,
        padding: '2rem',
        borderBottom: `1px solid ${theme.colors.lightGray}`,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.9)',
      },
      profileContainer: {
        display: 'none', // Hide profile on mobile to save space
      },
    },
  };

  // Handle link hover
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.leftSection}>
          <div style={styles.logo}>
            <span style={styles.canvasPart}>Canvas</span>
            <span style={styles.amp}>&</span>
            <span style={styles.codePart}>Code</span>
          </div>
          
          {/* Profile Image Section - THIS IS WHERE YOUR PHOTO GOES */}
          <div style={styles.profileContainer}>
            <img 
              src="/images/profile.png" // Replace with your image path
              alt="Your Name - Web Developer & Designer"
              style={styles.profileImage}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/40x40?text=You'; // Fallback
              }}
            />
            <div>
              <div style={styles.profileName}>Canvas & Code</div>
              <div style={styles.profileTitle}>Dev + Design</div>
            </div>
          </div>
        </div>

        <button 
          style={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <div style={styles.navLinks}>
          {['Work', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                ...styles.link,
                ...(hoveredLink === item ? styles.linkHover : {}),
              }}
              onMouseEnter={() => setHoveredLink(item)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {item}
            </a>
          ))}
          <a href="#apply" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="small">Hire Me</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;