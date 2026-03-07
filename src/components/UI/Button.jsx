// src/components/UI/Button.jsx
import React from 'react';
import { theme } from '../../styles/theme';

const Button = ({ children, variant = 'primary', size = 'medium', onClick }) => {
  const baseStyles = {
    padding: size === 'small' ? '0.5rem 1rem' : '0.8rem 2rem',
    fontSize: size === 'small' ? '0.9rem' : '1rem',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: theme.fonts.body,
    fontWeight: '600',
    transition: 'all var(--transition-base)',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-text)',
    },
    secondary: {
      backgroundColor: 'var(--btn-secondary-bg)',
      color: 'var(--btn-secondary-text)',
      border: '2px solid var(--btn-secondary-border)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-slate-blue)',
      border: '1px solid var(--color-slate-blue)',
    },
  };

  const style = {
    ...baseStyles,
    ...variants[variant],
  };

  return (
    <button 
      style={style} 
      onClick={onClick}
      className={`btn btn-${variant} btn-${size}`}
    >
      {children}
    </button>
  );
};

export default Button;