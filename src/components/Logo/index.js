import React from "react";

/** Styles */
import "./styles.css";

/** Components */
import Icon from "./Icon";

/** Literals */
import { logoTitle } from "../../utils/literals";

const Logo = () => (
  <h1 className="logo-container">
    <Icon />
    <span className="logo-title">{logoTitle}</span>
  </h1>
);

export default Logo;
