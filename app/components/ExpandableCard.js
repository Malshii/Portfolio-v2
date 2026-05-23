"use client";
import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa6";

export default function ExpandableCard({ year, title, place, details, type }) {
  const [expanded, setExpanded] = React.useState(false);
  // Use icon based on type
  const icon =
    type === "education" ? (
      <FaGraduationCap />
    ) : (
      <FaBriefcase />
    );
  // Optionally parse year for date range
  return (
    <article className={`exp-card${expanded ? " expanded" : ""}`}> 
      <div className="exp-card-header" onClick={() => setExpanded((e) => !e)}>
        <span className="exp-card-icon">{icon}</span>
        <div className="exp-card-main">
          <div className="exp-card-dates">{year}</div>
          <div className="exp-card-title">{title}</div>
          <div className="exp-card-place">{place}</div>
        </div>
        <button className="exp-card-toggle" aria-label={expanded ? "Collapse" : "Expand"}>
          {expanded ? "Less" : "More"}
        </button>
      </div>
      {expanded && <div className="exp-card-details">{details}</div>}
    </article>
  );
}
