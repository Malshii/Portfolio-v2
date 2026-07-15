"use client";

import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import GradientText from "../ui/GradientText";

export default function TopNav() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#experience", label: "Experience" },
    { href: "/#blogs", label: "Blogs" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <div className="top-nav glass-card">
        <a href="/" className="brand">
          Malshi Dev
        </a>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <LuX /> : <LuMenu />}
        </button>

        <nav className={open ? "nav-open" : ""}>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link-gradient"
              onClick={() => setOpen(false)}
            >
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
                pauseOnHover
                yoyo
              >
                {item.label}
              </GradientText>
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="nav-cta nav-mobile-cta"
            target="_blank"
          >
            Resume
          </a>
        </nav>

        <a
          href="/resume.pdf"
          className="nav-cta nav-desktop-cta"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </header>
  );
}