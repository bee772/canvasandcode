// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { theme } from '../styles/theme';
import Button from './UI/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close mobile menu on resize to desktop
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 768;

  const styles = {
    header: {
      backgroundColor: theme.colors.linen,
      padding: scrolled 
        ? isMobile ? '0.5rem 1rem' : '0.5rem 2rem'
        : isMobile ? '1rem 1rem' : '1rem 2rem',
      borderBottom: `1px solid ${theme.colors.lightGray}`,
      position: 'sticky',
      top: 0,
      zIndex: 1000,
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
      gap: isMobile ? '1rem' : '2rem',
    },
    logo: {
      fontSize: isMobile ? '1.4rem' : isTablet ? '1.6rem' : '1.8rem',
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
      display: isMobile ? 'none' : 'flex', // Hide profile on mobile
      alignItems: 'center',
      gap: '0.8rem',
      padding: '0.3rem 1rem 0.3rem 0.3rem',
      backgroundColor: scrolled ? 'transparent' : theme.colors.white,
      borderRadius: '40px',
      border: scrolled ? 'none' : `1px solid ${theme.colors.lightGray}`,
      transition: 'all 0.3s ease',
    },
    profileImage: {
      width: isTablet ? '35px' : '40px',
      height: isTablet ? '35px' : '40px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: `2px solid ${theme.colors.brickRed}`,
    },
    profileName: {
      display: scrolled ? 'none' : 'block',
      fontFamily: theme.fonts.body,
      fontSize: isTablet ? '0.8rem' : '0.9rem',
      fontWeight: '500',
      color: theme.colors.obsidian,
    },
    profileTitle: {
      display: scrolled ? 'none' : 'block',
      fontFamily: theme.fonts.body,
      fontSize: isTablet ? '0.7rem' : '0.8rem',
      color: theme.colors.obsidian,
      opacity: '0.6',
    },
    navLinks: {
      display: 'flex',
      gap: isTablet ? '1.5rem' : '2rem',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
      color: theme.colors.obsidian,
      fontFamily: theme.fonts.body,
      fontWeight: '500',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      fontSize: isTablet ? '0.9rem' : '1rem',
      padding: isMobile ? '1rem 0' : 0,
    },
    linkHover: {
      color: theme.colors.brickRed,
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      fontSize: '2rem',
      cursor: 'pointer',
      color: theme.colors.obsidian,
      padding: '0.5rem',
      width: '44px',
      height: '44px',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease',
      '@media (hover: hover)': {
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.05)',
        },
      },
    },
    // Mobile menu overlay
    mobileMenuOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? 'visible' : 'hidden',
      transition: 'all 0.3s ease',
    },
    mobileNavLinks: {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      right: isOpen ? 0 : '-100%',
      width: '80%',
      maxWidth: '400px',
      height: '100vh',
      backgroundColor: theme.colors.linen,
      padding: '2rem',
      boxShadow: '-4px 0 10px rgba(0, 0, 0, 0.1)',
      transition: 'right 0.3s ease',
      zIndex: 1000,
      overflowY: 'auto',
    },
    mobileMenuHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
      paddingBottom: '1rem',
      borderBottom: `1px solid ${theme.colors.lightGray}`,
    },
    mobileLogo: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '2rem',
      cursor: 'pointer',
      color: theme.colors.obsidian,
      padding: '0.5rem',
      width: '44px',
      height: '44px',
    },
    mobileLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    mobileLink: {
      textDecoration: 'none',
      color: theme.colors.obsidian,
      fontFamily: theme.fonts.body,
      fontSize: '1.2rem',
      fontWeight: '500',
      padding: '1rem 0',
      borderBottom: `1px solid ${theme.colors.lightGray}`,
      transition: 'color 0.3s ease',
    },
    mobileButtonWrapper: {
      marginTop: '2rem',
      paddingTop: '1rem',
      borderTop: `1px solid ${theme.colors.lightGray}`,
    },
  };

  // Media queries handled via CSS class for mobile menu button
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.leftSection}>
            <div style={styles.logo}>
              <span style={styles.canvasPart}>Canvas</span>
              <span style={styles.amp}>&</span>
              <span style={styles.codePart}>Code</span>
            </div>
            
            <div style={styles.profileContainer}>
              <img 
                src="/images/profile.png"
                alt="Your Name - Web Developer & Designer"
                style={styles.profileImage}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/40x40?text=You';
                }}
              />
              <div>
                <div style={styles.profileName}>Canvas & Code</div>
                <div style={styles.profileTitle}>Dev + Design</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          {windowWidth > 768 ? (
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
                <Button variant="primary" size={isTablet ? "small" : "medium"}>Hire Me</Button>
              </a>
            </div>
          ) : (
            <button 
              style={styles.mobileMenuButton}
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          )}
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {windowWidth <= 768 && (
        <>
          <div 
            style={styles.mobileMenuOverlay}
            onClick={() => setIsOpen(false)}
          />
          <div style={styles.mobileNavLinks}>
            <div style={styles.mobileMenuHeader}>
              <span style={styles.mobileLogo}>
                <span style={styles.canvasPart}>Canvas</span>
                <span style={styles.amp}>&</span>
                <span style={styles.codePart}>Code</span>
              </span>
              <button 
                style={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div style={styles.mobileLinks}>
              {['Work', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={styles.mobileLink}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>

            <div style={styles.mobileButtonWrapper}>
              <a href="#apply" onClick={() => setIsOpen(false)}>
                <Button variant="primary" size="large" style={{ width: '100%' }}>
                  Hire Me
                </Button>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;