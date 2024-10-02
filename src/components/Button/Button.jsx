import styles from "./Button.module.css";

function Button({ text, color }) {
  return (
    <button className={`${styles.learnMore} ${styles.button} `}>
      <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon}`}></span>
        <img src="src/assets/Vector.svg" className={`${styles.arrow}`}/>
      </span>
      <span className={`${styles.buttonText} ${color}`}>{text}</span>
    </button>
  );
}

export default Button;

