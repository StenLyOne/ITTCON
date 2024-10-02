import "./Numbers.css";

function Number({ name, number}) {
  return (
    <div className="numbers-item">
      <p className="numbers-name">{name}</p>
      <p className="numbers-number">{number}</p>
    </div>
  );
}

export default Number;
