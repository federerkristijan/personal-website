import React from "react";
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../../../Context";
import { useContext } from "react";
import "./Toggle.css";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const HandleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle">
      <Moon />
      <Sun />
      <div
        className="t-button"
        onClick={HandleClick}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
