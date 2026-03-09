// src/components/Testimonial.jsx
import React, { useState, useEffect } from 'react';
import { theme } from '../styles/theme';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 768;

  const testimonials = [
    {
      quote: isMobile 
        ? "Canvas & Code built a site that doubled our inquiries in 3 months. Stunning design and it performs."
        : "Canvas & Code didn't just build our site—they built a tool that doubled our inquiries in 3 months. The design is stunning and it actually performs.",
      author: "Sarah Jenkins",
      title: "Founder, Artisan Co.",
      image: "👩‍💼",
      rating: 5,
    },
    {
      quote: isMobile
        ? "Perfect blend of creativity and technical expertise. Our customers love the site."
        : "The perfect blend of creativity and technical expertise. They understood our brand vision and executed it flawlessly. Our customers constantly compliment the site.",
      author: "Michael Chen",
      title: "Director, Modern Shop",
      image: "👨‍💼",
      rating: 5,
    },
    {
      quote: isMobile
        ? "Finally a developer who cares about looks AND performance. Page speed improved by 60%."
        : "Finally a developer who cares about both how it looks AND how it works. Page speed improved by 60% and our bounce rate dropped significantly.",
      author: "Emily Rodriguez",
      title: "Creative Lead, Studio X",
      image: "👩‍🎨",
      rating: 5,
    },
  ];

  // Swipe handling for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
    if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const styles = {
    section: {
      padding: isMobile ? '3rem 1rem' : isTablet ? '4rem 1.5rem' : '5rem 2rem',
      backgroundColor: theme.colors.linen,
    },
    container: {
      maxWidth: isMobile ? '100%' : '900px',
      margin: '0 auto',
    },
    title: {
      textAlign: 'center',
      fontSize: isMobile ? '2rem' : isTablet ? '2.2rem' : '2.5rem',
      marginBottom: isMobile ? '2rem' : '3rem',
      color: theme.colors.obsidian,
      lineHeight: 1.3,
    },
    testimonialCard: {
      backgroundColor: theme.colors.white,
      borderRadius: isMobile ? '12px' : '12px',
      padding: isMobile ? '2rem 1.5rem' : '3rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      position: 'relative',
      margin: isMobile ? '0 0.5rem' : 0,
    },
    quoteIcon: {
      fontSize: isMobile ? '3rem' : '4rem',
      color: theme.colors.slateBlue,
      opacity: '0.2',
      position: 'absolute',
      top: isMobile ? '0.5rem' : '1rem',
      left: isMobile ? '0.5rem' : '1rem',
      fontFamily: theme.fonts.canvas,
    },
    quote: {
      fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.3rem',
      lineHeight: isMobile ? '1.6' : '1.8',
      color: theme.colors.obsidian,
      marginBottom: isMobile ? '1.5rem' : '2rem',
      position: 'relative',
      zIndex: 1,
      fontFamily: theme.fonts.body,
      fontStyle: 'italic',
      padding: isMobile ? '0 0.5rem' : 0,
    },
    authorContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '1rem' : '1rem',
      flexWrap: isMobile ? 'wrap' : 'nowrap',
    },
    authorImage: {
      fontSize: isMobile ? '2.5rem' : '3rem',
      width: isMobile ? '50px' : '60px',
      height: isMobile ? '50px' : '60px',
      borderRadius: '50%',
      backgroundColor: theme.colors.linen,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    authorInfo: {
      flex: 1,
    },
    authorName: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      fontWeight: '600',
      color: theme.colors.obsidian,
      marginBottom: '0.2rem',
    },
    authorTitle: {
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      color: theme.colors.obsidian,
      opacity: '0.6',
    },
    rating: {
      color: theme.colors.brickRed,
      fontSize: isMobile ? '1rem' : '1.2rem',
      marginTop: '0.5rem',
      letterSpacing: '2px',
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '0.8rem' : '0.5rem',
      marginTop: isMobile ? '2rem' : '2rem',
    },
    dot: {
      width: isMobile ? '12px' : '10px',
      height: isMobile ? '12px' : '10px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      padding: 0,
      minWidth: isMobile ? '12px' : '10px',
    },
    dotActive: {
      backgroundColor: theme.colors.brickRed,
      width: isMobile ? '30px' : '30px',
      borderRadius: '5px',
    },
    dotInactive: {
      backgroundColor: theme.colors.lightGray,
    },
    swipeHint: {
      textAlign: 'center',
      fontSize: '0.8rem',
      color: theme.colors.obsidian,
      opacity: '0.5',
      marginTop: '1rem',
      display: isMobile ? 'block' : 'none',
    },
  };

  return (
    <section style={styles.section} id="testimonials">
      <div style={styles.container}>
        <h2 style={styles.title}>
          {isMobile ? "Kind Words" : "Kind Words"}
        </h2>
        
        <div 
          style={styles.testimonialCard}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div style={styles.quoteIcon}>"</div>
          <p style={styles.quote}>{testimonials[activeIndex].quote}</p>
          
          <div style={styles.authorContainer}>
            <div style={styles.authorImage}>
              {testimonials[activeIndex].image}
            </div>
            <div style={styles.authorInfo}>
              <div style={styles.authorName}>{testimonials[activeIndex].author}</div>
              <div style={styles.authorTitle}>{testimonials[activeIndex].title}</div>
              <div style={styles.rating}>
                {renderStars(testimonials[activeIndex].rating)}
              </div>
            </div>
          </div>
        </div>

        {isMobile && (
          <div style={styles.swipeHint}>
            ← Swipe to see more →
          </div>
        )}

        <div style={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              style={{
                ...styles.dot,
                ...(index === activeIndex ? styles.dotActive : styles.dotInactive),
              }}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;