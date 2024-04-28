import styles from "./Project.module.scss";

const Project = ({ heading, details, image, link }) => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>{heading}</h1>

      <p className={styles["details"]}>{details}</p>
      <div className={styles["image-container"]}>
        <img
          src={image}
          alt={heading}
          className={styles["image"]}
        ></img>
      </div>
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
