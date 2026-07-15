import React from "react";
import BorderGlow from "../ui/BorderGlow";
import {
  LuSmartphone,
  LuPalette,
  LuCodeXml,
  LuLaptopMinimal,
} from "react-icons/lu";

export default function AboutSection() {
  return (
    <section className="about-section section-reveal" id="about">
      <div className="about-container">
        {/* Left: Services */}
        <div className="about-services">
          <BorderGlow
            className="about-service-glow"
            edgeSensitivity={22}
            glowColor="263 90 73"
            backgroundColor="rgba(14, 14, 16, 0.92)"
            borderRadius={22}
            glowRadius={32}
            glowIntensity={0.75}
            coneSpread={20}
            animated={true}
            fillOpacity={0.32}
            colors={["#8b5cf6", "#a78bfa", "#c4b5fd"]}
          >
            <div className="about-service">
              <span className="about-icon">
                <LuCodeXml aria-hidden="true" />
              </span>
              <span className="about-service-title">Programmer</span>
              <p className="about-service-description">
                Building efficient and scalable software solutions tailored to
                your needs.
              </p>
            </div>
          </BorderGlow>

          <BorderGlow
            className="about-service-glow"
            edgeSensitivity={22}
            glowColor="263 90 73"
            backgroundColor="rgba(14, 14, 16, 0.92)"
            borderRadius={22}
            glowRadius={32}
            glowIntensity={0.75}
            coneSpread={20}
            animated={true}
            fillOpacity={0.32}
            colors={["#8b5cf6", "#a78bfa", "#c4b5fd"]}
          >
            <div className="about-service">
              <span className="about-icon">
                <LuLaptopMinimal aria-hidden="true" />
              </span>
              <span className="about-service-title">Full Stack Developer</span>
              <p className="about-service-description">
                Expertise in both frontend and backend development for seamless
                applications.
              </p>
            </div>
          </BorderGlow>

          <BorderGlow
            className="about-service-glow"
            edgeSensitivity={22}
            glowColor="263 90 73"
            backgroundColor="rgba(14, 14, 16, 0.92)"
            borderRadius={22}
            glowRadius={32}
            glowIntensity={0.75}
            coneSpread={20}
            animated={true}
            fillOpacity={0.32}
            colors={["#8b5cf6", "#a78bfa", "#c4b5fd"]}
          >
            <div className="about-service">
              <span className="about-icon">
                <LuSmartphone aria-hidden="true" />
              </span>
              <span className="about-service-title">Mobile Developer</span>
              <p className="about-service-description">
                Developing mobile applications for iOS and Android platforms.
              </p>
            </div>
          </BorderGlow>

          <BorderGlow
            className="about-service-glow"
            edgeSensitivity={22}
            glowColor="263 90 73"
            backgroundColor="rgba(14, 14, 16, 0.92)"
            borderRadius={22}
            glowRadius={32}
            glowIntensity={0.75}
            coneSpread={20}
            animated={true}
            fillOpacity={0.32}
            colors={["#8b5cf6", "#a78bfa", "#c4b5fd"]}
          >
            <div className="about-service">
              <span className="about-icon">
                <LuPalette aria-hidden="true" />
              </span>
              <span className="about-service-title">UI & System Design</span>

              <p className="about-service-description">
                Reusable components and intuitive user experiences.
              </p>
            </div>
          </BorderGlow>
        </div>

        {/* Right: About and Stats */}
        <div className="about-content">
          {/* <p className="about-eyebrow">Preview</p> */}
          <h2 className="about-title">About me</h2>
          <p className="about-description">
            Full Stack Software Engineer specializing in React, Next.js,
            Node.js, and modern web technologies. I build scalable, user-focused
            applications with clean architecture and reliable performance.
          </p>

          <div className="about-preview-card">
            <div className="about-preview-header">
              <div>
                <span className="about-preview-label">Current focus</span>
                <h3>
                  Building scalable full-stack applications for real-world
                  businesses
                </h3>
              </div>
              <div className="about-preview-chip">Open to opportunities</div>
            </div>

            <ul className="about-highlights">
              <li>React, Next.js & Node.js development</li>
              <li>Reusable UI & scalable architecture</li>
              <li>API integrations & database solutions</li>
            </ul>
          </div>

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
              <span className="about-stat-label">
                Years Industry Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
