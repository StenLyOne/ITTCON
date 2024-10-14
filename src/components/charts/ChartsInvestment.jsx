import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./charts.css";

const ChartsInvestment = () => {
  const chartRef = useRef(null); // Создаем реф для контейнера графика

  useEffect(() => {
    const myChart = echarts.init(chartRef.current); // Инициализируем график

    const option = {
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
        top: "boƩom",
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
          name: "Investment (in Millions)",
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

    myChart.setOption(option); // Устанавливаем опции графика

    const handleResize = () => {
      myChart.resize(); // Автоматически изменяем размер при изменении окна
    };

    window.addEventListener("resize", handleResize); // Слушаем изменение размера окна

    // Очистка ресурса при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} className="charts" />; // Рендерим контейнер для графика
};

export default ChartsInvestment;
