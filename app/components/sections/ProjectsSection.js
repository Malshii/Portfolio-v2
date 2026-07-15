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
  const featuredIds = [
    "breast-cancer-classification",
    "tender-automation",
    "gdc-properties",
    "projex-system",
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
      featuredIds.includes(project.id),
    );
    sectionsToShow = [
      {
        heading: null,
        projects: featuredProjects,
      },
    ];
  }

  return (
    <section className="projects-section section-reveal" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-copy">
            <p className="projects-eyebrow">Projects</p>

            <h2 className="projects-title">
              {showAll ? "Project Archive" : "Featured Projects"}
            </h2>

            <p className="projects-subtitle">
              {showAll
                ? "A complete collection of professional, academic, and research projects."
                : "Selected projects showcasing my experience in full-stack development, enterprise software, and AI."}
            </p>
          </div>
        </div>

        {sectionsToShow.map((section, index) => {
          const gridClass = !showAll
            ? "projects-grid"
            : section.heading === "Research Experience"
              ? "projects-grid-featured"
              : "projects-grid-two";

          return (
            <div
              key={`${section.heading || "group"}-${section.subHeading || "main"}-${index}`}
              className="project-group"
            >
              {section.heading && (
                <h3 className="project-group-title">{section.heading}</h3>
              )}
              {section.subHeading && (
                <p className="project-group-subtitle">{section.subHeading}</p>
              )}

              <div className={gridClass}>
                {section.projects.map((project, projectIndex) => {
                  const { techLine, points } = splitProjectDetails(project);
                  const projectIcons = getProjectIcons(project);
                  const toolCount =
                    projectIcons.length || getTechList(project).length;
                  const surfaceLabel =
                    section.subHeading || section.heading || "Featured";

                  return (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      projectIndex={projectIndex}
                      surfaceLabel={surfaceLabel}
                      techLine={techLine}
                      points={points}
                      projectIcons={projectIcons}
                      toolCount={toolCount}
                      compact={!showAll}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}

        {!showAll && (
          <div className="projects-cta-wrap">
            <PrimaryButton href="/projects">View All Projects</PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}
