import { Link } from "react-router-dom";

import styles from "./PhoneNavbar.module.scss";

const PhoneNavbar = ({ shouldShow }) => {
  return (
    <>
      {shouldShow && (
        <div className={styles["container"]}>
          <div className={styles["links"]}>
            <Link
              to='/mission'
              className={styles["link"]}
            >
              Mission
            </Link>
            <Link
              to='/team'
              className={styles["link"]}
            >
              Team
            </Link>
            <Link
              to='/projects'
              className={styles["link"]}
            >
              Projects
            </Link>
            <Link
              to='/gallery'
              className={styles["link"]}
            >
              Gallery
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneNavbar;
