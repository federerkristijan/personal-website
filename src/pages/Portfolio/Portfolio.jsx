import React, { Component } from "react";
import "./Portfolio.css";
import Slider from "react-slick";
import "swiper/css";
import Scoobie from "../../assets/images/scoobie2.png";
import Mine from "../../assets/images/minesweeper.png";
import Food from "../../assets/images/fooderly_responsive.png";
import Weather from "../../assets/images/weatherapp.png";
import Space from "../../assets/images/spaceinvaders.png";
import Ecommerce from "../../assets/images/ecommerce.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="portfolio">
        <h2>Recent Projects</h2>
        <Slider {...settings}>
          <div>
            <a href="https://github.com/sailman86/scoobie" target="_blank" rel="noreferrer" >
              Scoobie: dating App for dogs
            </a>
            <img src={Scoobie} alt="Scoobie" />
          </div>
          <div>
            <a href="https://github.com/federerkristijan/weatherapp" target="_blank" rel="noreferrer">
              Weather App
            </a>
            <img src={Weather} alt="WeatherApp" />
          </div>
          <div>
            <a href="https://github.com/federerkristijan/food-order-app" target="_blank" rel="noreferrer">
              Food Order App
            </a>
            <img src={Food} alt="Food" />
          </div>
          <div>
            <a href="https://ecommerce-lyart-iota.vercel.app" target="_blank" rel="noreferrer">
              Ecommerce
            </a>
            <img src={Ecommerce} alt="Ecommerce" />
          </div>
          <div>
            <a href="https://github.com/federerkristijan/space-invaders" target="_blank" rel="noreferrer">
              Space Invaders Game
            </a>
            <img src={Space} alt="SpaceInv" />
          </div>
          <div>
            <a href="https://github.com/federerkristijan/minesweeper" target="_blank" rel="noreferrer">
              Minesweeper Game
            </a>
            <img src={Mine} alt="Mine" />
          </div>
        </Slider>
      </div>
    );
  }
}
