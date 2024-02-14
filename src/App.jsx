import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/nav/Navbar"

import './index.css'
import Design from './components/design/Design'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import {Suit} from './components/suits/Suit'

import Product from './components/product/Product'


function App() {
  

  return (
    <Router>
      <Navbar />
      {/* Other components */}
     
      
      <Routes>
      <Route path="/design" element={<Design />} />
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/category/Suits" element={<Suit />} />
      </Routes>
      
      <Footer />
    </Router>
 
  )
}

export default App
