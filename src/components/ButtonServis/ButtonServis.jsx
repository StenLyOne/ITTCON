import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonServis.css";

function ButtonServis({
  text,
  children,
  id,
  index, // Получаем индекс извне
}) {
  const navigate = useNavigate();

  // Переход по клику
  const handleClick = () => {
    navigate("/services", { state: { serviceId: id } });
  };

  // Обработчик наведения курсора
  const handleMouseEnter = () => {
  };

  // Обработчик ухода курсора
  const handleMouseLeave = () => {
  };

  return (
    <button
      className="button-servis"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span className={`buttonServis-container ${index === id ? "hovered" : ""}`}>
        <div className="buttonServis-container-inside">
          <p dangerouslySetInnerHTML={{ __html: text }} />
          <div alt={`arrow ${index === id ? "arrow-hovered" : ""}`}>
            <svg
              className={`arrow ${index === id ? "arrow-hovered" : ""}`}
              viewBox="0 0 60 12"
              fill="#28A745"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 6L50 0.226497V11.7735L60 6ZM0 7H51V5H0V7Z"
                fill="#28A745"
              />
            </svg>
          </div>
        </div>
      </span>
      <div className={`underline ${index === id ? "hovered" : ""}`}></div>
      <div className={`buttonServis-img-wrapper ${index === id ? "hovered" : ""}`}>
        {children}
      </div>
    </button>
  );
}

export default ButtonServis;
