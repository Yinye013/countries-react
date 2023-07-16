/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

// import Sun from "./Sun.svg";
// import Moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  function setDarkMode() {
    document.querySelector("body").setAttribute("data-theme", "dark");
    document.body.style.color = "#fff";
    document.body.style.backgroundColor = "#23395d";

    localStorage.setItem("selectedTheme", "dark");
  }
  //data-theme gives us the current theme
  function setLightMode() {
    document.querySelector("body").setAttribute("data-theme", "light");
    document.body.style.color = "#23395d";
    document.body.style.backgroundColor = "#fff";

    localStorage.setItem("selectedTheme", "light");
  }

  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  }
  if (selectedTheme === "light") {
    setLightMode();
  }
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <BsSun className="sun" size={"15px"} />
        <BsMoon className="moon" size={"15px"} />
      </label>
    </div>
  );
};

export default DarkMode;
