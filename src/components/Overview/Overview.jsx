import React, { useRef, useEffect, useState } from "react";
import style from "./Overview.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Overview({ data }) {
  const market = useRef(null);
  const partner = useRef(null);
  const trade = useRef(null);
  const logistics = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Инициализация изображений
    gsap.set([img1.current, img2.current, img3.current, img4.current], { opacity: 0 });
    gsap.set(img1.current, { opacity: 1 });
  
    const hideAllCharts = () => {
      gsap.to([img1.current, img2.current, img3.current, img4.current], {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });
    };
  
    const showImage = (index) => {
      hideAllCharts();
      gsap.to([img1.current, img2.current, img3.current, img4.current][index], {
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
      });
      setActiveImage(index);
    };
  
    // Убедитесь, что ссылки существуют перед использованием
    if (market.current) {
      ScrollTrigger.create({
        trigger: market.current,
        start: "top bottom",
        onEnter: () => showImage(0),
        onEnterBack: () => showImage(0), // Добавляем обработку для скролла вверх
      });
    }
  
    if (partner.current) {
      ScrollTrigger.create({
        trigger: partner.current,
        start: "top bottom",
        onEnter: () => showImage(1),
        onEnterBack: () => showImage(1), // Добавляем обработку для скролла вверх
      });
    }
  
    if (trade.current) {
      ScrollTrigger.create({
        trigger: trade.current,
        start: "top bottom",
        onEnter: () => showImage(2),
        onEnterBack: () => showImage(2), // Добавляем обработку для скролла вверх
      });
    }
  
    if (logistics.current) {
      ScrollTrigger.create({
        trigger: logistics.current,
        start: "top bottom",
        onEnter: () => showImage(3),
        onEnterBack: () => showImage(3), // Добавляем обработку для скролла вверх
      });
    }
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={`white-bg ${style.overviewContainer}`}>
      {isMobile ? (
        <div className={style.overviewContainerMob}>
          {/** Выводим все карточки для мобильной версии */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className={style.overviewMob}>
              <div className={style.overviewCard}>
                <div>
                  <img className={style.overviewCardIcon} src={data.indicators[`icon${index + 1}`]} alt="" />
                </div>
                <div className={style.overviewCardText}>
                  <h5>{data.indicators[`title${index + 1}`]}</h5>
                  <p className='black-color'>{data.indicators[`description${index + 1}`]}</p>
                </div>
                <div className={style.overviewCardImg}>
                  <img src={data.indicators[`img${index + 1}`]} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className={style.overviewDescription}>
            <div className={style.overviewItem}>
              <div className={style.overviewItemImg}>
                <img src={data.indicators.icon1} alt="" />
              </div>
              <h3 className="black-color" ref={market}>
                {data.indicators.title1}
              </h3>
              <p className="black-color p20">{data.indicators.description1}</p>
            </div>
            <div className={style.overviewItem}>
              <div className={style.overviewItemImg}>
                <img src={data.indicators.icon2} alt="" />
              </div>
              <h3 className="black-color" ref={partner}>
                {data.indicators.title2}
              </h3>
              <p className="black-color p20">{data.indicators.description2}</p>
            </div>
            <div className={style.overviewItem}>
              <div className={style.overviewItemImg}>
                <img src={data.indicators.icon3} alt="" />
              </div>
              <h3 className="black-color" ref={trade}>
                {data.indicators.title3}
              </h3>
              <p className="black-color p20">{data.indicators.description3}</p>
            </div>
            <div className={style.overviewItem}>
              <div className={style.overviewItemImg}>
                <img src={data.indicators.icon4} alt="" />
              </div>
              <h3 className="black-color" ref={logistics}>
                {data.indicators.title4}
              </h3>
              <p className="black-color p20">{data.indicators.description4}</p>
            </div>
          </div>
          <div className={style.overviewImg}>
            <img src={data.indicators.img1} alt="" ref={img1} />
            <img src={data.indicators.img2} alt="" ref={img2} />
            <img src={data.indicators.img3} alt="" ref={img3} />
            <img src={data.indicators.img4} alt="" ref={img4} />
          </div>
        </>
      )}
    </div>
  );
}

export default Overview;
