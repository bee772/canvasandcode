// src/styles/theme.js
// All colors are now defined as CSS variables in theme.css
// Import this to use theme colors in JavaScript components

export const theme = {
  colors: {
    linen: 'var(--color-linen)',
    brickRed: 'var(--color-brick-red)',
    slateBlue: 'var(--color-slate-blue)',
    obsidian: 'var(--color-obsidian)',
    white: 'var(--color-white)',
    lightGray: 'var(--color-light-gray)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    error: 'var(--color-error)',
  },
  fonts: {
    canvas: "'Playfair Display', serif",
    code: "'Fira Code', monospace",
    body: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    heading: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  },
  spacing: {
    xs: 'var(--space-xs)',
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)',
    xl: 'var(--space-xl)',
    xxl: 'var(--space-xxl)',
  },
  borderRadius: {
    sm: 'var(--border-radius-sm)',
    md: 'var(--border-radius-md)',
    lg: 'var(--border-radius-lg)',
    xl: 'var(--border-radius-xl)',
    circle: 'var(--border-radius-circle)',
  },
  transitions: {
    fast: 'var(--transition-fast)',
    base: 'var(--transition-base)',
    slow: 'var(--transition-slow)',
  },
  shadows: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
  },
};
