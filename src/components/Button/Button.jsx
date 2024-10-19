import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ text, color, path, id }) {
  const navigate = useNavigate(); // Инициализируем хук

  const handleClick = () => {
    if (path) {
      navigate(path); // Переключаемся на указанный путь
      // Убедитесь, что ваш элемент с id "main" присутствует на странице
      setTimeout(() => {
        const element = document.getElementById("main");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // Прокрутка к элементу
        }
      }, 0);
    }
  };

  return (
    <button className={`${styles.learnMore} ${styles.button}`} onClick={handleClick}>
      <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon}`}></span>
        <img src="src/assets/Vector.svg" className={`${styles.arrow}`} alt="arrow"/>
      </span>
      <span className={`${styles.buttonText} ${color}`}>{text}</span>
    </button>
  );
}

export default Button;