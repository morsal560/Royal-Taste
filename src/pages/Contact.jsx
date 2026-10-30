import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
  };

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <span>GET IN TOUCH</span>
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </section>

      <section className="contact-section">

        <div className="contact-info">
          <span className="section-subtitle">CONTACT DETAILS</span>
          <h2>Let's Talk With Us</h2>

          <p className="contact-description">
            Have a question or want to reserve a table?
            Send us a message. We are always happy to help.
          </p>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <div>
              <h3>Our Location</h3>
              <p>Kabul, Afghanistan</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhone />
            <div>
              <h3>Phone Number</h3>
              <p>+93 700 000 000</p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <div>
              <h3>Email Address</h3>
              <p>info@royaltaste.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaClock />
            <div>
              <h3>Opening Hours</h3>
              <p>Monday - Sunday: 9 AM - 10 PM</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            placeholder="Write your message..."
            rows="5"
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>

      </section>
    </div>
  );
}

export default Contact;