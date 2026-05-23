
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import { projects, skills, timeline } from "./data/portfolioData";

// Split timeline into education and work experience
const education = timeline.filter((item) =>
  item.title.toLowerCase().includes("bsc") ||
  item.title.toLowerCase().includes("msc") ||
  item.title.toLowerCase().includes("diploma") ||
  item.title.toLowerCase().includes("certification") ||
  item.place.toLowerCase().includes("university") ||
  item.place.toLowerCase().includes("academy")
);
const work = timeline.filter((item) => !education.includes(item));

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} showAll={false}/>
      <ExperienceSection education={education} work={work} />
      {/* <ContactSection /> */}

      <footer className="site-footer">
        <p>Built with clarity, craft, and purpose.</p>
      </footer>
    </>
  );
}
