import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import Button from "../button/Button";

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
    setMenuActive((prevState) => !prevState);
  };

  return (
    <>
      {/* Вспомогательный div для отслеживания прокрутки */}
      <div ref={markerRef} style={{ height: "1px" }} />

      {/* Хедер, которому добавляется класс актив и скрывается при скролле вниз */}
      <header
        className={`${styles.header} ${headerActive ? styles.activ : ""} ${!isScrollingUp ? styles.hidden : ""}`}
      >
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <img src="/path-to-your-logo.png" alt="Logo" />
          </div>

          {/* Основная навигация для десктопа */}
          <nav className={styles.headerText}>
            <a href="/">
              <p className={`${styles.headerP} ${headerActive ? styles.activP : ""}`}>Home</p>
            </a>
            <a href="/aboutus">
              <p className={`${styles.headerP} ${headerActive ? styles.activP : ""}`}>About us</p>
            </a>
            <a href="/services">
              <p className={`${styles.headerP} ${headerActive ? styles.activP : ""}`}>Services</p>
            </a>
            <a href="/projects">
              <p className={`${styles.headerP} ${headerActive ? styles.activP : ""}`}>Projects</p>
            </a>
            <a href="/news">
              <p className={`${styles.headerP} ${headerActive ? styles.activP : ""}`}>News</p>
            </a>
          </nav>

          {/* Бургер-меню */}
          <div
            className={`${styles.burgerMenu} ${menuActive ? styles.active : ""}`}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Кнопка для десктопа */}
          <div className={styles.headerButton}>
            <Button text="Contact us" color={headerActive ? "black-color" : "white-color"} path="/contact" />
          </div>

          {/* Мобильная навигация */}
          <nav
            className={`${styles.headerNav} ${menuActive ? styles.active : ""}`}
          >
            <h5 onClick={toggleMenu}>Home</h5>
            <h5 onClick={toggleMenu}>About us</h5>
            <h5 onClick={toggleMenu}>Services</h5>
            <h5 onClick={toggleMenu}>Portfolio</h5>
            <h5 onClick={toggleMenu}>News</h5>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
