import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaUtensils
} from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    e.target.reset();
  };

  return (
    <main className="contact-page">

      {/* Contact Hero */}
      <section className="contact-hero">

        <span>GET IN TOUCH</span>

        <h1>Contact Us</h1>

        <p>
          We would love to hear from you.
          Get in touch and let us make your visit special.
        </p>

      </section>

      {/* Contact Section */}
      <section className="contact-section">

        {/* Contact Information */}
        <div className="contact-info">

          <span className="section-subtitle">
            CONTACT DETAILS
          </span>

          <h2>Let's Talk With Us</h2>

          <p className="contact-description">
            Have a question, want to reserve a table,
            or share your experience? We would be happy
            to hear from you. Send us a message and
            our team will be glad to assist you.
          </p>

          {/* Location */}
          <div className="contact-item">
            <FaMapMarkerAlt />

            <div>
              <h3>Our Location</h3>
              <p>Kabul, Afghanistan</p>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-item">
            <FaPhone />

            <div>
              <h3>Phone Number</h3>
              <p>+93 700 000 000</p>
            </div>
          </div>

          {/* Email */}
          <div className="contact-item">
            <FaEnvelope />

            <div>
              <h3>Email Address</h3>
              <p>info@royaltaste.com</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="contact-item">
            <FaClock />

            <div>
              <h3>Opening Hours</h3>
              <p>Monday - Sunday</p>
              <p>9:00 AM - 10:00 PM</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-heading">
            <FaUtensils />
            <h2>Send Us a Message</h2>
            <p>
              Fill out the form below.
              We look forward to hearing from you!
            </p>
          </div>

          <label htmlFor="contact-name">
            Your Name
          </label>

          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="contact-email">
            Your Email
          </label>

          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="contact-subject">
            Subject
          </label>

          <input
            id="contact-subject"
            type="text"
            name="subject"
            placeholder="Enter message subject"
            required
          />

          <label htmlFor="contact-message">
            Your Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            placeholder="Write your message here..."
            rows="5"
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

      {/* Contact Closing Section */}
      <section className="contact-cta">

        <h2>We Are Waiting to Welcome You!</h2>

        <p>
          Whether it is a family dinner, a friendly gathering
          or a special occasion, Royal Taste is ready to
          make your experience memorable.
        </p>

      </section>

    </main>
  );
}

export default Contact;