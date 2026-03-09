// src/components/Services.jsx
import React, { useState, useEffect } from 'react';
import { theme } from '../styles/theme';
import './Services.css';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 768;
  // isSmallDesktop removed since it's not used

  const canvasServices = [
    { 
      icon: '🎨', 
      title: 'UI/UX Design', 
      desc: isMobile ? 'Intuitive flows users love' : 'Beautiful, intuitive flows that users love',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
      color: theme.colors.brickRed
    },
    { 
      icon: '✏️', 
      title: 'Brand Identity', 
      desc: isMobile ? 'Strategy & storytelling' : 'Strategy & storytelling through design',
      features: ['Logo Design', 'Color Theory', 'Typography', 'Brand Guidelines'],
      color: theme.colors.brickRed
    },
    { 
      icon: '🖌️', 
      title: 'Visual Design', 
      desc: isMobile ? 'Design that pops' : 'Color, layout, typography that pops',
      features: ['UI Components', 'Design Systems', 'Responsive Design', 'Animation'],
      color: theme.colors.brickRed
    },
  ];

  const codeServices = [
    { 
      icon: '💻', 
      title: 'Web Development', 
      desc: isMobile ? 'Clean, performant code' : 'Clean, semantic, performant code',
      features: ['React/Next.js', 'Node.js', 'API Integration', 'Database Design'],
      color: theme.colors.slateBlue
    },
    { 
      icon: '🛒', 
      title: 'E-commerce', 
      desc: isMobile ? 'Secure online stores' : 'Secure, scalable online stores',
      features: ['Payment Integration', 'Inventory Management', 'Shopping Cart', 'Order Processing'],
      color: theme.colors.slateBlue
    },
    { 
      icon: '⚡', 
      title: 'Performance', 
      desc: isMobile ? 'Speed & SEO' : 'Speed & SEO optimization',
      features: ['Lighthouse Optimization', 'SEO Best Practices', 'Analytics Setup', 'Core Web Vitals'],
      color: theme.colors.slateBlue
    },
  ];

  const allServices = [...canvasServices, ...codeServices];

  const getGridColumns = () => {
    if (isMobile) return '1fr';
    if (isTablet) return 'repeat(2, 1fr)';
    return 'repeat(3, 1fr)';
  };

  const styles = {
    section: {
      padding: isMobile ? '3rem 1rem' : isTablet ? '4rem 1.5rem' : '6rem 2rem',
      backgroundColor: theme.colors.white,
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
      top: '-100px',
      right: '-50px',
      width: isMobile ? '150px' : '300px',
      height: isMobile ? '150px' : '300px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${theme.colors.brickRed}10, transparent 70%)`,
      zIndex: 1,
    },
    decoration2: {
      position: 'absolute',
      bottom: '-150px',
      left: '-80px',
      width: isMobile ? '200px' : '400px',
      height: isMobile ? '200px' : '400px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${theme.colors.slateBlue}10, transparent 70%)`,
      zIndex: 1,
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: isMobile ? '2rem' : isTablet ? '2.4rem' : 'clamp(2rem, 5vw, 2.8rem)',
      marginBottom: '1rem',
      color: theme.colors.obsidian,
      fontFamily: theme.fonts.heading || theme.fonts.body,
      fontWeight: '700',
      lineHeight: 1.3,
    },
    sectionSub: {
      textAlign: 'center',
      color: theme.colors.obsidian,
      opacity: '0.7',
      marginBottom: isMobile ? '2rem' : '3rem',
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      maxWidth: isMobile ? '100%' : '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: isMobile ? '0 1rem' : 0,
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '0.5rem' : '1rem',
      marginBottom: isMobile ? '2rem' : '3rem',
      flexWrap: 'wrap',
    },
    tab: {
      padding: isMobile ? '0.6rem 1rem' : '0.8rem 2rem',
      borderRadius: '50px',
      border: 'none',
      background: 'transparent',
      color: theme.colors.obsidian,
      fontSize: isMobile ? '0.8rem' : '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
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
    grid: {
      display: 'grid',
      gridTemplateColumns: getGridColumns(),
      gap: isMobile ? '1rem' : '2rem',
      marginBottom: '3rem',
    },
    card: {
      padding: isMobile ? '1.5rem' : '2rem',
      backgroundColor: theme.colors.linen,
      borderRadius: isMobile ? '12px' : '16px',
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
      transform: isMobile ? 'none' : 'translateY(-10px)',
      boxShadow: theme.shadows?.xl || '0 20px 40px rgba(0,0,0,0.1)',
    },
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
      fontSize: isMobile ? '2.5rem' : '3rem',
      marginBottom: isMobile ? '1rem' : '1.5rem',
      display: 'inline-block',
      position: 'relative',
      zIndex: 2,
    },
    cardTitle: {
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      marginBottom: '0.8rem',
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
      marginBottom: isMobile ? '1rem' : '1.5rem',
      fontSize: isMobile ? '0.9rem' : '1rem',
      position: 'relative',
      zIndex: 2,
    },
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
      fontSize: isMobile ? '0.85rem' : '0.95rem',
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
    rowLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      marginBottom: '2rem',
      fontSize: isMobile ? '1.2rem' : '1.3rem',
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
    ctaContainer: {
      textAlign: 'center',
      marginTop: '4rem',
      padding: isMobile ? '2rem 1rem' : '3rem',
      background: `linear-gradient(135deg, ${theme.colors.brickRed}10, ${theme.colors.slateBlue}10)`,
      borderRadius: isMobile ? '16px' : '24px',
      position: 'relative',
      overflow: 'hidden',
    },
    ctaTitle: {
      fontSize: isMobile ? '1.4rem' : '1.8rem',
      marginBottom: '1rem',
      color: theme.colors.obsidian,
      fontWeight: '700',
      lineHeight: 1.3,
    },
    ctaText: {
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      opacity: 0.8,
      marginBottom: '2rem',
      maxWidth: isMobile ? '100%' : '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: isMobile ? '0 0.5rem' : 0,
    },
    ctaButton: {
      padding: isMobile ? '0.8rem 2rem' : '1rem 3rem',
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: '600',
      background: `linear-gradient(135deg, ${theme.colors.brickRed}, ${theme.colors.slateBlue})`,
      color: theme.colors.white,
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: theme.shadows?.md || '0 4px 6px rgba(0,0,0,0.1)',
      position: 'relative',
      zIndex: 2,
      width: isMobile ? '100%' : 'auto',
      maxWidth: '300px',
    },
  };

  const filteredServices = activeTab === 'all' ? allServices : 
                          activeTab === 'canvas' ? canvasServices : codeServices;

  return (
    <section style={styles.section} id="services">
      <div style={styles.decoration}></div>
      <div style={styles.decoration2}></div>

      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>What I Build</h2>
        <p style={styles.sectionSub}>
          {isMobile 
            ? "Complete digital solutions combining design with functionality"
            : "From concept to code, I deliver complete digital solutions that combine beautiful design with powerful functionality"}
        </p>

        <div style={styles.tabContainer}>
          {!isMobile && (
            <>
              <button
                style={{
                  ...styles.tab,
                  ...(activeTab === 'all' ? styles.tabActive : {}),
                }}
                onClick={() => setActiveTab('all')}
                onMouseEnter={(e) => {
                  const indicator = e.currentTarget.querySelector('.tab-indicator');
                  if (indicator) indicator.style.transform = 'scaleX(1)';
                }}
                onMouseLeave={(e) => {
                  const indicator = e.currentTarget.querySelector('.tab-indicator');
                  if (indicator && activeTab !== 'all') {
                    indicator.style.transform = 'scaleX(0)';
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
                  const indicator = e.currentTarget.querySelector('.tab-indicator');
                  if (indicator) indicator.style.transform = 'scaleX(1)';
                }}
                onMouseLeave={(e) => {
                  const indicator = e.currentTarget.querySelector('.tab-indicator');
                  if (indicator && activeTab !== 'canvas') {
                    indicator.style.transform = 'scaleX(0)';
                  }
                }}
              >
                🎨 Design
                <span className="tab-indicator" style={styles.tabIndicator}></span>
              </button>
              <button
                style={{
                  ...styles.tab,
                  ...(activeTab === 'code' ? styles.tabActive : {}),
                }}
                onClick={() => setActiveTab('code')}
                onMouseEnter={(e) => {
                  const indicator = e.currentTarget.querySelector('.tab-indicator');
                  if (indicator) indicator.style.transform = 'scaleX(1)';
                }}
                onMouseLeave={(e) => {
                  const indicator = e.currentTarget.querySelector('.tab-indicator');
                  if (indicator && activeTab !== 'code') {
                    indicator.style.transform = 'scaleX(0)';
                  }
                }}
              >
                💻 Development
                <span className="tab-indicator" style={styles.tabIndicator}></span>
              </button>
            </>
          )}
        </div>

        <div style={styles.grid}>
          {filteredServices.map((service, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(service.color === theme.colors.brickRed ? styles.cardCanvas : styles.cardCode),
                ...(hoveredCard === `${service.title}-${index}` && !isMobile ? styles.cardHover : {}),
              }}
              onMouseEnter={() => !isMobile && setHoveredCard(`${service.title}-${index}`)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
            >
              <div 
                style={{
                  ...styles.cardShine,
                  opacity: hoveredCard === `${service.title}-${index}` && !isMobile ? 1 : 0,
                }}
              ></div>
              
              <div style={styles.icon}>{service.icon}</div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDesc}>{service.desc}</p>
              
              {(hoveredCard === `${service.title}-${index}` || isMobile) && (
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

        <div style={styles.ctaContainer}>
          <h3 style={styles.ctaTitle}>
            {isMobile ? "Ready to Start?" : "Ready to Start Your Project?"}
          </h3>
          <p style={styles.ctaText}>
            {isMobile 
              ? "Let's collaborate and bring your vision to life."
              : "Let's collaborate and bring your vision to life with the perfect blend of design and development."}
          </p>
          <button 
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = theme.shadows?.xl || '0 20px 40px rgba(0,0,0,0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = theme.shadows?.md || '0 4px 6px rgba(0,0,0,0.1)';
              }
            }}
            onClick={() => window.location.href = '#apply'}
          >
            {isMobile ? "Start Project" : "Start Your Project"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;