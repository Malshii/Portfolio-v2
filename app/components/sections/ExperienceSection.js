import ExpandableCard from "../ui/ExpandableCard";

export default function ExperienceSection({ education = [], work = [] }) {
  return (
    <section className="experience-section section-reveal" id="experience">
      <div className="experience-container">
        <div className="experience-header">
          <p className="experience-eyebrow">Journey</p>
          <h2>Experience &amp; Education</h2>
          <p className="experience-intro">
            A clean, premium overview of the roles and milestones that shaped my
            work. Expand each card to see the supporting detail.
          </p>
        </div>

        <div className="experience-columns">
          <div className="experience-col">
            <div className="experience-subtitle-wrap">
              <span className="experience-section-label">Work Experience</span>
            </div>
            <div className="timeline-list">
              {work.map((item) => (
                <ExpandableCard
                  key={item.title + item.year}
                  {...item}
                  type="work"
                />
              ))}
            </div>
          </div>

          <div className="experience-col">
            <div className="experience-subtitle-wrap">
              <span className="experience-section-label">Education</span>
            </div>
            <div className="timeline-list">
              {education.map((item) => (
                <ExpandableCard
                  key={item.title + item.year}
                  {...item}
                  type="education"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
