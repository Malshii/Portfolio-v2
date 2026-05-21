import React from "react";
import ProjectsSection from "../components/ProjectsSection";

export default function AllProjectsPage() {
  return (
    <main className="projects-page py-20 px-4 md:px-12 lg:px-24">
      <ProjectsSection showAll={true} />
    </main>
  );
}
