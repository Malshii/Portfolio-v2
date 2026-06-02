import React from "react";

export default function ProjectCard({
  project,
  projectIndex,
  surfaceLabel,
  techLine,
  points,
  projectIcons,
  toolCount,
}) {
  return (
    <article className="project-card">
      <div className="project-accent-line" aria-hidden="true" />

      <div className="project-card-head">
        <div className="project-card-top-meta">
          <span className="project-chip">{surfaceLabel}</span>
          <span className="project-index">
            {String(projectIndex + 1).padStart(2, "0")}
          </span>
        </div>

        <h4 className="project-card-title">{project.title}</h4>
        {project.org && <p className="project-card-org">{project.org}</p>}

        <div className="project-meta-inline">
          <span>{points.length} highlights</span>
          <span>{toolCount} tools</span>
        </div>
      </div>

      {projectIcons.length > 0 && (
        <div className="project-tech-icons">
          {projectIcons.map((icon) => (
            <img
              key={`${project.title}-${icon}`}
              src={icon}
              alt="Technology icon"
              className="project-tech-icon"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      )}

      {project.liveUrl && (
        <p className="project-live-link">
          Live:
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            {project.liveLabel || project.liveUrl}
          </a>
        </p>
      )}

      <ul className="project-points">
        {points.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {project.nested && (
        <div className="project-nested">
          <p className="project-nested-title">{project.nested.label}</p>
          <ul>
            {project.nested.points.map((subItem) => (
              <li key={subItem}>{subItem}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="project-footer-row">
        {techLine && <p className="project-tech-line">{techLine}</p>}
      </div>
    </article>
  );
}
