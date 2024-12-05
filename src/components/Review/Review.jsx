import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Review.module.css";
import greenWorldImg from "../../assets/GreenWorld.png";
import ecoSolutionsImg from "../../assets/EcoSolutions.png";
import enviroTechImg from "../../assets/EnviroTech.png";
import sustainabilityImg from "../../assets/Sustainability.png";
import ittconImg from "../../assets/logo-partners1.svg";

function Review() {
  let existingStyle = document.getElementById("dynamic-dot-styles");
  if (existingStyle) {
    existingStyle.remove();
  }

  const styles = document.createElement("style");
  styles.id = "dynamic-dot-styles";
  document.head.appendChild(styles);

  const updateActiveDot = () => {
    const dots = document.querySelectorAll(".slick-dots li button");
    dots.forEach((dot, index) => {
      // Устанавливаем стили для каждой кнопки
      dot.style.width = "0.5rem";
      dot.style.height = "0.5rem";
      dot.style.borderRadius = "50%";
      dot.style.backgroundColor = "#000"; // Цвет всех точек
      dot.style.opacity = "0.9";

      // Добавляем стили для псевдоэлемента ::before
      setTimeout(() => {
        styles.sheet.insertRule(`
          .slick-dots li:nth-child(${index + 1}) button::before {
            opacity: 0;
          }
        `);
      }, 1);
    });

    const activeDot = document.querySelector(
      ".slick-dots li.slick-active button"
    );
    if (activeDot) {
      activeDot.style.backgroundColor = "#28a745"; // Цвет активной точки
    }

    const slickDots = document.querySelector(".slick-dots");
    if (slickDots) {
      slickDots.style.bottom = "-3.5rem"; // Расположение точек
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    afterChange: updateActiveDot, // Событие для обновления активной точки
  };

  const reviews = [
    {
      quote:
        "We were thrilled to partner with Regrow, whose expertise made the entire process seamless and results-driven. Their dedication to sustainability is remarkable.",
      name: "Jessica Lee",
      position: "Founder, Stora Enso",
      img: ittconImg,
    },
    {
      quote:
        "Regrow delivered results beyond our expectations. Their innovative strategies helped transform our business operations for the better.",
      name: "Maria Anders",
      position: "COO, GreenWorld Ltd",
      img: greenWorldImg,
    },
    {
      quote:
        "The collaboration with Regrow proved invaluable. Their professional approach and solutions exceeded our goals and set new standards.",
      name: "John Smith",
      position: "Manager, EcoSolutions",
      img: ecoSolutionsImg,
    },
    {
      quote:
        "Working with Regrow was an outstanding experience. Their expertise, innovation, and attention to detail are truly unmatched.",
      name: "Emily White",
      position: "Head of Strategy, EnviroTech",
      img: enviroTechImg,
    },
    {
      quote:
        "Regrow’s innovative solutions and unwavering support were game-changing for us. Their impact on our operations has been extraordinary.",
      name: "Michael Brown",
      position: "Founder, Sustainability Inc",
      img: sustainabilityImg,
    },
  ];

  // Инициализация точек при первом рендере
  useEffect(() => {
    updateActiveDot();
  }, []);

  return (
    <div className={style.carouselContainer}>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index}>
            <div className={style.reviewItem}>
              <h3 className={style.quote}>{`"${review.quote}"`}</h3>
              <div className={style.seoInf}>
                <div className={style.seoImg}>
                  <img src={review.img} alt="" />
                </div>
                <div className={style.seoName}>
                  <h5>{review.name}</h5>
                  <p className="black-color">{review.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Review;
