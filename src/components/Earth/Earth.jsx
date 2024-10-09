import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import "./Earth.css";

const Earth = ({ width, height }) => {
  const globeEl = useRef();

  // Данные для меток ключевых стран
  const labelsData = [
    { name: 'United States', lat: 37.0902, lng: -95.7129, text: 'United States', color: 'white' },
    { name: 'Germany', lat: 51.1657, lng: 10.4515, text: 'Germany', color: 'white' },
    { name: 'China', lat: 35.8617, lng: 104.1954, text: 'China', color: 'white' },
    { name: 'Netherlands', lat: 52.5326, lng: 5.2913, text: 'Netherlands', color: 'white' },
    { name: 'India', lat: 20.5937, lng: 78.9629, text: 'India', color: 'white' },
    { name: 'United Kingdom', lat: 55.3781, lng: -3.4360, text: 'United Kingdom', color: 'white' },
    { name: 'France', lat: 47.6034, lng: -1.8883, text: 'France', color: 'white' },
    { name: 'Poland', lat: 51.9194, lng: 19.1451, text: 'Poland', color: 'white' },
    { name: 'Canada', lat: 56.1304, lng: -106.3468, text: 'Canada', color: 'white' },
    { name: 'Austria', lat: 47.5162, lng: 14.5501, text: 'Austria', color: 'white' },
    { name: 'Ukraine', lat: 48.3794, lng: 31.1656, text: 'Ukraine', color: 'white' },
    { name: 'Italy', lat: 41.8719, lng: 12.5674, text: 'Italy', color: 'white' },
    { name: 'Lithuania', lat: 54.6694, lng: 23.8813, text: 'Lithuania', color: 'white' },
    { name: 'Latvia', lat: 56.8796, lng: 24.6032, text: 'Latvia', color: 'white' },
    { name: 'Brazil', lat: -14.2350, lng: -51.9253, text: 'Brazil', color: 'white' },
    { name: 'Belgium', lat: 50.1503, lng: 4.3517, text: 'Belgium', color: 'white' },
    { name: 'Indonesia', lat: -0.7893, lng: 113.9213, text: 'Indonesia', color: 'white' },
    { name: 'Spain', lat: 41.7637, lng: -3.7492, text: 'Spain', color: 'white' },
    { name: 'Finland', lat: 61.9241, lng: 25.7482, text: 'Finland', color: 'white' },
    { name: 'Pakistan', lat: 30.3753, lng: 69.3451, text: 'Pakistan', color: 'white' },
    { name: 'Portugal', lat: 39.3999, lng: -8.2245, text: 'Portugal', color: 'white' },
    { name: 'Australia', lat: -25.2744, lng: 133.7751, text: 'Australia', color: 'white' },
    { name: 'Romania', lat: 45.9432, lng: 24.9668, text: 'Romania', color: 'white' },
    { name: 'Turkey', lat: 38.9637, lng: 35.2433, text: 'Turkey', color: 'white' },
    { name: 'Vietnam', lat: 14.0583, lng: 108.2772, text: 'Vietnam', color: 'white' },
    { name: 'Estonia', lat: 59.023, lng: 25.0136, text: 'Estonia', color: 'white' },
    { name: 'Sweden', lat: 60.1282, lng: 18.6435, text: 'Sweden', color: 'white' },
    { name: 'United Arab Emirates', lat: 23.4241, lng: 53.8478, text: 'UAE', color: 'white' },
    { name: 'Czechia', lat: 49.8175, lng: 15.4730, text: 'Czechia', color: 'white' },
    { name: 'Egypt', lat: 26.8206, lng: 30.8025, text: 'Egypt', color: 'white' },
    { name: 'Greece', lat: 39.0742, lng: 21.8243, text: 'Greece', color: 'white' },
    { name: 'Hungary', lat: 47.1625, lng: 19.5033, text: 'Hungary', color: 'white' },
    { name: 'Ireland', lat: 53.1424, lng: -7.6921, text: 'Ireland', color: 'white' },
    { name: 'Russia', lat: 61.5240, lng: 105.3188, text: 'Russia', color: 'white' },
    { name: 'Israel', lat: 31.0461, lng: 34.8516, text: 'Israel', color: 'white' },
    { name: 'Morocco', lat: 31.7917, lng: -7.0926, text: 'Morocco', color: 'white' },
    { name: 'Nigeria', lat: 9.0820, lng: 8.6753, text: 'Nigeria', color: 'white' },
    { name: 'Serbia', lat: 44.0165, lng: 21.0059, text: 'Serbia', color: 'white' },
    { name: 'Singapore', lat: 1.3521, lng: 103.8198, text: 'Singapore', color: 'white' },
    { name: 'Bulgaria', lat: 42.7339, lng: 25.4858, text: 'Bulgaria', color: 'white' },
    { name: 'Hong Kong', lat: 22.3193, lng: 114.1694, text: 'Hong Kong', color: 'white' },
    { name: 'Japan', lat: 36.2048, lng: 138.2529, text: 'Japan', color: 'white' },
    { name: 'Malaysia', lat: 4.2105, lng: 101.9758, text: 'Malaysia', color: 'white' },
    { name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792, text: 'Saudi Arabia', color: 'white' },
    { name: 'Switzerland', lat: 46.8182, lng: 8.2275, text: 'Switzerland', color: 'white' },
  ];

  useEffect(() => {
    // Добавление текстур и кастомизация после рендера
    globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 2.5 }, 1000);
    globeEl.current.controls().autoRotate = true; // Включение авто-вращения
    globeEl.current.controls().autoRotateSpeed = 0.5;
  }, []);

  return (
    <div className="globe-container">
        
      <Globe
        className="globe"
        ref={globeEl}
        width={width} 
        height={height} 
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="rgba(0,0,0,0)" // Прозрачный фон
        labelsData={labelsData}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelText={(d) => d.text}
        labelColor={(d) => d.color}
        labelSize={1}
        labelIncludeDot={true}
        labelDotRadius={0.2}
        labelDotOrientation={() => 'bottom'}
        labelsTransitionDuration={1000}
      />
    </div>
  );
};

export default Earth;


