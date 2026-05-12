export default function ContactSection() {
  return (
    <section className="contact section-reveal" id="contact">
      <h2>Contact</h2>
      <p>Let&apos;s build your next high-impact software product.</p>
      <div className="contact-grid">
        <form className="glass-card contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="Tell me about your project" />
          </label>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        <aside className="glass-card contact-info">
          <h3>Contact Details</h3>
          <p>Email: malshi.engineer@example.com</p>
          <p>Phone: +94 77 123 4567</p>
          <p>Location: Colombo, Sri Lanka</p>
          <div className="social-row">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:malshi.engineer@example.com">Email</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
