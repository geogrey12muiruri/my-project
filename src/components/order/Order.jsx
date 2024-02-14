import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "./productsData"; // Assume this is where your product data is stored

const OrderPage = () => {
  const { category } = useParams(); // Use React Router to get the category from the URL params
  const [quantity, setQuantity] = useState(1); // State to store the quantity
  const product = productsData.find((product) => product.category === category); // Find the product based on the category

  const handleQuantityChange = (e) => {
    // Handle quantity change
    setQuantity(e.target.value);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">{product.category}</h1>
      <p className="mb-6">{product.description}</p>

      <div className="grid grid-cols-2 gap-4">
        {/* Display additional designs */}
        {product.designs.map((design) => (
          <div key={design.id}>
            <img src={design.image} alt={design.name} className="mb-2" />
            <p className="font-bold">{design.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {/* Order form with quantity input and price calculator */}
        <h2 className="text-xl font-bold mb-2">Place Your Order</h2>
        <div className="flex items-center mb-4">
          <label htmlFor="quantity" className="mr-2">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="border border-gray-300 px-2 py-1 rounded-md"
          />
        </div>
        <p>Total Price: ${product.pricePerPiece * quantity}</p>

        {/* Checkout button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
