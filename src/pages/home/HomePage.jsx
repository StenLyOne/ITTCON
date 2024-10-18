import "./HomePage.css";
import "./Numbers.css";
import "./AboutUs.css";
import "./AboutUs.css";
import "./Partners.css";
import "./Servis.css";
import "./Portfolio.css";
import "./News.css";
import React, { useState } from "react";
import ButtonServis from "../../components/ButtonServis/ButtonServis";
import Number from "../../components/Numbers/Numbers";
import Button from "../../components/button/Button";
import PartnersItem from "../../components/PartnersItem/PartnersItem";
import ServisItem from "../../components/ServisItem/ServisItem";
import Portfolio from "../../components/Portfolio/Portfolio";
import News from "../../components/news/News";
import Together from "../../components/Together/Together";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ButtonGroup from "../../components/ButtonServis/ButtonServisMob";

function HomePage() {
  const [hoveredIndex, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <div>
      <Header />
      <main className="main">
        <video
          className={`video filter-anim ${
            hoveredIndex !== null ? "filter" : ""
          }`}
          src="src/assets/videoplayback.mp4"
          preload="meta"
          muted
          loop
          playsInline
          autoPlay
        ></video>
        <div
          className={`mainContainer filter-anim ${
            hoveredIndex !== null ? "filter" : ""
          }`}
        >
          <h1 className='h1-plus'>Pioneering sustainable innovation for a greener tomorrow</h1>
          {/* <p>
            Driving sustainable innovation to ensure a thriving planet and a
            prosperous
            <br className="br-pc-main" />
            future where business and nature grow together.
          </p> */}
        </div>
        <div className="mainButtons">
          <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <ButtonServis text="Agency and Brokerage">
              <div className="buttonServis-img-agency">
                <img
                  src="src/assets/agency-btn.png"
                  alt="Agency and Brokerage"
                />
              </div>
            </ButtonServis>
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <ButtonServis text="Green Investment">
              <div className="buttonServis-img-agency">
                <img
                  src="src/assets/agency-btn.png"
                  alt="Agency and Brokerage"
                />
              </div>
            </ButtonServis>
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <ButtonServis text="Startup Services">
              <div className="buttonServis-img-agency">
                <img
                  src="src/assets/agency-btn.png"
                  alt="Agency and Brokerage"
                />
              </div>
            </ButtonServis>
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <ButtonServis text="EUDR and<br>Sustainable Schemes">
              <div className="buttonServis-img-agency">
                <img
                  src="src/assets/agency-btn.png"
                  alt="Agency and Brokerage"
                />
              </div>
            </ButtonServis>
          </div>
        </div>
        <ButtonGroup />
      </main>
      <section className="numbers">
        <div className="numbersContainer">
          <div className="numbers-h2">
            <h2>The results of our work in numbers</h2>
          </div>
          <div className="numbers-container-items">
            <Number name="Wood Sold" number="360k M³" />
            <Number name="Partners" number="47+" />
            <Number name="Countries" number="20+" />
            <Number name="Years of Experience" number="10+" />
          </div>
        </div>
      </section>
      <section className="aboutUs">
        <div className="aboutUs-container">
          <div className="aboutUs-container-left">
            <h2 className="aboutUs-h2">
              Our Commitment: Leading the Future of Sustainable Solutions
            </h2>
            <div>
              <img
                className="aboutUs-container-left-img-mob"
                src="src/assets/aboutUs.png"
                alt=""
              />
            </div>
            <div className="aboutUs-container-left-text">
              <p className="aboutUs-p">
                Pioneering sustainable innovation, ITTCON transforms the timber
                industry by merging nature’s wisdom with cutting-edge
                technology. We develop solutions as enduring as the forests we
                protect, aligning business success with environmental
                stewardship.
              </p>
              <p className="aboutUs-p">
                Each initiative reflects our commitment to sustainability, from
                channeling investments into green technologies to ensuring our
                work meets today’s needs while safeguarding tomorrow’s legacy.
                ITTCON leads the way in creating a future where business and
                nature thrive together.
              </p>
            </div>
            <div className="aboutUs-btn">
              <Button text="About us" />
            </div>
          </div>
          <div className="aboutUs-container-right"></div>
        </div>
      </section>
      <section className="partners">
        <div className="partners-container">
          <h2>Some of our Partners</h2>
          <div className="partners-container-items">
            <PartnersItem text="Renewable materials solutions">
              <img
                className="partners-item-logo"
                src="src/assets/logo-partners1.svg"
                alt=""
              />
            </PartnersItem>
            <PartnersItem text="Blockchain-driven logistics">
              <img
                className="partners-item-logo"
                src="src/assets/logo-partners2.svg"
                alt=""
              />
            </PartnersItem>
            <PartnersItem text="Global wildlife conservation">
              <img
                className="partners-item-logo"
                src="src/assets/logo-partners3.svg"
                alt=""
              />
            </PartnersItem>
            <PartnersItem text="Environmental policy leadership">
              <img
                className="partners-item-logo"
                src="src/assets/logo-partners4.svg"
                alt=""
              />
            </PartnersItem>
          </div>
        </div>
      </section>
      <section className="servis">
        <div className="servis-container">
          <h2 className="servis-h2">
            We provide services that help clients navigate
            <br />
            forestry, green investments, and sustainability
          </h2>
          <div className="servis-item-wraper">
            <ServisItem
              isImageRight={true}
              title="Leading global agency and brokerage services in timber trade"
              text1="Leading in global timber trade, ITTCON specializes in roundwood, lumber, biomass, and biofuels. Our agency and brokerage services connect you with reliable partners, optimizing transactions for success."
              text2="With global reach and deep industry knowledge, we guide you through market trends, regulatory compliance, and risk management, ensuring your business thrives in the global timber industry."
              url="src/assets/servis-agency.png"
              color="gray-bg"
              button={true}
            />
            <ServisItem
              isImageRight={false}
              title="Green investment and venture capital for sustainable growth"
              text1="ITTCON’s green investment services connect investors with high-potential opportunities in forestry, bioenergy, and environmental projects. We provide comprehensive support, from identifying opportunities to managing your portfolio. "
              text2="Our expertise in ESG and CSR ensures that your investments yield financial returns while contributing to long-term sustainability, making a meaningful impact on the environment."
              url="src/assets/servis-green.png"
              color="cream-bg"
              button={true}
            />
            <ServisItem
              isImageRight={true}
              title="Startup and innovation services in timber and bioenergy"
              text1="ITTCON supports startups in wood processing, bioenergy, and environmental sectors with comprehensive market analysis, strategic business planning, and securing venture capital."
              text2="We guide startups through early development, providing expert advice on product development, market entry, and scaling operations. With ITTCON, your startup gains deep industry insights and mentorship, positioning you for long-term success in a competitive market"
              url="src/assets/servis-startup.png"
              color="gray-bg"
              button={true}
            />
            <ServisItem
              isImageRight={false}
              title="EUDR, CSR, and ESG Compliance for Sustainable Business Practices"
              text1="In today’s regulatory landscape, compliance with EU regulations, CSR, and ESG standards is vital for sustainability and competitiveness. ITTCON guides you through these complex requirements, helping integrate sustainable practices, achieve certifications, and align with global standards."
              text2="Partner with ITTCON to meet regulatory demands and enhance your reputation as a leader in sustainability and ethical business practices."
              url="src/assets/servis-EUDR.png"
              color="cream-bg"
              button={true}
            />
          </div>
        </div>
      </section>
      <section className="portfolio gray-bg">
        <div className="portfolio-container">
          <h2 className="portfolio-h2 black-color">Our Impactful Journeys</h2>
          <Portfolio />
        </div>
      </section>
      <section className="news white-bg">
        <div>
          <h2 className="black-color news-h2">Articles & News</h2>
        </div>
        <div className="news-container">
          <News
            img="src/assets/servis-agency.png"
            title="Recent changes in European forestry regulations"
            text="Key updates to European forestry regulations and their effects on global trade."
            date="22.07.2024"
          />
          <div className="cream-bg">
            <News
              bg="true"
              img="src/assets/servis-agency.png"
              title="Recent changes in European forestry regulations"
              text="Key updates to European forestry regulations and their effects on global trade."
              date="22.07.2024"
            />
          </div>
          <News
            img="src/assets/servis-agency.png"
            title="Recent changes in European forestry regulations"
            text="Key updates to European forestry regulations and their effects on global trade."
            date="22.07.2024"
          />
        </div>
      </section>
      <section className="together">
        <Together />
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
