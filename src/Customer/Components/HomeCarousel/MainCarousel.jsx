import React from 'react'
import { MainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {

  const items = MainCarouselData.map((item) => <img className='cursor-pointer -z-10 mx-auto  ' role="presentation" src={item.image} alt='carousel data item' />)

  return (
    <AliceCarousel
        // mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableButtonsControls
      // controlsStrategy="alternate"
      />
  )
}

export default MainCarousel