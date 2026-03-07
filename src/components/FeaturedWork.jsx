// src/components/FeaturedWork.jsx
import React, { useState } from 'react';
import { theme } from '../styles/theme';
import './FeaturedWork.css'; // We'll create this for additional animations

const FeaturedWork = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const projects = [
    {
      title: 'Click Crew',
      category: 'E-commerce',
      image: '/images/click.png',
      fallbackIcon: '🛒',
      color: theme.colors.brickRed,
      link: 'https://click-crew.vercel.app/',
      description: 'Modern e-commerce platform with seamless shopping experience',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Let Us Buy 365',
      category: 'E-commerce Affiliate Platform',
      image: '/images/Let Us Buy Logo.png',
      fallbackIcon: '🛍️',
      color: theme.colors.slateBlue,
      link: 'https://letusbuy.vercel.app/',
      description: 'Affiliate marketing platform connecting buyers with sellers',
      technologies: ['Next.js', 'Express', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'Creative Studio',
      category: 'Portfolio + CMS',
      image: '/images/creative-studio.jpg',
      fallbackIcon: '📸',
      color: theme.colors.brickRed,
      link: '#',
      description: 'Dynamic portfolio website with content management system',
      technologies: ['React', 'Sanity.io', 'Tailwind CSS', 'Vercel'],
    },
  ];

  const handleImageError = (index) => {
    setImageErrors(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const styles = {
    section: {
      padding: theme.spacing?.xxl || '6rem 2rem',
      backgroundColor: theme.colors.linen,
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
      top: '-50px',
      right: '-50px',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${theme.colors.brickRed}15, transparent 70%)`,
      zIndex: 1,
    },
    decoration2: {
      position: 'absolute',
      bottom: '-100px',
      left: '-100px',
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${theme.colors.slateBlue}15, transparent 70%)`,
      zIndex: 1,
    },
    title: {
      textAlign: 'center',
      fontSize: 'clamp(2rem, 5vw, 2.8rem)',
      marginBottom: '1rem',
      color: theme.colors.obsidian,
      fontFamily: theme.fonts.heading || theme.fonts.body,
      fontWeight: '700',
    },
    subtitle: {
      textAlign: 'center',
      fontSize: '1.1rem',
      marginBottom: '3rem',
      color: theme.colors.obsidian,
      opacity: 0.7,
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
    },
    card: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius?.lg || '16px',
      overflow: 'hidden',
      boxShadow: theme.shadows?.md || '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      cursor: 'pointer',
      position: 'relative',
      border: '1px solid rgba(0, 0, 0, 0.05)',
    },
    imageWrapper: {
      position: 'relative',
      height: '280px',
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
      fontSize: '5rem',
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
      padding: '2rem',
    },
    overlayContent: {
      transform: 'translateY(20px)',
      transition: 'transform 0.4s ease',
      color: 'white',
    },
    overlayTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
    },
    overlayLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: 'white',
      textDecoration: 'none',
      fontSize: '0.95rem',
      borderBottom: '2px solid white',
      paddingBottom: '0.2rem',
    },
    content: {
      padding: '1.8rem',
    },
    projectTitle: {
      fontSize: '1.4rem',
      marginBottom: '0.5rem',
      color: theme.colors.obsidian,
      fontFamily: theme.fonts.heading || theme.fonts.body,
      fontWeight: '600',
    },
    category: {
      color: theme.colors.obsidian,
      opacity: '0.6',
      marginBottom: '1rem',
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    description: {
      color: theme.colors.obsidian,
      opacity: '0.8',
      marginBottom: '1.5rem',
      fontSize: '0.95rem',
      lineHeight: '1.6',
    },
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.5rem',
    },
    techTag: {
      padding: '0.3rem 0.8rem',
      backgroundColor: (color) => color + '15',
      color: (color) => color,
      borderRadius: theme.borderRadius?.sm || '20px',
      fontSize: '0.8rem',
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
      fontSize: '0.95rem',
      borderBottom: `2px solid transparent`,
      paddingBottom: '0.2rem',
    },
    // Stats section
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
      marginTop: '4rem',
      padding: '3rem',
      background: `linear-gradient(135deg, ${theme.colors.brickRed}10, ${theme.colors.slateBlue}10)`,
      borderRadius: theme.borderRadius?.xl || '24px',
    },
    statItem: {
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: theme.colors.brickRed,
      fontFamily: theme.fonts.code,
      display: 'block',
      marginBottom: '0.5rem',
    },
    statLabel: {
      fontSize: '1rem',
      opacity: 0.7,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    '@media (max-width: 968px)': {
      grid: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      statsContainer: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        padding: '2rem',
      },
    },
    '@media (max-width: 768px)': {
      grid: {
        gridTemplateColumns: '1fr',
      },
      statsContainer: {
        gridTemplateColumns: '1fr',
        gap: '1.5rem',
      },
      section: {
        padding: '3rem 1rem',
      },
    },
  };

  return (
    <section style={styles.section} id="work">
      {/* Decorative elements */}
      <div style={styles.decoration}></div>
      <div style={styles.decoration2}></div>

      <div style={styles.container}>
        <h2 style={styles.title}>Featured Work</h2>
        <p style={styles.subtitle}>
          Explore some of my recent projects, each crafted with attention to detail 
          and focused on delivering exceptional user experiences.
        </p>

        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoveredCard === index 
                  ? theme.shadows?.xl || '0 20px 40px rgba(0,0,0,0.2)'
                  : theme.shadows?.md || '0 4px 6px rgba(0,0,0,0.1)',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div style={styles.imageWrapper}>
                {!imageErrors[index] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      ...styles.image,
                      transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
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

                {/* Hover Overlay */}
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
              </div>

              {/* Content */}
              <div style={styles.content}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.category}>{project.category}</p>
                <p style={styles.description}>{project.description}</p>

                {/* Tech Stack */}
                <div style={styles.techStack}>
                  {project.technologies.map((tech, idx) => (
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
                </div>

                {/* Project Link */}
                <a
                  href={project.link}
                  style={{
                    ...styles.link,
                    color: project.color,
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = '0.8rem';
                    e.currentTarget.style.borderBottomColor = project.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = '0.5rem';
                    e.currentTarget.style.borderBottomColor = 'transparent';
                  }}
                >
                  View Case Study
                  <span style={{ fontSize: '1.2rem' }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div style={styles.statsContainer}>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>15+</span>
            <span style={styles.statLabel}>Projects Completed</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>15+</span>
            <span style={styles.statLabel}>Happy Clients</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>2+</span>
            <span style={styles.statLabel}>Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;