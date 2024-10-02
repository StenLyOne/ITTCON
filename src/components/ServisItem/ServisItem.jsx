import "./ServisItem.css";
import ServisText from "../../components/ServisText/ServisText";

function ServisItem({ url, isImageRight, title, text1, text2, color }) {
  return (
    <div className={`servis-item ${isImageRight ? "reverse" : ""} ${color}`}>
      <div className="servis-item-img-container">
        <img className="servis-item-img" src={url} alt="" />
      </div>
      <div className="servis-item-text">
        <ServisText title={title} text1={text1} text2={text2} />
      </div>
    </div>
  );
}

export default ServisItem;
