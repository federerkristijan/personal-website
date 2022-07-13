// import React, { useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/kf_logo.png";
import { Link } from "react-scroll";
import Toggle from "./Toggle/Toggle";

const Navbar = () => {
  // const [scrolled, setScrolled] = React.useState(false)

  // const scrollHandler = () => {
  //   const offset = window.scrollY
  //   if(offset > 200) {
  //     setScrolled(true)
  //   } else {
  //     setScrolled(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHandler)
  // })

  // let navbarClasses = ["navbar"]
  // if(scrolled) {
  //   navbarClasses.push("scrolled")
  // }

  return (
    // <div className={navbarClasses.join(" ")}>
    <div className="navbar" >
      <div className="n-left">
        <div className="n-logo">
          <Link to="contact" spy={true} smooth={true}>
            <img src={Logo} alt="logo1" height="60rem" width="60rem" />
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
            {/* <li>
              <Link to="cv" spy={true} smooth={true}>
                CV
              </Link>
            </li> */}
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
