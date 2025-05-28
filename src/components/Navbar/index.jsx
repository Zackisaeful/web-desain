import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollThreshold = 900;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  const getLinkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header
      className={`main-header ${isScrolled ? "scrolled" : ""}`}
      id="mainHeader"
    >
      <div className="container">
        <div className="logo">
          <NavLink to="/" aria-label="Cirewang Beach - Home">
            <h1>Cirewang Beach</h1>
          </NavLink>
        </div>

        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mainNav"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="hamburger">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>

        <nav
          className={`main-nav ${menuOpen ? "active" : ""}`}
          id="mainNav"
          aria-label="Main navigation"
        >
          <ul>
            <li>
              <NavLink
                to="/"
                className={getLinkClass}
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/gallery"
                className={getLinkClass}
                onClick={handleLinkClick}
              >
                Gallery
              </NavLink>
            </li>
            <li>
                <NavLink
                  to="/plan-your-visit"
                  className={getLinkClass}
                  onClick={handleLinkClick}
                >
                  Plan Your Visit
                </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`menu-overlay ${menuOpen ? "active" : ""}`}
        id="menuOverlay"
        tabIndex="-1"
        onClick={() => setMenuOpen(false)}
      ></div>
    </header>
  );
}
