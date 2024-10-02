import React, { useState } from "react";
import "./ButtonServis.css";

function ButtonServis({ text, children }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className="button-servis"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`buttonServis-container ${isHovered ? "hovered" : ""}`}>
        <div className="buttonServis-container-inside">
          <p dangerouslySetInnerHTML={{ __html: text }} />
          <img className="arrow" src="src/assets/arrow.svg" alt="arrow" />
        </div>
      </span>
      <div className={`underline ${isHovered ? "hovered" : ""}`}></div>
      <div className={`buttonServis-img-wrapper ${isHovered ? "hovered" : ""}`}>
        {children}
      </div>
    </button>
  );
}

export default ButtonServis;
