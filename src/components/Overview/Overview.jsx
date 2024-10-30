import React, { useRef, useEffect, useState } from "react";
import style from "./Overview.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Overview() {
  const market = useRef(null);
  const partner = useRef(null);
  const trade = useRef(null);
  const logistics = useRef(null);
  const img = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);

  useEffect(() => {
    const hideAllCharts = () => {
      gsap.to([img1.current, img2.current, img3.current, img4.current], {
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    };

    ScrollTrigger.create({
      trigger: market.current,
      start: "top bottom",
      markers: true,
      onEnter: () => {
        gsap.to(img1.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power1.inOut",
        });
      },
    });

    ScrollTrigger.create({
      trigger: partner.current,
      start: "top bottom",
      markers: true,
      onEnter: () => {
        hideAllCharts();
        gsap.to(img2.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power1.inOut",
        });
      },
    });

    ScrollTrigger.create({
      trigger: trade.current,
      start: "top bottom",
      markers: true,
      onEnter: () => {
        hideAllCharts();
        gsap.to(img3.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power1.inOut",
        });
      },
    });

    ScrollTrigger.create({
      trigger: logistics.current,
      start: "top bottom",
      markers: true,
      onEnter: () => {
        hideAllCharts();
        gsap.to(img4.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power1.inOut",
        });
      },
    });
  }, []);

  return (
    <div className={`white-bg ${style.overviewContainer}`}>
      <div className={style.overviewDescription}>
        <div className={style.overviewItem}>
          <div className={style.overviewItemImg}>
            <img src="src\assets\Market.svg" alt="" />
          </div>
          <h3 className="black-color" ref={market}>
            Market research & analysis
          </h3>
          <p className="black-color p20">
            Our in-depth market research uncovers new opportunities and
            evaluates current market conditions, ensuring you have the insights
            needed to stay ahead. We analyze industry trends, competitive
            landscapes, and potential demand, empowering you to make informed,
            strategic decisions that drive your business forward.
          </p>
        </div>
        <div className={style.overviewItem}>
          <div className={style.overviewItemImg}>
            <img src="src/assets/Partner.svg" alt="" />
          </div>
          <h3 className="black-color" ref={partner}>
            Partner Identification & networking
          </h3>
          <p className="black-color p20">
            Leverage our extensive network to connect with reliable partners who
            align with your strategic goals. We assist you in identifying key
            players, negotiating favorable terms, and fostering long-term,
            trustworthy relationships that drive sustainable success.
          </p>
        </div>
        <div className={style.overviewItem}>
          <div className={style.overviewItemImg}>
            <img src="src\assets\Trade.svg" alt="" />
          </div>
          <h3 className="black-color" ref={trade}>
            Trade negotiation & contract management
          </h3>
          <p className="black-color p20">
            Leverage our expertise to secure favorable trade agreements that
            align with your strategic goals. We manage every aspect of contract
            negotiations, ensuring advantageous terms and mitigating risks to
            protect your business interests.
          </p>
        </div>
        <div className={style.overviewItem}>
          <div className={style.overviewItemImg}>
            <img src="src\assets\Logistics.svg" alt="" />
          </div>
          <h3 className="black-color" ref={logistics}>
            Logistics & supply chain coordination
          </h3>
          <p className="black-color p20">
            Streamline your logistics and supply chain operations with ITTCON.
            We manage the movement of goods, handle shipping and documentation,
            and ensure full compliance with international trade regulations,
            making your operations efficient and reliable.
          </p>
        </div>
      </div>
      <div className={style.overviewImg} ref={img}>
        <img src="src/assets/indicators;.png" alt="" ref={img1} />
        <img src="src\assets\servisesDescription-1.png" alt="" ref={img2} />
        <img src="src\assets\servisesDescription-2.png" alt="" ref={img3} />
        <img src="src\assets\aboutUs-main.png" alt="" ref={img4} />
      </div>
    </div>
  );
}

export default Overview;
