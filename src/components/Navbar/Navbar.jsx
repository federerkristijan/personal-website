import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/kf_logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-logo">
          <img src={Logo} alt="logo1" height="60rem" width="60rem" />
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="cv" spy={true} smooth={true}>
                CV
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        {/* <button className="button n-button">
          Contact me
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
