import "./Indicators.css";

function Indicators({ icon, text, title }) {
  return (
    <div className="Indicators-container">
      <img className="Indicators-icon" src={icon} alt="" />
      <div className="Indicators-text">
        <h5 className="white-color">{title}</h5>
        <p className="p20">{text}</p>
      </div>
    </div>
  );
}

export default Indicators;