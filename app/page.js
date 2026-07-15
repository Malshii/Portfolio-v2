import AboutSection from "./components/sections/AboutSection";
import BlogsSection from "./components/sections/BlogsSection";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import blogs from "./data/blogs";
import { projects, skills, timeline } from "./data/portfolioData";

// Split timeline into education and work experience
const education = timeline.filter(
  (item) =>
    item.title.toLowerCase().includes("bsc") ||
    item.title.toLowerCase().includes("msc") ||
    item.title.toLowerCase().includes("diploma") ||
    item.title.toLowerCase().includes("certification") ||
    item.place.toLowerCase().includes("university") ||
    item.place.toLowerCase().includes("academy"),
);
const work = timeline.filter((item) => !education.includes(item));

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection education={education} work={work} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} showAll={false} />
      <BlogsSection blogs={blogs} />
      <ContactSection />

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Malshi Kulasinghe. All rights reserved.
        </p>
      </footer>
    </>
  );
}
