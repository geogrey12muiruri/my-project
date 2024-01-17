import React from 'react'
import DesignImage from '../../assets/images/ds.jpg'
const Design = () => {
    const customStyles = {
        // Adjust as needed
        objectFit: "cover",
        objectPosition: "50% 50%", // Center the image
        // Set the z-index to bring the images into view
      };
  return (
    <section className='flex'>
    <div className='w-1/2 h-screen'>
        <img src={DesignImage}  style={customStyles}/>  

    </div>
    <div className="w-1/2 p-16 flex flex-col justify-center container">
        <h1 className="text-3xl font-serif font-bold mb-4 mt-24 underline-offset-2 text-orange-950 animate-pulse">Choose from a Variety of Fabrics</h1>
         <p className="text-lg mb-4 font-serif animate-bounce">current fabric design</p>
         <p className="text-lg mb-4 font-serif">price$</p>
    </div>
    <div className="flex items-center indent-6 ">
          <button className="bg-white bg-blend-saturation px-5 font-serif hover:bg-red-50  border-spacing-1 text-black font-bold py-2  rounded mr-6">
             Customize
           </button>
           {/* Add more BrandLogo components here for each brand */}
         </div>

    </section>
  )
}

export default Design
// import React from "react";
// import CarouselComponent from "../carousel/CarouselComponent";
// import How from "../howitworks/How";
// import './hero.css'
// import Buttton from "../button/Buttton";

// const HeroSection = () => {
//   return (
//     <section className="flex">
//       <div className="w-1/2 h-screen ">
//         <CarouselComponent />
//       </div>
//       <div className="w-1/2 p-16 flex flex-col justify-center container">
//         <h1 className="text-3xl font-serif font-bold mb-4 mt-24 underline-offset-2 text-orange-950 animate-pulse">Bespoke Apparel Platform</h1>
//         <p className="text-lg mb-4 font-serif animate-bounce">elevate your style</p>
//         <p className="text-lg mb-4 font-serif">from 105$</p>
//         <div className="flex items-center indent-6 ">
//           <button className="bg-white bg-blend-saturation px-5 font-serif hover:bg-red-50  border-spacing-1 text-black font-bold py-2  rounded mr-6">
//             Design
//           </button>
//           {/* Add more BrandLogo components here for each brand */}
//         </div>
//         <div className="flex items-center gap-4 p-5 animate-none">
        
//         <h1 className="text-2xl font-serif">Elevate Your Style With Custom-Made Apparel</h1>
//         <p className="text-3xl font-serif">Experience the perfect fit and impeccable craftsmanship tailored to your unique style.</p>
        

//         </div>
        
//         <div>
//           <h2 className="text-xl font-bold mt-8 mb-4">Featured in</h2>
//           {/* Replace with your brand logo component */}

          
//           {/* Add more BrandLogo components here for each brand */}
//         </div>
//         <How />
//         <Buttton />
        
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
