"use client";
import React, { useState } from "react";
import { LuBriefcaseBusiness, LuGraduationCap } from "react-icons/lu";

export default function ExpandableCard({ year, title, place, details, type }) {
  const [expanded, setExpanded] = useState(false);
  const isEducation = type === "education";
  const icon = isEducation ? <LuGraduationCap /> : <LuBriefcaseBusiness />;
  const typeLabel = isEducation ? "Education" : "Work";
  const detailsId = `${type}-${year}-${title}`.replace(/[^a-zA-Z0-9-_]/g, "-");

  return (
    <article className={`exp-card${expanded ? " expanded" : ""}`}>
      <div className="exp-card-header">
        <span className="exp-card-icon" aria-hidden="true">
          {icon}
        </span>
        <div className="exp-card-main">
          <div className="exp-card-meta-row">
            <div className="exp-card-dates">{year}</div>
            <span className="exp-card-badge">{typeLabel}</span>
          </div>
          <div className="exp-card-title">{title}</div>
          <div className="exp-card-place">{place}</div>
        </div>
        <button
          type="button"
          className="exp-card-toggle"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
          aria-controls={detailsId}
        >
          {expanded ? "Less" : "More"}
        </button>
      </div>
      {expanded && (
        <div className="exp-card-details" id={detailsId}>
          {details}
        </div>
      )}
    </article>
  );
}
