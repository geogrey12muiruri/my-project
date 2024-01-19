import React from "react";
import { Link } from "react-router-dom";
import CarouselComponent from "../carousel/CarouselComponent";
import How from "../howitworks/How";
import Buttton from "../button/Buttton";
import Inspirations from '../inspirations/Inspirations'

const HeroSection = () => {
  return (
    <section className="flex">
      <div className="w-1/2 h-screen ">
        <CarouselComponent />
      </div>
      <div className="w-1/2 p-16 flex flex-col justify-center container">
        <h1 className="text-3xl font-serif font-bold mb-4 mt-24 underline-offset-2 text-orange-950 animate-pulse">Bespoke Apparel Platform</h1>
        <p className="text-lg mb-4 font-serif animate-bounce">elevate your style</p>
        <p className="text-lg mb-4 font-serif">from 105$</p>
        <div className="flex items-center indent-6 ">
        <Link to="/design" className="text-gray-900 hover:text-orange-950">
        <button className="bg-red-50 bg-blend-saturation px-5 font-serif hover:bg-pink-500  border-spacing-1 text-black font-bold py-2  rounded mr-6">
            Design
          </button>
                
         </Link>
          
          {/* Add more BrandLogo components here for each brand */}
        </div>
        <div className="flex items-center gap-4 p-5 animate-none">
        
        <h1 className="text-2xl font-serif">Elevate Your Style With Custom-Made Apparel</h1>
        <p className="text-3xl font-serif">Experience the perfect fit and impeccable craftsmanship tailored to your unique style.</p>
        

        </div>
        
        <div>
          <h2 className="text-xl font-bold mt-8 mb-4">Featured in</h2>
          {/* Replace with your brand logo component */}

          
          {/* Add more BrandLogo components here for each brand */}
        </div>
        <How />
        <Buttton />
        <Inspirations />
        
      </div>
    </section>
  );
};

export default HeroSection;
