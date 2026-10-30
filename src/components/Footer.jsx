import { Link } from "react-router-dom";
import {
  FaUtensils,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <Link to="/" className="footer-logo">
            <FaUtensils />
            Royal Taste
          </Link>

          <p>
            Delicious food, warm hospitality, and
            unforgettable moments. Welcome to Royal Taste.
          </p>

          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/menu">Our Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p><FaMapMarkerAlt /> Kabul, Afghanistan</p>
          <p><FaPhone /> +93 700 000 000</p>
          <p><FaEnvelope /> info@royaltaste.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Royal Taste. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;