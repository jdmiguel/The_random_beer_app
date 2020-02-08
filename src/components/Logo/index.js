import React from "react";

/** Styles */
import "./styles.css";

/** Components */
import Icon from "./Icon";

const Logo = () => (
  <h1 className="logo-container">
    <Icon />
    <span className="logo-title">The Random Beer App</span>
  </h1>
);

export default Logo;
