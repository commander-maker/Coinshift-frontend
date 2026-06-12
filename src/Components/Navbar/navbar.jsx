import Logo from "../logo";
import Button from "../Button/button";
import "./navbar.css";

function Navbar() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Staking & Rewards", href: "#staking" },
    { label: "Marketplace", href: "#marketplace" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Community", href: "#community" },
    { label: "FAQs", href: "#faq" },
    { label: "Partners", href: "#partners" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo-wrapper">
          <Logo size={40} />
        </div>

        <ul className="navbar__menu">
          {navLinks.map((link) => (
            <li key={link.label} className="navbar__item">
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__button-wrapper">
          <Button label="Buy Now" variant="primary" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
