import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero section-reveal">
      <div className="hero-copy">
        <p className="hero-kicker">Hello, I'm</p>
        <h1>Malshi Kulasinghe</h1>
        <p className="hero-role">Software Engineer</p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-secondary">
            Contact
          </a>
        </div>
      </div>

      <div className="hero-center" aria-hidden="true">
        <div className="hero-image-wrapper">
          <Image
            src="/profile.png"
            alt="Portrait of Malshi Kulasinghe"
            width={400}
            height={500}
            className="hero-image"
            priority
          />
        </div>
      </div>

      <aside className="hero-highlights" aria-label="Social media links">
        {/* facebook */}
        <a
          className="hero-social social-1"
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <svg viewBox="0 0 24 24">
            <path
              d="M13.5 22v-8.2h2.8l.42-3.2H13.5V8.56c0-.93.26-1.56 1.6-1.56h1.7V4.14c-.82-.09-1.64-.13-2.46-.12-2.44 0-4.12 1.49-4.12 4.24v2.36H7.5v3.2h2.77V22h3.23z"
              fill="currentColor"
            />
          </svg>
        </a>

        {/* tiktok */}
        <a className="hero-social social-2" href="#" aria-label="TikTok">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25h-3.13v12.19a2.9 2.9 0 11-2-2.77V8.67a6 6 0 105.13 5.94V9.4a8 8 0 004.77 1.52z"
            />
          </svg>
        </a>

        {/* website */}
        <a className="hero-social social-3" href="#" aria-label="Website">
          <svg viewBox="0 0 24 24">
            <path
              d="M12 2a10 10 0 100 20 10 10 0 000-20z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
            <path
              d="M12 2c3 3 3 17 0 20"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 2c-3 3-3 17 0 20"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </a>

        {/* linkedin */}
        <a
          className="hero-social social-4"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24">
            <path
              d="M6.94 8.5H3.56V20h3.38V8.5zm-1.69-5a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.44 13.4c0-3.2-1.7-5.1-4.48-5.1-1.28 0-2.19.56-2.7 1.2V8.5H9.88V20h3.38v-6.19c0-1.62.31-3.19 2.3-3.19 1.96 0 1.99 1.83 1.99 3.29V20h3.39v-6.6z"
              fill="currentColor"
            />
          </svg>
        </a>

        {/* mail */}
        <a className="hero-social social-5" href="#contact" aria-label="Email">
          <svg viewBox="0 0 24 24">
            <path
              d="M4 6h16v12H4z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M4 7l8 6 8-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </a>
      </aside>
    </section>
  );
}
