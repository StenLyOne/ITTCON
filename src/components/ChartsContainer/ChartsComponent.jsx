import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as echarts from "echarts";
import style from "./ChartsContainer.module.css";

// Регистрация плагина ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ChartsComponent = () => {
  const chartsWraper = useRef(null);

  const chartPartnershipsRef = useRef(null);
  const chartsInvestmentRef = useRef(null);
  const chartsImpactRef = useRef(null);
  const chartsSuccessRef = useRef(null);

  const investment = useRef(null);
  const partnerships = useRef(null);
  const impact = useRef(null);
  const success = useRef(null);

  // Метод для удаления существующего графика, если он уже инициализирован
  const disposeChart = (chartRef) => {
    const chartInstance = echarts.getInstanceByDom(chartRef.current);
    if (chartInstance) {
      chartInstance.dispose();
    }
  };

  // Метод для рендеринга графика
  const renderChart = (chartRef, option) => {
    disposeChart(chartRef); // Удаление существующего графика
    const chart = echarts.init(chartRef.current); // Инициализация нового графика
    chart.setOption(option); // Установка опций для графика
  };

  useEffect(() => {
    const hideAllCharts = () => {
      gsap.set(
        [
          chartsInvestmentRef.current,
          chartPartnershipsRef.current,
          chartsImpactRef.current,
          chartsSuccessRef.current,
        ],
        { display: "none" }
      );
    };

    // Опции для различных графиков
    const investmentOption = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };

    const partnershipsOption = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
        },
        formatter: "{b}: {c}",
      },
      legend: {
        data: ["Growth"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [
            "Initiation",
            "Planning",
            "Execution",
            "Monitoring",
            "Completion",
          ],
          axisLabel: {
            rotate: 0,
            align: "center",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "Performance Index",
          axisLabel: {
            formatter: "{value}",
          },
          max: 110,
        },
      ],
      series: [
        {
          name: "Growth",
          type: "line",
          smooth: true,
          data: [10, 30, 50, 70, 100],
          lineStyle: {
            color: "#4682B4",
            width: 3,
          },
          itemStyle: {
            color: "#4682B4",
          },
          markPoint: {
            data: [
              {
                name: "Project Kickoff",
                value: 10,
                xAxis: "Initiation",
                yAxis: 0,
                itemStyle: { color: "#FF6347" },
              },
              {
                name: "Strategy Approved",
                value: 30,
                xAxis: "Planning",
                yAxis: 20,
                itemStyle: { color: "#4682B4" },
              },
              {
                name: "First Milestone",
                value: 50,
                xAxis: "Execution",
                yAxis: 40,
                itemStyle: { color: "#3CB371" },
              },
              {
                name: "Mid-Project Review",
                value: 70,
                xAxis: "Monitoring",
                yAxis: 60,
                itemStyle: { color: "#FFD700" },
              },
              {
                name: "Project Completed",
                value: 100,
                xAxis: "Completion",
                yAxis: 90,
                itemStyle: { color: "#8B4513" },
              },
            ],
            symbolSize: 60,
            symbolOffset: [0, "-70%"],
            label: {
              formatter: "{b}\n{c}",
              position: "top",
              color: "#000",
              fontSize: 12,
              distance: 10,
            },
          },
          markLine: {
            data: [{ type: "average", name: "Average" }],
            lineStyle: {
              type: "dashed",
              color: "#A9A9A9",
            },
          },
        },
      ],
    };

    const impactOption = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        data: ["Client A", "Client B", "Client C"],
        top: "bottom",
      },
      radar: {
        indicator: [
          { name: "Project Completion", max: 100 },
          { name: "Client Satisfaction", max: 100 },
          { name: "Return on Investment", max: 100 },
          { name: "Innovation Adoption", max: 100 },
          { name: "Sustainability Impact", max: 100 },
          { name: "Long-Term Value", max: 100 },
        ],
        shape: "polygon",
        radius: "65%",
        splitNumber: 5,
        name: {
          textStyle: {
            color: "#000",
            backgroundColor: "#fff",
            borderRadius: 3,
            padding: [3, 5],
          },
        },
      },
      series: [
        {
          name: "Client Success Metrics",
          type: "radar",
          data: [
            {
              value: [80, 90, 70, 80, 75, 85],
              name: "Client A",
              areaStyle: {
                color: "rgba(30, 144, 255, 0.4)",
              },
              lineStyle: {
                color: "#1E90FF",
              },
              itemStyle: {
                color: "#1E90FF",
              },
            },
            {
              value: [60, 70, 65, 80, 85, 75],
              name: "Client B",
              areaStyle: {
                color: "rgba(60, 179, 113, 0.4)",
              },
              lineStyle: {
                color: "#3CB371",
              },
              itemStyle: {
                color: "#3CB371",
              },
            },
            {
              value: [70, 80, 90, 60, 75, 85],
              name: "Client C",
              areaStyle: {
                color: "rgba(255, 215, 0, 0.4)",
              },
              lineStyle: {
                color: "#FFD700",
              },
              itemStyle: {
                color: "#FFD700",
              },
            },
          ],
          areaStyle: {
            type: "default",
          },
        },
      ],
    };

    const successOption = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
        },
        formatter: "{b}: {c}M", // ToolƟp to display the year and investment amount
      },
      legend: {
        data: [
          "Forestry",
          "Bioenergy",
          "Environmental Projects",
          "Startups",
          "EUDR and Compliance Schemes",
        ],
        top: "bottom",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "10%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["2018", "2019", "2020", "2021", "2022", "2023"],
          axisLabel: {
            rotate: 0, // No rotaƟon for clarity
            align: "center",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "Investment",
          axisLabel: {
            formatter: "{value}M", // Y-axis showing investment in millions
          },
          max: 150, // Adjust max value to fit the highest investment amount with some buffer
        },
      ],
      series: [
        {
          name: "Forestry",
          type: "line",
          smooth: true, // Smooth line for a clear trajectory
          data: [40, 50, 60, 70, 80, 100], // Sample data showing growth over Ɵme
          lineStyle: {
            color: "#2E8B57", // Sea Green for Forestry
            width: 3,
          },
          itemStyle: {
            color: "#2E8B57",
          },
        },
        {
          name: "Bioenergy",
          type: "line",
          smooth: true,
          data: [20, 30, 35, 40, 60, 70], // Sample data
          lineStyle: {
            color: "#4682B4", // Steel Blue for Bioenergy
            width: 3,
          },
          itemStyle: {
            color: "#4682B4",
          },
        },
        {
          name: "Environmental Projects",
          type: "line",
          smooth: true,
          data: [10, 15, 20, 30, 35, 50], // Sample data
          lineStyle: {
            color: "#6B8E23", // Olive Drab for Environmental Projects
            width: 3,
          },
          itemStyle: {
            color: "#6B8E23",
          },
        },
        {
          name: "Startups",
          type: "line",
          smooth: true,
          data: [5, 10, 15, 20, 25, 30], // Sample data
          lineStyle: {
            color: "#FFD700", // Gold for Startups
            width: 3,
          },
          itemStyle: {
            color: "#FFD700",
          },
        },
        {
          name: "EUDR and Compliance Schemes",
          type: "line",
          smooth: true,
          data: [2, 5, 7, 10, 12, 15], // Sample data
          lineStyle: {
            color: "#8B4513", // Saddle Brown for EUDR and Compliance Schemes
            width: 3,
          },
          itemStyle: {
            color: "#8B4513",
          },
        },
      ],
    };

    // GSAP анимация для Investments
    ScrollTrigger.create({
      trigger: investment.current,
      start: "top center", // Точка входа при прокрутке вниз
      onEnter: () => {
        hideAllCharts();
        gsap.set(chartsInvestmentRef.current, { display: "block" });
        renderChart(chartsInvestmentRef, investmentOption);
      },
    });

    ScrollTrigger.create({
      trigger: investment.current,
      start: "center bottom", // Точка входа при прокрутке наверх
      onEnterBack: () => {
        hideAllCharts();
        gsap.set(chartsInvestmentRef.current, { display: "block" });
        renderChart(chartsInvestmentRef, investmentOption);
      },
    });

    // GSAP анимация для Partnerships
    ScrollTrigger.create({
      trigger: partnerships.current,
      start: "top center",
      onEnter: () => {
        hideAllCharts();
        gsap.set(chartPartnershipsRef.current, { display: "block" });
        renderChart(chartPartnershipsRef, partnershipsOption);
      },
    });

    ScrollTrigger.create({
      trigger: partnerships.current,
      start: "center bottom", // Точка входа при прокрутке наверх
      onEnterBack: () => {
        hideAllCharts();
        gsap.set(chartPartnershipsRef.current, { display: "block" });
        renderChart(chartPartnershipsRef, partnershipsOption);
      },
    });

    // GSAP анимация для Impact
    ScrollTrigger.create({
      trigger: impact.current,
      start: "top center",
      onEnter: () => {
        hideAllCharts();
        gsap.set(chartsImpactRef.current, { display: "block" });
        renderChart(chartsImpactRef, impactOption);
      },
    });

    ScrollTrigger.create({
      trigger: impact.current,
      start: "center bottom", // Точка входа при прокрутке наверх
      onEnterBack: () => {
        hideAllCharts();
        gsap.set(chartsImpactRef.current, { display: "block" });
        renderChart(chartsImpactRef, impactOption);
      },
    });

    // GSAP анимация для Success
    ScrollTrigger.create({
      trigger: success.current,
      start: "top center",
      onEnter: () => {
        hideAllCharts();
        gsap.set(chartsSuccessRef.current, { display: "block" });
        renderChart(chartsSuccessRef, successOption);
      },
    });

    ScrollTrigger.create({
      trigger: impact.current,
      start: "center bottom", // Точка входа при прокрутке наверх
      onEnterBack: () => {
        hideAllCharts();
        gsap.set(chartsSuccessRef.current, { display: "block" });
        renderChart(chartsSuccessRef, successOption);
      },
    });
  }, []);

  return (
    <div className={style.chartsWraper}>
      <div className={style.chartsCurrent} ref={chartsWraper}>
        <div
          className={style.ChartPartnerships}
          ref={chartPartnershipsRef}
          style={{ display: "none", width: "32.831rem", height: "50vh" }}
        >
          {/* График Partnerships будет рендериться здесь */}
        </div>
        <div
          className={style.ChartsInvestment}
          ref={chartsInvestmentRef}
          style={{ display: "none", width: "32.831rem", height: "50vh" }}
        >
          {/* График Investments будет рендериться здесь */}
        </div>
        <div
          className={style.ChartsImpact}
          ref={chartsImpactRef}
          style={{ display: "none", width: "32.831rem", height: "70vh" }}
        >
          {/* График Impact будет рендериться здесь */}
        </div>
        <div
          className={style.ChartsSuccess}
          ref={chartsSuccessRef}
          style={{ display: "none", width: "32.831rem", height: "50vh" }}
        >
          {/* График Success будет рендериться здесь */}
        </div>
      </div>

      <div>
        <div className={style.chartsItem} ref={investment}>
          <h3 className="black-color">Strategic Investment Focus</h3>
          <p className="black-color p20">
            Explore our envisioned investment distribution across key sectors
            that reflect our commitment to sustainable growth and innovation.
            While these projections are forward-looking, they represent the
            strategic directions ITTCON is dedicated to pursuing as we continue
            to build a sustainable future.
          </p>
        </div>
        <div className={style.chartsItem} ref={partnerships}>
          <h3 className="black-color">
            Client Partnerships: <br />From Vision to Success
          </h3>
          <p className="black-color p20">
            Explore the journey of our client partnerships, where collaboration
            and innovation fuel sustained growth and success. This chart
            illustrates the upward trajectory of performance and achievements,
            highlighting the impact of our strategic approach.
          </p>
        </div>
        <div className={style.chartsItem} ref={success}>
          <h3 className="black-color">
            Investment Evolution: Tracking Our Strategic Growth
          </h3>
          <p className="black-color p20">
            Discover how ITTCON's investment focus has evolved over time. This
            chart highlights our strategic growth and adaptability, showcasing
            our commitment to responding to market trends and client needs with
            precision and foresight.
          </p>
        </div>
        <div className={style.chartsItem} ref={impact}>
          <h3 className="black-color">
            Client Success Metrics: <br />A Multi-Dimensional View
          </h3>
          <p className="black-color p20">
            Delve into the key performance indicators that define ITTCON's
            client success. This radar chart offers a comprehensive view of
            various success dimensions, from project completion rates to client
            satisfaction and return on investment, illustrating the holistic
            impact of our partnerships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChartsComponent;
