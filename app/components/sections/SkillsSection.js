"use client";
import React, { useState } from "react";

import { categoryLabels, skills, skillsByCategory } from "../../data/skillsData";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  let displayedSkills = skills;
  if (selectedCategory !== "All") {
    displayedSkills = skillsByCategory[selectedCategory] || [];
  }

  const totalSkills = skills.length;
  const totalCategories = Object.keys(skillsByCategory).length;

  return (
    <section className="skills-section section-reveal" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <div className="skills-copy">
            <p className="skills-eyebrow">Toolkit</p>
            <h2 className="skills-title">Technical skills with product focus</h2>
            <p className="section-subtitle skills-subtitle">
              A curated set of technologies I use to design, build, and ship
              reliable digital products. The layout is grouped for quick
              scanning so recruiters and clients can understand strengths at a
              glance.
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
