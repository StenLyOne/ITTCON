import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import Button from "../button/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [headerColor, setHeaderColor] = useState(false);
  const header = useRef(null);
  const triggerElement = useRef(null); // Новый элемент ниже заголовка
  const lastScrollY = useRef(0); // Для отслеживания последней позиции прокрутки
  const [headerVisible, setHeaderVisible] = useState(true); // Для отслеживания видимости заголовка

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && headerVisible) {
        // Прокрутка вниз и заголовок видим
        gsap.to(header.current, { y: "-100%", duration: 0.3 });
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current && !headerVisible) {
        // Прокрутка вверх и заголовок не виден
        gsap.to(header.current, { y: "0%", duration: 0.3 });
        setHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY; // Обновляем последнюю позицию прокрутки
    };

    // Добавляем слушатель события прокрутки
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Удаляем слушатель при размонтировании
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerVisible]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: triggerElement.current, // Изменённый триггер
      start: "top top",
      end: "+=100", // Задайте нужное значение для конца триггера
      markers: true,
      onEnter: () => setHeaderColor(true),
      onLeaveBack: () => setHeaderColor(false),
    });
  }, []);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  return (
    <>
      <header
        className={`${styles.header} ${headerColor ? styles.activ : ""}`}
        ref={header}
      >
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <img src="/path-to-your-logo.png" alt="Logo" />
          </div>

          {/* Основная навигация для десктопа */}
          <nav className={styles.headerText}>
            <a href="/">
              <p>Home</p>
            </a>
            <a href="/aboutus">
              <p>About us</p>
            </a>
            <a href="/services">
              <p>Services</p>
            </a>
            <a href="/projects">
              <p>Projects</p>
            </a>
            <a href="/news">
              <p>News</p>
            </a>
          </nav>

          {/* Бургер-меню */}
          <div
            className={`${styles.burgerMenu} ${menuActive ? styles.activ : ""}`}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Кнопка для десктопа */}
          <div className={styles.headerButton}>
            <Button text="Contact us" color="white-color" path="/contact" />
          </div>

          {/* Мобильная навигация */}
          <nav
            className={`${styles.headerNav} ${menuActive ? styles.activ : ""}`}
          >
            <h5 onClick={toggleMenu}>Home</h5>
            <h5 onClick={toggleMenu}>About us</h5>
            <h5 onClick={toggleMenu}>Services</h5>
            <h5 onClick={toggleMenu}>Portfolio</h5>
            <h5 onClick={toggleMenu}>News</h5>
          </nav>
        </div>
      </header>
      <div ref={triggerElement} style={{ height: "1px" }}></div>
    </>
  );
}

export default Header;
