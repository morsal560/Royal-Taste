import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
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

      <Link to="/contact" className="book-btn">
        Book a Table
      </Link>

    </nav>
  );
}

export default Navbar;