import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUtensils, FaMoon, FaSun } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <FaUtensils />
        <span>Royal Taste</span>
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-actions">

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Change theme"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        <Link to="/contact" className="book-btn">
          Book a Table
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;