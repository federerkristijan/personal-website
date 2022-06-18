import React from "react";
import "./Intro.css";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pic from '../../assets/images/kiki_pic.jpg'

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Kristijan Federer</span>
          <span>Frontend Developer with a fullstack background</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/federerkristijan">
            <FontAwesomeIcon icon={faGithubAlt} color="var(--black)" />
          </a>
          <a href="https://www.linkedin.com/in/kristijan-federer/" >
            <FontAwesomeIcon icon={faLinkedin} color="var(--balck)"/>
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Pic} alt="kiki_pic" width="170rem" height="170rem" />
      </div>
    </div>
  );
};

export default Intro;
