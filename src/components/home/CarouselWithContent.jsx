import React, { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import "./carousel.css";

export function CarouselWithContent() {
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWelcomeText, setShowWelcomeText] = useState(true);

  useEffect(() => {
    const importImages = async () => {
      try {
        const imageContext = import.meta.glob("../../assets/carouselImg/*.jpg"); // Adjust for your image format
        const images = await Promise.all(Object.values(imageContext).map(async (image) => (await image()).default));
        setCarouselImages(images);
      } catch (error) {
        console.error("Error importing carousel images:", error);
      }
    };

    importImages();
  }, []);

  useEffect(() => {
    const hideWelcomeText = setTimeout(() => setShowWelcomeText(false), 2000); // Adjust timeout as needed
    return () => clearTimeout(hideWelcomeText);
  }, []);

  const handleCarouselClick = () => {
    setShowWelcomeText(false); // Optionally hide welcome text on carousel click
  };

  return (
    <div className="carousel-container relative h-96 sm:h-auto overflow-hidden rounded-lg">
      <Carousel
        items={carouselImages} // Use updated carouselImages state
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        loop
      >
        {/* Wrap multiple images within Carousel.children with dynamic opacity and transition styles */}
        {carouselImages.map((image, index) => (
          <img
            src={image}
            alt={`image ${index + 1}`}
            key={index}
            className={`carousel-item-slide ${index === currentIndex ? "active" : ""}`}
            style={{ opacity: index === currentIndex ? 1 : 0.2 }} // Set opacity based on index and currentIndex
          // Define transition for opacity
            onClick={handleCarouselClick} // Optionally handle click on each image
          />
        ))}
      </Carousel>

      {/* Overlay content with conditional rendering */}
      {showWelcomeText ? (
        <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
          <p className="text-4xl sm:text-2xl font-bold mb-4 text-slate-950 mix-blend-hard-light">
            Tailor-Made Lets You Design
          </p>
          <p className="text-4xl sm:text-2xl font-bold mb-4 text-slate-950 mix-blend-hard-light">
            Bring Your Imaginations to Life
          </p>
        </div>
      ) : (
        <div className="absolute top-1/2 left-0 right-0 p-8 transform -translate-y-1/2 flex flex-col items-center">
              <h1 className="text-5xl sm:text-3xl font-bold font-mono text-slate-950 leading-tight mb-4"><span className="font-bold text-pink-950 text-animate-pulse">Say goodbye </span>to off-the-rack blues. Hello, bespoke bliss.</h1>
              <p className="text-lg sm:text-base font-mono text-pink-950 text-center mb-8">Unleash your inner fashion icon. We will find the perfect stitch for your story.</p>
              <a href="/fabric" className="bg-pink-500 text-slate-950 hover:bg-pink-950 text-center py-2 px-6 rounded-full text-lg sm:text-base font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Design</a>
            </div>
      )}
    </div>
  );
}