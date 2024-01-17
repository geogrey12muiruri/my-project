import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import cimage1 from "../../assets/images/cimage1.png";
import cimage2 from "../../assets/images/cimage2.webp";
import cimage3 from "../../assets/images/cimage3.webp";
import cimage4 from "../../assets/images/cimage4.webp";
import cimage5 from "../../assets/images/cimage5.webp";
import cimage6 from "../../assets/images/cimage6.webp";

const images = [
  cimage1,
  cimage2,
  cimage3,
  cimage4,
  cimage5,
  cimage6,
  // Add more image paths as needed
];

const CarouselComponent = () => {
  const customStyles = {
    // Adjust as needed
    objectFit: "cover",
    objectPosition: "50% 50%", // Center the image
    zIndex: -1, // Set a custom z-index to push the images further back
  };

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      transitionTime={500}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Bespoke Clothing ${index + 1}`}
            style={customStyles}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
