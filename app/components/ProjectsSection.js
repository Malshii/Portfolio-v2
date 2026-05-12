export default function ProjectsSection({ projects }) {
  return (
    <section className="projects section-reveal" id="projects">
      <h2>Projects</h2>
      <p className="section-subtitle">
        Selected builds that combine performance, product clarity, and engineering depth.
      </p>
      <div className="project-grid" role="list">
        {projects.map((project) => (
          <article key={project.title} className="glass-card project-card" role="listitem">
            <div className="thumb" aria-hidden="true">
              <span>{project.badge}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="stack">{project.stack.join(" | ")}</p>
            <p>{project.description}</p>
            <div className="project-actions">
              <a
                href={project.demo}
                className="btn btn-secondary"
                aria-label={`Live demo for ${project.title}`}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                className="btn btn-secondary"
                aria-label={`Source code for ${project.title}`}
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
