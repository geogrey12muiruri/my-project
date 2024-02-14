import React from "react";

const FeaturedGarments = () => {
  const garments = [
    {
      id: 1,
      name: "Classic Blazer",
      image: "/assets/garment1.jpg",
      price: 250,
      customizations: [
        { name: "Fabric", options: ["Wool", "Cashmere", "Linen"] },
        { name: "Color", options: ["Black", "Navy", "Grey"] },
      ],
    },
    // Add more garment objects here...
  ];

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Shop Our Featured Designs</h2>
      <div className="grid grid-cols-3 gap-6 mx-auto">
        {garments.map((garment) => (
          <GarmentCard key={garment.id} garment={garment} />
        ))}
      </div>
    </section>
  );
};

const GarmentCard = ({ garment }) => {
  const { image, name, price, customizations } = garment;

  return (
    <div className="shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="px-4 py-3">
        <h3 className="text-lg font-medium mb-1">{name}</h3>
        <p className="text-gray-500">Starting at ${price}</p>
        <ul className="mt-3 flex items-center space-x-2">
          {customizations.map((customization) => (
            <li key={customization.name}>
              <span className="text-gray-500 font-semibold">{customization.name}:</span>
              <span className="text-gray-700">{customization.options[0]}</span>
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default FeaturedGarments;
