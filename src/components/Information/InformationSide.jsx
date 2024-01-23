import styles from "./InformationSide.module.scss";

const InformationSide = ({ filled = false, header, content }) => {
  return (
    <div className={styles["container" + `${filled ? "-filled" : ""}`]}>
      <h1 className={styles["heading"]}>{header}</h1>
      <p className={styles["paragraph"]}>{content}</p>
    </div>
  );
};

export default InformationSide;
