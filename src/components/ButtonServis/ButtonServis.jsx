import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import "./ButtonServis.css";

function ButtonServis({ text, children, id }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Инициализируем navigate

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    navigate("/services", { state: { serviceId: id } }); // Передаем serviceId через state
  };

  return (
    <button
      className="button-servis"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} // Вызываем handleClick
    >
      <span className={`buttonServis-container ${isHovered ? "hovered" : ""}`}>
        <div className="buttonServis-container-inside">
          <p dangerouslySetInnerHTML={{ __html: text }} />
          <img className="arrow" src="/src/assets/arrow.svg" alt="arrow" />
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
