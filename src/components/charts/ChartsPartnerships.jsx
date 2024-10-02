import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./charts.css"

const ChartPartnerships = () => {
  const chartRef = useRef(null); // Создаем реф для контейнера графика

  useEffect(() => {
    const myChart = echarts.init(chartRef.current); // Инициализируем график

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        },
        formatter: '{b}: {c}' // Tooltip to display the milestone and value
      },
      legend: {
        data: ['Growth']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Initiation', 'Planning', 'Execution', 'Monitoring', 'Completion'],
          axisLabel: {
            rotate: 0, // No rotation for clarity
            align: 'center'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Performance Index',
          axisLabel: {
            formatter: '{value}' // Y-axis showing performance values
          },
          max: 110 // Adjust max value to fit the highest performance metric with some buffer
        }
      ],
      series: [
        {
          name: 'Growth',
          type: 'line',
          smooth: true, // Smooth line for a clear upward trajectory
          data: [10, 30, 50, 70, 100], // Sample data showing growth over time
          lineStyle: {
            color: '#4682B4', // Steel Blue for a professional look
            width: 3
          },
          itemStyle: {
            color: '#4682B4'
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
            symbolSize: 60, // Size of the milestone markers
            symbolOffset: [0, '-70%'], // Adjust marker position
            label: {
              formatter: '{b}\n{c}', // Display milestone name and value
              position: 'top',
              color: '#000', // Label color
              fontSize: 12,
              distance: 10 // Space between the marker and label
            }
          },
          markLine: {
            data: [{ type: 'average', name: 'Average' }],
            lineStyle: {
              type: 'dashed',
              color: '#A9A9A9' // Dark Gray for the average line
            }
          }
        }
      ]
    };

    myChart.setOption(option); // Устанавливаем опции графика

    // Очистка ресурса при размонтировании компонента
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} className="charts" />; // Рендерим контейнер для графика
};

export default ChartPartnerships;
