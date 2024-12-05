import "./Main.css";
import { useState, useEffect } from "react";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import Button from "../Button/Button";
import ButtonServis from "../ButtonServis/ButtonServis";
import ButtonGroup from "../../components/ButtonServis/ButtonServisMob";
import ButtonServisMob from "../../components/ButtonServis/ButtonServisMob.jsx";
import video from "../../assets/videoplayback.mp4";
import servicesBtn1 from "../../assets/services-btn-1.png";
import servicesBtn2 from "../../assets/services-btn-2.png";
import servicesBtn3 from "../../assets/services-btn-3.png";
import servicesBtn4 from "../../assets/services-btn-4.png";

function Main() {
  const [hoveredIndex, setHoveredIndex] = useState(-1); // Индекс активной кнопки
  const [isPaused, setIsPaused] = useState(false);
  const buttons = [0, 1, 2, 3]; // Индексы кнопок
  const width = window.innerWidth;

  useEffect(() => {
    if (isPaused) return;

    if (width <= 480) {
      setHoveredIndex(-1);
      return;
    }

    let currentIndex = 0;

    const timer = setInterval(() => {
      setHoveredIndex((prevIndex) => {
        currentIndex = prevIndex >= buttons.length - 1 ? 0 : prevIndex + 1; // Переход к следующему индексу
        return currentIndex;
      });
    }, 4000 + 1000); // Меняем каждые 5 секунд

    return () => clearInterval(timer); // Очищаем интервал при размонтировании
  }, [buttons.length, isPaused]);

  const handleMouseEnter = (index) => {
    setIsPaused(true); // Останавливаем таймер
    setHoveredIndex(index); // Активируем кнопку
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Возобновляем таймер
    setHoveredIndex(-1); // Деактивируем кнопку
  };

  return (
    <main className="main">
      <video
        muted
        loop
        playsInline
        autoPlay
        src={video}
        style={{
          zIndex: "1",
        }}
        className={`video filter-anim ${
          hoveredIndex === 0 ||
          hoveredIndex === 1 ||
          hoveredIndex === 2 ||
          hoveredIndex === 3
            ? "filter"
            : ""
        }`}
        onError={() => console.error("Error loading video")}
        onLoadedData={() => console.log("Video loaded successfully")}
      ></video>

      <div
        style={{
          zIndex: "1",
        }}
        className={`mainContainer mainButtons-amim filter-anim ${
          hoveredIndex === 0 ||
          hoveredIndex === 1 ||
          hoveredIndex === 2 ||
          hoveredIndex === 3
            ? "filter"
            : ""
        }`}
      >
        <h1 className="h1-plus">
          Pioneering sustainable innovation for a greener tomorrow
        </h1>
      </div>

      <div
        style={{
          zIndex: "1",
        }}
        className="mainButtons"
      >
        <div
          className="mainButtons-amim"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <ButtonServis text="Agency and Brokerage" id={0} index={hoveredIndex}>
            <div className="buttonServis-img-agency">
              <img src={servicesBtn1} alt="Agency and Brokerage" />
            </div>
          </ButtonServis>
        </div>
        <div
          className="mainButtons-amim"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <ButtonServis text="Green Investment" id={1} index={hoveredIndex}>
            <div className="buttonServis-img-agency">
              <img src={servicesBtn2} alt="Agency and Brokerage" />
            </div>
          </ButtonServis>
        </div>
        <div
          className="mainButtons-amim"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <ButtonServis text="Startup Services" id={2} index={hoveredIndex}>
            <div className="buttonServis-img-agency">
              <img src={servicesBtn3} alt="Agency and Brokerage" />
            </div>
          </ButtonServis>
        </div>
        <div
          className="mainButtons-amim"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <ButtonServis
            text="EUDR and<br>Sustainable Schemes"
            id={3}
            index={hoveredIndex}
          >
            <div className="buttonServis-img-agency">
              <img src={servicesBtn4} alt="Agency and Brokerage" />
            </div>
          </ButtonServis>
        </div>
      </div>
      <div
        style={{
          zIndex: "1",
        }}
      >
        <ButtonGroup />
      </div>
      <ButtonServisMob />
    </main>
  );
}

export default Main;
