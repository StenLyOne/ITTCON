import "./HomePage.css";
import "./Numbers.css";
import "./AboutUs.css";
import "./Partners.css";
import "./Servis.css";
import "./Portfolio.css";
import "./News.css";
import Main from "../../components/Main/Main";
import AboutUsImg from "../../assets/aboutUs.png";
import logoPartners1 from "../../assets/logo-partners1.png";
import logoPartners2 from "../../assets/logo-partners2.svg";
import logoPartners3 from "../../assets/logo-partners3.svg";
import logoPartners4 from "../../assets/logo-partners4.svg";
import servisAgency from "../../assets/servis-agency.png";
import servisGreen from "../../assets/servis-green.png";
import servisStartup from "../../assets/servis-startup.png";
import servisEUDR from "../../assets/servis-EUDR.png";
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
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation";


function HomePage() {
  return (
    <div>
      <Header />
      <Main />
      <section className="numbers">
        <div className="numbersContainer">
          <div className="numbers-h2">
            <h2>The results of our work in numbers</h2>
          </div>
          <Number />
        </div>
      </section>
      <section className="aboutUs">
        <div className="aboutUs-container">
          <div className="aboutUs-container-left">
            <ScrollAnimation animationProps={{ delay: 0.1 }}>
              <h2 className="aboutUs-h2">
                Our Commitment: Leading the Future of Sustainable Solutions
              </h2>
            </ScrollAnimation>
            <div>
              <img
                className="aboutUs-container-left-img-mob"
                src={AboutUsImg}
                alt=""
              />
            </div>
            <div className="aboutUs-container-left-text">
              <ScrollAnimation animationProps={{ delay: 0.1 }}>
                <p className="aboutUs-p">
                  Pioneering sustainable innovation, ITTCON transforms the
                  timber industry by merging nature’s wisdom with cutting-edge
                  technology. We develop solutions as enduring as the forests we
                  protect, aligning business success with environmental
                  stewardship.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animationProps={{ delay: 0.2 }}>
                <p className="aboutUs-p">
                  Each initiative reflects our commitment to sustainability,
                  from channeling investments into green technologies to
                  ensuring our work meets today’s needs while safeguarding
                  tomorrow’s legacy. ITTCON leads the way in creating a future
                  where business and nature thrive together.
                </p>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animationProps={{ delay: 0.3 }}>
              <div className="aboutUs-btn">
                <Button text="About us" path="/aboutus" />
              </div>
            </ScrollAnimation>
          </div>
          <div className="aboutUs-container-right"></div>
        </div>
      </section>
      <section className="partners">
        <div className="partners-container">
          <h2>Some of our Partners</h2>
          <div className="partners-container-items">
            <ScrollAnimation animationProps={{ delay: 0.1 }} blur={35}>
              <div className="partners-item-wraper">
                <PartnersItem text="Renewable materials solutions">
                  <img
                    className="partners-item-logo"
                    src={logoPartners1}
                    alt=""
                  />
                </PartnersItem>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationProps={{ delay: 0.2 }} blur={35}>
              <div className="partners-item-wraper">
                <PartnersItem text="Blockchain-driven logistics">
                  <img
                    className="partners-item-logo"
                    src={logoPartners2}
                    alt=""
                  />
                </PartnersItem>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationProps={{ delay: 0.3 }} blur={35}>
              <div className="partners-item-wraper">
                <PartnersItem text="Global wildlife conservation">
                  <img
                    className="partners-item-logo"
                    src={logoPartners3}
                    alt=""
                  />
                </PartnersItem>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationProps={{ delay: 0.4 }} blur={35}>
              <div className="partners-item-wraper">
                <PartnersItem text="Environmental policy leadership">
                  <img
                    className="partners-item-logo"
                    src={logoPartners4}
                    alt=""
                  />
                </PartnersItem>
              </div>
            </ScrollAnimation>
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
              url={servisAgency}
              color="gray-bg"
              button={true}
              id={0}
            />
            <ServisItem
              isImageRight={false}
              title="Green investment and venture capital for sustainable growth"
              text1="ITTCON’s green investment services connect investors with high-potential opportunities in forestry, bioenergy, and environmental projects. We provide comprehensive support, from identifying opportunities to managing your portfolio. "
              text2="Our expertise in ESG and CSR ensures that your investments yield financial returns while contributing to long-term sustainability, making a meaningful impact on the environment."
              url={servisGreen}
              color="cream-bg"
              button={true}
              id={1}
            />
            <ServisItem
              isImageRight={true}
              title="Startup and innovation services in timber and bioenergy"
              text1="ITTCON supports startups in wood processing, bioenergy, and environmental sectors with comprehensive market analysis, strategic business planning, and securing venture capital."
              text2="We guide startups through early development, providing expert advice on product development, market entry, and scaling operations. With ITTCON, your startup gains deep industry insights and mentorship, positioning you for long-term success in a competitive market"
              url={servisStartup}
              color="gray-bg"
              button={true}
              id={2}
            />
            <ServisItem
              isImageRight={false}
              title="EUDR, CSR, and ESG Compliance for Sustainable Business Practices"
              text1="In today’s regulatory landscape, compliance with EU regulations, CSR, and ESG standards is vital for sustainability and competitiveness. ITTCON guides you through these complex requirements, helping integrate sustainable practices, achieve certifications, and align with global standards."
              text2="Partner with ITTCON to meet regulatory demands and enhance your reputation as a leader in sustainability and ethical business practices."
              url={servisEUDR}
              color="cream-bg"
              button={true}
              id={3}
            />
          </div>
        </div>
      </section>
      <section className="portfolio gray-bg">
        <div className="portfolio-container">
          <ScrollAnimation>
            <h2 className="portfolio-h2 black-color">Our Work in Action</h2>
          </ScrollAnimation>
          <Portfolio />
        </div>
      </section>
      {/* <section className="news white-bg">
        <div>
          <h2 className="black-color news-h2">Articles & News</h2>
        </div>
        <div className="news-container">
          <News
            img="/src/assets/servis-agency.png"
            title="Recent changes in European forestry regulations"
            text="Key updates to European forestry regulations and their effects on global trade."
            date="22.07.2024"
          />
          <div className="cream-bg">
            <News
              bg="true"
              img="/src/assets/servis-agency.png"
              title="Recent changes in European forestry regulations"
              text="Key updates to European forestry regulations and their effects on global trade."
              date="22.07.2024"
            />
          </div>
          <News
            img="/src/assets/servis-agency.png"
            title="Recent changes in European forestry regulations"
            text="Key updates to European forestry regulations and their effects on global trade."
            date="22.07.2024"
          />
        </div>
      </section> */}
      <section className="together">
        <Together />
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
