import Button from "../button/Button";
import "./ServisText.css";

function ServisText({ title, text1, text2 }) {
  return (
    <div className="servis-text-container">
      <h3>{title}</h3>
      <div className="servis-text-wriper">
        <p className="black-color">{text1}</p>
        <p className="black-color">{text2}</p>
      </div>
        <Button text=' Explore Our Services'/>
    </div>
  );
}

export default ServisText;
