import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Scoobie from '../../assets/images/Scoobie.png'
import Mine from '../../assets/images/minesweeper.png'

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={1}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={Scoobie} alt='slide1' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mine} alt='slide2' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
