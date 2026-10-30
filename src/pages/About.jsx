import {
  FaUtensils,
  FaHeart,
  FaAward,
  FaLeaf
} from "react-icons/fa";

import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div>
          <span>ABOUT ROYAL TASTE</span>
          <h1>Our Story, Our Passion</h1>
          <p>
            Great food brings people together.
            We create delicious moments with love and passion.
          </p>
        </div>
      </section>

      <section className="about-content"
      date-aos="fade-up">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
            alt="Restaurant interior"
          />
        </div>

        <div className="about-text">
          <span className="section-subtitle">OUR STORY</span>
          <h2>Welcome to Royal Taste</h2>

          <p>
            Royal Taste is more than just a restaurant.
            It is a place where delicious food, warm hospitality,
            and beautiful moments come together.
          </p>

          <p>
            Our goal is to serve fresh ingredients,
            prepare every meal with care, and give
            our guests an unforgettable experience.
          </p>

          <button className="about-btn">
            Discover More
          </button>
        </div>
      </section>

      <section className="about-values"
      data-aos="zoom-in">
        <div className="value-card">
          <FaUtensils />
          <h3>Quality Food</h3>
          <p>We prepare every meal with fresh ingredients.</p>
        </div>

        <div className="value-card">
          <FaHeart />
          <h3>Made with Love</h3>
          <p>Every dish is prepared with passion and care.</p>
        </div>

        <div className="value-card">
          <FaAward />
          <h3>Best Service</h3>
          <p>Our guests always deserve the best experience.</p>
        </div>

        <div className="value-card">
          <FaLeaf />
          <h3>Fresh Ingredients</h3>
          <p>We believe fresh food makes a better life.</p>
        </div>
      </section>

    </div>
  );
}

export default About;