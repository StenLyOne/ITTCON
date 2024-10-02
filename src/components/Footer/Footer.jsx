import "./Footer.css";

function Footer() {
  return (
    <footer className="footer white-bg black-color">
      <div className="footer-container">
        <nav className="footer-nav">
          <h5 className="">Home</h5>
          <h5>About us</h5>
          <h5>Services</h5>
          <h5>Portfolio</h5>
          <h5>News</h5>
        </nav>
        <div className="footer-contact">
          <h5>Contact</h5>
          <div className="footer-contact-container">
            <p className="black-color">ittcon@gmail.com</p>
            <p className="black-color">+ 49 173 3724083</p>
          </div>
        </div>
        <div className="footer-location">
          <h5>location</h5>
          <p className="black-color">
            Stresemannstr. 84 <br />
            22769 Hamburg
          </p>
        </div>
        <div className="footer-sociol">
          <img src="src/assets/logo-ittcon.svg" alt="" />
          <div className="footer-sociol-container">
            <div className="x">X</div>
            <div className="f">F</div>
            <div className="in">IN</div>
          </div>
        </div>
        <div className="foter-container-mb">
        <div className="footer-contact-mob">
          <h5>Contact</h5>
          <div className="footer-contact-container-mob">
            <p className="black-color">ittcon@gmail.com</p>
            <p className="black-color">+ 49 173 3724083</p>
          </div>
        </div>
          <div className="footer-location-mob">
            <h5>location</h5>
            <p className="black-color">
              Stresemannstr. 84 <br />
              22769 Hamburg
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bot">
        <p>© 2024  ITTON</p>
        <p>DESIGNED BY: STENLY</p>
        <p>ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}

export default Footer;
