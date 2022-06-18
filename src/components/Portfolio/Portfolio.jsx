import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Scoobie from '../../assets/images/Scoobie.png'

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper>
        <SwiperSlide>
          <img src={Scoobie} alt='slide1' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
