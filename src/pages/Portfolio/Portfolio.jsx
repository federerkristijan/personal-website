import React, { Component } from "react";
import "./Portfolio.css";
import Slider from "react-slick";
import "swiper/css";
import Scoobie from "../../assets/images/scoobie2.png";
import Mine from "../../assets/images/minesweeper.png";
import Food from "../../assets/images/fooderly_responsive.png";

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
            <a href="https://github.com/sailman86/scoobie" >
              Scoobie: dating App for dogs
            </a>
            <img src={Scoobie} alt="Scoobie" />
          </div>
          <div>
            <a href="https://github.com/federerkristijan/minesweeper">
              Minesweeper Game
            </a>
            <img src={Mine} alt="Mine" />
          </div>
          <div>
            <a href="https://github.com/federerkristijan/food-order-app">
              Food Order App
            </a>
            <img src={Food} alt="Food" />
          </div>
        </Slider>
      </div>
    );
  }
}
