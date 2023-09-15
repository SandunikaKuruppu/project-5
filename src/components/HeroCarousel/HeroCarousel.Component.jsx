import React, { useState } from 'react'
import HeroSlider from "react-slick"

const HeroCarousel = () =>{
const [images, setImages] = useState([]);
    return (
  <>
    <div className='lg:hidden'>
        <HeroSlider {...settings}>
            
        </HeroSlider>
    </div>
    <div className='hidden lg:block'>
      <HeroSlider {...settingsLG}>
       
        </HeroSlider>
    </div>
  </>
  )
}

export default HeroCarousel;