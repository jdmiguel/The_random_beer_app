import React from "react";
import PropTypes from "prop-types";

/** Styles */
import "./styles.css";

const Link = ({ children, onClick }) => {
  return (
    <button className="link" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Link.propTypes = {
  onClick: PropTypes.func
};

export default Link;
