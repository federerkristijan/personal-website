import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Scoobie from '../../assets/images/scoobie2.png'
import Mine from '../../assets/images/minesweeper.png'
import Food from '../../assets/images/fooderly_responsive.png'

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
      spaceBetween={10}
      slidesPerView={2}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
        <a href='https://github.com/sailman86/scoobie'>Scoobie: dating App for dogs</a>
          <img src={Scoobie} alt='slide1' />
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://github.com/federerkristijan/minesweeper'>Minesweeper Game</a>
          <img src={Mine} alt='slide2' />
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://github.com/federerkristijan/food-order-app'>Food Order App</a>
          <img src={Food} alt='slide3' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
