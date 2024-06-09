import styles from "./Recognitions.module.scss";

import RECOGNITIONS from "../data/Recognition.json";

const Recognitions = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <h1>recognitions</h1>
      </div>
      <div className={styles["grid"]}>
        {RECOGNITIONS.map((i, index) => {
          let classes = styles["image"];

          if (i.special) {
            classes =
              styles["image"] +
              " " +
              (i.special === "left" ? styles["rotate1"] : styles["rotate2"]);
          }

          return (
            <div className='recognition'>
              <img
                className={classes}
                src={"Images/Recognition/" + i.src + ".jpg"}
                alt={i.src}
                key={index}
              ></img>
              <h2 className={styles["name"]}>{i.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recognitions;
