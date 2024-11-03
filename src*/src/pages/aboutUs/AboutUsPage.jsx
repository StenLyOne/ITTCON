import React, { useRef, useEffect, useState } from "react";
import style from "./AboutUs.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import AboutUsNumbers from "../../components/AboutUsNumbers/AboutUsNumbers";
import Indicators from "../../components/Indicators/Indicators";
import Earth from "../../components/Earth/Earth";
import Reviews from "../../components/Reviews/Reviews";
import Together from "../../components/Together/Together";
import ChartsMobContainer from "../../components/ChartsMobContainer/ChartsMobContainer";
import ChartsComponent from "../../components/ChartsContainer/ChartsComponent";
import aboutUs from '../../assets/aboutUs.png';

function AboutUs() {
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

  return (
    <div>
      <Header />
      <main className={style.main} id="main">
        <div className={style.mainContainer}>
          <div className={style.mainContainerText}>
            <h1>Innovating with Nature’s Blueprint</h1>
            <p>
              By blending nature’s time-tested wisdom with modern expertise, we
              create eco-friendly solutions that drive sustainable growth. At
              ITTCON, our mission is to ensure both your business and the planet
              thrive together.
            </p>
          </div>
          <Button text="Contact us" color="white-color" path="/contact"/>
        </div>
      </main>
      <section className={style.numbers}>
        <div className={style.numbersContainer}>
          <h2 className="black-color">ITTCON by the Numbers</h2>
          <div className={style.numbersContainerItems}>
            <div className={`${style.numbersItems} ${style.numbersLeft}`}></div>
            <div className={style.numbersItemsWraper}>
              <AboutUsNumbers name="Forest Land" number="1,500 ha" />
              <AboutUsNumbers name="Green investments" number="€40M" />
            </div>
            <div className={style.numbersItemsWraper}>
              <AboutUsNumbers name="Reforestation trees" number="2.25M" />
              <AboutUsNumbers name="40’ Containers loaded:" number="10k+ " />
            </div>
            <div
              className={`${style.numbersItems} ${style.numbersRight}`}
            ></div>
          </div>
          <div className={style.numbersContainerItems}>
            <div className={`${style.numbersItems} ${style.numbersLeft}`}></div>
            <div className={style.numbersItemsWraper}>
              <AboutUsNumbers name="Truck loads" number="12,000" />
              <AboutUsNumbers name="Trains loaded" number="€40M" />
            </div>
            <div className={style.numbersItemsWraper}>
              <AboutUsNumbers name="EUDR Compliance" number="95%" />
              <AboutUsNumbers name="Continents Served" number="4" />
            </div>
            <div
              className={`${style.numbersItems} ${style.numbersRight}`}
            ></div>
          </div>
        </div>
      </section>
      <section className={`white-bg ${style.charts}`}>
        <ChartsComponent />
        <ChartsMobContainer/>
      </section>
      <section className={style.indicators}>
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
      </section>
      <section className={style.earth}>
        <div className={style.earthContainer}>
          <div className={style.earthText}>
            <h3 className="black-color">Connecting the World</h3>
            <p className="black-color p20">
              ITTCON’s presence spans the globe, creating impactful partnerships that drive sustainable progress across key regions.
            </p>
          </div>
          <div className={style.earthItem} ref={earthTextRef}>
            <Earth width={earthTextSize.width} height={earthTextSize.height} />
          </div>
        </div>
      </section>
      <section className={`gray-bg ${style.reviews}`}>
        <Reviews />
      </section>
      <Together />
      <Footer />
    </div>
  );
}

export default AboutUs;
