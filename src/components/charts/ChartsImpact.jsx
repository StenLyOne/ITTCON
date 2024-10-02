import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const ChartsImpact = () => {
  useEffect(() => {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return `${params.name}: ${params.value} users`; // Tooltip displays the country and number of users
        }
      },
      visualMap: {
        min: 1,
        max: 319, // Based on the highest number of users (United States)
        left: 'left',
        top: 'bottom',
        text: ['High', 'Low'],
        calculable: true,
        color: ['#ffeda0', '#feb24c', '#f03b20'], // Gradient from light yellow to red
        inRange: {
          colorLightness: [0.5, 0.9]
        }
      },
      series: [
        {
          name: 'User Engagement by Country',
          type: 'map',
          map: 'world',
          roam: true, // Allows panning and zooming
          label: {
            emphasis: {
              show: false
            }
          },
          data: [
            { name: 'United States', value: 319 },
            { name: 'Germany', value: 272 },
            { name: 'China', value: 100 },
            { name: 'Netherlands', value: 58 },
            { name: 'India', value: 50 },
            { name: 'United Kingdom', value: 37 },
            { name: 'France', value: 35 },
            { name: 'Poland', value: 29 },
            { name: 'Canada', value: 26 },
            { name: 'Austria', value: 22 },
            { name: 'Ukraine', value: 20 },
            { name: 'Italy', value: 18 },
            { name: 'Lithuania', value: 18 },
            { name: 'Latvia', value: 14 },
            { name: 'Brazil', value: 13 },
            { name: 'Belgium', value: 12 },
            { name: 'Indonesia', value: 11 },
            { name: 'Slovenia', value: 11 },
            { name: 'Spain', value: 11 },
            { name: 'Finland', value: 10 },
            { name: 'Pakistan', value: 10 },
            { name: 'Portugal', value: 10 },
            { name: 'Australia', value: 8 },
            { name: 'Romania', value: 8 },
            { name: 'Turkey', value: 8 },
            { name: 'Vietnam', value: 8 },
            { name: 'Estonia', value: 7 },
            { name: 'Sweden', value: 7 },
            { name: 'United Arab Emirates', value: 7 },
            { name: 'Belarus', value: 6 },
            { name: 'Czechia', value: 6 },
            { name: 'Egypt', value: 6 },
            { name: 'Greece', value: 6 },
            { name: 'Hungary', value: 6 },
            { name: 'Ireland', value: 6 },
            { name: 'Russia', value: 6 },
            { name: 'Israel', value: 5 },
            { name: 'Morocco', value: 5 },
            { name: 'Nigeria', value: 5 },
            { name: 'Serbia', value: 5 },
            { name: 'Singapore', value: 5 },
            { name: 'Bulgaria', value: 4 },
            { name: 'Hong Kong', value: 4 },
            { name: 'Japan', value: 4 },
            { name: 'Malaysia', value: 4 },
            { name: 'Saudi Arabia', value: 4 },
            { name: 'Switzerland', value: 4 },
            { name: 'Bangladesh', value: 3 },
            { name: 'Croatia', value: 3 },
            { name: 'Moldova', value: 3 },
            { name: 'South Korea', value: 3 },
            { name: 'Algeria', value: 2 },
            { name: 'Argentina', value: 2 },
            { name: 'Bosnia & Herzegovina', value: 2 },
            { name: 'Cyprus', value: 2 },
            { name: 'Ecuador', value: 2 },
            { name: 'Iran', value: 2 },
            { name: 'Jordan', value: 2 },
            { name: 'Mexico', value: 2 },
            { name: 'New Zealand', value: 2 },
            { name: 'Norway', value: 2 },
            { name: 'Philippines', value: 2 },
            { name: 'Taiwan', value: 2 },
            { name: 'Thailand', value: 2 },
            { name: 'Tunisia', value: 2 },
            { name: 'Albania', value: 1 },
            { name: 'Chile', value: 1 },
            { name: 'Colombia', value: 1 },
            { name: 'Denmark', value: 1 },
            { name: 'Dominican Republic', value: 1 },
            { name: 'Ghana', value: 1 },
            { name: 'Kenya', value: 1 },
            { name: 'Kuwait', value: 1 },
            { name: 'Kyrgyzstan', value: 1 },
            { name: 'Liberia', value: 1 },
            { name: 'Liechtenstein', value: 1 },
            { name: 'North Macedonia', value: 1 },
            { name: 'Qatar', value: 1 },
            { name: 'Senegal', value: 1 },
            { name: 'Slovakia', value: 1 },
            { name: 'South Africa', value: 1 },
            { name: 'Uganda', value: 1 }
          ],
          itemStyle: {
            emphasis: {
              areaColor: '#ffa07a' // Light Salmon color on hover
            }
          }
        }
      ]
    };

    option && myChart.setOption(option);
  }, []);

  return <div id="main" style={{ width: '100%', height: '600px' }}></div>;
};

export default ChartsImpact;



