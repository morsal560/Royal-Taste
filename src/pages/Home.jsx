import { Link } from "react-router-dom";
import { FaStar, FaUtensils, FaLeaf, FaAward } from "react-icons/fa";
import "../styles/Home.css";

function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="hero"
      data-aos="fade-up">

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
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="primary-btn">
              Explore Menu
            </Link>

            <Link to="/about" className="secondary-btn">
              Learn More
            </Link>
          </div>
        </div>

      </section>

      {/* Welcome Section */}
      <section className="welcome"
      data-aos="fade-up">

        <span className="section-subtitle">OUR STORY</span>

        <h2>Welcome to Royal Taste</h2>

        <p>
          We believe that great food brings people together.
          Our restaurant offers delicious meals prepared with
          fresh ingredients and passion.
        </p>

        <Link to="/about" className="text-link">
          Discover Our Story →
        </Link>

      </section>

      {/* Popular Dishes */}
      <section className="popular"
      data-aos="zoom-in">

        <span className="section-subtitle">OUR SPECIALTIES</span>

        <h2>Our Popular Dishes</h2>

        <div className="popular-cards">

          <div className="dish-card">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
              alt="Delicious burger"
            />
            <h3>Classic Burger</h3>
            <p>Fresh and delicious burger.</p>
            <span>$12.00</span>
          </div>

          <div className="dish-card">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
              alt="Fresh pizza"
            />
            <h3>Italian Pizza</h3>
            <p>Traditional pizza with fresh cheese.</p>
            <span>$15.00</span>
          </div>

          <div className="dish-card">
            <img
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600"
              alt="Delicious food"
            />
            <h3>Special Dinner</h3>
            <p>A perfect meal for every occasion.</p>
            <span>$18.00</span>
          </div>

        </div>

        <Link to="/menu" className="primary-btn">
          View Full Menu
        </Link>

      </section>

      {/* Why Choose Us */}
      <section className="why-us"
      data-aos="fade-up">

        <span className="section-subtitle">WHY CHOOSE US</span>

        <h2>We Serve Quality Food</h2>

        <div className="features">

          <div>
            <FaUtensils />
            <h3>Fresh Food</h3>
            <p>We use fresh ingredients every day.</p>
          </div>

          <div>
            <FaLeaf />
            <h3>Healthy Meals</h3>
            <p>Delicious meals made with care.</p>
          </div>

          <div>
            <FaAward />
            <h3>Best Quality</h3>
            <p>Quality and taste are our priorities.</p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;