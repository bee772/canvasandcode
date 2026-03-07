// src/components/Services.jsx
import React, { useState } from 'react';
import { theme } from '../styles/theme';
import './Services.css'; // We'll create this for additional animations

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const canvasServices = [
    { 
      icon: '🎨', 
      title: 'UI/UX Design', 
      desc: 'Beautiful, intuitive flows that users love',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
      color: theme.colors.brickRed
    },
    { 
      icon: '✏️', 
      title: 'Brand Identity', 
      desc: 'Strategy & storytelling through design',
      features: ['Logo Design', 'Color Theory', 'Typography', 'Brand Guidelines'],
      color: theme.colors.brickRed
    },
    { 
      icon: '🖌️', 
      title: 'Visual Design', 
      desc: 'Color, layout, typography that pops',
      features: ['UI Components', 'Design Systems', 'Responsive Design', 'Animation'],
      color: theme.colors.brickRed
    },
  ];

  const codeServices = [
    { 
      icon: '💻', 
      title: 'Web Development', 
      desc: 'Clean, semantic, performant code',
      features: ['React/Next.js', 'Node.js', 'API Integration', 'Database Design'],
      color: theme.colors.slateBlue
    },
    { 
      icon: '🛒', 
      title: 'E-commerce', 
      desc: 'Secure, scalable online stores',
      features: ['Payment Integration', 'Inventory Management', 'Shopping Cart', 'Order Processing'],
      color: theme.colors.slateBlue
    },
    { 
      icon: '⚡', 
      title: 'Performance', 
      desc: 'Speed & SEO optimization',
      features: ['Lighthouse Optimization', 'SEO Best Practices', 'Analytics Setup', 'Core Web Vitals'],
      color: theme.colors.slateBlue
    },
  ];

  const allServices = [...canvasServices, ...codeServices];

  const styles = {
    section: {
      padding: theme.spacing?.xxl || '6rem 2rem',
      backgroundColor: theme.colors.white,
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
      top: '-100px',
      right: '-50px',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${theme.colors.brickRed}10, transparent 70%)`,
      zIndex: 1,
    },
    decoration2: {
      position: 'absolute',
      bottom: '-150px',
      left: '-80px',
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${theme.colors.slateBlue}10, transparent 70%)`,
      zIndex: 1,
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: 'clamp(2rem, 5vw, 2.8rem)',
      marginBottom: '1rem',
      color: theme.colors.obsidian,
      fontFamily: theme.fonts.heading || theme.fonts.body,
      fontWeight: '700',
    },
    sectionSub: {
      textAlign: 'center',
      color: theme.colors.obsidian,
      opacity: '0.7',
      marginBottom: '3rem',
      fontSize: '1.1rem',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    // Tab navigation
    tabContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '3rem',
      flexWrap: 'wrap',
    },
    tab: {
      padding: '0.8rem 2rem',
      borderRadius: theme.borderRadius?.xl || '50px',
      border: 'none',
      background: 'transparent',
      color: theme.colors.obsidian,
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    tabActive: {
      background: `linear-gradient(135deg, ${theme.colors.brickRed}20, ${theme.colors.slateBlue}20)`,
      color: theme.colors.obsidian,
      boxShadow: theme.shadows?.sm || '0 2px 4px rgba(0,0,0,0.1)',
    },
    tabIndicator: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '3px',
      background: `linear-gradient(90deg, ${theme.colors.brickRed}, ${theme.colors.slateBlue})`,
      transform: 'scaleX(0)',
      transition: 'transform 0.3s ease',
    },
    // Grid layout
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem',
    },
    // Card styles
    card: {
      padding: '2rem',
      backgroundColor: theme.colors.linen,
      borderRadius: theme.borderRadius?.lg || '16px',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      cursor: 'pointer',
    },
    cardCanvas: {
      borderTop: `4px solid ${theme.colors.brickRed}`,
    },
    cardCode: {
      borderTop: `4px solid ${theme.colors.slateBlue}`,
    },
    cardHover: {
      transform: 'translateY(-10px)',
      boxShadow: theme.shadows?.xl || '0 20px 40px rgba(0,0,0,0.1)',
    },
    // Card shine effect
    cardShine: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      pointerEvents: 'none',
    },
    icon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      display: 'inline-block',
      position: 'relative',
      zIndex: 2,
    },
    cardTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: theme.colors.obsidian,
      fontFamily: theme.fonts.heading || theme.fonts.body,
      fontWeight: '600',
      position: 'relative',
      zIndex: 2,
    },
    cardDesc: {
      color: theme.colors.obsidian,
      opacity: '0.7',
      lineHeight: '1.7',
      marginBottom: '1.5rem',
      fontSize: '1rem',
      position: 'relative',
      zIndex: 2,
    },
    // Features list
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
      position: 'relative',
      zIndex: 2,
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      fontSize: '0.95rem',
      color: theme.colors.obsidian,
      opacity: '0.8',
      transform: 'translateX(0)',
      transition: 'transform 0.3s ease',
    },
    featureBullet: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: (color) => color,
      display: 'inline-block',
    },
    // Row labels (for original layout)
    rowLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      marginBottom: '2rem',
      fontSize: '1.3rem',
      fontWeight: '600',
      fontFamily: theme.fonts.heading || theme.fonts.body,
    },
    canvasLabel: {
      color: theme.colors.brickRed,
      borderLeft: `4px solid ${theme.colors.brickRed}`,
      paddingLeft: '1rem',
    },
    codeLabel: {
      color: theme.colors.slateBlue,
      borderLeft: `4px solid ${theme.colors.slateBlue}`,
      paddingLeft: '1rem',
    },
    // CTA section
    ctaContainer: {
      textAlign: 'center',
      marginTop: '4rem',
      padding: '3rem',
      background: `linear-gradient(135deg, ${theme.colors.brickRed}10, ${theme.colors.slateBlue}10)`,
      borderRadius: theme.borderRadius?.xl || '24px',
      position: 'relative',
      overflow: 'hidden',
    },
    ctaTitle: {
      fontSize: '1.8rem',
      marginBottom: '1rem',
      color: theme.colors.obsidian,
      fontWeight: '700',
    },
    ctaText: {
      fontSize: '1.1rem',
      opacity: 0.8,
      marginBottom: '2rem',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    ctaButton: {
      padding: '1rem 3rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      background: `linear-gradient(135deg, ${theme.colors.brickRed}, ${theme.colors.slateBlue})`,
      color: theme.colors.white,
      border: 'none',
      borderRadius: theme.borderRadius?.xl || '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: theme.shadows?.md || '0 4px 6px rgba(0,0,0,0.1)',
      position: 'relative',
      zIndex: 2,
    },
    // Media queries
    '@media (max-width: 768px)': {
      section: {
        padding: '3rem 1rem',
      },
      ctaContainer: {
        padding: '2rem 1rem',
      },
      tab: {
        padding: '0.6rem 1.5rem',
      },
    },
  };

  // Filter services based on active tab
  const getFilteredServices = () => {
    switch(activeTab) {
      case 'canvas':
        return canvasServices;
      case 'code':
        return codeServices;
      default:
        return allServices;
    }
  };

  const filteredServices = getFilteredServices();

  return (
    <section style={styles.section} id="services">
      {/* Decorative elements */}
      <div style={styles.decoration}></div>
      <div style={styles.decoration2}></div>

      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>What I Build</h2>
        <p style={styles.sectionSub}>
          From concept to code, I deliver complete digital solutions 
          that combine beautiful design with powerful functionality
        </p>

        {/* Tab Navigation */}
        <div style={styles.tabContainer}>
          <button
            style={{
              ...styles.tab,
              ...(activeTab === 'all' ? styles.tabActive : {}),
            }}
            onClick={() => setActiveTab('all')}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('.tab-indicator').style.transform = 'scaleX(1)';
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'all') {
                e.currentTarget.querySelector('.tab-indicator').style.transform = 'scaleX(0)';
              }
            }}
          >
            All Services
            <span className="tab-indicator" style={styles.tabIndicator}></span>
          </button>
          <button
            style={{
              ...styles.tab,
              ...(activeTab === 'canvas' ? styles.tabActive : {}),
            }}
            onClick={() => setActiveTab('canvas')}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('.tab-indicator').style.transform = 'scaleX(1)';
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'canvas') {
                e.currentTarget.querySelector('.tab-indicator').style.transform = 'scaleX(0)';
              }
            }}
          >
            🎨 The Canvas (Design)
            <span className="tab-indicator" style={styles.tabIndicator}></span>
          </button>
          <button
            style={{
              ...styles.tab,
              ...(activeTab === 'code' ? styles.tabActive : {}),
            }}
            onClick={() => setActiveTab('code')}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('.tab-indicator').style.transform = 'scaleX(1)';
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'code') {
                e.currentTarget.querySelector('.tab-indicator').style.transform = 'scaleX(0)';
              }
            }}
          >
            💻 The Code (Development)
            <span className="tab-indicator" style={styles.tabIndicator}></span>
          </button>
        </div>

        {/* Services Grid */}
        <div style={styles.grid}>
          {filteredServices.map((service, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(service.color === theme.colors.brickRed ? styles.cardCanvas : styles.cardCode),
                ...(hoveredCard === `${service.title}-${index}` ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHoveredCard(`${service.title}-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Shine effect */}
              <div 
                style={{
                  ...styles.cardShine,
                  opacity: hoveredCard === `${service.title}-${index}` ? 1 : 0,
                }}
              ></div>
              
              <div style={styles.icon}>{service.icon}</div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDesc}>{service.desc}</p>
              
              {/* Features list - appears on hover */}
              {hoveredCard === `${service.title}-${index}` && (
                <ul style={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={styles.featureItem}>
                      <span style={{...styles.featureBullet, background: service.color}}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Original layout with separate rows (optional, can be removed if you prefer the tabbed view) */}
        {activeTab === 'all' && (
          <>
            <div style={{...styles.rowLabel, ...styles.canvasLabel}}>
              <span>🎨 The Canvas (Design)</span>
            </div>
            <div style={styles.grid}>
              {canvasServices.map((service, index) => (
                <div key={index} style={{...styles.card, ...styles.cardCanvas}}>
                  <div style={styles.icon}>{service.icon}</div>
                  <h3 style={styles.cardTitle}>{service.title}</h3>
                  <p style={styles.cardDesc}>{service.desc}</p>
                </div>
              ))}
            </div>

            <div style={{...styles.rowLabel, ...styles.codeLabel, marginTop: '3rem'}}>
              <span>💻 The Code (Development)</span>
            </div>
            <div style={styles.grid}>
              {codeServices.map((service, index) => (
                <div key={index} style={{...styles.card, ...styles.cardCode}}>
                  <div style={styles.icon}>{service.icon}</div>
                  <h3 style={styles.cardTitle}>{service.title}</h3>
                  <p style={styles.cardDesc}>{service.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* CTA Section */}
        <div style={styles.ctaContainer}>
          <h3 style={styles.ctaTitle}>Ready to Start Your Project?</h3>
          <p style={styles.ctaText}>
            Let's collaborate and bring your vision to life with the perfect blend 
            of design and development.
          </p>
          <button 
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = theme.shadows?.xl || '0 20px 40px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = theme.shadows?.md || '0 4px 6px rgba(0,0,0,0.1)';
            }}
            onClick={() => window.location.href = '#apply'}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;