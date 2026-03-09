// src/components/ApplyForm.jsx
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ApplyForm.css";

const ApplyForm = () => {
  const [siteType, setSiteType] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const templateParams = {
      name: name,
      email: email,
      siteType: siteType,
      details: details,
    };

    emailjs
      .send(
        "service_u15qbv6",
        "template_yxt9lqm",
        templateParams,
        "LZmilb5ajqgQebOi7"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setSuccess("✅ Application sent successfully!");
          setName("");
          setEmail("");
          setSiteType("");
          setDetails("");
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
          setError("❌ Failed to send application. Please try again.");
        }
      );
  };

  const isMobile = windowWidth <= 480;
  // isTablet removed since it's not used

  return (
    <section id="apply" className="apply-form-section">
      <div className="apply-form-container">
        <h2 className="apply-form-title">
          {isMobile ? "Start Your Journey" : "Start Your Creative Journey"}
        </h2>

        <div className="apply-form-card">
          {loading && (
            <div className="apply-form-message loading">
              ⏳ {isMobile ? "Sending..." : "Sending application..."}
            </div>
          )}
          {success && <div className="apply-form-message success">{success}</div>}
          {error && <div className="apply-form-message error">{error}</div>}

          <form className="apply-form" onSubmit={handleSubmit}>
            <div className="apply-form-group">
              <label className="apply-form-label" htmlFor="name">
                {isMobile ? "Name" : "Your Name"}
              </label>
              <input
                type="text"
                id="name"
                className="apply-form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isMobile ? "John Doe" : "e.g., John Doe"}
                required
              />
            </div>

            <div className="apply-form-group">
              <label className="apply-form-label" htmlFor="email">
                {isMobile ? "Email" : "Email Address"}
              </label>
              <input
                type="email"
                id="email"
                className="apply-form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isMobile ? "john@example.com" : "e.g., john@example.com"}
                required
              />
            </div>

            <div className="apply-form-group">
              <label className="apply-form-label" htmlFor="siteType">
                {isMobile ? "Project" : "Project Type"}
              </label>
              <select
                id="siteType"
                value={siteType}
                onChange={(e) => setSiteType(e.target.value)}
                className="apply-form-select"
                required
              >
                <option value="">{isMobile ? "Select type" : "Select a project type"}</option>
                <option value="Portfolio">🎨 Portfolio</option>
                <option value="Business/Corporate">🏢 {isMobile ? "Business" : "Business/Corporate"}</option>
                <option value="E-commerce">🛍️ E-commerce</option>
                <option value="Blog/Content">📝 {isMobile ? "Blog" : "Blog/Content"}</option>
                <option value="Landing Page">🚀 {isMobile ? "Landing" : "Landing Page"}</option>
                <option value="Other">✨ Other</option>
              </select>
            </div>

            <div className="apply-form-group">
              <label className="apply-form-label" htmlFor="details">
                {isMobile ? "Details" : "Project Details"}
              </label>
              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="apply-form-textarea"
                placeholder={isMobile 
                  ? "Tell me about your project..." 
                  : "Tell me about your vision: features, design preferences, timeline, budget..."}
                rows={isMobile ? 4 : 6}
                required
              />
            </div>

            <div className="apply-form-button-wrapper">
              <button
                type="submit"
                className="apply-form-submit-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : isMobile ? "Apply" : "Send Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;