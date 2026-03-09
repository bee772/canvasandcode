// src/components/UI/Button.jsx
import React, { useState, useEffect } from 'react';
import { theme } from '../../styles/theme';

const Button = ({ children, variant = 'primary', size = 'medium', onClick, style = {} }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 480;
  // isTablet removed since it's not used

  const getSizeStyles = () => {
    if (isMobile) {
      return {
        small: {
          padding: '0.5rem 1rem',
          fontSize: '0.85rem',
        },
        medium: {
          padding: '0.7rem 1.5rem',
          fontSize: '0.95rem',
        },
        large: {
          padding: '0.9rem 2rem',
          fontSize: '1rem',
        },
      };
    }
    
    return {
      small: {
        padding: '0.5rem 1rem',
        fontSize: '0.9rem',
      },
      medium: {
        padding: '0.8rem 2rem',
        fontSize: '1rem',
      },
      large: {
        padding: '1rem 3rem',
        fontSize: '1.1rem',
      },
    };
  };

  const baseStyles = {
    ...getSizeStyles()[size],
    borderRadius: isMobile ? '6px' : '4px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: theme.fonts.body,
    fontWeight: '600',
    transition: 'all var(--transition-base)',
    minHeight: isMobile ? '44px' : 'auto',
    width: isMobile && size === 'large' ? '100%' : 'auto',
    ...style,
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-text)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    secondary: {
      backgroundColor: 'var(--btn-secondary-bg)',
      color: 'var(--btn-secondary-text)',
      border: `2px solid var(--btn-secondary-border)`,
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-slate-blue)',
      border: `1px solid var(--color-slate-blue)`,
    },
  };

  const buttonStyles = {
    ...baseStyles,
    ...variants[variant],
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button 
      style={buttonStyles} 
      onClick={handleClick}
      className={`btn btn-${variant} btn-${size}`}
    >
      {children}
    </button>
  );
};

export default Button;