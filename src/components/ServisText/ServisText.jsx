import Button from "../button/Button";
import "./ServisText.css";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

function ServisText({ title, text1, text2, button, id }) {
  return (
    <div className="servis-text-container">
      <ScrollAnimation animationProps={{ delay: 0.1 }}>
        <h3>{title}</h3>
      </ScrollAnimation>
      <div className="servis-text-wriper">
        <ScrollAnimation animationProps={{ delay: 0.15 }}>
          <p className="black-color">{text1}</p>
        </ScrollAnimation>
        <ScrollAnimation animationProps={{ delay: 0.2 }}>
          <p className="black-color">{text2}</p>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animationProps={{ delay: 0.25 }}>
        <div className="servis-button-wriper">
          {button && (
            <Button text="Explore Our Services" path="/services" id={id} />
          )}{" "}
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default ServisText;
