import {
  FaUtensils,
  FaHeart,
  FaAward,
  FaLeaf,
  FaUsers,
  FaStar,
  FaBullseye
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  const values = [
    {
      icon: <FaUtensils />,
      title: "Quality Food",
      description:
        "We focus on preparing delicious meals with carefully selected ingredients."
    },
    {
      icon: <FaHeart />,
      title: "Made With Love",
      description:
        "Every dish is prepared with passion, care and attention to detail."
    },
    {
      icon: <FaAward />,
      title: "Excellent Service",
      description:
        "We want every guest to feel welcome and enjoy a pleasant experience."
    },
    {
      icon: <FaLeaf />,
      title: "Fresh Ingredients",
      description:
        "Fresh ingredients help us create flavorful and enjoyable meals."
    },
    {
      icon: <FaUsers />,
      title: "Family Atmosphere",
      description:
        "We believe food tastes better when shared with family and friends."
    },
    {
      icon: <FaStar />,
      title: "Customer Happiness",
      description:
        "Your comfort and satisfaction are important parts of our experience."
    }
  ];

  return (
    <main className="about-page">

      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span>ABOUT ROYAL TASTE</span>
          <h1>Our Story, Our Passion</h1>
          <p>
            Great food brings people together.
            We create delicious moments with love,
            quality and passion.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-content" data-aos="fade-up">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900"
            alt="Beautiful restaurant interior"
            loading="lazy"
          />
        </div>

        <div className="about-text">
          <span className="section-subtitle">
            OUR STORY
          </span>

          <h2>Welcome to Royal Taste</h2>

          <p>
            Royal Taste is more than just a restaurant.
            It is a place where delicious food, warm hospitality
            and beautiful moments come together.
          </p>

          <p>
            We believe that every meal has the power to
            bring people closer. That is why we focus on
            creating a welcoming atmosphere where everyone
            can enjoy great food and wonderful company.
          </p>

          <p>
            From carefully selected ingredients to the
            presentation of every dish, we pay attention
            to the little details that make a dining
            experience special.
          </p>

          <p>
            Whether you are enjoying a meal with family,
            meeting friends or celebrating a special occasion,
            we want every visit to feel memorable.
          </p>

          <Link to="/menu" className="about-btn">
            Explore Our Menu
          </Link>
        </div>

      </section>

      {/* Mission and Vision */}
      <section className="about-mission" data-aos="fade-up">

        <div className="mission-card">
          <FaBullseye />
          <h2>Our Mission</h2>
          <p>
            Our mission is to serve delicious, quality food
            while providing friendly service and a comfortable
            environment for every guest.
          </p>
        </div>

        <div className="mission-card">
          <FaStar />
          <h2>Our Vision</h2>
          <p>
            We aim to create a memorable dining experience
            where great taste, hospitality and happiness
            come together.
          </p>
        </div>

      </section>

      {/* Our Values */}
      <section className="about-values" data-aos="zoom-in">
<div className="about-heading">
          <span className="section-subtitle">
            WHAT MAKES US SPECIAL
          </span>

          <h2>Our Core Values</h2>

          <p>
            The principles that guide everything we do
            at Royal Taste.
          </p>
        </div>

        <div className="value-cards">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Final Message */}
      <section className="about-cta">
        <h2>Come and Experience Royal Taste</h2>

        <p>
          We look forward to welcoming you and making
          your next meal a special one.
        </p>

        <Link to="/contact" className="about-btn">
          Contact Us
        </Link>
      </section>

    </main>
  );
}

export default About;