import styles from "./Project.module.scss";

const Project = ({ heading, details, image, link }) => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>{heading}</h1>

      <p className={styles["details"]}>{details}</p>

      <img
        src={image}
        alt={heading}
        className={styles["image"]}
      ></img>

      <a
        href={link}
        className={styles["link"]}
      >
        Learn More
      </a>
    </div>
  );
};

export default Project;
