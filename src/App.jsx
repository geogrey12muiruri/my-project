import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/nav/Navbar"

import './index.css'
import Design from './components/design/Design'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'


function App() {
  

  return (
    <Router>
      <Navbar />
      {/* Other components */}
      
      <Routes>
      <Route path="/design" element={<Design />} />
      <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer />
    </Router>
 
  )
}

export default App
