import React from 'react';
import suit1 from '../../assets/images/suit.jpeg';
import suit2 from '../../assets/images/suit1.jpeg';
import suit3 from '../../assets/images/suit3.jpeg';
import suit4 from '../../assets/images/suit2.jpeg';
import suit5 from '../../assets/images/suit5.png';
import suit6 from '../../assets/images/suit6.png';
import suit7 from '../../assets/images/suit6.png';
import suit8 from '../../assets/images/suit7.jpeg';
import suit9 from '../../assets/images/suit8.png';
import suit10 from '../../assets/images/suit9.webp';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/images/banner.jpeg';

export function Suit() {
  const suits = [
    { id: 1, name: 'The Savile Row Classic', description: 'High-quality wool suit.', price: 100, image: suit1 },
    { id: 2, name: 'The Double-Breasted Powerhouse', description: 'Mid-weight wool suit.', price: 200, image: suit2 },
    { id: 3, name: 'The Italian Sprezzatura', description: 'Luxurious fabrics like cashmere or mohair in muted, earthy tones.', price: 300, image: suit3 },
    { id: 4, name: 'The American Ivy League', description: 'Unconstructed, single-breasted with two or three buttons.', price: 400, image: suit4 },
    { id: 5, name: 'The English Gentleman', description: 'Tailored from high-quality wool, featuring traditional British tailoring.', price: 500, image: suit5 },
    { id: 6, name: 'The Modern Slim Fit', description: 'Sleek and stylish, designed to fit close to the body for a modern look.', price: 600, image: suit6 },
    { id: 7, name: 'The Casual Linen Suit', description: 'Perfect for warm weather, featuring a relaxed fit and breathable linen fabric.', price: 700, image: suit7 },
    { id: 8, name: 'The Vintage Tweed Suit', description: 'A classic choice for a stylish, retro-inspired look, perfect for cooler weather.', price: 800, image: suit8 },
    { id: 9, name: 'The Business Professional', description: 'A versatile suit suitable for any business setting, crafted from high-quality materials.', price: 900, image: suit9 },
    { id: 10, name: 'The Formal Tuxedo', description: 'An elegant choice for formal occasions, featuring a timeless design and luxurious fabric.', price: 1000, image: suit10 },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-64 bg-cover bg-center text-center py-20" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h1 className="text-4xl font-bold text-white">Tailor-Made</h1>
        <p className="mt-4 text-white">Find your perfect fit from our curated collection of designs or customize your own.</p>
      </div>

      <div className="w-3/4 my-10">
        <h2 className="text-2xl font-bold mb-4">Our Suits</h2>
        <div className="grid grid-cols-3 gap-4">
          {suits.map((suit) => (
            <div key={suit.id} className="border p-4">
              <img src={suit.image} alt={suit.name} className="w-full h-64 object-cover" />
              <h3 className="text-xl font-bold mt-4">{suit.name}</h3>
              <p className="text-gray-500">{suit.description}</p>
              <p className="text-blue-500 text-lg mt-2">${suit.price}</p>
              <Link to={`/suits/${suit.id}`} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
