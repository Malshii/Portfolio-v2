import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section section-reveal" id="about">
      <div className="about-container">
        {/* Left: Services */}
        <div className="about-services">
          <div className="about-service glass-card">
            <span className="about-icon">
              {/* Programmer Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-code-slash"
                viewBox="0 0 16 16"
              >
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
              </svg>
            </span>
            <span className="about-service-title">Programmer</span>
            <p className="about-service-description">
              Building efficient and scalable software solutions tailored to
              your needs.
            </p>
          </div>
          <div className="about-service glass-card">
            <span className="about-icon">
              {/* Full Stack Developer Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-window"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1z" />
              </svg>
            </span>
            <span className="about-service-title">Full Stack Developer</span>
            <p className="about-service-description">
              Expertise in both frontend and backend development for seamless
              applications.
            </p>
          </div>
          <div className="about-service glass-card">
            <span className="about-icon">
              {/* Mobile Developer Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-phone"
                viewBox="0 0 16 16"
              >
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
            </span>
            <span className="about-service-title">Mobile Developer</span>
            <p className="about-service-description">
              Developing mobile applications for iOS and Android platforms.
            </p>
          </div>
          <div className="about-service glass-card">
            <span className="about-icon">
              {/* Creative Designer Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-palette"
                viewBox="0 0 16 16"
              >
                <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7" />
              </svg>
            </span>
            <span className="about-service-title">Creative Designer</span>
            <p className="about-service-description">
              Crafting visually stunning designs for digital and print media.
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
