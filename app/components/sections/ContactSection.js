import {
  LuAtSign,
  LuGithub,
  LuLinkedin,
  LuMapPin,
  LuPhone,
  LuSend,
} from "react-icons/lu";
import PrimaryButton from "../ui/PrimaryButton";

export default function ContactSection() {
  return (
    <section className="contact section-reveal" id="contact">
      <div className="contact-shell">
        <div className="contact-layout">
          <aside className="contact-overview glass-card">
            <p className="contact-eyebrow">Let&apos;s connect</p>
            <h2>Build something meaningful together</h2>
            <p className="contact-intro">
              Looking for a developer who can blend product thinking with
              strong engineering execution? Share your idea and I will get back
              with practical next steps.
            </p>

            <div className="contact-meta-grid">
              <a className="contact-meta-card" href="mailto:malshi.engineer@example.com">
                <span className="contact-meta-icon" aria-hidden="true">
                  <LuAtSign />
                </span>
                <span className="contact-meta-text">
                  <strong>Email</strong>
                  <small>malshi.engineer@example.com</small>
                </span>
              </a>

              <a className="contact-meta-card" href="tel:+94771234567">
                <span className="contact-meta-icon" aria-hidden="true">
                  <LuPhone />
                </span>
                <span className="contact-meta-text">
                  <strong>Phone</strong>
                  <small>+94 77 123 4567</small>
                </span>
              </a>

              <div className="contact-meta-card">
                <span className="contact-meta-icon" aria-hidden="true">
                  <LuMapPin />
                </span>
                <span className="contact-meta-text">
                  <strong>Location</strong>
                  <small>Colombo, Sri Lanka</small>
                </span>
              </div>
            </div>

            <div className="contact-social-row" aria-label="Social links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <LuLinkedin aria-hidden="true" />
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <LuGithub aria-hidden="true" />
                GitHub
              </a>
            </div>
          </aside>

          <form className="contact-form glass-card">
            <div className="contact-form-head">
              <h3>Start your project conversation</h3>
              <p>
                Tell me about your goals, timeline, and product direction.
              </p>
            </div>

            <div className="contact-input-grid">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@example.com" />
              </label>
            </div>

            <label>
              Subject
              <input type="text" placeholder="Project inquiry" />
            </label>

            <label>
              Message
              <textarea rows="5" placeholder="Tell me about your project" />
            </label>

            <PrimaryButton className="contact-submit-btn">
              <LuSend aria-hidden="true" />
              Send Message
            </PrimaryButton>
          </form>
        </div>
      </div>
    </section>
  );
}
