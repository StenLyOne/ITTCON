import styles from "./News.module.css";
import Button from "../button/Button";

function News({ img, title, text, date, bg }) {
  return (
    <div className={styles.news}>
      <img className={styles.mewsImg} src={img} alt="" />
      <div
        className={`${styles.newsContent} ${
          bg ? styles.newsContentMargin : ""
        }`}
      >
        <div className={styles.newsContentTop}>
          <h5>{title}</h5>
          <p className="p20 black-color">{text}</p>
        </div>
        <div className={styles.newsContentBottom}>
          <Button text="Read More" />
          <p className="p20 black-color">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default News;
