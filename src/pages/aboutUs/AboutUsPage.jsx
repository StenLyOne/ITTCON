import style from "./AboutUs.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/button/Button";
import AboutUsNumbers from "../../components/AboutUsNumbers/AboutUsNumbers";
import ChartPartnerships from "../../components/charts/chartsPartnerships";
import ChartsInvestment from "../../components/charts/ChartsInvestment";
import ChartsImpact from "../../components/charts/ChartsImpact";
import ChartsSuccess from "../../components/charts/ChartsSuccess";

function AboutUs() {
  return (
    <div>
      <Header />
      <main className={style.main}>
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
          <Button text="Contact us" color="white-color" />
        </div>
      </main>
      <section className={style.numbers}>
        <div className={style.numbersContainer}>
          <h2 className="black-color">ITTCON by the Numbers</h2>
          <div className={style.numbersContainerItems}>
            <div className={`${style.numbersItems} ${style.numbersLeft}`}></div>
            <AboutUsNumbers name="Forest Land" number="1,500 ha" />
            <AboutUsNumbers name="Green investments" number="€40M" />
            <AboutUsNumbers name="Reforestation trees" number="2.25M" />
            <AboutUsNumbers name="40’ Containers loaded:" number="10k+ " />
            <div
              className={`${style.numbersItems} ${style.numbersRight}`}
            ></div>
          </div>
          <div className={style.numbersContainerItems}>
            <div className={`${style.numbersItems} ${style.numbersLeft}`}></div>
            <AboutUsNumbers name="Truck loads" number="12,000" />
            <AboutUsNumbers name="Trains loaded" number="€40M" />
            <AboutUsNumbers name="EUDR Compliance" number="95%" />
            <AboutUsNumbers name="Continents Served" number="4" />
            <div
              className={`${style.numbersItems} ${style.numbersRight}`}
            ></div>
          </div>
        </div>
      </section>
      <section className={`white-bg ${style.charts}`}>
        <div className={`${style.chartsContainer}`}>
          <div className={style.chartsWraper}>
            <div className={style.chartsCurrent}>
              {/* <div className={style.ChartPartnerships}>
                <ChartPartnerships />
              </div>
              <div className={style.ChartsInvestment}>
                <ChartsInvestment />
              </div> */}
              <div className={style.ChartPartnerships}>
                <ChartsImpact />
              </div>
              {/* <div className={style.ChartPartnerships}>
                <ChartsSuccess />
              </div> */}
            </div>
            <div>
              <div className={style.chartsItem}>
                <h3 className="black-color">Strategic Investment Focus</h3>
                <p className="black-color p20">
                  Explore our envisioned investment distribution across key
                  sectors that reflect our commitment to sustainable growth and
                  innovation. While these projections are forward-looking, they
                  represent the strategic directions ITTCON is dedicated to
                  pursuing as we continue to build a sustainable future.
                </p>
              </div>
              <div className={style.chartsItem}>
                <h3 className="black-color">
                  Client Partnerships: From Vision to Success
                </h3>
                <p className="black-color p20">
                  Explore the journey of our client partnerships, where
                  collaboration and innovation fuel sustained growth and
                  success. This chart illustrates the upward trajectory of
                  performance and achievements, highlighting the impact of our
                  strategic approach.
                </p>
              </div>
              <div className={style.chartsItem}>
                <h3 className="black-color">
                  Investment Evolution: Tracking Our Strategic Growth
                </h3>
                <p className="black-color p20">
                  Discover how ITTCON's investment focus has evolved over time.
                  This chart highlights our strategic growth and adaptability,
                  showcasing our commitment to responding to market trends and
                  client needs with precision and foresight.
                </p>
              </div>
              <div className={style.chartsItem}>
                <h3 className="black-color">
                  Client Success Metrics: A Multi-Dimensional View
                </h3>
                <p className="black-color p20">
                  Delve into the key performance indicators that define ITTCON's
                  client success. This radar chart offers a comprehensive view
                  of various success dimensions, from project completion rates
                  to client satisfaction and return on investment, illustrating
                  the holistic impact of our partnerships.
                </p>
              </div>
              <div className={style.chartsItem}>
                <h3 className="black-color">
                  Global Impact: ITTCON's Expanding Footprint
                </h3>
                <p className="black-color p20">
                  Visualize ITTCON's geographical reach and discover how our
                  global and regional projects contribute to sustainable growth.
                  This map highlights the breadth of our influence, showcasing
                  the number of projects and investments across different
                  regions, reflecting our commitment to international expertise
                  and impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
