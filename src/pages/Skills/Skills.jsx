import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="s-container">
      <div className="s-wrapper">
        <div className="skills">
          <div className="s-heading">
            <h1>Skills</h1>
          </div>
          <div className="s-text">
            <span>Javacript, React, Hugo, Ruby on Rails, HTML, CSS/SASS</span>
            <br />
            <span>PostgreSQL, GitHub, Sanity, Vercel, Heroku, Figma</span>
          </div>
        </div>
      </div>
      <div className="i-wrapper">
        <div className="i-heading"></div>
        <h1>Interests</h1>
        <div className="i-subheading">
          <h3>

          </h3>
        </div>
        <div className="i-text">
          <span>Ecommerce, Gaming, VR & AR, Blockchain Technologies</span>
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
