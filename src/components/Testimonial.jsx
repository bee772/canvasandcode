// src/components/Testimonial.jsx
import React, { useState } from 'react';
import { theme } from '../styles/theme';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "Canvas & Code didn't just build our site—they built a tool that doubled our inquiries in 3 months. The design is stunning and it actually performs.",
      author: "Sarah Jenkins",
      title: "Founder, Artisan Co.",
      image: "👩‍💼",
      rating: 5,
    },
    {
      quote: "The perfect blend of creativity and technical expertise. They understood our brand vision and executed it flawlessly. Our customers constantly compliment the site.",
      author: "Michael Chen",
      title: "Director, Modern Shop",
      image: "👨‍💼",
      rating: 5,
    },
    {
      quote: "Finally a developer who cares about both how it looks AND how it works. Page speed improved by 60% and our bounce rate dropped significantly.",
      author: "Emily Rodriguez",
      title: "Creative Lead, Studio X",
      image: "👩‍🎨",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const styles = {
    section: {
      padding: '5rem 2rem',
      backgroundColor: theme.colors.linen,
    },
    container: {
      maxWidth: '900px',
      margin: '0 auto',
    },
    title: {
      textAlign: 'center',
      fontSize: '2.5rem',
      marginBottom: '3rem',
      color: theme.colors.obsidian,
    },
    testimonialCard: {
      backgroundColor: theme.colors.white,
      borderRadius: '12px',
      padding: '3rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      position: 'relative',
    },
    quoteIcon: {
      fontSize: '4rem',
      color: theme.colors.slateBlue,
      opacity: '0.2',
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      fontFamily: theme.fonts.canvas,
    },
    quote: {
      fontSize: '1.3rem',
      lineHeight: '1.8',
      color: theme.colors.obsidian,
      marginBottom: '2rem',
      position: 'relative',
      zIndex: 1,
      fontFamily: theme.fonts.body,
      fontStyle: 'italic',
    },
    authorContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    authorImage: {
      fontSize: '3rem',
      width: '60px',
      height: '60px',
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
      fontSize: '1.2rem',
      fontWeight: '600',
      color: theme.colors.obsidian,
      marginBottom: '0.2rem',
    },
    authorTitle: {
      fontSize: '0.9rem',
      color: theme.colors.obsidian,
      opacity: '0.6',
    },
    rating: {
      color: theme.colors.brickRed,
      fontSize: '1.2rem',
      marginTop: '0.5rem',
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '2rem',
    },
    dot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    dotActive: {
      backgroundColor: theme.colors.brickRed,
      width: '30px',
      borderRadius: '5px',
    },
    dotInactive: {
      backgroundColor: theme.colors.lightGray,
    },
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section style={styles.section} id="testimonials">
      <div style={styles.container}>
        <h2 style={styles.title}>Kind Words</h2>
        
        <div style={styles.testimonialCard}>
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