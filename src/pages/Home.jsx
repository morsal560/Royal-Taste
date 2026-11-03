import { Link } from "react-router-dom";
import {
  FaStar,
  FaUtensils,
  FaLeaf,
  FaAward,
  FaQuoteLeft,
  FaHeart,
  FaClock
} from "react-icons/fa";

import "../styles/Home.css";

function Home() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Food Lover",
      comment:
        "Amazing food, friendly service and a beautiful atmosphere. I really enjoyed my experience!",
      rating: 5
    },
    {
      name: "Michael Brown",
      role: "Regular Customer",
      comment:
        "The food was fresh and delicious. The restaurant is comfortable and perfect for family dinners.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      role: "Happy Guest",
      comment:
        "A wonderful place to enjoy quality meals. I would definitely recommend trying their special dishes.",
      rating: 5
    }
  ];

  return (
    <main>

      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <div className="hero-content">

          <span className="hero-subtitle">
            WELCOME TO ROYAL TASTE
          </span>

          <h1>
            Enjoy Delicious Food
            <br />
            <span>Made With Love</span>
          </h1>

          <p>
            Discover the perfect taste of fresh ingredients,
            amazing recipes and unforgettable moments.
            Every meal is prepared with passion and care.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="primary-btn">
              Explore Menu
            </Link>

            <Link to="/about" className="secondary-btn">
              Discover Our Story
            </Link>
          </div>

        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome" data-aos="fade-up">

        <span className="section-subtitle">OUR STORY</span>

        <h2>Welcome to Royal Taste</h2>

        <p>
          At Royal Taste, we believe that great food brings
          people together. Our restaurant is inspired by the
          joy of sharing delicious meals with family and friends.
          We carefully prepare our dishes using fresh ingredients,
          creative recipes and a passion for excellent food.
          Whether you are enjoying a casual lunch, a family dinner
          or a special celebration, we want every visit to become
          a memorable experience.
        </p>

        <Link to="/about" className="text-link">
          Discover Our Story →
        </Link>

      </section>

      {/* Special Offer */}
      <section className="special-offer" data-aos="zoom-in">

        <div className="offer-content">

          <span className="offer-label">
            SPECIAL OFFER
          </span>

          <h2>A Delicious Experience Awaits!</h2>

          <p>
            Explore our menu, discover your favorite dishes
            and enjoy a wonderful dining experience at Royal Taste.
          </p>

          <Link to="/menu" className="primary-btn">
            Explore Our Menu
          </Link>

        </div>

        <div className="offer-icon">
          <FaUtensils />
        </div>

      </section>

      {/* Popular Dishes */}
      <section className="popular" data-aos="fade-up">

        <span className="section-subtitle">
          OUR SPECIALTIES
        </span>

        <h2>Our Popular Dishes</h2>

        <p className="section-description">
          Discover some of our delicious selections,
          prepared to make every meal special.
        </p>

        <div className="popular-cards">

          <div className="dish-card">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58bd?w=600"
              alt="Classic burger"
              loading="lazy"
            />
            <h3>Classic Burger</h3>
            <p>
              Fresh and delicious burger made with quality ingredients.
            </p>
            <span>$12.00</span>
          </div>  <div className="dish-card">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
              alt="Italian pizza"
              loading="lazy"
            />
            <h3>Italian Pizza</h3>
            <p>
              Traditional pizza topped with fresh cheese and herbs.
            </p>
            <span>$15.00</span>
          </div>

          <div className="dish-card">
            <img
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600"
              alt="Special dinner"
              loading="lazy"
            />
            <h3>Special Dinner</h3>
            <p>
              A delicious meal for a wonderful dining experience.
            </p>
            <span>$18.00</span>
          </div>

        </div>

        <Link to="/menu" className="primary-btn">
          View Full Menu
        </Link>

      </section>

      {/* Why Choose Us */}
      <section className="why-us" data-aos="fade-up">

        <span className="section-subtitle">
          WHY CHOOSE US
        </span>

        <h2>We Serve Quality Food</h2>

        <p className="section-description">
          We care about every detail to make your dining
          experience enjoyable and memorable.
        </p>

        <div className="features">

          <div>
            <FaUtensils />
            <h3>Fresh Food</h3>
            <p>
              We prepare our meals with fresh ingredients
              and attention to quality.
            </p>
          </div>

          <div>
            <FaLeaf />
            <h3>Healthy Meals</h3>
            <p>
              Enjoy delicious food prepared with care
              and thoughtful ingredients.
            </p>
          </div>

          <div>
            <FaAward />
            <h3>Best Quality</h3>
            <p>
              Quality, taste and customer satisfaction
              are important to us.
            </p>
          </div>

          <div>
            <FaHeart />
            <h3>Made With Love</h3>
            <p>
              Every dish is prepared with passion
              and attention to detail.
            </p>
          </div>

          <div>
            <FaClock />
            <h3>Friendly Service</h3>
            <p>
              We want every guest to feel welcome
              and enjoy their visit.
            </p>
          </div>

          <div>
            <FaStar />
            <h3>Memorable Moments</h3>
            <p>
              A welcoming place to share delicious
              meals with family and friends.
            </p>
          </div>

        </div>

      </section>

      {/* Customer Reviews */}
      <section className="reviews" data-aos="fade-up">

        <span className="section-subtitle">
          CUSTOMER EXPERIENCES
        </span>

        <h2>What People Say About Us</h2>

        <p className="section-description">
          We believe every guest deserves a wonderful experience.
        </p>

        <div className="review-cards">

          {reviews.map((review, index) => (
            <div className="review-card" key={index}>

              <FaQuoteLeft className="quote-icon" />

              <div className="review-stars">
                {Array.from(
                  { length: review.rating },
                  (_, i) => (
                    <FaStar key={i} />
                  )
                )}
              </div>

              <p>{review.comment}</p>

              <h3>{review.name}</h3>

              <span>{review.role}</span>

            </div>
          ))}

        </div>

      </section>

      {/* Final Call To Action */}
      <section className="home-cta" data-aos="zoom-in">

        <span className="section-subtitle">
          YOUR TABLE IS WAITING
        </span>

        <h2>Make Your Next Meal Special</h2>

        <p>
          Visit Royal Taste and enjoy delicious food
          in a welcoming atmosphere.
        </p>    <Link to="/contact" className="primary-btn">
          Book Your Table
        </Link>

      </section>

    </main>
  );
}

export default Home;