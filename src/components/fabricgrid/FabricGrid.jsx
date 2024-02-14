import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FabricsIcon from '../../assets/carouselImg/fabric-textile-icon.svg'; 
import StylesIcon from '../../assets/carouselImg/brush-pencil-icon.svg'; // Import the fabric icon
import AccentIcon from '../../assets/carouselImg/italic-icon.svg'; // Import the accent icon



const FabricGrid = ({ fabrics, onFabricSelect }) => {
  const [filteredFabrics, setFilteredFabrics] = useState(fabrics);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedOption, setSelectedOption] = useState('fabrics'); // Default selected option is fabrics

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    filterFabrics(event.target.value, selectedCategory);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    filterFabrics(searchQuery, event.target.value);
  };

  const filterFabrics = (query, category) => {
    setFilteredFabrics(
      fabrics.filter((fabric) =>
        fabric.name.toLowerCase().includes(query.toLowerCase()) &&
        (category === 'All' || fabric.category === category)
      )
    );
  };

  useEffect(() => {
    if (!searchQuery) {
      filterFabrics('', selectedCategory);
    }
  }, [searchQuery, selectedCategory]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="fabric-grid w-64"> {/* Set a fixed width for the fabric grid */}
      <div className="flex flex-col items-start">
        <h2 className="mb-4 text-xl font-bold">Customization Options</h2>
        <div className="flex gap-4 mb-4">
          <div
            className={`cursor-pointer ${selectedOption === 'fabrics' ? 'text-blue-500' : ''}`}
            onClick={() => handleOptionSelect('fabrics')}
          >
            Fabrics
            <img src={FabricsIcon} alt='fabric-icon' style={{width: '20px', height: '20px'}} />
          </div>
          <div
            className={`cursor-pointer ${selectedOption === 'styles' ? 'text-blue-500' : ''}`}
            onClick={() => handleOptionSelect('styles')}
          >
            Styles
            <img src={StylesIcon} alt='styles-icon' style={{width: '20px', height: '20px'}} />
          </div>
          <div
            className={`cursor-pointer ${selectedOption === 'accent' ? 'text-blue-500' : ''}`}
            onClick={() => handleOptionSelect('accent')}
          >
            Accent
            <img src={AccentIcon} alt='accent-icon' style={{width: '20px', height: '20px'}} />
          </div>
        </div>
        <div className="w-full relative">
          <form>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="absolute inset-y-0 right-0 h-full pr-3 pointer-events-none text-gray-900"
            >
              <option value="All">All</option>
              <option value="Cotton">Cotton</option>
              <option value="Silk">Silk</option>
              {/* Add more categories as needed */}
            </select>
            <input
              type="search"
              id="search-dropdown"
              className="block w-full p-2.5 pl-10 text-sm text-gray-900 bg-white rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Search fabrics..."
              onChange={handleSearchChange}
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-black bg-pink-700 rounded-e-lg border border-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div className="fabric-list grid grid-cols-3 gap-4">
        {filteredFabrics.map((fabric) => (
          <div
            key={fabric.id}
            className="fabric-item cursor-pointer"
            onClick={() => onFabricSelect(fabric)}
          >
            <img src={fabric.imageUrl} alt={fabric.name} className="w-full h-auto" />
            <div className="fabric-info">
              <h4 className="text-sm">{fabric.name}</h4>
              <p className="text-sm">${fabric.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

FabricGrid.propTypes = {
  fabrics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired, // Assuming category is a property of fabric
    })
  ).isRequired,
  onFabricSelect: PropTypes.func.isRequired,
};

export default FabricGrid;
