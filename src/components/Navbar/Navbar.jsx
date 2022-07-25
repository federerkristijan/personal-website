// import React, { useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/kf_logo.png";
import Logo2 from "../../assets/images/kf_logo2.png";
import { Link } from "react-scroll";
import Toggle from "./Toggle/Toggle";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="navbar" >
      <div className="n-left">
        <div className="n-logo">
          <Link to="contact" spy={true} smooth={true}>
            {darkMode ? <img src={Logo2} alt="logo" height="60rem" width="60rem" /> :<img src={Logo} alt="logo" height="60rem" width="60rem" />}
          </Link>
        </div>
        <Toggle />
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
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
