import React, { useState } from 'react';
import fabrics from './fabrics'; // Import fabrics data from a separate file
import FabricGrid from './FabricGrid'; // Import the FabricGrid component

const CustomizeSuit = () => {
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedLapel, setSelectedLapel] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedPocket, setSelectedPocket] = useState(null);

  const handleFabricSelect = (fabric) => {
    setSelectedFabric(fabric);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleLapelSelect = (lapel) => {
    setSelectedLapel(lapel);
  };

  const handleButtonSelect = (button) => {
    setSelectedButton(button);
  };

  const handlePocketSelect = (pocket) => {
    setSelectedPocket(pocket);
  };

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">Customize Your Suit</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-bold mb-2">Select Fabric</h3>
          {/* Pass the fabrics data and handleFabricSelect function as props to the FabricGrid component */}
          <FabricGrid fabrics={fabrics} onFabricSelect={handleFabricSelect} />
        </div>
        {/* Add sections for selecting color, lapel, button, and pocket */}
      </div>
    </div>
  );
};

export default CustomizeSuit;
