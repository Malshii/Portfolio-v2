export default function SkillsSection({ skills }) {
  const nodeSlots = [
    { top: "6%", left: "49%" },
    { top: "22%", left: "80%" },
    { top: "52%", left: "90%" },
    { top: "78%", left: "72%" },
    { top: "90%", left: "48%" },
    { top: "78%", left: "20%" },
    { top: "52%", left: "8%" },
    { top: "22%", left: "20%" },
  ];

  return (
    <section className="skills section-reveal" id="skills">
      <h2>Skills</h2>
      <p className="section-subtitle">A visual map of my core technology stack.</p>
      <div className="skills-grid">
        {skills.map((group) => (
          <article key={group.category} className="glass-card skill-card">
            <div className="skill-head">
              <h3>{group.category}</h3>
              <span>{group.focus}</span>
            </div>

            <div className="skill-cloud" aria-hidden="true">
              <div className="skill-cloud-core">{group.category}</div>
              {group.items.map((item, index) => {
                const slot = nodeSlots[index % nodeSlots.length];
                return (
                  <span
                    key={item}
                    className="skill-pill"
                    style={{
                      top: slot.top,
                      left: slot.left,
                      animationDelay: `${index * 120}ms`,
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </div>

            <p className="skill-tools">{group.tools.join(" | ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
