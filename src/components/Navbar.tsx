import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let current = "";

      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="logo">
          <span className="logo-text">VARSINE</span>
          {/* <span className="logo-dot">.</span> */}
        </a>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id.toLowerCase()}`}
                className={`nav-link ${activeSection === id.toLowerCase() ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
