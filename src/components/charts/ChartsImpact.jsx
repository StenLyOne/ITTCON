import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./charts.css";

const СhartsImpact = () => {
  const chartRef = useRef(null); // Создаем реф для контейнера графика

  useEffect(() => {
    const myChart = echarts.init(chartRef.current); // Инициализируем график

    const option = {
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

export default СhartsImpact;
