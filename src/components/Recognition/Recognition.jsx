import styles from "./Recognition.module.scss";

import RecognitionCarousel from "./RecognitionCarousel";

const Recognition = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>Recognitions</h1>
      <RecognitionCarousel />
    </div>
  );
};

export default Recognition;
