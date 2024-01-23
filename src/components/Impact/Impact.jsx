import styles from "./Impact.module.scss";

import Feature from "./Feature";

import Star from "../../assets/images/Impact/star.svg";

const Impact = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>Our Impact</h1>
      <div className={styles["features"]}>
        <Feature
          icon={Star}
          number={20}
          text='kilograms of x removed'
        />
        <Feature
          icon={Star}
          number={20}
          text='kilograms of x removed'
        />
        <Feature
          icon={Star}
          number={20}
          text='kilograms of x removed'
        />
        <Feature
          icon={Star}
          number={20}
          text='kilograms of x removed'
        />
        <Feature
          icon={Star}
          number={20}
          text='kilograms of x removed'
        />
        <Feature
          icon={Star}
          number={20}
          text='kilograms of x removed'
        />
      </div>
    </div>
  );
};

export default Impact;
