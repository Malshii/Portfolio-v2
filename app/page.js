import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import TopNav from "./components/TopNav";
import { projects, skills, timeline } from "./data/portfolioData";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} showAll={false}/>
      {/* <ExperienceSection timeline={timeline} />
      <ContactSection /> */}

      <footer className="site-footer">
        <p>Built with clarity, craft, and purpose.</p>
      </footer>
    </>
  );
}
