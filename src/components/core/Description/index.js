import React from "react";

/** Styles */
import "./styles.css";

const Description = ({ children }) => {
  return (
    <div className="description">
      <p>{children}</p>
    </div>
  );
};

export default Description;
