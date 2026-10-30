import { FaSearchPlus } from "react-icons/fa";
import "../styles/Gallery.css";

const galleryImages = [
  {
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df",
    title: "Delicious Pasta"
  },
  {
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    title: "Italian Pizza"
  },
  {
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    title: "Classic Burger"
  },
  {
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    title: "Sweet Dessert"
  },
  {
    image: "https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5",
    title: "Fresh Food"
  },
  {
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    title: "Grilled Food"
  }
];

function Gallery() {
  return (
    <div className="gallery-page">

      <section className="gallery-hero">
        <span>OUR COLLECTION</span>
        <h1>Food Gallery</h1>
        <p>Discover the beauty of our delicious creations.</p>
      </section>

      <section className="gallery-section">
        <div className="gallery-heading">
          <span>OUR MOMENTS</span>
          <h2>A Taste of Perfection</h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <div
              className="gallery-item"
              key={index}
              data-aos="zoom-in"
            >
              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">
                <div>
                  <h3>{item.title}</h3>
                  <FaSearchPlus />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Gallery;