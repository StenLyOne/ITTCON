import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate(); // Инициализируем хук

  const handleClick = (path) => {
    if (path) {
      navigate(path); // Переключаемся на указанный путь
      setTimeout(() => {
        const element = document.getElementById("main");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // Прокрутка к элементу
        }
      }, 0);
    }
  };

  return (
    <footer className="footer white-bg black-color">
      <div className="footer-container">
        <nav className="footer-nav">
          <h5 onClick={() => handleClick('/')}>Home</h5>
          <h5 onClick={() => handleClick('/aboutus')}>About us</h5>
          <h5 onClick={() => handleClick('/services')}>Services</h5>
          <h5 onClick={() => handleClick('/projects')}>Portfolio</h5>
          <h5 onClick={() => handleClick('/news')}>News</h5>
        </nav>
        <div className="footer-contact">
          <h5>Contact</h5>
          <div className="footer-contact-container">
            <p className="black-color">ittcon@gmail.com</p>
            <p className="black-color">+ 49 173 3724083</p>
          </div>
        </div>
        <div className="footer-location">
          <h5>Location</h5>
          <p className="black-color">
            Stresemannstr. 84 <br />
            22769 Hamburg
          </p>
        </div>
        <div className="footer-social">
          <img src="/src/assets/logo-ittcon.svg" alt="Logo" />
          <div className="footer-social-container">
            <div className="x">X</div>
            <div className="f">F</div>
            <div className="in">IN</div>
          </div>
        </div>
        <div className="footer-container-mob">
          <div className="footer-contact-mob">
            <h5>Contact</h5>
            <div className="footer-contact-container-mob">
              <p className="black-color">ittcon@gmail.com</p>
              <p className="black-color">+ 49 173 3724083</p>
            </div>
          </div>
          <div className="footer-location-mob">
            <h5>Location</h5>
            <p className="black-color">
              Stresemannstr. 84 <br />
              22769 Hamburg
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bot">
        <p>© 2024 ITTON</p>
        <p>DESIGNED BY: STENLY</p>
        <p>ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}

export default Footer;
