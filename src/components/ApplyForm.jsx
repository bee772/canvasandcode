// src/components/ApplyForm.jsx
import React, { useState } from "react";
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
        "service_u15qbv6", // replace
        "template_yxt9lqm", // replace
        templateParams,
        "LZmilb5ajqgQebOi7" // replace
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          setLoading(false);
          setSuccess("✅ Application sent successfully!");

          // Reset form
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

  return (
    <section id="apply" className="apply-form-section">
      <div className="apply-form-container">
        <h2 className="apply-form-title">Start Your Creative Journey</h2>

        <div className="apply-form-card">
          {/* Status Messages */}

          {loading && (
            <div className="apply-form-message loading">
              ⏳ Sending application...
            </div>
          )}

          {success && (
            <div className="apply-form-message success">{success}</div>
          )}

          {error && <div className="apply-form-message error">{error}</div>}

          <form className="apply-form" onSubmit={handleSubmit}>
            {/* Name Field */}

            <div className="apply-form-group">
              <label className="apply-form-label" htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                className="apply-form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., John Doe"
                required
              />
            </div>

            {/* Email Field */}

            <div className="apply-form-group">
              <label className="apply-form-label" htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                className="apply-form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g., john@example.com"
                required
              />
            </div>

            {/* Project Type */}

            <div className="apply-form-group">
              <label className="apply-form-label" htmlFor="siteType">
                Project Type
              </label>

              <select
                id="siteType"
                value={siteType}
                onChange={(e) => setSiteType(e.target.value)}
                className="apply-form-select"
                required
              >
                <option value="">Select a project type</option>
                <option value="Portfolio">🎨 Portfolio</option>
                <option value="Business/Corporate">
                  🏢 Business/Corporate
                </option>
                <option value="E-commerce">🛍️ E-commerce</option>
                <option value="Blog/Content">📝 Blog/Content</option>
                <option value="Landing Page">🚀 Landing Page</option>
                <option value="Other">✨ Other</option>
              </select>
            </div>

            {/* Details */}

            <div className="apply-form-group">
              <label className="apply-form-label" htmlFor="details">
                Project Details
              </label>

              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="apply-form-textarea"
                placeholder="Tell me about your vision: features, design preferences, timeline, budget, or any specific requirements..."
                required
              />
            </div>

            {/* Submit Button */}

            <div className="apply-form-button-wrapper">
              <button
                type="submit"
                className="apply-form-submit-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;