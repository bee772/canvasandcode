// src/components/Testimonial.jsx
import React, { useState, useEffect } from 'react';
import { theme } from '../styles/theme';

const defaultTestimonials = [
  {
    quote: "Working with Canvas & Code transformed our online presence completely. Our website traffic increased by 150% within two months, and the design perfectly captures our brand's essence. The team's attention to detail and technical expertise exceeded all expectations.",
    author: "Wanjiku Muthoni",
    title: "",
    image: "👩‍💼",
    rating: 5,
  },
  {
    quote: "The level of professionalism and creativity brought to our project was outstanding. They didn't just build a website; they created a digital experience that our customers love. The responsive design works flawlessly across all devices, and the loading speed is impressive.",
    author: "Peter Mwangi",
    title: "",
    image: "👨‍💼",
    rating: 5,
  },
  
  
  
];

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState(() => {
    if (typeof window === 'undefined') return defaultTestimonials;
    try {
      const saved = window.localStorage.getItem('canvasandcode_testimonials');
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) && parsed.length ? parsed : defaultTestimonials;
      }
    } catch (err) {
      console.warn('Could not parse testimonials from localStorage', err);
    }
    return defaultTestimonials;
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [formData, setFormData] = useState({ quote: '', author: '', title: '', rating: 5 });
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('canvasandcode_testimonials', JSON.stringify(testimonials));
    }
  }, [testimonials]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 768;

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

  const getAvatarFromName = (name) => {
    const firstLetter = name.trim().charAt(0).toUpperCase();
    const emojis = {
      'W': '👩‍💼', 'O': '👨‍💼', 'A': '👩‍🎨', 'K': '👨‍💻', 
      'N': '👩‍💻', 'M': '👨‍🎨', 'J': '👩‍🔧', 'C': '👨‍🔧',
      'L': '👩‍🏫', 'P': '👨‍🏫', 'T': '👩‍🍳', 'R': '👨‍🍳'
    };
    return emojis[firstLetter] || '⭐';
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.quote.trim() || !formData.author.trim()) {
      setFormMessage('❌ Please add both your quote and name.');
      return;
    }

    if (formData.quote.trim().length < 20) {
      setFormMessage('❌ Please write a more detailed testimonial (at least 20 characters).');
      return;
    }

    setIsSubmitting(true);

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    const newTestimonial = {
      quote: formData.quote.trim(),
      author: formData.author.trim(),
      title: formData.title.trim() || "",
      image: getAvatarFromName(formData.author),
      rating: Number(formData.rating),
    };

    setTestimonials((prev) => [newTestimonial, ...prev]);
    setActiveIndex(0);
    setFormData({ quote: '', author: '', title: '', rating: 5 });
    setFormMessage('✅ Thank you! Your testimonial has been added and saved permanently.');
    setIsSubmitting(false);

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormMessage('');
    }, 5000);
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
      marginBottom: isMobile ? '0.5rem' : '1rem',
      color: theme.colors.obsidian,
      lineHeight: 1.3,
      fontWeight: '700',
    },
    subtitle: {
      textAlign: 'center',
      fontSize: isMobile ? '0.9rem' : '1rem',
      marginBottom: isMobile ? '2rem' : '3rem',
      color: theme.colors.obsidian,
      opacity: 0.7,
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    testimonialCard: {
      backgroundColor: theme.colors.white,
      borderRadius: isMobile ? '12px' : '16px',
      padding: isMobile ? '2rem 1.5rem' : '3rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
      position: 'relative',
      margin: isMobile ? '0 0.5rem' : 0,
      transition: 'transform 0.3s ease',
    },
    quoteIcon: {
      fontSize: isMobile ? '3rem' : '4rem',
      color: theme.colors.slateBlue,
      opacity: '0.15',
      position: 'absolute',
      top: isMobile ? '1rem' : '1.5rem',
      left: isMobile ? '1rem' : '1.5rem',
      fontFamily: theme.fonts.canvas,
    },
    quote: {
      fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.25rem',
      lineHeight: isMobile ? '1.6' : '1.8',
      color: theme.colors.obsidian,
      marginBottom: isMobile ? '1.5rem' : '2rem',
      position: 'relative',
      zIndex: 1,
      fontFamily: theme.fonts.body,
      fontStyle: 'italic',
      padding: isMobile ? '0 0.5rem' : '0 1rem',
    },
    authorContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '1rem' : '1.25rem',
      flexWrap: 'nowrap',
    },
    authorImage: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      width: isMobile ? '50px' : '60px',
      height: isMobile ? '50px' : '60px',
      borderRadius: '50%',
      backgroundColor: theme.colors.linen,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    authorInfo: {
      flex: 1,
    },
    authorName: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      fontWeight: '700',
      color: theme.colors.obsidian,
      marginBottom: '0.25rem',
    },
    rating: {
      color: theme.colors.brickRed,
      fontSize: isMobile ? '0.9rem' : '1rem',
      marginTop: '0.25rem',
      letterSpacing: '2px',
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '0.8rem' : '0.75rem',
      marginTop: isMobile ? '1.5rem' : '2rem',
    },
    dot: {
      width: isMobile ? '10px' : '8px',
      height: isMobile ? '10px' : '8px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      padding: 0,
    },
    dotActive: {
      backgroundColor: theme.colors.brickRed,
      width: isMobile ? '28px' : '32px',
      borderRadius: '10px',
    },
    dotInactive: {
      backgroundColor: theme.colors.lightGray,
    },
    swipeHint: {
      textAlign: 'center',
      fontSize: '0.75rem',
      color: theme.colors.obsidian,
      opacity: '0.5',
      marginTop: '1rem',
      display: isMobile ? 'block' : 'none',
    },
    formSection: {
      marginTop: '3rem',
      backgroundColor: theme.colors.white,
      padding: isMobile ? '1.5rem' : '2rem',
      borderRadius: '16px',
      border: `1px solid ${theme.colors.lightGray}`,
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    },
    formTitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      marginBottom: '0.5rem',
      color: theme.colors.obsidian,
      fontWeight: '700',
    },
    formSubtitle: {
      marginBottom: '1.5rem',
      color: theme.colors.obsidian,
      opacity: 0.7,
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      lineHeight: 1.5,
    },
    form: {
      display: 'grid',
      gap: '1rem',
    },
    input: {
      width: '100%',
      padding: '0.8rem 1rem',
      borderRadius: '10px',
      border: `1px solid ${theme.colors.lightGray}`,
      fontSize: isMobile ? '0.9rem' : '1rem',
      outline: 'none',
      transition: 'border-color 0.3s ease',
      fontFamily: theme.fonts.body,
    },
    textarea: {
      width: '100%',
      padding: '0.8rem 1rem',
      borderRadius: '10px',
      border: `1px solid ${theme.colors.lightGray}`,
      fontSize: isMobile ? '0.9rem' : '1rem',
      resize: 'vertical',
      fontFamily: theme.fonts.body,
      transition: 'border-color 0.3s ease',
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '0.85rem',
      fontWeight: '600',
      color: theme.colors.obsidian,
      gap: '0.4rem',
    },
    select: {
      width: '140px',
      borderRadius: '10px',
      padding: '0.6rem',
      border: `1px solid ${theme.colors.lightGray}`,
      outline: 'none',
      fontSize: isMobile ? '0.9rem' : '1rem',
      cursor: 'pointer',
    },
    submitButton: {
      backgroundColor: theme.colors.brickRed,
      color: theme.colors.white,
      border: 'none',
      borderRadius: '10px',
      padding: isMobile ? '0.9rem 1rem' : '1rem 1.5rem',
      fontSize: isMobile ? '0.95rem' : '1rem',
      cursor: 'pointer',
      fontWeight: '700',
      marginTop: '0.5rem',
      transition: 'all 0.3s ease',
      opacity: isSubmitting ? 0.7 : 1,
    },
    formMessage: {
      marginTop: '0.75rem',
      fontSize: '0.9rem',
      padding: '0.5rem',
      borderRadius: '8px',
      textAlign: 'center',
      backgroundColor: formMessage.includes('✅') ? '#e8f5e9' : '#ffebee',
      color: formMessage.includes('✅') ? '#2e7d32' : '#c62828',
      fontWeight: '500',
    },
    counter: {
      textAlign: 'right',
      fontSize: '0.7rem',
      color: theme.colors.obsidian,
      opacity: 0.5,
      marginTop: '0.25rem',
    },
    infoBadge: {
      display: 'inline-block',
      backgroundColor: theme.colors.slateBlue + '10',
      padding: '0.25rem 0.75rem',
      borderRadius: '20px',
      fontSize: '0.7rem',
      color: theme.colors.slateBlue,
      marginBottom: '1rem',
    },
  };

  return (
    <section style={styles.section} id="testimonials">
      <div style={styles.container}>
        <h2 style={styles.title}>Client Stories</h2>
        <p style={styles.subtitle}>
          Real feedback from real clients — no fluff, just results
        </p>
        
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
              {testimonials[activeIndex].rating > 0 && (
                <div style={styles.rating}>
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
              )}
            </div>
          </div>
        </div>

        {isMobile && (
          <div style={styles.swipeHint}>
            ← Swipe to see more stories →
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

        <div style={styles.formSection}>
          <h3 style={styles.formTitle}>Share Your Experience</h3>
          <p style={styles.formSubtitle}>
            Have you worked with us? We'd love to hear your story. 
            Your testimonial will be visible immediately and saved permanently in our system.
          </p>
          
          <div style={styles.infoBadge}>
            💬 {testimonials.length} happy clients and counting
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            <textarea
              name="quote"
              required
              rows={4}
              placeholder="What was your experience like? Be specific — what did we help you achieve?"
              value={formData.quote}
              onChange={handleFormChange}
              style={styles.textarea}
            />
            <div style={styles.counter}>
              {formData.quote.length}/20+ characters
            </div>
            
            <input
              name="author"
              required
              type="text"
              placeholder="Your full name"
              value={formData.author}
              onChange={handleFormChange}
              style={styles.input}
            />
            
            <input
              name="title"
              type="text"
              placeholder="Your role or company (optional)"
              value={formData.title}
              onChange={handleFormChange}
              style={styles.input}
            />
            
            <label style={styles.label}>
              Rate your experience
              <select
                name="rating"
                value={formData.rating}
                onChange={handleFormChange}
                style={styles.select}
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} star{r !== 1 ? 's' : ''} {r === 5 ? '⭐' : r === 4 ? '👍' : ''}
                  </option>
                ))}
              </select>
            </label>
            
            <button 
              type="submit" 
              style={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Testimonial ✨'}
            </button>
            
            {formMessage && <div style={styles.formMessage}>{formMessage}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;