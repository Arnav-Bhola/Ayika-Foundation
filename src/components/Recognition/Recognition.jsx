import { Link } from "react-router-dom";
import styles from "./Recognition.module.scss";

import RecognitionCarousel from "./RecognitionCarousel";

const Recognition = () => {
  return (
    <div className={styles["container"]}>
      <Link
        className={styles["heading"]}
        to='/recognitions'
      >
        RECOGNITIONS
      </Link>
      <RecognitionCarousel />
    </div>
  );
};

export default Recognition;
