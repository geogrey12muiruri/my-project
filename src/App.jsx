import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/nav/Navbar"

import './index.css'
import Design from './components/design/Design'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import {Suit} from './components/suits/Suit'
import FabricGrid from './components/fabricgrid/FabricGrid'
import Product from './components/product/Product'
import cottonImage from './assets/images/fabrics/195_normal.jpeg';
import silkImage from './assets/images/fabrics/188_normal.jpeg';
import linenImage from './assets/images/fabrics/197_normal.jpeg';
import woolImage from './assets/images/fabrics/199_normal.jpeg'
import polyesterImage from './assets/images/fabrics/200_normal.jpeg'
import rayonImage from './assets/images/fabrics/218_normal.jpeg'
import nylonImage from './assets/images/fabrics/228_normal.jpeg'
import spandexImage from './assets/images/fabrics/222_normal.jpeg'
import acrylicImage from './assets/images/fabrics/231_normal.jpeg'
import modalImage from './assets/images/fabrics/245_normal.jpeg'
import bambooImage from './assets/images/fabrics/244_normal.jpeg'
import tencelImage from './assets/images/fabrics/242_normal.jpeg'



const App = () => {
  const fabrics = [
    {
      id: 1,
      name: 'Cotton',
      imageUrl: cottonImage,
      price: 10,
    },
    {
      id: 2,
      name: 'Silk',
      imageUrl: silkImage,
      price: 15,
    },

    // Add more fabrics as needed
    {
      id: 3,
      name: 'Linen',
      imageUrl: linenImage,
      price: 20,
    },
    {
      id: 4,
      name: 'Wool',
      imageUrl: woolImage,
      price: 25,
    },
    {
      id: 5,
      name: 'Polyester',
      imageUrl: polyesterImage,
      price: 30,
    },
    {
      id: 6,
      name: 'Rayon',
      imageUrl: rayonImage,
      price: 35,
    },
    {
      id: 7,
      name: 'Nylon',
      imageUrl: nylonImage,
      price: 40,
    },
    {
      id: 8,
      name: 'Spandex',
      imageUrl: spandexImage,
      price: 45,
    },
    {
      id: 9,
      name: 'Acrylic',
      imageUrl: acrylicImage,
      price: 50,
    },
    {
      id: 10,
      name: 'Modal',
      imageUrl: modalImage,
      price: 55,
    },
    {
      id: 11,
      name: 'Bamboo',
      imageUrl: bambooImage,
      price: 60,
    },
    {
      id: 12,
      name: 'Tencel',
      imageUrl: tencelImage,
      price: 65,
    }

            
  ];

  const handleFabricSelect = (fabric) => {
    // Handle fabric selection
    console.log(fabric);
  }

  return (
    <Router>
      <Navbar />
      {/* Other components */}
     
      
      <Routes>
      <Route path="/design" element={<Design />} />
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/category/Suits" element={<Suit />} />
      <Route path="/fabric" element={<FabricGrid fabrics={fabrics} onFabricSelect={handleFabricSelect} />} />
      </Routes>
      
      <Footer />
    </Router>
 
  )
}

export default App