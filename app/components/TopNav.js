import GradientText from "./GradientText";

export default function TopNav() {
  const menuItems = [
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#experience", label: "Experience" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <div className="top-nav glass-card">
        <a href="/" className="brand">
          Malshi Dev
        </a>
        <nav>
          {menuItems.map((item) => (
            <a href={item.href} key={item.href} className="nav-link-gradient">
              <GradientText
                className="nav-gradient-text"
                colors={[
                  "var(--electric-cyan)",
                  "var(--aurora-green)",
                  "var(--neon-violet)",
                  "var(--electric-cyan)",
                ]}
                animationSpeed={6}
                direction="horizontal"
                pauseOnHover={true}
                yoyo={true}
                showBorder={false}
              >
                {item.label}
              </GradientText>
            </a>
          ))}
        </nav>
        <a href="/resume.pdf" className="nav-cta" download>
          Resume
        </a>
      </div>
    </header>
  );
}
