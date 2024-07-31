// Carousel.js
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative  w-full h-full inset-y-5 bg-transparent flex max-w-3xl p-2 mx-auto object-contain">
      <img src={images[currentIndex]} alt="" className="w-[100%] h-[100%] max-h-[620px] object-contain" onContextMenu={handleContextMenu} />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 "
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-75 p-2"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
