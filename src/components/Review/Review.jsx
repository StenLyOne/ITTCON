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
        "The expertise provided by ITTCON transformed our sustainable timber production approach. Their guidance was crucial in navigating regulations and securing long-term trade agreements—a partner we deeply trust.",
      name: "Sarah M.",
      position: "Forestry Manager",
      img: ittconImg,
    },
    {
      quote:
        "Securing our first round of green investments was pivotal, and ITTCON played a critical role. Their strategic insights and commitment to sustainability put us on the path to success.",
      name: "Michael T.",
      position: "CEO of Green Energy Corp",
      img: greenWorldImg,
    },
    {
      quote:
        "We couldn’t have scaled so quickly without their support. From market analysis to venture capital acquisition, ITTCON was instrumental in our startup’s rapid growth.",
      name: "Emma L.",
      position: "Bioenergy Startup Founder",
      img: ecoSolutionsImg,
    },
    {
      quote:
        "Expanding our market presence globally was made possible by ITTCON’s deep industry knowledge and global reach. Their tailored solutions led to a 25% increase in our export volume.",
      name: "John D.",
      position: "International Trade Director",
      img: enviroTechImg,
    },
    {
      quote:
        "It was a game-changer working with ITTCON. Their meticulous attention to the complexities of international trade ensured our operations were seamless.",
      name: "Alice R.",
      position: "Supply Chain Manager",
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
                {/* <div className={style.seoImg}>
                  <img src={review.img} alt="" />
                </div> */}
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
