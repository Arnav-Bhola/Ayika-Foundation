import styles from "./Impact.module.scss";

import Feature from "./Feature";

import Star from "../../assets/images/Impact/star.svg";
import Teaching from "../../assets/images/Impact/teaching.svg";
import Tree from "../../assets/images/Impact/tree.svg";

const Impact = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>Our Impact</h1>
      <div className={styles["features"]}>
        <Feature
          icon={Star}
          number={3}
          text='kilograms of tetra-packs removed'
        />
        <Feature
          icon={Teaching}
          number={6}
          text='kielograms of polythene removed'
        />
        <Feature
          icon={Tree}
          number={30}
          text='kilograms of dry waste removed'
        />
        <Feature
          icon={Tree}
          number={18}
          text='kilograms of ldpe, soft plastic, gunny bags removed'
        />
        <Feature
          icon={Star}
          number={3}
          text='kilograms of multi-layer-plastic waste removed'
        />
        <Feature
          icon={Star}
          number={95}
          text='kilograms of total waste removed'
        />
      </div>
    </div>
  );
};

export default Impact;
