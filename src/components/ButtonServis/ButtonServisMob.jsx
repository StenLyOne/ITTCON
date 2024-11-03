import React, { useState, useEffect } from "react";
import styles from "./ButtonServisMob.module.css";

// Компонент одной кнопки
function ButtonServisMob({ text, isActive }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isActive) {
      // Добавляем задержку для запуска анимации
      const timeout = setTimeout(() => {
        setShouldAnimate(true);
      }, 50); // Небольшая задержка для запуска анимации
      return () => clearTimeout(timeout); // Очистка таймера при деактивации
    } else {
      setShouldAnimate(false); // Сбрасываем анимацию при деактивации кнопки
    }
  }, [isActive]);

  return (
    <button
      className={`${styles.buttonServisMob} ${isActive ? styles.activ : ""}`}
    >
      <span
        className={`${styles.buttonServisContainer} ${
          isActive ? styles.activ : ""
        }`}
      >
        <div
          className={`${styles.buttonServisContainerInside} ${
            isActive ? styles.activ : ""
          }`}
        >
          <p dangerouslySetInnerHTML={{ __html: text }} />
          <img
            className={styles.arrow}
            src="/src/assets/arrow.svg"
            alt="arrow"
          />
        </div>
      </span>
      <div
        className={`${styles.underline} ${isActive ? styles.active : ""} ${
          shouldAnimate ? styles.animate : ""
        }`}
      ></div>
      <div className={`${styles.buttonServisImgWrapper}`}></div>
    </button>
  );
}

// Компонент группы кнопок
export default function ButtonGroup() {
  const [activeIndex, setActiveIndex] = useState(0); // Храним индекс активной кнопки

  useEffect(() => {
    // Меняем активную кнопку каждые 5 секунд
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Переключение по кругу между 4 кнопками
    }, 5000);

    return () => clearInterval(interval); // Очищаем таймер при размонтировании компонента
  }, []);

  return (
    <div className="mainButtonsMob">
      <ButtonServisMob
        text="Agency and Brokerage"
        isActive={activeIndex === 0}
      />
      <ButtonServisMob text="Green Investment" isActive={activeIndex === 1} />
      <ButtonServisMob text="Startup Services" isActive={activeIndex === 2} />
      <ButtonServisMob
        text="EUDR and<br>Sustainable Schemes"
        isActive={activeIndex === 3}
      />
    </div>
  );
}
