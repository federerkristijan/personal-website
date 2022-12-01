import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="s-container" id="skills">
      <div className="s-wrapper">
        <div className="skills">
          <div className="s-heading">
            <h1>Skills</h1>
          </div>
          <div className="s-text">
            <span>
              Javascript, React&Redux, HTML, CSS/SASS
            </span>
            <br />
            <span>
              Sanity, Ruby on Rails, PostgreSQL, Google Analytics
              <br />
              GitHub, Vercel, Stripe, Bootstrap, Figma
            </span>
          </div>
        </div>
      </div>
      <div className="i-wrapper">
        <div className="i-heading"></div>
        <h1>Interests</h1>
        <div className="i-text">
          <span>
            Ecommerce, VR & AR, Animations, Web3, Blockchain technologies,
            Gaming
          </span>
          <br />
          {/* <span>
            Cooking, Traveling, Dancing, Organisation of Events, Boardgames
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
