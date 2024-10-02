import styles from "./AboutUsNumbers.module.css";

function AboutUsNumbers({ name, number }) {
  return (
    <div className={styles.container}>
      <p className={`black-color ${styles.numbersName}`}>{name}</p>
      <p className={`black-color ${styles.numbersNumber}`}>{number}</p>
    </div>
  );
}

export default AboutUsNumbers;
