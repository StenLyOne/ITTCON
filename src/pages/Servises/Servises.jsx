import React, { useRef, useEffect, useState } from "react";
import style from "./Servises.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/button/Button";
import ServisItem from "../../components/ServisItem/ServisItem";
import Indicators from "../../components/Indicators/Indicators";
import Together from "../../components/Together/Together";
import { useLocation } from "react-router-dom";

function Servises() {
  const location = useLocation();
  const [servicesIndex, setServisesIndex] = useState(0);

  useEffect(() => {
    // Восстанавливаем состояние при каждом посещении страницы
    const state = location.state;
    if (state && state.serviceId !== undefined) {
      setServisesIndex(state.serviceId);
    }
  }, [location]);

  const data = [
    {
      title: "Strategic Agency and Brokerage for Sustainable Trade",
      description:
        "At ITTCON, we excel in facilitating seamless international trade in forestry and bioenergy products. Our Agency and Brokerage services are tailored to simplify the complexities of global markets, ensuring your operations are efficient, reliable, and aligned with sustainable growth.",
      descriptionSecond:
        "By leveraging deep market insights and strategic partnerships, we secure valuable deals and optimize trade operations, empowering your business to thrive in today’s competitive landscape.",
      url: "src/assets/servis-agency.png",
      indicators: {
        title1: "Market research & analysis",
        description1:
          "Our in-depth market research uncovers new opportunities and evaluates current market conditions, ensuring you have the insights needed to stay ahead. We analyze industry trends, competitive landscapes, and potential demand, empowering you to make informed, strategic decisions that drive your business forward.",
        icon1: "src/assets/Market research.svg",
        title2: "Partner Identification & networking",
        description2:
          "Leverage our extensive network to connect with reliable partners who align with your strategic goals. We assist you in identifying key players, negotiating favorable terms, and fostering long-term, trustworthy relationships that drive sustainable success.",
        icon2: "src/assets/Partner Identification.svg",
        title3: "Trade negotiation & contract management",
        description3:
          "Leverage our expertise to secure favorable trade agreements that align with your strategic goals. We manage every aspect of contract negotiations, ensuring advantageous terms and mitigating risks to protect your business interests.",
        icon3: "src/assets/Trade negotiation.svg",
        title4: "Logistics & supply chain coordination",
        description4:
          "Streamline your logistics and supply chain operations with ITTCON. We manage the movement of goods, handle shipping and documentation, and ensure full compliance with international trade regulations, making your operations efficient and reliable.",
        icon4: "src/assets/Logistics.svg",
        title5: "Regulatory compliance & risk management",
        description5:
          "Navigate complex regulatory landscapes with confidence. ITTCON provides expert guidance on international trade laws and standards, implementing robust risk management strategies to safeguard your business and ensure compliance.",
        icon5: "src/assets/Regulatory compliance.svg",
        title6: "Performance tracking & reporting",
        description6:
          "Track and evaluate your trading performance with precision. ITTCON delivers regular reports and actionable insights, enabling you to assess results, identify opportunities for improvement, and fine-tune your trading strategies for optimal success.",
        icon6: "src/assets/Performance tracking.svg",
      },
      solution: {
        solution1: {
          title: "Comprehensive market expansion support",
          description:
            "At ITTCON, we offer tailored solutions designed to expand your market reach and optimize your trading operations.",
          description2:
            "From expert negotiation of trade agreements to meticulous logistics management, our team ensures that every transaction is not only smooth but also strategically aligned with your profitability goals.F",
          url: "src/assets/servisesDescription-1.png",
        },
        solution2: {
          title: "Our Proven Process",
          description:
            "We start with an in-depth market analysis to uncover new opportunities. Next, we connect you with trusted partners and expertly guide you through every stage of negotiation and transaction.",
          description2:
            "With ITTCON, you can expect transparency and efficiency at every step, ensuring a smooth and successful process.",
          url: "src/assets/servisesDescription-2.png",
        },
      },
    },
    {
      title: "Driving Sustainable Innovation through Green Investments",
      description:
        "We connect investors with diverse opportunities in the green economy, spanning renewable energy, environmental restoration, and sustainable technology projects.",
      descriptionSecond:
        "Green Investment services are designed to align financial success with a commitment to environmental stewardship, ensuring that every investment supports a healthier planet and a thriving future.",
      url: "src/assets/servis-green.png",
      indicators: {
        title1: "Targeted Green Investment Opportunities",
        description1:
          "ITTCON identifies and connects you with strategic investment opportunities across a range of green sectors. Whether focusing on renewable energy, waste management, or sustainable innovation, we ensure your investments are strategically positioned for long-term success.",
        icon1: "src/assets/Market research.svg",
        title2: "Navigating Regulatory Landscapes",
        description2:
          "Stay compliant with global sustainability standards with ITTCON's expert regulatory support. We help you navigate complex international regulations, ensuring that your green investments meet all necessary criteria while minimizing risks.",
        icon2: "src/assets/Partner Identification.svg",
        title3: "Environmental and Social Impact Assessments",
        description3:
          "Enhance your decision-making with our comprehensive impact assessments. We evaluate the environmental and social outcomes of potential investments, helping you choose projects that deliver measurable benefits and align with your sustainability goals.",
        icon3: "src/assets/Trade negotiation.svg",
        title4: "Stakeholder Engagement and Reporting",
        description4:
          "Effective communication is key to building trust. ITTCON helps you engage stakeholders through transparent sustainability reporting, demonstrating your commitment to environmental, social, and governance (ESG) standards.",
        icon4: "src/assets/Logistics.svg",
        title5: "Integrating ESG into Investment Strategies",
        description5:
          "Strengthen your portfolio with ESG-focused strategies. ITTCON assists in integrating Environmental, Social, and Governance criteria into your investment approach, enhancing both financial returns and corporate responsibility.",
        icon5: "src/assets/Regulatory compliance.svg",
        title6: "Operational Efficiency in Green Projects",
        description6:
          "Maximize the impact of your green investments with ITTCON’s operational support. We offer expert guidance on improving the efficiency and effectiveness of your projects, ensuring sustainable and profitable outcomes.",
        icon6: "src/assets/Performance tracking.svg",
      },
      solution: {
        solution1: {
          title: "Comprehensive green investment support",
          description:
            "Our end-to-end services cover every facet of your green investment journey, from strategic planning to operational execution. ",
          description2:
            "With ITTCON’s expert guidance, your investments will achieve sustainable growth and deliver meaningful environmental impact.",
          url: "src/assets/servisesDescription-1.png",
        },
        solution2: {
          title: "Proven Strategies for Sustainable Success",
          description:
            "Our process begins with identifying high-potential green investments, followed by tailored support through every stage of the project. ",
          description2:
            "ITTCON ensures that your investments not only succeed but also make a positive impact on the world.",
          url: "src/assets/servisesDescription-2.png",
        },
      },
    },
    {
      title: "Driving Sustainable Innovation through Green Investments",
      description:
        "We connect investors with diverse opportunities in the green economy, spanning renewable energy, environmental restoration, and sustainable technology projects.",
      descriptionSecond:
        "Our Green Investment services are designed to align financial success with a commitment to environmental stewardship, ensuring that every investment supports a healthier planet and a thriving future.",
      url: "src/assets/servis-startup.png",
      indicators: {
        title1: "Targeted Green Investment Opportunities",
        description1:
          "ITTCON identifies and connects you with strategic investment opportunities across a range of green sectors. Whether focusing on renewable energy, waste management, or sustainable innovation, we ensure your investments are strategically positioned for long-term success.",
        icon1: "src/assets/Market research.svg",
        title2: "Navigating Regulatory Landscapes",
        description2:
          "Stay compliant with global sustainability standards with ITTCON's expert regulatory support. We help you navigate complex international regulations, ensuring that your green investments meet all necessary criteria while minimizing risks.",
        icon2: "src/assets/Partner Identification.svg",
        title3: "Environmental and Social Impact Assessments",
        description3:
          "Enhance your decision-making with our comprehensive impact assessments. We evaluate the environmental and social outcomes of potential investments, helping you choose projects that deliver measurable benefits and align with your sustainability goals.",
        icon3: "src/assets/Trade negotiation.svg",
        title4: "Stakeholder Engagement and Reporting",
        description4:
          "Effective communication is key to building trust. ITTCON helps you engage stakeholders through transparent sustainability reporting, demonstrating your commitment to environmental, social, and governance (ESG) standards.",
        icon4: "src/assets/Logistics.svg",
        title5: "Integrating ESG into Investment Strategies",
        description5:
          "Strengthen your portfolio with ESG-focused strategies. ITTCON assists in integrating Environmental, Social, and Governance criteria into your investment approach, enhancing both financial returns and corporate responsibility.",
        icon5: "src/assets/Regulatory compliance.svg",
        title6: "Operational Efficiency in Green Projects",
        description6:
          "Maximize the impact of your green investments with ITTCON’s operational support. We offer expert guidance on improving the efficiency and effectiveness of your projects, ensuring sustainable and profitable outcomes.",
        icon6: "src/assets/Performance tracking.svg",
      },
      solution: {
        solution1: {
          title: "Comprehensive green investment support",
          description:
            "Our end-to-end services cover every facet of your green investment journey, from strategic planning to operational execution. ",
          description2:
            "With ITTCON’s expert guidance, your investments will achieve sustainable growth and deliver meaningful environmental impact.",
          url: "src/assets/servisesDescription-1.png",
        },
        solution2: {
          title: "Proven Strategies for Sustainable Success",
          description:
            "Our process begins with identifying high-potential green investments, followed by tailored support through every stage of the project. ",
          description2:
            "ITTCON ensures that your investments not only succeed but also make a positive impact on the world.",
          url: "src/assets/servisesDescription-2.png",
        },
      },
    },
    {
      title: "Mastering EUDR Compliance and Sustainable Practices",
      description:
        "We provide a comprehensive approach to navigating the complexities of European Union Deforestation Regulation (EUDR) and implementing sustainable schemes. Our services are designed to ensure your business not only complies with regulatory requirements but also strengthens its commitment to sustainability.",
      descriptionSecond:
        "With a focus on strategic guidance, risk assessment, and continuous improvement, we help you meet the highest standards of environmental stewardship.",
      url: "src/assets/servis-EUDR.png",
      indicators: {
        title1: "Detailed Guidance on EUDR Compliance",
        description1:
          "Receive step-by-step instructions and comprehensive templates to navigate the EUDR compliance process seamlessly. Our guidance ensures your business meets all regulatory requirements while maintaining operational efficiency.",
        icon1: "src/assets/Market research.svg",
        title2: "Risk Assessment Facilitation",
        description2:
          "Identify and mitigate deforestation risks in your supply chain with our expert analysis. We provide actionable strategies to minimize impacts and maintain compliance with EUDR standards.",
        icon2: "src/assets/Partner Identification.svg",
        title3: "Documentation Compliance Support",
        description3:
          "Streamline your documentation process with our tailored templates and reporting guidelines. Ensure every compliance and due diligence effort is accurately recorded and easily accessible.",
        icon3: "src/assets/Trade negotiation.svg",
        title4: "Traceability Support",
        description4:
          "Implement advanced traceability methods using geolocation tools and satellite data to guarantee your wood products are sourced from deforestation-free areas, bolstering your compliance efforts.",
        icon4: "src/assets/Logistics.svg",
        title5: "Regulatory Updates and Best Practices",
        description5:
          "Stay informed with the latest EUDR regulatory updates and best practices. Our continuous support ensures you are always ahead in compliance and sustainability.",
        icon5: "src/assets/Regulatory compliance.svg",
        title6: "Strategic Implications and Recommendations",
        description6:
          "Turn compliance findings into strategic advantages. We provide actionable recommendations that align with your business goals and enhance your sustainability initiatives.",
        icon6: "src/assets/Performance tracking.svg",
      },
      solution: {
        solution1: {
          title: "Ensuring Continuous Improvement and Strategic Planning",
          description:
            "Our continuous refinement services identify gaps in data collection and suggest areas for further research, enabling your business to stay ahead in EUDR compliance.",
          description2:
            "With strategic planning and predictive modeling, we help you anticipate future risks and align your operations with sustainable practices.",
          url: "src/assets/servisesDescription-1.png",
        },
        solution2: {
          title: "Proven Strategies for Sustainable Success",
          description:
            "Our process begins with identifying high-potential green investments, followed by tailored support through every stage of the project. ",
          description2:
            "ITTCON ensures that your investments not only succeed but also make a positive impact on the world.",
          url: "src/assets/servisesDescription-2.png",
        },
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
          <Button text="Contact us" color="white-color" />
        </div>
      </main>
      <section className={`white-bg ${style.servises}`}>
        <div className={style.servisesContainer}>
          <div>
            <h2 className="black-color">Services</h2>
          </div>
          <div className={style.servisesItems}>
            <button className="white-bg" onClick={() => setServisesIndex(0)}>
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
            <Indicators
              icon={data[servicesIndex].indicators.icon1}
              text={data[servicesIndex].indicators.description1}
              title={data[servicesIndex].indicators.title1}
            />
            <Indicators
              icon={data[servicesIndex].indicators.icon2}
              text={data[servicesIndex].indicators.description2}
              title={data[servicesIndex].indicators.title2}
            />
            <Indicators
              icon={data[servicesIndex].indicators.icon3}
              text={data[servicesIndex].indicators.description3}
              title={data[servicesIndex].indicators.title3}
            />
            <Indicators
              icon={data[servicesIndex].indicators.icon4}
              text={data[servicesIndex].indicators.description4}
              title={data[servicesIndex].indicators.title4}
            />
            <Indicators
              icon={data[servicesIndex].indicators.icon5}
              text={data[servicesIndex].indicators.description5}
              title={data[servicesIndex].indicators.title5}
            />
            <Indicators
              icon={data[servicesIndex].indicators.icon6}
              text={data[servicesIndex].indicators.description5}
              title={data[servicesIndex].indicators.title5}
            />
          </div>
        </div>
      </section>
      <section className={`white-bg ${style.description}`}>
        <div className={style.descriptionContainer}>
          <ServisItem
            isImageRight={false}
            title={data[servicesIndex].solution.solution1.title}
            text1={data[servicesIndex].solution.solution1.description}
            text2={data[servicesIndex].solution.solution1.description2}
            url={data[servicesIndex].solution.solution1.url}
            color="cream-bg"
            button={false}
          />
          <ServisItem
            isImageRight={true}
            title={data[servicesIndex].solution.solution2.title}
            text1={data[servicesIndex].solution.solution2.description}
            text2={data[servicesIndex].solution.solution2.description2}
            url={data[servicesIndex].solution.solution2.url}
            color="gray-bg"
            button={false}
          />
        </div>
      </section>
      <Together />
      <Footer />
    </div>
  );
}

export default Servises;
