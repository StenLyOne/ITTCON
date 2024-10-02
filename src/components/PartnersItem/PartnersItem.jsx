import "./PartnersItem.css";

function PartnersItem({ text, children }) {
  return (
    <div className="partners-item">
      {children}
      <p className="partners-item-p">{text}</p>
    </div>
  );
}

export default PartnersItem;
