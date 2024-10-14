import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./charts.css"; // Подключаем стили

const ChartPartnerships = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current); // Инициализация графика

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
        },
        formatter: '{b}: {c}', // Tooltip to display the milestone and value
      },
      legend: {
        data: ['Growth'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['Initiation', 'Planning', 'Execution', 'Monitoring', 'Completion'],
          axisLabel: {
            rotate: 0,
            align: 'center',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Performance Index',
          axisLabel: {
            formatter: '{value}',
          },
          max: 110,
        },
      ],
      series: [
        {
          name: 'Growth',
          type: 'line',
          smooth: true,
          data: [10, 30, 50, 70, 100],
          lineStyle: {
            color: '#4682B4',
            width: 3,
          },
          itemStyle: {
            color: '#4682B4',
          },
          markPoint: {
            data: [
              {
                name: 'Project Kickoff',
                value: 10,
                xAxis: 'Initiation',
                yAxis: 0,
                itemStyle: { color: '#FF6347' } // Tomato color for this milestone
              },
              {
                name: 'Strategy Approved',
                value: 30,
                xAxis: 'Planning',
                yAxis: 20,
                itemStyle: { color: '#4682B4' } // Steel Blue color for this milestone
              },
              {
                name: 'First Milestone',
                value: 50,
                xAxis: 'Execution',
                yAxis: 40,
                itemStyle: { color: '#3CB371' } // Medium Sea Green color for this milestone
              },
              {
                name: 'Mid-Project Review',
                value: 70,
                xAxis: 'Monitoring',
                yAxis: 60,
                itemStyle: { color: '#FFD700' } // Gold color for this milestone
              },
              {
                name: 'Project Completed',
                value: 100,
                xAxis: 'Completion',
                yAxis: 90,
                itemStyle: { color: '#8B4513' } // Saddle Brown color for this milestone
              }
            ],
            symbolSize: 60,
            symbolOffset: [0, '-70%'],
            label: {
              formatter: '{b}\n{c}',
              position: 'top',
              color: '#000',
              fontSize: 12,
              distance: 10,
            },
          },
          markLine: {
            data: [{ type: 'average', name: 'Average' }],
            lineStyle: {
              type: 'dashed',
              color: '#A9A9A9',
            },
          },
        },
      ],
    };

    myChart.setOption(option); // Установка опций

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

  return <div ref={chartRef} className="charts" />; // Контейнер для графика
};

export default ChartPartnerships;
