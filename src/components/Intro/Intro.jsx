import React from "react";
import "./Intro.css";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cube from './Cube/cube.js'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Kristijan Federer</span>
          <span>Frontend Developer with a fullstack background</span>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button i-button" to="contact">Contact me</button>
        </Link>

        {/* <div className="i-icons">
          <a href="https://github.com/federerkristijan">
            <FontAwesomeIcon icon={faGithub} color="var(--black)" />
          </a>
          <a href="https://www.linkedin.com/in/kristijan-federer/" >
            <FontAwesomeIcon icon={faLinkedin} color="var(--balck)"/>
          </a>
        </div> */}
      </div>
      <div className="stage-cube-cont">
          <div className="cubespinner">
            {cube.map((face, index) => {
              return (
                <div className={`face${index + 1}`} >
                  <FontAwesomeIcon icon={face.icon} color={face.color} style={{ fontSize: "4rem"}}/>
                </div>
              )
            })}
          </div>
        </div>
    </div>
  );
};

export default Intro;
