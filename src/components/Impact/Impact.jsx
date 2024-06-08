import styles from "./Impact.module.scss";

import Feature from "./Feature";

import {
  faBookmark,
  faHandFist,
  faHandshake,
  faPeopleGroup,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";

const Impact = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>Our Impact</h1>
      <div className={styles["features"]}>
        <Feature
          icon={faPeopleGroup}
          number={1000000}
          plus
          text='People Impacted'
        />
        <Feature
          icon={faDog}
          number={10}
          text='Strays Helped'
        />
        <Feature
          icon={faRecycle}
          number={6600}
          plus
          text='Pounds of Dry Waste Recycled'
        />
        <Feature
          icon={faHandshake}
          number={10}
          plus
          text='Partners'
        />
        <Feature
          icon={faBookmark}
          number={5}
          text='Chapters'
        />
        <Feature
          icon={faHandFist}
          number={500}
          plus
          text='Volunteers'
        />
      </div>
    </div>
  );
};

export default Impact;
