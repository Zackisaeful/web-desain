import { useState, useEffect } from "react";
import "./Gallery.css";

import {
  IoClose,
  IoArrowBack,
  IoArrowForward,
  IoAdd,
  IoRemove,
  IoRefresh,
} from "react-icons/io5";

const images = [
  {
    src: "./assets/images/gallery/gallery6.jpeg",
    alt: "People enjoying the beach",
    width: 1280,
    height: 720,
  },
  {
    src: "./assets/images/gallery/gallery2.jpeg",
    alt: "Seashells scattered on the sand",
    width: 500,
    height: 500,
  },
  {
    src: "./assets/images/gallery/gallery8.jpeg",
    alt: "Palm trees swaying in the wind",
    width: 900,
    height: 1200,
  },
  {
    src: "./assets/images/gallery/gallery1.jpeg",
    alt: "Golden sunset at Cirewang Beach",
    width: 1024,
    height: 768,
  },
  {
    src: "./assets/images/gallery/gallery5.jpeg",
    alt: "Traditional fishing boats",
    width: 1200,
    height: 800,
  },
  {
    src: "./assets/images/gallery/gallery9.jpeg",
    alt: "Children playing with waves",
    width: 1080,
    height: 720,
  },
  {
    src: "./assets/images/gallery/gallery3.jpeg",
    alt: "Waves gently crashing the shore",
    width: 800,
    height: 600,
  },
  {
    src: "./assets/images/gallery/gallery7.jpeg",
    alt: "Footprints on wet sand",
    width: 640,
    height: 960,
  },
  {
    src: "./assets/images/gallery/gallery4.jpeg",
    alt: "Rocky coastal area",
    width: 600,
    height: 900,
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
    setScale(1);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setScale(1);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
    setScale(1);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
    setScale(1);
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const resetZoom = () => {
    setScale(1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "+") {
        zoomIn();
      } else if (e.key === "-") {
        zoomOut();
      } else if (e.key === "0") {
        resetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <section className="gallery-section" id="top">
      <h2 className="section-title-gallery">Gallery</h2>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            style={{
              gridRowEnd: `span ${Math.round(
                (image.height / image.width) * 20
              )}`,
            }}
            onClick={() => openModal(index)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery-modal" style={{ display: "block" }}>
          <span className="gallery-close-modal" onClick={closeModal}>
            <IoClose />
          </span>
          <div className="gallery-modal-content">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image-container"
              style={{ transform: `scale(${scale})` }}
            />
            <div className="gallery-modal-nav">
              <button className="gallery-modal-prev" onClick={prevImage}>
                <IoArrowBack />
              </button>
              <button className="gallery-modal-next" onClick={nextImage}>
                <IoArrowForward />
              </button>
            </div>
            <div className="gallery-modal-zoom">
              <button className="gallery-zoom-in" onClick={zoomIn}>
                <IoAdd />
              </button>
              <button className="gallery-zoom-out" onClick={zoomOut}>
                <IoRemove />
              </button>
              <button className="gallery-reset-zoom" onClick={resetZoom}>
                <IoRefresh />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
