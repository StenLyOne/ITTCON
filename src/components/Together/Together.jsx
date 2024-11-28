import "./Together.css";
import Button from "../button/Button";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

function Together({}) {
  return (
    <div className="together-container">
      <div className="together-content">
        <div className="together-text">
          <ScrollAnimation animationProps={{ delay: 0 }}>
            <h2>Let's Make an Impact Together</h2>
          </ScrollAnimation>
          <ScrollAnimation animationProps={{ delay: 0.25 }}>
            <p>
              Join us in our mission to drive change in forestry and
              sustainability. <br className="br-together-pc" />
              Together, we can build a future where nature and progress thrive
              in harmony.
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animationProps={{ delay: 0.5 }}>
          <Button text="contact us" color="white-color" path="/contact" />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Together;
