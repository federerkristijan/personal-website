import React from "react";
import "./Footer.css";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer-wrapper" >
      <div className="f-content">
        <span>federer.kristijan@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/federerkristijan">
            <Github fill="white" size="1.8rem" />
          </a>
          <a href="https://www.linkedin.com/in/kristijan-federer/">
            <LinkedIn fill="white" size="1.8rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
