import React from "react";

/** Styles */
import "./styles.css";

/** Components */
import Beer from "./Beer";

const Logo = () => (
  <h1 className="logo-container">
    <Beer />
    <span className="logo-title">The Random Beer App
    </span>
  </h1>
);

export default Logo;
