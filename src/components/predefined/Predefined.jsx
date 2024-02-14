import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Suits from "../../assets/images/fabrics/display.png";
import Work from "../../assets/images/work-wear.jpeg";
import Casual from "../../assets/images/casual-wear.jpeg";
import Uniform from "../../assets/images/uniform.jpg";
import Corporate from "../../assets/images/corporate.jpeg";
import { Link } from "react-router-dom";

const categories = [
  {
    image: Suits,
    category: "Suits",
    description: "Discover our range of high-quality suits for all occasions.",
    pricePerPiece: 100,
  },
  // ... other categories ...
  {
    image: Work,
    category: "work-wear",
    description: "be safe and stylish at the same time with our quality work-wear",
    pricePerPiece: 5000
  },
   {
    image: Casual,
    category: "casual",
    description: "Checkout our collection of casual wear",
    pricePerPiece: 9000
   },
   {
    image: Uniform,
    category: "uniform",
    description: "Checkout our collection of uniform",
    pricePerPiece: 9000
   },
   {
    image: Corporate,
    category: "Corporate",
    description: "Checkout our collection of Corporate",
    pricePerPiece: 9000
   }
                
];


export function Predefined() {
  return (
    <div className="flex flex-wrap justify-center">
     <div className="w-full text-center py-4">
        <Typography variant="h4" color="blue-gray" className="font-bold">
          Get Inspired By Us
        </Typography>
        <Typography variant="h6" color="gray" className="font-normal">
          Our Curated Designs
        </Typography>
      </div>
      {categories.map((category) => (
        <Card key={category.category} className="w-64 m-6 transform transition duration-500 rounded-md ease-in-out hover:scale-105">
          <CardHeader shadow={false} floated={false} className="h-64">
            <img
              src={category.image}
              alt={category.category}
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {category.category}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                ${category.pricePerPiece}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {category.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to={`/category/${category.category}`}>
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Order Now
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Predefined;
