

import Brand from "../brands/Brand"
import Predefined from "../predefined/Predefined"

import Testimonial from "../testimonials/Testimonial"
import {CarouselWithContent} from "./CarouselWithContent"
import Cat from '../cats/Cat'






const Home = () => {
  return (
    <div>      
    <CarouselWithContent />
     <Predefined  />
     <Brand />
     <Testimonial />
     <Cat />
     
    </div>
  )
}

export default Home
