// src/pages/Gallery.js
import  { useState } from 'react';

function Gallery() {
  // Simulated list of image paths (place your actual images in the public/images folder)
  const images = [
    "images/image 1.jpeg",
    "images/image 2.jpeg",
    "images/image 3.jpeg",
    "images/image 4.jpeg",
    "images/image 5.jpeg",
    "images/image 6.jpeg",
    "images/image 7.jpeg",
    "images/image 8.jpeg",
    "images/image 9.jpeg",
  ];

  const [modalSrc, setModalSrc] = useState(null);

  const openModal = (src) => {
    setModalSrc(src);
  };

  const closeModal = () => {
    setModalSrc(null);
  };

  return (
    <div className="container gallery-container">
      <h1 className="title gallery-title">Our Beautiful Moments</h1>
      <div className="photo-grid">
        {images.map((src, index) => (
          <div
            className="photo-item"
            key={index}
            onClick={() => openModal(src)}
          >
            <img
              src={src}
              alt={`Photo ${index + 1}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.3s ease, filter 0.3s ease"
              }}
            />
          </div>
        ))}
      </div>

      {modalSrc && (
        <div
          className="modal"
          onClick={(e) => {
            // Close modal if the click is outside the image or on the close button
            if (e.target.className === "modal" || e.target.closest('.modal-close')) {
              closeModal();
            }
          }}
        >
          <span className="modal-close" title="Close">
            ×
          </span>
          <img className="modal-content" src={modalSrc} alt="Enlarged Photo" />
        </div>
      )}
    </div>
  );
}

export default Gallery;

oussakla rass 3ammar walakin 3andek 3la9a  