import { useState } from "react";
import {
  FaSearchPlus,
  FaTimes
} from "react-icons/fa";

import "../styles/Gallery.css";

// Gallery Images
const galleryImages = [
  {
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=900",
    title: "Delicious Pasta"
  },
  {
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
    title: "Italian Pizza"
  },
  {
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900",
    title: "Classic Burger"
  },
  {
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900",
    title: "Sweet Dessert"
  },
  {
    image: "https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?w=900",
    title: "Fresh Food"
  },
  {
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900",
    title: "Grilled Food"
  },
  {
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=900",
    title: "Special Dinner"
  },
  {
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=900",
    title: "Healthy Breakfast"
  },
  {
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900",
    title: "Fresh Salad"
  },
  {
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900",
    title: "Ice Cream"
  },
  {
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900",
    title: "Healthy Meal"
  },
  {
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900",
    title: "Fresh Ingredients"
  }
];

function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Show First Six Images
  const visibleImages = showAll
    ? galleryImages
    : galleryImages.slice(0, 6);

  return (
    <main className="gallery-page">

      {/* Gallery Hero */}
      <section className="gallery-hero">

        <span>OUR COLLECTION</span>

        <h1>Food Gallery</h1>

        <p>
          Discover the beauty of our delicious creations
          and explore the flavors of Royal Taste.
        </p>

      </section>

      {/* Gallery Section */}
      <section className="gallery-section">

        <div className="gallery-heading">

          <span>OUR MOMENTS</span>

          <h2>A Taste of Perfection</h2>

          <p>
            Every dish has a story. Explore our collection
            of delicious meals and beautiful creations.
          </p>

        </div>

        {/* Gallery Images */}
        <div className="gallery-grid">

          {visibleImages.map((item, index) => (
            <div
              className="gallery-item"
              key={index}
              data-aos="zoom-in"
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <button
                className="gallery-overlay"
                onClick={() => setSelectedImage(item)}
                aria-label={`View ${item.title}`}
              >

                <div>
                  <h3>{item.title}</h3>
                  <FaSearchPlus />
                </div>

              </button>

            </div>
          ))}

        </div>

        {/* Show More Button */}
        {galleryImages.length > 6 && (
          <div className="gallery-more">

            <button
              className="gallery-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>

          </div>
        )}

      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
<button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <FaTimes />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <h3>{selectedImage.title}</h3>

          </div>

        </div>
      )}

    </main>
  );
}

export default Gallery;