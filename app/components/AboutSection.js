import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section section-reveal" id="about">
      <div className="about-container">
        {/* Left: Services */}
        <div className="about-services">
          <div className="about-service glass-card">
            <span className="about-icon">
              {/* Website Development Icon */}
              <svg
                width="40"
                height="40"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M3 8h18M7 20h10" />
              </svg>
            </span>
            <span className="about-service-title">Website Development</span>
            <p className="about-service-description">
              Creating responsive and modern websites tailored to your needs.
            </p>
          </div>
          <div className="about-service glass-card">
            <span className="about-icon">
              {/* App Development Icon */}
              <svg
                width="40"
                height="40"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <circle cx="12" cy="18" r="1.5" />
              </svg>
            </span>
            <span className="about-service-title">App Development</span>
            <p className="about-service-description">
              Building user-friendly mobile and web applications.
            </p>
          </div>
          <div className="about-service glass-card">
            <span className="about-icon">
              {/* Website Hosting Icon */}
              <svg
                width="40"
                height="40"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="7" width="18" height="10" rx="2" />
                <path d="M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" />
              </svg>
            </span>
            <span className="about-service-title">Website Hosting</span>
            <p className="about-service-description">
              Reliable and secure hosting solutions for your websites.
            </p>
          </div>
          <div className="about-service glass-card">
            <span className="about-icon">
              {/* Graphic Design Icon */}
              <svg
                width="40"
                height="40"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M14.31 8l-5.74 9.94M9.69 8h4.62M12 8v8" />
              </svg>
            </span>
            <span className="about-service-title">Graphic Design</span>
            <p className="about-service-description">
              Crafting visually stunning and impactful designs for your brand.
            </p>
          </div>
        </div>

        {/* Right: About and Stats */}
        <div className="about-content">
          <h2 className="about-title">About me</h2>
          <p className="about-description">
            I started my software journey from photography. Through that, I
            learned to love the process of creating from scratch. Since then,
            this has led me to software development as it fulfills my love for
            learning and building things.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">
                120 <span className="about-stat-accent">+</span>
              </span>
              <span className="about-stat-label">Completed Projects</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">
                95 <span className="about-stat-accent">%</span>
              </span>
              <span className="about-stat-label">Client satisfaction</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">
                10 <span className="about-stat-accent">+</span>
              </span>
              <span className="about-stat-label">Years of experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
