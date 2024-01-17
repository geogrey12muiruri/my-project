import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-500 flex py-8">
     <div className="w-full md:w-1/3 text-center md:text-left px-4 mb-4 md:mb-0">
          <h4 className="text-black font-semibold mb-2">Products</h4>
          <ul>
            <li><a href="/custom-clothing" className="text-black hover:text-gray-200">Customized Clothing</a></li>
            <li><a href="/custom-footwear" className="text-black hover:text-gray-200">Customized Footwear</a></li>
            <li><a href="/portfolio" className="text-black hover:text-gray-200">Portfolio</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left px-4 mb-4 md:mb-0">
          <h4 className="text-black font-semibold mb-2">Company</h4>
          <ul>
            <li><a href="/about" className="text-black hover:text-gray-200">About Us</a></li>
            <li><a href="/contact" className="text-black hover:text-gray-200">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left px-4 mb-4 md:mb-0">
          <h4 className="text-black font-semibold mb-2">Design</h4>
          <ul>
            <li><a href="/design" className="text-black hover:text-gray-200">Design Your Own</a></li>
          </ul>
        </div>
      
      {/* Social media icons */}
      <div className="flex justify-center mt-4">
        <a href="#" className="text-black mx-2 hover:text-gray-200"><FaFacebook size={24} /></a>
        <a href="#" className="text-black mx-2 hover:text-gray-200"><FaTwitter size={24} /></a>
        <a href="#" className="text-black mx-2 hover:text-gray-200"><FaInstagram size={24} /></a>
      </div>
    </footer>
  );
};

export default Footer;
