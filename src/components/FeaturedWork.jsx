// src/components/FeaturedWork.jsx
import React, { useState, useEffect } from 'react';
import { theme } from '../styles/theme';
import './FeaturedWork.css';

const FeaturedWork = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 768;
  // isSmallDesktop removed since it's not used

  const projects = [
    {
      title: 'Click Crew',
      category: 'E-commerce',
      image: '/images/click.png',
      fallbackIcon: '🛒',
      color: theme.colors.brickRed,
      link: 'https://click-crew.vercel.app/',
      description: isMobile 
        ? 'Modern e-commerce platform' 
        : 'Modern e-commerce platform with seamless shopping experience',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Let Us Buy 365',
      category: isMobile ? 'E-commerce Affiliate' : 'E-commerce Affiliate Platform',
      image: '/images/Let Us Buy Logo.png',
      fallbackIcon: '🛍️',
      color: theme.colors.slateBlue,
      link: 'https://letusbuy.vercel.app/',
      description: isMobile
        ? 'Affiliate marketing platform'
        : 'Affiliate marketing platform connecting buyers with sellers',
      technologies: ['Next.js', 'Express', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'Creative Studio',
      category: isMobile ? 'Portfolio + CMS' : 'Portfolio + CMS',
      image: '/images/creative-studio.jpg',
      fallbackIcon: '📸',
      color: theme.colors.brickRed,
      link: '#',
      description: isMobile
        ? 'Dynamic portfolio website'
        : 'Dynamic portfolio website with content management system',
      technologies: ['React', 'Sanity.io', 'Tailwind CSS', 'Vercel'],
    },
  ];

  const handleImageError = (index) => {
    setImageErrors(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const getGridColumns = () => {
    if (isMobile) return '1fr';
    if (isTablet) return 'repeat(2, 1fr)';
    return 'repeat(3, 1fr)';
  };

  const getCardPadding = () => {
    if (isMobile) return '1rem';
    if (isTablet) return '1.5rem';
    return '1.8rem';
  };

  const styles = {
    section: {
      padding: isMobile ? '3rem 1rem' : isTablet ? '4rem 1.5rem' : '6rem 2rem',
      backgroundColor: theme.colors.linen,
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
      top: '-50px',
      right: '-50px',
      width: isMobile ? '150px' : '300px',
      height: isMobile ? '150px' : '300px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${theme.colors.brickRed}15, transparent 70%)`,
      zIndex: 1,
    },
    decoration2: {
      position: 'absolute',
      bottom: '-100px',
      left: '-100px',
      width: isMobile ? '200px' : '400px',
      height: isMobile ? '200px' : '400px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${theme.colors.slateBlue}15, transparent 70%)`,
      zIndex: 1,
    },
    title: {
      textAlign: 'center',
      fontSize: isMobile ? '2rem' : isTablet ? '2.4rem' : 'clamp(2rem, 5vw, 2.8rem)',
      marginBottom: '1rem',
      color: theme.colors.obsidian,
      fontFamily: theme.fonts.heading || theme.fonts.body,
      fontWeight: '700',
      lineHeight: 1.3,
      padding: isMobile ? '0 0.5rem' : 0,
    },
    subtitle: {
      textAlign: 'center',
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      marginBottom: isMobile ? '2rem' : '3rem',
      color: theme.colors.obsidian,
      opacity: 0.7,
      maxWidth: isMobile ? '100%' : '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: isMobile ? '0 1rem' : 0,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: getGridColumns(),
      gap: isMobile ? '1.5rem' : isTablet ? '1.5rem' : '2rem',
    },
    card: {
      backgroundColor: theme.colors.white,
      borderRadius: isMobile ? '12px' : '16px',
      overflow: 'hidden',
      boxShadow: theme.shadows?.md || '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      cursor: 'pointer',
      position: 'relative',
      border: '1px solid rgba(0, 0, 0, 0.05)',
    },
    imageWrapper: {
      position: 'relative',
      height: isMobile ? '200px' : isTablet ? '240px' : '280px',
      overflow: 'hidden',
      backgroundColor: theme.colors.slateBlue + '20',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.6s ease',
      display: 'block',
    },
    fallbackImage: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? '3rem' : '5rem',
      backgroundColor: (color) => color + '20',
      color: (color) => color,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
      opacity: 0,
      transition: 'opacity 0.4s ease',
      display: 'flex',
      alignItems: 'flex-end',
      padding: isMobile ? '1rem' : '2rem',
    },
    overlayContent: {
      transform: 'translateY(20px)',
      transition: 'transform 0.4s ease',
      color: 'white',
    },
    overlayTitle: {
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
    },
    overlayLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: 'white',
      textDecoration: 'none',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      borderBottom: '2px solid white',
      paddingBottom: '0.2rem',
    },
    content: {
      padding: getCardPadding(),
    },
    projectTitle: {
      fontSize: isMobile ? '1.2rem' : '1.4rem',
      marginBottom: '0.5rem',
      color: theme.colors.obsidian,
      fontFamily: theme.fonts.heading || theme.fonts.body,
      fontWeight: '600',
      lineHeight: 1.3,
    },
    category: {
      color: theme.colors.obsidian,
      opacity: '0.6',
      marginBottom: '1rem',
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    description: {
      color: theme.colors.obsidian,
      opacity: '0.8',
      marginBottom: '1.5rem',
      fontSize: isMobile ? '0.9rem' : '0.95rem',
      lineHeight: '1.6',
    },
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.5rem',
    },
    techTag: {
      padding: isMobile ? '0.2rem 0.6rem' : '0.3rem 0.8rem',
      backgroundColor: (color) => color + '15',
      color: (color) => color,
      borderRadius: '20px',
      fontSize: isMobile ? '0.7rem' : '0.8rem',
      fontWeight: '500',
      border: `1px solid ${(color) => color}30`,
    },
    link: {
      color: theme.colors.brickRed,
      textDecoration: 'none',
      fontWeight: '600',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '0.9rem' : '0.95rem',
      borderBottom: `2px solid transparent`,
      paddingBottom: '0.2rem',
    },
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(3, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? '1rem' : '2rem',
      marginTop: isMobile ? '2.5rem' : '4rem',
      padding: isMobile ? '1.5rem' : isTablet ? '2rem' : '3rem',
      background: `linear-gradient(135deg, ${theme.colors.brickRed}10, ${theme.colors.slateBlue}10)`,
      borderRadius: isMobile ? '16px' : '24px',
    },
    statItem: {
      textAlign: 'center',
      padding: isMobile ? '1rem' : 0,
      backgroundColor: isMobile ? 'rgba(255,255,255,0.5)' : 'transparent',
      borderRadius: isMobile ? '8px' : 0,
    },
    statNumber: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: '700',
      color: theme.colors.brickRed,
      fontFamily: theme.fonts.code,
      display: 'block',
      marginBottom: '0.5rem',
    },
    statLabel: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      opacity: 0.7,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  };

  return (
    <section style={styles.section} id="work">
      <div style={styles.decoration}></div>
      <div style={styles.decoration2}></div>

      <div style={styles.container}>
        <h2 style={styles.title}>Featured Work</h2>
        <p style={styles.subtitle}>
          {isMobile 
            ? "Recent projects I've crafted" 
            : "Explore some of my recent projects, each crafted with attention to detail and focused on delivering exceptional user experiences."}
        </p>

        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                transform: hoveredCard === index && !isMobile ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoveredCard === index && !isMobile
                  ? theme.shadows?.xl || '0 20px 40px rgba(0,0,0,0.2)'
                  : theme.shadows?.md || '0 4px 6px rgba(0,0,0,0.1)',
              }}
              onMouseEnter={() => !isMobile && setHoveredCard(index)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              onClick={() => isMobile && window.open(project.link, '_blank')}
            >
              <div style={styles.imageWrapper}>
                {!imageErrors[index] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      ...styles.image,
                      transform: hoveredCard === index && !isMobile ? 'scale(1.1)' : 'scale(1)',
                    }}
                    onError={() => handleImageError(index)}
                    loading="lazy"
                  />
                ) : (
                  <div style={{
                    ...styles.fallbackImage,
                    backgroundColor: project.color + '20',
                    color: project.color,
                  }}>
                    {project.fallbackIcon}
                  </div>
                )}

                {!isMobile && (
                  <div style={{
                    ...styles.overlay,
                    opacity: hoveredCard === index ? 1 : 0,
                  }}>
                    <div style={{
                      ...styles.overlayContent,
                      transform: hoveredCard === index ? 'translateY(0)' : 'translateY(20px)',
                    }}>
                      <h4 style={styles.overlayTitle}>View Project</h4>
                      <a 
                        href={project.link}
                        style={styles.overlayLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo <span>→</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div style={styles.content}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.category}>{project.category}</p>
                <p style={styles.description}>{project.description}</p>

                <div style={styles.techStack}>
                  {project.technologies.slice(0, isMobile ? 2 : 4).map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        ...styles.techTag,
                        backgroundColor: project.color + '15',
                        color: project.color,
                        borderColor: project.color + '30',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {isMobile && project.technologies.length > 2 && (
                    <span style={styles.techTag}>+{project.technologies.length - 2}</span>
                  )}
                </div>

                <a
                  href={project.link}
                  style={{
                    ...styles.link,
                    color: project.color,
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.gap = '0.8rem';
                      e.currentTarget.style.borderBottomColor = project.color;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.gap = '0.5rem';
                      e.currentTarget.style.borderBottomColor = 'transparent';
                    }
                  }}
                >
                  {isMobile ? 'View Project' : 'View Case Study'}
                  <span style={{ fontSize: '1.2rem' }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

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
    </section>
  );
};

export default FeaturedWork;