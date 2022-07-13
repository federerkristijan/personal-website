import React, { useContext} from "react";
import "./Footer.css";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import { themeContext } from "../../Context";

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="footer-wrapper"
    stlye={{ background: darkMode ? "var(--black)" : "var(--white)"}} >
      <div className="f-content">
        <span>federer.kristijan@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/federerkristijan">
            <Github color={darkMode ? "white" : "black"} size="1.8rem" />
          </a>
          <a href="https://www.linkedin.com/in/kristijan-federer/">
            <LinkedIn color={darkMode ? "white" : "black"} size="1.8rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
