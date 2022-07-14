import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/kf_logo.png";
import Logo2 from "../../assets/images/kf_logo2.png";
import { Link } from "react-router-dom";
import Toggle from "./Toggle/Toggle";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clickHandler = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" spy={true} smooth={true} onClick={closeMobileMenu}>
          {darkMode ? (
            <img src={Logo2} alt="logo" height="60rem" width="60rem" />
          ) : (
            <img src={Logo} alt="logo" height="60rem" width="60rem" />
          )}
        </Link>
        <Toggle />
        <div className="menu-icon" on onClick={clickHandler}>
          <i className={click ? "fas fa-times" : "fas fa bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Menu
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
            <Link
              activeClass="active"
              className="nav-links"
              onClick={closeMobileMenu}
              to="Navbar"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              className="nav-links"
              onClick={closeMobileMenu}
              spy={true}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              className="nav-links"
              onClick={closeMobileMenu}
              spy={true}
              smooth={true}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
