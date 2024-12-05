import React from "react";
import style from "./ChartsMobContainer.module.css";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

function ChartsMob({ text, title, children, color }) {
  return (
    <ScrollAnimation animationProps={{ delay: 0.1 }}>
      <div className={`${color} ${style.Charts}`}>
        <ScrollAnimation animationProps={{ delay: 0.15 }}>
          <div className={style.ChartComponent}>
            {children} {/* Здесь рендерится компонент графика */}
          </div>
        </ScrollAnimation>
        <div className={style.ChartsText}>
          <ScrollAnimation animationProps={{ delay: 0.2 }}>
            <h3>{title}</h3>
          </ScrollAnimation>
          <ScrollAnimation animationProps={{ delay: 0.25 }}>
            <p className="black-color">{text}</p>
          </ScrollAnimation>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default ChartsMob;
