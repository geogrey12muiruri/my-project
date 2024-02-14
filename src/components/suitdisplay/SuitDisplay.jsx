import React, { useState } from 'react';
import suitImage from '../../assets/images/fabrics/display.png';
import fabric1Image from '../../assets/images/fabrics/fabric1.jpeg';

const SuitDisplay = () => {
  const [selectedFabric, setSelectedFabric] = useState(null);

  const fabrics = [
    { id: 1, name: 'Fabric 1', price: 100, image: fabric1Image },
    // Add more fabric objects here
  ];

  const handleFabricSelect = (fabric) => {
    setSelectedFabric(fabric);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        {fabrics.map((fabric) => (
          <div key={fabric.id} onClick={() => handleFabricSelect(fabric)}>
            <p>{fabric.name}</p>
            <p>{fabric.price}</p>
            <img src={fabric.image} alt={fabric.name} />
          </div>
        ))}
      </div>
      <div>
        {/* Display suit image here */}
        {/* If a fabric is selected, overlay the suit with the selected fabric image */}
        <div 
          style={{
            backgroundImage: `url(${suitImage}), ${selectedFabric ? `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${selectedFabric.image})` : ''}`,
            backgroundBlendMode: 'multiply',
            height: '500px', // Set to the height of your suit image
            width: '300px', // Set to the width of your suit image
          }}
        />
        {/* Display customization options here */}
      </div>
    </div>
  );
};

export default SuitDisplay;