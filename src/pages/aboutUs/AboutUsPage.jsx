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
            <ScrollAnimation animationProps={{ delay: 0.1 }}>
              <h1 className="black-color">
                Innovating with <br />
                Nature’s Blueprint
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animationProps={{ delay: 0.25 }}>
              <p className="black-color">
                By blending nature’s time-tested wisdom with modern expertise,
                we create eco-friendly solutions that drive sustainable growth.
                At ITTCON, our mission is to ensure both your business and the
                planet thrive together.
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animationProps={{ delay: 0.5 }}>
            <Button text="Contact us" color="" path="/contact" />
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
      {/* <section className={style.indicators}>
        <div className={style.indicatorsContainer}>
          <div className={style.indicatorsText}>
            <h2>Enhancing Global Well-being Since 2018</h2>
            <p className="p20">
              At the heart of our mission is a belief that our success is
              intertwined with the success of our clients. Partnering with us
              isn’t just about <br className={style.indicatorsBr} />
              receiving our services—it’s about joining our collaborative
              community where your achievements become our shared triumphs.
            </p>
          </div>
          <div className={style.indicatorsContainerItems}>
            <Indicators
              icon={"/src/assets/indicators-icon-1.svg"}
              text={
                "We drive sustainability forward by empowering innovative startups across the wood sector.  From wood processing to bioenergy and beyond, we offer expert advice, strategic planning, and  tailored support. Our comprehensive services include market analysis, business development, and  operational guidance to ensure long-term growth and environmental responsibility"
              }
              title={"Sustainability"}
            />
            <Indicators
              icon={"/src/assets/indicators-icon-3.svg"}
              text={
                "Integrity is at the core of ITTCON is approach. We operate with honesty and transparency,  fostering trust and long-term relationships. Our commitment to ethical practices ensures that our  business is always guided by the highest standards of accountability and respect."
              }
              title={"Integrity"}
            />
            <Indicators
              icon={"/src/assets/indicators-icon-2.svg"}
              text={
                "At ITTCON, collaboration is the cornerstone of our success. We build strong partnerships  with clients and stakeholders, working together to achieve shared goals. By fostering teamwork and  open communication, we create lasting value and drive sustainable growth across the wood sector"
              }
              title={"Collaboration"}
            />
          </div>
        </div>
        <div className={style.gradientBackground}></div>
      </section> */}
      <section className={`gray-bg ${style.earth}`}>
        <div className={style.earthContainer}>
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
          <ScrollAnimation animationProps={{ delay: 0.3 }}>
            <div className={style.earthItem} ref={earthTextRef}>
              <Earth
                width={earthTextSize.width}
                height={earthTextSize.height}
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className={style.we}>
        <div className={style.weContainer}>
          <div className={style.weText}>
            <ScrollAnimation animationProps={{ delay: 0.1 }}>
              <h2 className="black-color">Who we are?</h2>
            </ScrollAnimation>
            <p className="black-color">
              <ScrollAnimation animationProps={{ delay: 0.2 }}>
                <span>
                  We are a team of enthusiasts and innovators striving to change
                  the world through sustainable business solutions. Founded in
                  2018 with the mission of building an environmentally
                  responsible business, our company today supports numerous
                  projects aimed at improving the environment and enhancing the
                  quality of life worldwide.
                </span>
              </ScrollAnimation>
              <br />

              <ScrollAnimation animationProps={{ delay: 0.3 }}>
                <span>
                  Our unique approaches in green technology and partnerships
                  within the "green zone" empower us to create a sustainable
                  future.
                </span>
              </ScrollAnimation>

              <br />
              <ScrollAnimation animationProps={{ delay: 0.4 }}>
                <span>
                  Our goal is not just to conduct business, but to drive
                  meaningful change. We believe that each project is a step
                  toward a cleaner planet. Join us, and together we can achieve
                  more!
                </span>
              </ScrollAnimation>
            </p>
            <ScrollAnimation animationProps={{ delay: 0.5 }}>
              <Button text="contact us" path="/contact" color="black-color" />
            </ScrollAnimation>
          </div>
          <ScrollAnimation animationProps={{ delay: 0.5 }} y={0}>
            <div>
              <img
                className={style.weImg}
                src="src\assets\who we are.png"
                alt=""
              />
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
                <h3 className="black-color">Quality and Responsibility</h3>
                <p className="black-color">
                  We believe every product and solution should meet the highest
                  standards, and we take responsibility at every stage of our
                  process.
                </p>
              </div>
              <div>
                <img
                  className={style.valuesItemSvg}
                  src="src/assets/Projections.gif"
                  alt=""
                />
              </div>
            </div>
            <div className={style.valuesItem}>
              <div className={style.valuesItemText}>
                <h3 className="black-color">
                  Innovation and <br />
                  Continuous Growth
                </h3>
                <p className="black-color">
                  We’re always moving forward, incorporating innovations and
                  searching for new ways to enhance our services and products.
                </p>
              </div>
              <div>
                <img
                  className={style.valuesItemSvg}
                  src="src/assets/Good team.gif"
                  alt=""
                />
              </div>
            </div>
            <div className={style.valuesItem}>
              <div className={style.valuesItemText}>
                <h3 className="black-color">Openness and Trust</h3>
                <p className="black-color">
                  Transparency is one of our core principles. We are always
                  honest with our clients and partners, ready for open dialogue.
                </p>
              </div>
              <div>
                <img
                  className={style.valuesItemSvg}
                  src="src/assets/Business deal.gif"
                  alt=""
                />
              </div>
            </div>
            <div className={style.valuesItem}>
              <div className={style.valuesItemText}>
                <h3 className="black-color">
                  Sustainability and <br />
                  Environmental Care
                </h3>
                <p className="black-color">
                  We strive to minimize our environmental impact by adopting
                  eco-friendly processes and technologies.
                </p>
              </div>
              <div>
                <img
                  className={style.valuesItemSvg}
                  src="src/assets/Growing.gif"
                  alt=""
                />
              </div>
            </div>
            <div className={style.valuesItem}>
              <div className={style.valuesItemText}>
                <h3 className="black-color">Client-Centered Approach</h3>
                <p className="black-color">
                  Our clients are our main partners. We work to understand and
                  exceed their expectations, making their needs our top
                  priority.
                </p>
              </div>
              <div>
                <img
                  className={style.valuesItemSvg}
                  src="src/assets/Marketing consulting.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`cream-bg ${style.seo}`}>
        <div className={style.seoContainer}>
          <div>
            <img
              className={style.seoImg}
              src="src\assets\unsplash_C7FB7H-sXJs.png"
              alt=""
            />
          </div>
          <div className={style.seoText}>
            <h3>
              “The trajectory of agriculture in the coming years is in our
              hands, and it will be shaped by the decisions we make today.”
            </h3>
            <div>
              <h5>Stefan Julius</h5>
              <p className="p20 black-color">CEO of ITTCON</p>
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
