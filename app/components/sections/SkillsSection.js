"use client";
import React, { useState } from "react";

import {
  categoryLabels,
  skills,
  skillsByCategory,
} from "../../data/skillsData";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  let displayedSkills = skills;
  if (selectedCategory !== "All") {
    displayedSkills = skillsByCategory[selectedCategory] || [];
  }

  return (
    <section className="skills-section section-reveal" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <div className="skills-copy">
            <p className="skills-eyebrow">Technical Expertise</p>

            <h2 className="skills-title">Technologies I work with</h2>

            <p className="section-subtitle skills-subtitle">
              The languages, frameworks, databases, cloud platforms, and tools I
              use to build scalable, high-quality software solutions.
            </p>
          </div>
        </div>

        <div className="skills-tabs-row">
          {categoryLabels.map((label) => (
            <button
              key={label}
              className={`skills-tab-btn${selectedCategory === label ? " active" : ""}`}
              onClick={() => setSelectedCategory(label)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="skills-icon-grid">
          {displayedSkills.map((skill) => (
            <div className="skill-icon-card" key={skill.title}>
              <img
                src={skill.icon}
                alt={skill.title}
                className="skill-icon-img"
                loading="lazy"
                decoding="async"
              />
              <div className="skill-icon-label">{skill.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
