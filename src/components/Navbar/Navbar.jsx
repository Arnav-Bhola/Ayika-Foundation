import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";
import Logo from "../../assets/images/logo-large.png";

const Navbar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["branding"]}>
        <img
          className={styles["logo"]}
          src={Logo}
          alt='Ayika Foundation'
        />
        <h2 className={styles["brand"]}>
          <Link to='/'>Ayika Foundation</Link>
        </h2>
      </div>
      <div className={styles["navigation"]}>
        <div className={styles["links"]}>
          <div className={styles["dropdown"]}>
            <p className={styles["link"]}>About</p>
          </div>
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
        <button className={styles["button"]}>
          <Link
            to='/contact'
            className={styles["link"]}
          >
            Contact Us
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
