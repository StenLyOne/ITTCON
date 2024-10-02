import { useState } from "react";
import styles from "./Header.module.css";
import Button from "../button/Button";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img src="/path-to-your-logo.png" alt="Logo" />
        </div>

        {/* Основная навигация для десктопа */}
        <nav className={styles.headerText}>
          <p>Home</p>
          <p>About us</p>
          <p>Services</p>
          <p>Portfolio</p>
          <p>News</p>
        </nav>

        {/* Бургер-меню */}
        <div className={`${styles.burgerMenu} ${menuActive ? styles.activ : ""}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Кнопка для десктопа */}
        <div className={styles.headerButton}>
          <Button text="Contact us" color="white-color" />
        </div>

        {/* Мобильная навигация */}
        <nav className={`${styles.headerNav} ${menuActive ? styles.activ : ""}`}>
          <h5 onClick={toggleMenu}>Home</h5>
          <h5 onClick={toggleMenu}>About us</h5>
          <h5 onClick={toggleMenu}>Services</h5>
          <h5 onClick={toggleMenu}>Portfolio</h5>
          <h5 onClick={toggleMenu}>News</h5>
        </nav>
      </div>
    </header>
  );
}

export default Header;

