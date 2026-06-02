import React from "react";
import { LuSmartphone, LuPalette, LuCodeXml, LuLaptopMinimal } from "react-icons/lu";

export default function AboutSection() {
  return (
    <section className="about-section section-reveal" id="about">
      <div className="about-container">
        {/* Left: Services */}
        <div className="about-services">
          <div className="about-service glass-card">
            <span className="about-icon">
              <LuCodeXml aria-hidden="true" />
            </span>
            <span className="about-service-title">Programmer</span>
            <p className="about-service-description">
              Building efficient and scalable software solutions tailored to
              your needs.
            </p>
          </div>
          <div className="about-service glass-card">
            <span className="about-icon">
              <LuLaptopMinimal aria-hidden="true" />
            </span>
            <span className="about-service-title">Full Stack Developer</span>
            <p className="about-service-description">
              Expertise in both frontend and backend development for seamless
              applications.
            </p>
          </div>
          <div className="about-service glass-card">
            <span className="about-icon">
              <LuSmartphone aria-hidden="true" />
            </span>
            <span className="about-service-title">Mobile Developer</span>
            <p className="about-service-description">
              Developing mobile applications for iOS and Android platforms.
            </p>
          </div>
          <div className="about-service glass-card">
            <span className="about-icon">
              <LuPalette aria-hidden="true" />
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
            Focused on building scalable and user-friendly systems that solve real business problems. Specialized in full-stack engineering with a passion for delivering robust, maintainable solutions. I thrive on tackling complex challenges and turning ideas into impactful digital products. As a Software Engineer with a Bachelor's degree in Information Technology & Management from the University of Moratuwa, I am eager for new opportunities to innovate and drive results.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">
                10 <span className="about-stat-accent">+</span>
              </span>
              <span className="about-stat-label">Completed Projects</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">
                2 <span className="about-stat-accent">+</span>
              </span>
              <span className="about-stat-label">Years Industry Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
