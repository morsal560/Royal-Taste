
import { useState } from "react";
import {
  FaShoppingBag,
  FaTimes,
  FaUtensils
} from "react-icons/fa";

import "../styles/Menu.css";

// Food Data
const foods = [
  {
    id: 1,
    name: "Classic Burger",
    category: "Burgers",
    price: 12,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    description: "Juicy beef burger with fresh vegetables."
  },
  {
    id: 2,
    name: "Cheese Burger",
    category: "Burgers",
    price: 14,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=600",
    description: "Delicious burger with melted cheese."
  },
  {
    id: 3,
    name: "Italian Pizza",
    category: "Pizza",
    price: 15,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    description: "Italian pizza with mozzarella cheese."
  },
  {
    id: 4,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 17,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600",
    description: "Fresh pizza with delicious pepperoni."
  },
  {
    id: 5,
    name: "Creamy Pasta",
    category: "Pasta",
    price: 13,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
    description: "Creamy pasta with fresh ingredients."
  },
  {
    id: 6,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 8,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    description: "Soft chocolate cake with rich flavor."
  },
  {
    id: 7,
    name: "Fresh Juice",
    category: "Drinks",
    price: 5,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600",
    description: "Fresh and healthy fruit juice."
  },
  {
    id: 8,
    name: "Strawberry Dessert",
    category: "Desserts",
    price: 9,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600",
    description: "A sweet and delicious strawberry treat."
  }
];

// Food Categories
const categories = [
  "All",
  "Burgers",
  "Pizza",
  "Pasta",
  "Desserts",
  "Drinks"
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  // Filter Foods
  const filteredFoods =
    activeCategory === "All"
      ? foods
      : foods.filter(
          (food) => food.category === activeCategory
        );

  // Show First Six Foods
  const visibleFoods = showAll
    ? filteredFoods
    : filteredFoods.slice(0, 6);

  // Change Category
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <main className="menu-page">

      {/* Menu Hero */}
      <section className="menu-hero">
        <span>DISCOVER OUR TASTE</span>

        <h1>Our Delicious Menu</h1>

        <p>
          Fresh ingredients, amazing flavors and
          unforgettable meals.
        </p>
      </section>

      {/* Menu Section */}
      <section className="menu-section">

        <div className="menu-heading">
          <span>EXPLORE OUR FOOD</span>

          <h2>Choose Your Favorite</h2>

          <p>
            Explore our selection and find something
            delicious to enjoy.
          </p>
        </div>

        {/* Food Categories */}
        <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Food Cards */}
        <div className="menu-grid">

          {visibleFoods.map((food) => (
            <div
              className="menu-card"
              key={food.id}
              data-aos="fade-up"
            >

              <img
                src={food.image}
                alt={food.name}
                loading="lazy"
              />
<div className="menu-card-content">

                <span className="food-category">
                  {food.category}
                </span>

                <h3>{food.name}</h3>

                <p>{food.description}</p>

                <div className="food-bottom">

                  <strong>
                    ${food.price.toFixed(2)}
                  </strong>

                  <button
                    onClick={() => setSelectedFood(food)}
                    aria-label={`View details of ${food.name}`}
                    title="View food details"
                  >
                    <FaShoppingBag />
                  </button>

                </div>

                <button
                  className="food-details-btn"
                  onClick={() => setSelectedFood(food)}
                >
                  View Details
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* Show More Button */}
        {filteredFoods.length > 6 && (
          <div className="show-more-container">

            <button
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>

          </div>
        )}

        {/* No Food Message */}
        {filteredFoods.length === 0 && (
          <p className="no-foods">
            No food items found in this category.
          </p>
        )}

      </section>

      {/* Food Details Modal */}
      {selectedFood && (
        <div
          className="food-modal-overlay"
          onClick={() => setSelectedFood(null)}
        >

          <div
            className="food-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedFood(null)}
              aria-label="Close details"
            >
              <FaTimes />
            </button>

            <img
              src={selectedFood.image}
              alt={selectedFood.name}
            />

            <div className="food-modal-content">

              <span className="food-category">
                {selectedFood.category}
              </span>

              <h2>{selectedFood.name}</h2>

              <p>{selectedFood.description}</p>

              <strong>
                ${selectedFood.price.toFixed(2)}
              </strong>

              <p className="modal-note">
                <FaUtensils />
                Contact us to place your order.
              </p>

              <button
                className="show-more-btn"
                onClick={() => setSelectedFood(null)}
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}

    </main>
  );
}

export default Menu;