import style from "./ChartsMobContainer.module.css";
import ChartsMob from "./ChartsMob";
import ChartsInvestment from "../Charts/ChartsInvestment";
import ChartsImpact from "../Charts/ChartsImpact";
import ChartsSuccess from "../Charts/ChartsSuccess";
import ChartsPartnerships from "../Charts/ChartsPartnerships";

function ChartsMobContainer() {
  const data = [
    {
      component: <ChartsPartnerships />,
      title: "Strategic Investment Focus",
      text:
        "Explore our envisioned investment distribution across key sectors that reflect our commitment to sustainable growth and innovation. While these projections are forward-looking, they represent the strategic directions ITTCON is dedicated to pursuing as we continue to build a sustainable future.",
        color: 'gray-bg'
    },
    {
      component: <ChartsInvestment />,
      title: "Client Partnerships: From Vision to Success",
      text:
        "Explore the journey of our client partnerships, where collaboration and innovation fuel sustained growth and success. This chart illustrates the upward trajectory of performance and achievements, highlighting the impact of our strategic approach.",
        color: 'cream-bg'
    },
    {
      component: <ChartsImpact />,
      title: "Investment Evolution: Tracking Our Strategic Growth",
      text:
        "Discover how ITTCON's investment focus has evolved over time. This chart highlights our strategic growth and adaptability, showcasing our commitment to responding to market trends and client needs with precision and foresight.",
        color: 'gray-bg'
    },
    {
      component: <ChartsSuccess />,
      title: "Client Success Metrics: A Multi-Dimensional View",
      text:
        "Delve into the key performance indicators that define ITTCON's client success. This radar chart offers a comprehensive view of various success dimensions, from project completion rates to client satisfaction and return on investment, illustrating the holistic impact of our partnerships.",
        color: 'cream-bg'
    },
  ];

  return (
    <div className={style.ChartsContainer}>
      {data.map((item, index) => (
        <ChartsMob key={index} title={item.title} text={item.text} color={item.color}>
          {item.component}
        </ChartsMob>
      ))}
    </div>
  );
}

export default ChartsMobContainer;
