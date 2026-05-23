import ExpandableCard from "./ExpandableCard";

export default function ExperienceSection({ education = [], work = [] }) {
  return (
    <section className="experince-section section-reveal" id="experience">
      <div className="experience-container">
      <h2>Experience & Education</h2>
      <div className="experience-columns">
        <div className="experience-col">
          <h3 className="experience-subtitle">Education</h3>
          <div className="timeline-list">
            {education.map((item) => (
              <ExpandableCard key={item.title + item.year} {...item} type="education" />
            ))}
          </div>
        </div>
        <div className="experience-col">
          <h3 className="experience-subtitle">Work Experience</h3>
          <div className="timeline-list">
            {work.map((item) => (
              <ExpandableCard key={item.title + item.year} {...item} type="work" />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
} 