import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import Button from "../button/Button";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import logo from "../../assets/logo.svg";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true); // Состояние для направления прокрутки
  const lastScrollY = useRef(0); // Последняя позиция прокрутки
  const markerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const markerPosition = markerRef.current.getBoundingClientRect().top;

      // Проверяем, прокручивается ли вниз или вверх
      if (currentScrollY > lastScrollY.current) {
        setIsScrollingUp(false); // Скролл вниз
      } else {
        setIsScrollingUp(true); // Скролл вверх
      }

      // Обновляем последнее положение прокрутки
      lastScrollY.current = currentScrollY;

      // Логика добавления активного класса для смены цвета
      if (markerPosition < 0) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive((prevState) => {
      if (!prevState) {
        // Открытие меню — блокируем скролл
        document.body.style.overflow = "hidden";
      } else {
        // Закрытие меню — возвращаем скролл
        document.body.style.overflow = "";
      }
      return !prevState;
    });
  };

  useEffect(() => {
    return () => {
      // Снимаем блокировку скролла при размонтировании компонента
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Вспомогательный div для отслеживания прокрутки */}
      <div ref={markerRef} style={{ height: "1px" }} />

      {/* Хедер, которому добавляется класс актив и скрывается при скролле вниз */}

      <header
        className={`${styles.header} ${headerActive ? styles.activ : ""} ${
          !isScrollingUp ? styles.hidden : ""
        }`}
      >
        <ScrollAnimation animationProps={{ delay: 0.1 }} y={0}>
          <div className={styles.headerContainer}>
            <a href="/">
              <div>
                <img className={styles.logo} src={logo} alt="Logo" />
              </div>
            </a>

            {/* Основная навигация для десктопа */}
            <nav className={styles.headerText}>
              <a href="/">
                <p
                  className={`${styles.headerP} ${
                    headerActive ? styles.activP : ""
                  }`}
                >
                  Home
                </p>
              </a>
              <a href="/aboutus">
                <p
                  className={`${styles.headerP} ${
                    headerActive ? styles.activP : ""
                  }`}
                >
                  About us
                </p>
              </a>
              <a href="/services">
                <p
                  className={`${styles.headerP} ${
                    headerActive ? styles.activP : ""
                  }`}
                >
                  Services
                </p>
              </a>
              <a href="/projects">
                <p
                  className={`${styles.headerP} ${
                    headerActive ? styles.activP : ""
                  }`}
                >
                  Projects
                </p>
              </a>
              {/* <a href="/news">
                <p
                  className={`${styles.headerP} ${
                    headerActive ? styles.activP : ""
                  }`}
                >
                  News
                </p>
              </a> */}
            </nav>

            {/* Бургер-меню */}
            <div
              className={`${styles.burgerMenu} ${
                menuActive ? styles.active : ""
              }`}
              onClick={toggleMenu}
            >
              <div
                className={`${styles.burgerMenuItem} ${
                  headerActive ? styles.activ : ""
                }`}
              ></div>
              <div
                className={`${styles.burgerMenuItem} ${
                  headerActive ? styles.activ : ""
                }`}
              ></div>
              <div
                className={`${styles.burgerMenuItem} ${
                  headerActive ? styles.activ : ""
                }`}
              ></div>
            </div>

            {/* Кнопка для десктопа */}
            <div className={styles.headerButton}>
              <Button
                text="Contact us"
                color={headerActive ? "black-color" : "white-color"}
                path="/contact"
              />
            </div>

            {/* Мобильная навигация */}
            <nav
              className={`${styles.headerNav} ${
                menuActive ? styles.active : ""
              }`}
            >
              <ScrollAnimation animationProps={{ delay: 0.1 }} y={0}>
                <a href="/">
                  <h2 className="black-color" onClick={toggleMenu}>
                    Home
                  </h2>
                </a>
              </ScrollAnimation>
              <a href="/aboutus">
                <h2 className="black-color" onClick={toggleMenu}>
                  About us
                </h2>
              </a>
              <a href="/services">
                <h2 className="black-color" onClick={toggleMenu}>
                  Services
                </h2>
              </a>
              <a href="/projects">
                <h2 className="black-color" onClick={toggleMenu}>
                  Projects
                </h2>
              </a>
              {/* <h5 onClick={toggleMenu}>News</h5> */}
              <div>
                <Button text="Contact us" path="/contact"></Button>
              </div>
            </nav>
          </div>
        </ScrollAnimation>
      </header>
    </>
  );
}

export default Header;
