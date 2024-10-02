import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./charts.css";

const ChartsSuccess = () => {
  const chartRef = useRef(null); // Создаем реф для контейнера графика

  useEffect(() => {
    const myChart = echarts.init(chartRef.current); // Инициализируем график

    const option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        data: ["Client A", "Client B", "Client C"],
        top: "boƩom",
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
              value: [90, 80, 85, 70, 75, 95],
              name: "Client A",
              areaStyle: {
                color: "rgba(70, 130, 180, 0.4)", // Steel Blue with transparency
              },
              lineStyle: {
                color: "#4682B4",
              },
              itemStyle: {
                color: "#4682B4",
              },
            },
            {
              value: [75, 85, 80, 60, 65, 90],
              name: "Client B",
              areaStyle: {
                color: "rgba(107, 142, 35, 0.4)", // Olive Drab with transparency
              },
              lineStyle: {
                color: "#6B8E23",
              },
              itemStyle: {
                color: "#6B8E23",
              },
            },
            {
              value: [85, 90, 75, 80, 85, 70],
              name: "Client C",
              areaStyle: {
                color: "rgba(255, 215, 0, 0.4)", // Gold with transparency
              },
              lineStyle: {
                color: "#FFD700",
              },
              itemStyle: {
                color: "#FFD700",
              },
            },
          ],
        },
      ],
    };

    myChart.setOption(option); // Устанавливаем опции графика

    // Очистка ресурса при размонтировании компонента
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} className="charts" />; // Рендерим контейнер для графика
};

export default ChartsSuccess;
