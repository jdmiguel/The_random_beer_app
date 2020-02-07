import React from "react";
import PropTypes from "prop-types";

/** Styles */
import "./styles.css";

const Button = ({ children, onClick }) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func
};

export default Button;
