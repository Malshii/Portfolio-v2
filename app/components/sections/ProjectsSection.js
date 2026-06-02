import React from "react";
import PrimaryButton from "../ui/PrimaryButton";
import ProjectCard from "../ui/ProjectCard";

import { projectSections, techIconMap } from "../../data/projectSections";

const normalizeTech = (tech) =>
  tech
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/\./g, "")
    .replace(/\s+/g, " ")
    .trim();

const getTechList = (project) => {
  const techLine = project.details.find((line) =>
    line.toLowerCase().startsWith("technologies:"),
  );

  if (!techLine) return [];

  return techLine
    .replace(/^Technologies:\s*/i, "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

const getTechIcon = (tech) => techIconMap[normalizeTech(tech)] || null;

const getProjectIcons = (project) => {
  if (project.stack?.length) return project.stack;
  return getTechList(project)
    .map((tech) => getTechIcon(tech))
    .filter(Boolean);
};

const splitProjectDetails = (project) => {
  const techLine = project.details.find((line) =>
    line.toLowerCase().startsWith("technologies:"),
  );

  return {
    techLine,
    points: project.details.filter(
      (line) => !line.toLowerCase().startsWith("technologies:"),
    ),
  };
};

export default function ProjectsSection({ showAll = false }) {
  const featuredTitles = [
    "Breast Cancer Classification with Localization and Subtype Identification (Final Year Project) (Group)",
    "Tender Automation System | 2026",
    "GDC Properties Platform | 2026",
    "Projex System | 2025",
  ];

  const getAllProjects = () =>
    projectSections.flatMap((section) =>
      section.projects.map((project) => ({ ...project, section })),
    );

  let sectionsToShow;
  if (showAll) {
    sectionsToShow = projectSections;
  } else {
    const allProjects = getAllProjects();
    const featuredProjects = allProjects.filter((project) =>
      featuredTitles.includes(project.title),
    );
    sectionsToShow = [
      {
        heading: null,
        projects: featuredProjects,
      },
    ];
  }

  const totalProjects = getAllProjects().length;
  const totalSections = projectSections.length;

  return (
    <section className="projects-section section-reveal" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-copy">
            <p className="projects-eyebrow">Showcase</p>
            <h2 className="projects-title">
              {showAll ? "Project Archive" : "Featured Projects"}
            </h2>
            <p className="projects-subtitle">
              {showAll
                ? "A complete project collection across research, product engineering, and mobile development."
                : "A curated set of work that reflects engineering depth, product thinking, and delivery quality."}
            </p>
          </div>

          {/* <div className="projects-summary-card" aria-label="Projects summary">
            <div className="projects-summary-row">
              <span className="projects-summary-label">Projects</span>
              <span className="projects-summary-value">{totalProjects}</span>
            </div>
            <div className="projects-summary-row">
              <span className="projects-summary-label">Groups</span>
              <span className="projects-summary-value">{totalSections}</span>
            </div>
            <div className="projects-summary-row">
              <span className="projects-summary-label">Visible</span>
              <span className="projects-summary-value">
                {sectionsToShow.reduce(
                  (count, section) => count + section.projects.length,
                  0,
                )}
              </span>
            </div>
          </div> */}
        </div>

        {sectionsToShow.map((section, index) => (
          <div
            key={`${section.heading || "group"}-${section.subHeading || "main"}-${index}`}
            className="project-group"
          >
            {section.heading && <h3 className="project-group-title">{section.heading}</h3>}
            {section.subHeading && (
              <p className="project-group-subtitle">{section.subHeading}</p>
            )}

            <div className={`projects-grid${showAll ? " projects-grid-all" : ""}`}>
              {section.projects.map((project, projectIndex) => {
                const { techLine, points } = splitProjectDetails(project);
                const projectIcons = getProjectIcons(project);
                const toolCount = projectIcons.length || getTechList(project).length;
                const surfaceLabel =
                  section.subHeading || section.heading || "Featured";

                return (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    projectIndex={projectIndex}
                    surfaceLabel={surfaceLabel}
                    techLine={techLine}
                    points={points}
                    projectIcons={projectIcons}
                    toolCount={toolCount}
                  />
                );
              })}
            </div>
          </div>
        ))}

        {!showAll && (
          <div className="projects-cta-wrap">
            <PrimaryButton href="/projects">View All Projects</PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}
