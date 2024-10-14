import React from "react";
import style from "./ChartsMobContainer.module.css";

function ChartsMob({ text, title, children, color }) {
  return (
    <div className={`${color} ${style.Charts}`}>
      <div className={style.ChartComponent}>
        {children} {/* Здесь рендерится компонент графика */}
      </div>
      <div className={style.ChartsText}>
        <h3>{title}</h3>
        <p className="black-color">{text}</p>
      </div>
    </div>
  );
}

export default ChartsMob;
