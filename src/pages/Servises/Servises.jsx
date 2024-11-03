import React, { useRef, useEffect, useState } from "react";
import style from "./Servises.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import ServisItem from "../../components/ServisItem/ServisItem";
import Indicators from "../../components/Indicators/Indicators";
import Together from "../../components/Together/Together";
import Overview from "../../components/Overview/Overview";
import { useLocation } from "react-router-dom";
import Portfolio from "../../components/Portfolio/Portfolio";
import { name } from "echarts-extension-gmap";

function Servises() {
  const location = useLocation();
  const [servicesIndex, setServisesIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Восстанавливаем состояние при каждом посещении страницы
    const state = location.state;
    if (state && state.serviceId !== undefined) {
      setServisesIndex(state.serviceId);
    }
  }, [location]);

  const data = [
    {
      name: "Agency and Brokerage",
      title: "Strategic Agency and Brokerage for Sustainable Trade",
      description:
        "At ITTCON, we excel in facilitating seamless international trade in forestry and bioenergy products. Our Agency and Brokerage services are tailored to simplify the complexities of global markets, ensuring your operations are efficient, reliable, and aligned with sustainable growth.",
      descriptionSecond:
        "By leveraging deep market insights and strategic partnerships, we secure valuable deals and optimize trade operations, empowering your business to thrive in today’s competitive landscape.",
      url: "/src/assets/servis-agency.png",
      indicators: {
        title1: "Market research & analysis",
        description1:
          "Our in-depth market research uncovers new opportunities and evaluates current market conditions, ensuring you have the insights needed to stay ahead. We analyze industry trends, competitive landscapes, and potential demand, empowering you to make informed, strategic decisions that drive your business forward.",
        icon1: "/src/assets/Market research.svg",
        img1: "https://source.unsplash.com/1600x900/?market-research",
        title2: "Partner Identification & networking",
        description2:
          "Leverage our extensive network to connect with reliable partners who align with your strategic goals. We assist you in identifying key players, negotiating favorable terms, and fostering long-term, trustworthy relationships that drive sustainable success.",
        icon2: "/src/assets/Partner Identification.svg",
        img2: "https://source.unsplash.com/1600x900/?networking",
        title3: "Trade negotiation & contract management",
        description3:
          "Leverage our expertise to secure favorable trade agreements that align with your strategic goals. We manage every aspect of contract negotiations, ensuring advantageous terms and mitigating risks to protect your business interests.",
        icon3: "/src/assets/Trade negotiation.svg",
        img3: "https://source.unsplash.com/1600x900/?negotiation",
        title4: "Logistics & supply chain coordination",
        description4:
          "Streamline your logistics and supply chain operations with ITTCON. We manage the movement of goods, handle shipping and documentation, and ensure full compliance with international trade regulations, making your operations efficient and reliable.",
        icon4: "/src/assets/Logistics.svg",
        img4: "https://source.unsplash.com/1600x900/?logistics",
        title5: "Regulatory compliance & risk management",
        description5:
          "Navigate complex regulatory landscapes with confidence. ITTCON provides expert guidance on international trade laws and standards, implementing robust risk management strategies to safeguard your business and ensure compliance.",
        icon5: "/src/assets/Regulatory compliance.svg",
        img5: "https://source.unsplash.com/1600x900/?compliance",
        title6: "Performance tracking & reporting",
        description6:
          "Track and evaluate your trading performance with precision. ITTCON delivers regular reports and actionable insights, enabling you to assess results, identify opportunities for improvement, and fine-tune your trading strategies for optimal success.",
        icon6: "/src/assets/Performance tracking.svg",
        img6: "https://source.unsplash.com/1600x900/?performance-tracking",
      },
    },
    {
      name: "Green Investment",
      title: "Driving Sustainable Innovation through Green Investments",
      description:
        "We connect investors with diverse opportunities in the green economy, spanning renewable energy, environmental restoration, and sustainable technology projects.",
      descriptionSecond:
        "Green Investment services are designed to align financial success with a commitment to environmental stewardship, ensuring that every investment supports a healthier planet and a thriving future.",
      url: "/src/assets/servis-green.png",
      indicators: {
        title1: "Targeted Green Investment Opportunities",
        description1:
          "ITTCON identifies and connects you with strategic investment opportunities across a range of green sectors. Whether focusing on renewable energy, waste management, or sustainable innovation, we ensure your investments are strategically positioned for long-term success.",
        icon1: "/src/assets/Market research.svg",
        img1: "https://source.unsplash.com/1600x900/?green-investment",
        title2: "Navigating Regulatory Landscapes",
        description2:
          "Stay compliant with global sustainability standards with ITTCON's expert regulatory support. We help you navigate complex international regulations, ensuring that your green investments meet all necessary criteria while minimizing risks.",
        icon2: "/src/assets/Partner Identification.svg",
        img2: "https://source.unsplash.com/1600x900/?regulatory-landscapes",
        title3: "Environmental and Social Impact Assessments",
        description3:
          "Enhance your decision-making with our comprehensive impact assessments. We evaluate the environmental and social outcomes of potential investments, helping you choose projects that deliver measurable benefits and align with your sustainability goals.",
        icon3: "/src/assets/Trade negotiation.svg",
        img3: "https://source.unsplash.com/1600x900/?impact-assessment",
        title4: "Stakeholder Engagement and Reporting",
        description4:
          "Effective communication is key to building trust. ITTCON helps you engage stakeholders through transparent sustainability reporting, demonstrating your commitment to environmental, social, and governance (ESG) standards.",
        icon4: "/src/assets/Logistics.svg",
        img4: "https://source.unsplash.com/1600x900/?stakeholder-engagement",
        title5: "Integrating ESG into Investment Strategies",
        description5:
          "Strengthen your portfolio with ESG-focused strategies. ITTCON assists in integrating Environmental, Social, and Governance criteria into your investment approach, enhancing both financial returns and corporate responsibility.",
        icon5: "/src/assets/Regulatory compliance.svg",
        img5: "https://source.unsplash.com/1600x900/?ESG-strategies",
        title6: "Operational Efficiency in Green Projects",
        description6:
          "Maximize the impact of your green investments with ITTCON’s operational support. We offer expert guidance on improving the efficiency and effectiveness of your projects, ensuring sustainable and profitable outcomes.",
        icon6: "/src/assets/Performance tracking.svg",
        img6: "https://source.unsplash.com/1600x900/?operational-efficiency",
      },
    },
    {
      name: "Startup Services",
      title: "Supporting Innovation and Growth for Startups",
      description:
        "Our Startup Services are tailored to help new businesses navigate the challenges of establishing and growing in today’s dynamic market environment.",
      descriptionSecond:
        "We provide expert advice, resources, and connections to accelerate your startup’s success.",
      url: "/src/assets/servis-startup.png",
      indicators: {
        title1: "Market Entry Strategies",
        description1:
          "Gain insights into effective market entry strategies to position your startup for success. We analyze your target market, competition, and potential risks to develop a tailored approach.",
        icon1: "/src/assets/Market research.svg",
        img1: "https://source.unsplash.com/1600x900/?startup-strategy",
        title2: "Funding and Investment Solutions",
        description2:
          "Navigate the funding landscape with our guidance. We assist in identifying suitable funding options, preparing investment pitches, and connecting with potential investors.",
        icon2: "/src/assets/Partner Identification.svg",
        img2: "https://source.unsplash.com/1600x900/?funding-solutions",
        title3: "Business Model Development",
        description3:
          "Refine your business model with expert advice. We help you identify key revenue streams, cost structures, and value propositions to ensure your startup is sustainable.",
        icon3: "/src/assets/Trade negotiation.svg",
        img3: "https://source.unsplash.com/1600x900/?business-model",
        title4: "Market Research and Analysis",
        description4:
          "Conduct thorough market research to understand customer needs and industry trends. We provide insights that inform your product development and marketing strategies.",
        icon4: "/src/assets/Logistics.svg",
        img4: "https://source.unsplash.com/1600x900/?market-research",
        title5: "Networking Opportunities",
        description5:
          "Connect with industry leaders and potential partners through our extensive network. We facilitate introductions that can lead to valuable collaborations.",
        icon5: "/src/assets/Regulatory compliance.svg",
        img5: "https://source.unsplash.com/1600x900/?networking-opportunities",
        title6: "Mentorship and Support",
        description6:
          "Access mentorship from experienced entrepreneurs and industry experts who can provide guidance and support as you grow your startup.",
        icon6: "/src/assets/Performance tracking.svg",
        img6: "https://source.unsplash.com/1600x900/?mentorship",
      },
    },
    {
      name: "EUDR and Sustainable Schemes",
      title: "Mastering EUDR Compliance and Sustainable Practices",
      description:
        "We provide a comprehensive approach to navigating the complexities of European Union Deforestation Regulation (EUDR) and implementing sustainable schemes. Our services are designed to ensure your business not only complies with regulatory requirements but also strengthens its commitment to sustainability.",
      descriptionSecond:
        "With a focus on strategic guidance, risk assessment, and continuous improvement, we help you meet the highest standards of environmental stewardship.",
      url: "/src/assets/servis-EUDR.png",
      indicators: {
        title1: "Detailed Guidance on EUDR Compliance",
        description1:
          "Receive step-by-step instructions and comprehensive templates to navigate the EUDR compliance process seamlessly. Our guidance ensures your business meets all regulatory requirements while maintaining operational efficiency.",
        icon1: "/src/assets/Market research.svg",
        img1: "https://source.unsplash.com/1600x900/?EUDR-compliance",
        title2: "Risk Assessment and Management",
        description2:
          "Identify potential risks associated with EUDR compliance and develop mitigation strategies. We provide tools and resources to effectively manage these risks and maintain compliance.",
        icon2: "/src/assets/Partner Identification.svg",
        img2: "https://source.unsplash.com/1600x900/?risk-assessment",
        title3: "Training and Capacity Building",
        description3:
          "Enhance your team's understanding of EUDR requirements through targeted training sessions. Our capacity-building initiatives empower your employees to implement sustainable practices effectively.",
        icon3: "/src/assets/Trade negotiation.svg",
        img3: "https://source.unsplash.com/1600x900/?training",
        title4: "Sustainable Supply Chain Solutions",
        description4:
          "Optimize your supply chain for sustainability. We help you identify and implement best practices that align with EUDR requirements and promote sustainable sourcing.",
        icon4: "/src/assets/Logistics.svg",
        img4: "https://source.unsplash.com/1600x900/?sustainable-supply-chain",
        title5: "Performance Monitoring and Reporting",
        description5:
          "Track your sustainability initiatives with our performance monitoring tools. We provide insights and reports that demonstrate your commitment to EUDR compliance and sustainable practices.",
        icon5: "/src/assets/Regulatory compliance.svg",
        img5: "https://source.unsplash.com/1600x900/?performance-monitoring",
        title6: "Engaging Stakeholders in Sustainability",
        description6:
          "Build a sustainable business by engaging stakeholders in your EUDR compliance efforts. We facilitate discussions and initiatives that foster collaboration and transparency.",
        icon6: "/src/assets/Performance tracking.svg",
        img6: "https://source.unsplash.com/1600x900/?stakeholder-engagement",
      },
    },
  ];
  

  return (
    <div>
      <Header />
      <main className={style.main} id="main">
        <div className={style.mainContainer}>
          <div className={style.mainContainerText}>
            <h1>Explore Our Expertise</h1>
            <p>
              Discover how ITTCON's tailored solutions can propel your business
              forward. From strategic guidance to hands-on support, we offer a
              comprehensive range of services designed to address the unique
              challenges of your industry and unlock new opportunities for
              sustainable growth.
            </p>
          </div>
          <Button text="Contact us" color="white-color" path="/contact"/>
        </div>
      </main>
      <section className={`white-bg ${style.servises}`}>
        <div className={style.servisesContainer}>
          <div>
            <h2 className="black-color">Services</h2>
          </div>
          <div className={style.servisesItems}>
            <button className={`white-bg`} onClick={() => setServisesIndex(0)}>
              <h5
                className={`${style.servisesh5} ${
                  servicesIndex === 0 ? style.activ : ""
                }`}
              >
                Agency and Brokerage
              </h5>
              <span
                className={`${style.servisesSpan} ${
                  servicesIndex === 0 ? style.activSpan : ""
                }`}
              ></span>
            </button>

            <button className="white-bg" onClick={() => setServisesIndex(1)}>
              <h5
                className={`${style.servisesh5} ${
                  servicesIndex === 1 ? style.activ : ""
                }`}
              >
                Green Investment
              </h5>
              <span
                className={`${style.servisesSpan} ${
                  servicesIndex === 1 ? style.activSpan : ""
                }`}
              ></span>
            </button>

            <button className="white-bg" onClick={() => setServisesIndex(2)}>
              <h5
                className={`${style.servisesh5} ${
                  servicesIndex === 2 ? style.activ : ""
                }`}
              >
                Startup Services
              </h5>
              <span
                className={`${style.servisesSpan} ${
                  servicesIndex === 2 ? style.activSpan : ""
                }`}
              ></span>
            </button>

            <button className="white-bg" onClick={() => setServisesIndex(3)}>
              <h5
                className={`${style.servisesh5} ${
                  servicesIndex === 3 ? style.activ : ""
                }`}
              >
                EUDR and <br />
                Sustainable Schemes
              </h5>
              <span
                className={`${style.servisesSpan} ${
                  servicesIndex === 3 ? style.activSpan : ""
                }`}
              ></span>
            </button>
          </div>
          <div className={style.servisesDescription}>
            <ServisItem
              isImageRight={false}
              title={data[servicesIndex].title}
              text1={data[servicesIndex].description}
              text2={data[servicesIndex].descriptionSecond}
              url={data[servicesIndex].url}
              color="gray-bg"
              button={false}
            />
          </div>
        </div>
      </section>
      <section className={style.solutions}>
        <div className={style.solutionsContainer}>
          <h2>Tailored solutions for your needs</h2>
          <div className={style.solutionsItemsWraper}>
            <div className={style.solutionsItemsWraper1}>
              <Indicators
                icon="/src/assets/Collaborating-img1.svg"
                text="ITTCON adapts to your business goals, offering customized solutions for each client. We understand that every project is unique and requires a tailored approach that takes market specifics into account."
                title="Flexibility in Partnership"
              />
              <Indicators
                icon="/src/assets/Collaborating-img2.svg"
                text="With ITTCON, you’ll get more than just advice – you’ll receive concrete steps. We create clear, executable plans so your company can achieve desired outcomes faster."
                title="Actionable Solutions"
              />
              <Indicators
                icon="/src/assets/Collaborating-img3.svg"
                text="ITTCON supports even the most ambitious projects. The higher the goal, the more we strive to achieve it, offering innovative strategies and tools for success"
                title="Ambitious Goals"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style.overview}>
        <Overview data={data[servicesIndex]} i={servicesIndex}/>
      </section>
      <section className={`gray-bg ${style.action}`}>
        <div className={style.actionContainer}>
          <h2 className="black-color">Our Work in Action</h2>
          <div className={style.actionWraper}>
            <Portfolio selectedCategory={data[servicesIndex].name}/>
          </div>
        </div>
      </section>
      <section className={`cream-bg ${style.seo}`}>
        <div className={style.seoContainer}>
          {isMobile ? (
            <div>
              <h3 className="black-color">"We are delighted to collaborate with Regrow to identify scalable ways to support credible Scope 3 action…Regrow’s customers will benefit from a seamless verification process – providing more accurate project impact results, faster."</h3>
            </div>
          ) : (
            <div>
              <h2 className="black-color">"We are delighted to collaborate with Regrow to identify scalable ways to support credible Scope 3 action…Regrow’s customers will benefit from a seamless verification process – providing more accurate project impact results, faster."</h2>
            </div>
          )}
          <div className={style.seoInf}>
            <div className={style.seoImg}></div> 
            <div className={style.seoName}>
              <h5 className="black-color">Stefan Julius</h5>
              <p className="black-color p20">CEO, ITTCON</p>
            </div>
        </div>
        </div>
      </section>
      <Together />
      <Footer />
    </div>
  );
}

export default Servises;
