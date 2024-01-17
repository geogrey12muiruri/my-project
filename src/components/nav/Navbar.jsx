import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiUser, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <nav className="p-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSideNav}
              className="text-gray-700 hover:text-orange-950 focus:outline-none lg:hidden"
            >
              <FiMenu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 flex items-center">
              <Link to="/portfolio" className="text-gray-900 hover:text-orange-950">
                Portfolio
              </Link>
              <Link to="/custom-clothing" className="ml-4 text-gray-900 hover:text-orange-950">
                Custom Clothing
              </Link>
              <Link to="/custom-clothing" className="ml-4 text-gray-900 hover:text-orange-950">
                Custom Foot Wear
              </Link>
              
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.svg" alt="Company Logo" />
            </Link>
            <div className="ml-4 flex items-center">
              <button className="text-gray-700 hover:text-orange-950 focus:outline-none">
                <FiUser className="h-6 w-6" />
              </button>
              <button className="ml-4 text-gray-700 hover:text-orange-950 focus:outline-none">
                <FiShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden ${showSideNav ? "block" : "hidden"}`}
        onClick={toggleSideNav}
      >
        {/* Side navigation content goes here */}
        <div className="h-screen w-100 fixed text-black top-0 left-0 shadow-lg">
          <div className="flex flex-col p-4">
            <Link to="/portfolio" className="text-gray-900 hover:text-orange-950 mb-4">
              Portfolio
            </Link>
            <Link to="/custom-clothing" className="text-gray-900 hover:text-orange-950 mb-4">
              Custom Clothing
            </Link>
            <Link to="/custom-clothing" className="text-gray-900 hover:text-orange-950 mb-4">
              Custom Foot Wear
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
