export default function TopNav() {
  return (
    <div style={{
      padding: '40px',
    }}>
      <header className="top-nav glass-card">
        <a href="#home" className="brand">
          Malshi Dev
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="/resume.pdf" className="nav-cta" download>
          Resume
        </a>
      </header>
    </div>
  );
}
