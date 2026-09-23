import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#writing", label: "Writing" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Learning" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeAndScroll = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-name">
          Rehan Raza Shaikh
        </a>

        <nav>
          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      <div className={`mobile-panel wrap ${open ? "open" : ""}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeAndScroll}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
