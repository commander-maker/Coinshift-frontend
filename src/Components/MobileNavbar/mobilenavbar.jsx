import { useState } from "react";
import Logo from "../logo";
import "./mobilenavbar.css";

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Staking & Rewards", href: "#staking" },
    { label: "Marketplace", href: "#marketplace" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Community", href: "#community" },
    { label: "FAQs", href: "#faqs" },
    { label: "Partners", href: "#partners" },
  ];

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar__container">
        <div className="mobile-navbar__logo-wrapper">
          <Logo size={32} showText={true} />
        </div>

        <button
          className={`mobile-navbar__hamburger ${isMenuOpen ? "mobile-navbar__hamburger--active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="mobile-navbar__hamburger-line" />
          <span className="mobile-navbar__hamburger-line" />
          <span className="mobile-navbar__hamburger-line" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-navbar__menu">
          <ul className="mobile-navbar__menu-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="mobile-navbar__menu-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MobileNavbar;
