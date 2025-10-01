import React from "react";

const CTA = () => {
  return (
    <section className="spacing cta-section">
      <div className="cta-card">
        <h2 className="cta-title">
          Have An Awesome Project Idea? <span className="cta-highlight">Let's Discuss</span>
        </h2>
        <div className="cta-buttons">
          <button className="cta-btn-primary">
            Let's Build Together
          </button>
          <button className="cta-btn-secondary">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;