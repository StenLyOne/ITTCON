import "./ServisItem.css";
import ServisText from "../../components/ServisText/ServisText";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

function ServisItem({
  url,
  isImageRight,
  title,
  text1,
  text2,
  color,
  button,
  id,
}) {
  return (
    <ScrollAnimation animationProps={{ delay: 0.25 }} y={0}>
      <div className={`servis-item ${isImageRight ? "reverse" : ""} ${color}`}>
        <ScrollAnimation animationProps={{ delay: 0.25 }} y={0}>
          <div className="servis-item-img-container">
            <img className="servis-item-img" src={url} alt="" />
          </div>
        </ScrollAnimation>
        <div className="servis-item-text">
          <ServisText
            title={title}
            text1={text1}
            text2={text2}
            button={button}
            id={id}
          />
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default ServisItem;
