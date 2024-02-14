import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import HeroImage1 from '../../assets/images/HeroImage.jpg';
import HeroImage2 from '../../assets/images/carousel/HeroImage2.jpg';
import HeroImage3 from '../../assets/images/carousel/HeroImage3.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const HeroSection = () => {
  return (
    <div className="relative h-100 text-white overflow-hidden">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        animation="fallAnimation"
      >
        {[HeroImage1, HeroImage2, HeroImage3].map((image, index) => (
          <div key={index} data-src={image}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-0 right-0 p-8 transform -translate-y-1/2">
              <h1 className="text-5xl font-bold leading-tight mb-4">Say goodbye to off-the-rack blues. Hello, bespoke bliss.</h1>
              <p className="text-lg text-gray-300 mb-8">Unleash your inner fashion icon. We will find the perfect stitch for your story.</p>
              <a href="#" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
            </div>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
}

export default HeroSection;