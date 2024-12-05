import React, { useRef, useEffect, useState } from "react";
import style from "./AboutUs.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import AboutUsNumbers from "../../components/AboutUsNumbers/AboutUsNumbers";
import Earth from "../../components/Earth/Earth";
import Together from "../../components/Together/Together";
import ChartsMobContainer from "../../components/ChartsMobContainer/ChartsMobContainer";
import ChartsComponent from "../../components/ChartsContainer/ChartsComponent";
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import weImg from "../../assets/who we are.png";
import projections from "../../assets/Projections.gif";
import goodTeam from "../../assets/Good team.gif";
import businessDeal from "../../assets/Business deal.gif";
import growing from "../../assets/Growing.gif";
import marketingConsulting from "../../assets/Marketing consulting.gif";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const valuesItems = useRef(null); // Ссылка на контейнер всех элементов
  const earthTextRef = useRef();
  const [earthTextSize, setEarthTextSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Получаем размеры элемента earthText
    const updateSize = () => {
      if (earthTextRef.current) {
        const { offsetWidth, offsetHeight } = earthTextRef.current;
        setEarthTextSize({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateSize(); // Вызов функции для установки размеров
    window.addEventListener("resize", updateSize); // Обновление размеров при изменении размера окна

    return () => {
      window.removeEventListener("resize", updateSize); // Удаление обработчика при размонтировании
    };
  }, []);

  useEffect(() => {
    // Находим все изображения внутри valuesItem
    const images = valuesItems.current.querySelectorAll("img");

    // Для каждого изображения создаем ScrollTrigger
    images.forEach((image) => {
      ScrollTrigger.create({
        trigger: image, // Триггером является само изображение
        start: "top 50%", // Старт анимации, когда верхняя часть изображения достигает середины экрана
        end: "bottom 50%", // Конец анимации, когда нижняя часть изображения достигает середины экрана
        onEnter: () =>
          gsap.to(image, { display: "block", opacity: 1, duration: 1 }), // Показать изображение
        onLeaveBack: () =>
          gsap.to(image, { display: "block", opacity: 1, duration: 1 }), // Скрыть изображение при возврате назад
      });
    });

    // Очистка ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <Header />
      <section className="damper">
        <div></div>
      </section>
      <main className={style.main} id="main">
        <div className={style.mainContainer}>
          <div className={style.mainContainerText}>
            <ScrollAnimation animationProps={{ delay: 0.3 }}>
              <h1 className="black-color">
                Innovating with <br />
                Nature’s Blueprint
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animationProps={{ delay: 0.4 }}>
              <p className="black-color">
                By blending nature’s time-tested wisdom with modern expertise,
                we create eco-friendly solutions that drive sustainable growth.
                At ITTCON, our mission is to ensure both your business and the
                planet thrive together.
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animationProps={{ delay: 0.5 }}>
            <div>
              <Button text="Contact us" color="" path="/contact" />
            </div>
          </ScrollAnimation>
        </div>
      </main>
      <section className={style.numbers}>
        <div className={style.numbersContainer}>
          <h2 className="black-color">ITTCON by the Numbers</h2>
          <AboutUsNumbers></AboutUsNumbers>
        </div>
      </section>
      <section className={`white-bg ${style.charts}`}>
        <ChartsComponent />
        <ChartsMobContainer />
      </section>
      <section className={`gray-bg ${style.earth}`}>
        <div className={`${style.earthContainer} no-scroll`}>
          <div className={style.earthText}>
            <ScrollAnimation animationProps={{ delay: 0.1 }}>
              <h2 className="black-color">
                Connecting <br />
                the World
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animationProps={{ delay: 0.2 }}>
              <p className="black-color p20">
                ITTCON’s presence spans the globe, creating impactful
                partnerships that drive sustainable progress across key regions.
              </p>
            </ScrollAnimation>
          </div>
          {/* <ScrollAnimation animationProps={{ delay: 0.3 }}> */}
          <div className={style.earthItem} ref={earthTextRef}>
            <Earth width={earthTextSize.width} height={earthTextSize.height} />
          </div>
          {/* </ScrollAnimation> */}
        </div>
      </section>
      <section className={style.we}>
        <div className={style.weContainer}>
          <div className={style.weText}>
            <ScrollAnimation animationProps={{ delay: 0.1 }}>
              <h2 className="black-color">Who we are?</h2>
            </ScrollAnimation>
            <p className="black-color">
              <ScrollAnimation animationProps={{ delay: 0.15 }}>
                <div>
                  We are a team of enthusiasts and innovators striving to change
                  the world through sustainable business solutions. Founded in
                  2018 with the mission of building an environmentally
                  responsible business, our company today supports numerous
                  projects aimed at improving the environment and enhancing the
                  quality of life worldwide.
                </div>
              </ScrollAnimation>

              <br />
              <ScrollAnimation animationProps={{ delay: 0.2 }}>
                <div>
                  Our unique approaches in green technology and partnerships
                  within the "green zone" empower us to create a sustainable
                  future.
                </div>
              </ScrollAnimation>
              <br />

              <ScrollAnimation animationProps={{ delay: 0.25 }}>
                <div>
                  Our goal is not just to conduct business, but to drive
                  meaningful change. We believe that each project is a step
                  toward a cleaner planet. Join us, and together we can achieve
                  more!
                </div>
              </ScrollAnimation>
            </p>
            <ScrollAnimation animationProps={{ delay: 0.3 }}>
              <div>
                <Button text="contact us" path="/contact" color="black-color" />
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animationProps={{ delay: 0.25 }} y={0}>
            <div>
              <img className={style.weImg} src={weImg} alt="" />
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className={style.values}>
        <div className={style.valuesContainer}>
          <ScrollAnimation animationProps={{ delay: 0.1 }}>
            <h2 className={`black-color ${style.valuesH2}`}>
              Our values ​​helping to improve global <br />
              well-being since 2018
            </h2>
          </ScrollAnimation>
          <div ref={valuesItems} className={style.valuesItemWraper}>
            <div className={style.valuesItem}>
              <div className={style.valuesItemText}>
                <ScrollAnimation animationProps={{ delay: 0.1 }}>
                  <h3 className="black-color">Quality and Responsibility</h3>
                </ScrollAnimation>
                <ScrollAnimation animationProps={{ delay: 0.2 }}>
                  <p className="black-color">
                    We believe every product and solution should meet the
                    highest standards, and we take responsibility at every stage
                    of our process.
                  </p>
                </ScrollAnimation>
              </div>
              <div>
                <img className={style.valuesItemSvg} src={projections} alt="" />
              </div>
            </div>
            <div className={style.valuesItem}>
              <div className={style.valuesItemText}>
                <ScrollAnimation animationProps={{ delay: 0.1 }}>
                  <h3 className="black-color">
                    Innovation and <br />
                    Continuous Growth
                  </h3>
                </ScrollAnimation>
                <ScrollAnimation animationProps={{ delay: 0.2 }}>
                  <p className="black-color">
                    We’re always moving forward, incorporating innovations and
                    searching for new ways to enhance our services and products.
                  </p>
                </ScrollAnimation>
              </div>
              <div>
                <img className={style.valuesItemSvg} src={goodTeam} alt="" />
              </div>
            </div>
            <div className={style.valuesItem}>
              <div className={style.valuesItemText}>
                <ScrollAnimation animationProps={{ delay: 0.1 }}>
                  <h3 className="black-color">Openness and Trust</h3>
                </ScrollAnimation>
                <ScrollAnimation animationProps={{ delay: 0.2 }}>
                  <p className="black-color">
                    Transparency is one of our core principles. We are always
                    honest with our clients and partners, ready for open
                    dialogue.
                  </p>
                </ScrollAnimation>
              </div>
              <div>
                <img
                  className={style.valuesItemSvg}
                  src={businessDeal}
                  alt=""
                />
              </div>
            </div>
            <div className={style.valuesItem}>
              <div className={style.valuesItemText}>
                <ScrollAnimation animationProps={{ delay: 0.1 }}>
                  <h3 className="black-color">
                    Sustainability and <br />
                    Environmental Care
                  </h3>
                </ScrollAnimation>
                <ScrollAnimation animationProps={{ delay: 0.2 }}>
                  <p className="black-color">
                    We strive to minimize our environmental impact by adopting
                    eco-friendly processes and technologies.
                  </p>
                </ScrollAnimation>
              </div>
              <div>
                <img className={style.valuesItemSvg} src={growing} alt="" />
              </div>
            </div>
            <div className={style.valuesItem}>
              <div className={style.valuesItemText}>
                <ScrollAnimation animationProps={{ delay: 0.1 }}>
                  <h3 className="black-color">Client-Centered Approach</h3>
                </ScrollAnimation>
                <ScrollAnimation animationProps={{ delay: 0.2 }}>
                  <p className="black-color">
                    Our clients are our main partners. We work to understand and
                    exceed their expectations, making their needs our top
                    priority.
                  </p>
                </ScrollAnimation>
              </div>
              <div>
                <img
                  className={style.valuesItemSvg}
                  src={marketingConsulting}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`cream-bg ${style.seo}`}>
        <div className={style.seoContainer}>
          <ScrollAnimation animationProps={{ delay: 0.1 }} y={0}>
            <div>
              <img
                className={style.seoImg}
                src="src\assets\unsplash_C7FB7H-sXJs.png"
                alt=""
              />
            </div>
          </ScrollAnimation>
          <div className={style.seoText}>
            <ScrollAnimation animationProps={{ delay: 0.2 }}>
              <h3>
                “The trajectory of agriculture in the coming years is in our
                hands, and it will be shaped by the decisions we make today.”
              </h3>
            </ScrollAnimation>
            <div>
              <ScrollAnimation animationProps={{ delay: 0.4 }}>
                <h5>Stefan Julius</h5>
              </ScrollAnimation>
              <ScrollAnimation animationProps={{ delay: 0.5 }}>
                <p className="black-color">CEO of ITTCON</p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <Together />
      <Footer />
    </div>
  );
}

export default AboutUs;
