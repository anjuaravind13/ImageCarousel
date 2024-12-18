import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); 

  useEffect(() => {
    if (isHovered) return;

    const intervalId = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, isHovered]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

 
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  
  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
  
      <div className="carousel">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>

    
      <div className="nav-buttons">
        <button onClick={prevImage}>&#10094; Previous</button>
        <button onClick={nextImage}>Next &#10095;</button>
      </div>


      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;











// import React from "react";
// import "./ImageCarousel.css";

// function ImageCarousel(props) {
//   return (
//     <div className="carousel-container">
//       <div className="carousel">
//         <img src={props.image} />
//       </div>

//       <div className="nav-buttons">
//         <button>left</button>
//         <button>right</button>

//       </div>
//     </div>
//   );
// }

// export default ImageCarousel;
