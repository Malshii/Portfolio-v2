export default function AboutSection() {
  return (
    <section className="about section-reveal" id="about">
      <h2>About Me</h2>
      <p className="about-intro">
        I am a software engineer focused on building dependable digital systems
        that scale with product growth. I enjoy translating complex business
        problems into clear architecture, elegant user experiences, and fast,
        maintainable code.
      </p>

      <div className="station-grid">
        <article className="glass-card station-card">
          <h3>Engineering Compass</h3>
          <p>System design, performance, reliability, and a strong product mindset.</p>
        </article>
        <article className="glass-card station-card">
          <h3>Collaboration Protocol</h3>
          <p>Cross-functional ownership, clear communication, and calm execution.</p>
        </article>
        <article className="glass-card station-card">
          <h3>Core Values</h3>
          <p>Craft, consistency, and measurable outcomes over short-lived trends.</p>
        </article>
      </div>

      <div className="mini-timeline glass-card">
        <h3>Journey Snapshot</h3>
        <ul>
          <li>
            <span>2025</span> Software Engineer building cloud-ready full-stack products.
          </li>
          <li>
            <span>2024</span> Specialized in cloud delivery and DevOps workflows.
          </li>
          <li>
            <span>2023</span> Graduated in Information Technology.
          </li>
        </ul>
      </div>
    </section>
  );
}
