export default function ExperienceSection({ timeline }) {
  return (
    <section className="timeline section-reveal" id="experience">
      <h2>Experience Timeline</h2>
      <p className="section-subtitle">Progress across engineering, cloud, and product delivery.</p>
      <div className="timeline-list">
        {timeline.map((item) => (
          <article key={item.title} className="glass-card timeline-card">
            <p className="time">{item.year}</p>
            <h3>{item.title}</h3>
            <h4>{item.place}</h4>
            <p>{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
