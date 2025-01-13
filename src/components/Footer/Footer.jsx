import "./Footer.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-full.svg";
import logoX from "../../assets/x.svg";
import linkedin from "../../assets/linkedin.svg";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

function Footer() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (path) {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById("main");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  return (
    <footer className="footer white-bg black-color">
      <div className="footer-container">
        <ScrollAnimation animationProps={{ delay: 0.1 }}>
          <nav className="footer-nav">
            <h5 onClick={() => handleClick("/")}>Home</h5>
            <h5 onClick={() => handleClick("/aboutus")}>About us</h5>
            <h5 onClick={() => handleClick("/services")}>Services</h5>
            <h5 onClick={() => handleClick("/projects")}>Projects</h5>
            {/* <h5 onClick={() => handleClick("/news")}>News</h5> */}
          </nav>
        </ScrollAnimation>
        <ScrollAnimation animationProps={{ delay: 0.2 }}>
          <div className="footer-contact">
            <h5>Contact</h5>
            <div className="footer-contact-container">
              <a href="mailto:ittcon@gmail.com">
                <p className="black-color">ittcon@gmail.com</p>
              </a>
              <a href="tel:+491733724083">
                <p className="black-color">+49 173 3724083</p>
              </a>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animationProps={{ delay: 0.3 }}>
          <div className="footer-location">
            <h5>Location</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Stresemannstra%C3%9Fe+84,+22769+Hamburg,+Germany"
            >
              <p className="black-color">
                Stresemannstr. 84 <br />
                22769 Hamburg
              </p>
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animationProps={{ delay: 0.4 }}>
          <div className="footer-social">
            <img className="footer-logo" src={logo} alt="ITTCON Logo" />
            <div className="footer-social-container">
              <a
                href="https://x.com/ITTCON_KG"
                target="_blank"
                rel="noopener noreferrer"
                className="x"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2094_596)">
                    <mask
                      id="mask0_2094_596"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="35"
                      height="35"
                    >
                      <path d="M0 0H35V35H0V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_2094_596)">
                      <path
                        d="M27.5625 1.63965H32.93L21.205 15.0746L35 33.3596H24.2L15.735 22.2721L6.06 33.3596H0.6875L13.2275 18.9846L0 1.64215H11.075L18.715 11.7746L27.5625 1.63965ZM25.675 30.1396H28.65L9.45 4.69215H6.26L25.675 30.1396Z"
                        fill="#000"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_2094_596">
                      <rect width="35" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/ittcon/"
                target="_blank"
                rel="noopener noreferrer"
                className="in"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_11439_2082)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.91225 2.362C3.17225 2.094 3.31525 1.736 3.31225 1.364C3.29882 1.00292 3.14796 0.660606 2.89052 0.407065C2.63307 0.153525 2.28849 0.00791031 1.92725 0C1.56506 0.00823195 1.2195 0.153628 0.960371 0.406813C0.701246 0.659999 0.547877 1.0021 0.53125 1.364C0.536632 1.73557 0.684468 2.09089 0.944241 2.35662C1.20402 2.62235 1.5559 2.7782 1.92725 2.792C2.29924 2.78326 2.65294 2.62885 2.91225 2.362ZM1.66925 4.63C1.08225 4.617 0.68225 4.608 0.68225 5.326V13.318C0.68225 14.021 1.06425 14.007 1.61425 13.986C1.71425 13.9813 1.81892 13.9787 1.92825 13.978C2.03825 13.9787 2.14292 13.9813 2.24225 13.986C2.79025 14.006 3.16425 14.021 3.16425 13.318V5.327C3.16425 4.609 2.77225 4.617 2.18825 4.631C2.01527 4.63508 1.84223 4.63408 1.66925 4.63ZM5.75325 4.645C5.48725 4.698 5.31625 4.868 5.31625 5.326V13.318C5.31625 14.021 5.68325 14.007 6.23425 13.986C6.33425 13.9813 6.44025 13.9787 6.55225 13.978C6.66425 13.9787 6.77058 13.9813 6.87125 13.986C7.42525 14.006 7.79925 14.021 7.79925 13.318V9.056C7.77793 8.83814 7.80314 8.61824 7.87322 8.41086C7.9433 8.20348 8.05665 8.01336 8.20576 7.8531C8.35486 7.69284 8.53633 7.56609 8.73812 7.48125C8.93991 7.39641 9.15742 7.35543 9.37625 7.361C9.59614 7.34784 9.81628 7.38219 10.0217 7.46171C10.2271 7.54123 10.413 7.66407 10.5667 7.82186C10.7204 7.97965 10.8384 8.16869 10.9125 8.37613C10.9866 8.58356 11.0152 8.80453 10.9963 9.024V13.285C10.9963 13.989 11.3622 13.975 11.9132 13.954C12.0132 13.9493 12.1193 13.9467 12.2313 13.946C12.3433 13.9467 12.4496 13.9493 12.5503 13.954C13.1013 13.974 13.4673 13.989 13.4673 13.286V7.83C13.4877 7.38205 13.4137 6.93481 13.25 6.51735C13.0863 6.0999 12.8365 5.72158 12.5169 5.40702C12.1973 5.09245 11.8151 4.84867 11.3952 4.69154C10.9752 4.53441 10.5268 4.46744 10.0793 4.495C9.62337 4.45314 9.16437 4.5292 8.74636 4.71588C8.32835 4.90256 7.96536 5.19358 7.69225 5.561C7.70325 5.167 7.57525 4.645 7.25625 4.645C7.16425 4.645 7.02325 4.64 6.86325 4.635C6.46325 4.623 5.94325 4.607 5.75325 4.645Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11439_2082">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animationProps={{ delay: 0.1 }}>
          <div className="footer-container-mob">
            <div className="footer-contact-mob">
              <h5>Contact</h5>
              <div className="footer-contact-container-mob">
                <a href="mailto:ittcon@gmail.com">
                  <p className="black-color">info@ittcon.eu</p>
                </a>
                <a href="tel:+491733724083">
                  <p className="black-color">+49 173 3724083</p>
                </a>
              </div>
            </div>
            <div className="footer-location-mob">
              <h5>Location</h5>
              <a
                href="https://www.google.com/maps/place/Stresemannstra%C3%9Fe+84,+22769+Hamburg,+Germany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="black-color">
                  Stresemannstr. 84 <br />
                  22769 Hamburg
                </p>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animationProps={{ delay: 0.1 }} y={0}>
        <div className="footer-bot">
          <p className="p20">© 2024 ITTON</p>
          <a
            href="https://www.upwork.com/freelancers/~01e0b5eb4d34696c94"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="p20">DESIGNED BY: STENLY</p>
          </a>
          <p className="p20">ALL RIGHTS RESERVED</p>
        </div>
      </ScrollAnimation>
    </footer>
  );
}

export default Footer;
