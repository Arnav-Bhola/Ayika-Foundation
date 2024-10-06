import { Link } from "react-router-dom";
import styles from "./Project.module.scss";

const Project = ({ id, heading, details, image }) => {
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
      <Link
        to={`/projects/${id}`}
        className={styles["link"]}
      >
        Learn More
      </Link>
    </div>
  );
};

export default Project;
