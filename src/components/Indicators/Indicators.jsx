import "./Indicators.css";

function Indicators({ icon, text, title }) {
  return (
    <div className="white-bg Indicators-container">
      <img className=" Indicators-icon" src={icon} alt="" />
      <div className="Indicators-text">
        <h5 className="black-color">{title}</h5>
        <p className="black-color p20">{text}</p>
      </div>
    </div>
  );
}

export default Indicators;