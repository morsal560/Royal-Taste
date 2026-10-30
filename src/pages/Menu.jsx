import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import "../styles/Menu.css";

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

  const filteredFoods =
    activeCategory === "All"
      ? foods
      : foods.filter(
          (food) => food.category === activeCategory
        );

  return (
    <main className="menu-page">

      <section className="menu-hero">
        <span>DISCOVER OUR TASTE</span>
        <h1>Our Delicious Menu</h1>
        <p>Fresh ingredients, amazing flavors and unforgettable meals.</p>
      </section>

      <section className="menu-section">

        <div className="menu-heading">
          <span>EXPLORE OUR FOOD</span>
          <h2>Choose Your Favorite</h2>
        </div>

        <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">

          {filteredFoods.map((food) => (
            <div className="menu-card" key={food.id}
            data-aos="fade-up">

              <img src={food.image} alt={food.name} />

              <div className="menu-card-content">

                <span className="food-category">
                  {food.category}
                </span>

                <h3>{food.name}</h3>

                <p>{food.description}</p>

                <div className="food-bottom">
                  <strong>${food.price.toFixed(2)}</strong>
                  <button aria-label={`Order ${food.name}`}>
                    <FaShoppingBag />
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Menu;