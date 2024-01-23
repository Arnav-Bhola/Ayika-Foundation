import styles from "./Feature.module.scss";

const Feature = ({ icon, number, text }) => {
  return (
    <div className={styles["container"]}>
      <img
        src={icon}
        alt={number + " " + text}
        className={styles["image"]}
      />
      <h1 className={styles["number"]}>{number}</h1>
      <p className={styles["text"]}>{text}</p>
    </div>
  );
};

export default Feature;
