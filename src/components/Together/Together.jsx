import "./Together.css";
import Button from "../button/Button";

function Together({}) {
  return (
    <div className="together-container">
      <div className="together-content">
        <div className="together-text">
          <h2>Let's Make an Impact Together</h2>
          <p>
            Join us in our mission to drive change in forestry and
            sustainability. <br className="br-together-pc"/>Together, we can build a future where nature and
            progress thrive in harmony.
          </p>
        </div>
        <Button text="contact us" color="white-color" path="/contact"/>
      </div>
    </div>
  );
}

export default Together;
