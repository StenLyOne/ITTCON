import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ButtonServisMob.module.css";

// Компонент одной кнопки
function ButtonServisMob({ text, isActive, id }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const navigate = useNavigate(); // Инициализируем navigate

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

  const handleClick = () => {
    navigate("/services", { state: { serviceId: id } }); // Передаем serviceId через state
  };

  return (
    <button
      onClick={handleClick}
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
          <div>
            <svg
              className={styles.arrow}
              viewBox="0 0 60 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 6L50 0.226497V11.7735L60 6ZM0 7H51V5H0V7Z"
                fill="#F5F5F5"
              />
            </svg>
          </div>
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
        id={0}
        text="Agency and Brokerage"
        isActive={activeIndex === 0}
      />
      <ButtonServisMob
        text="Green Investment"
        isActive={activeIndex === 1}
        id={1}
      />
      <ButtonServisMob
        text="Startup Services"
        isActive={activeIndex === 2}
        id={2}
      />
      <ButtonServisMob
        text="EUDR and<br>Sustainable Schemes"
        isActive={activeIndex === 3}
        id={3}
      />
    </div>
  );
}
